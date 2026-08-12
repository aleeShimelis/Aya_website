const MAX_FORM_BODY_BYTES = 16 * 1024;

export class FormRequestError extends Error {
  constructor(
    message: string,
    public readonly status: 400 | 403 | 413 | 415
  ) {
    super(message);
    this.name = "FormRequestError";
  }
}

function assertSameOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    throw new FormRequestError(
      "This request could not be verified. Please reload the page and try again.",
      403
    );
  }

  try {
    if (new URL(origin).origin !== new URL(request.url).origin) {
      throw new FormRequestError(
        "This request could not be verified. Please reload the page and try again.",
        403
      );
    }
  } catch (error) {
    if (error instanceof FormRequestError) {
      throw error;
    }

    throw new FormRequestError(
      "This request could not be verified. Please reload the page and try again.",
      403
    );
  }
}

function assertJsonContentType(request: Request) {
  const mediaType = request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();

  if (mediaType !== "application/json") {
    throw new FormRequestError("The form request format is not supported.", 415);
  }
}

function assertDeclaredBodySize(request: Request) {
  const contentLength = request.headers.get("content-length");

  if (!contentLength) {
    return;
  }

  const byteLength = Number(contentLength);

  if (!Number.isSafeInteger(byteLength) || byteLength < 0) {
    throw new FormRequestError("The form request is invalid.", 400);
  }

  if (byteLength > MAX_FORM_BODY_BYTES) {
    throw new FormRequestError("The form request is too large.", 413);
  }
}

async function readLimitedBody(request: Request) {
  if (!request.body) {
    throw new FormRequestError("The form request is empty.", 400);
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let byteLength = 0;
  let body = "";

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      byteLength += value.byteLength;

      if (byteLength > MAX_FORM_BODY_BYTES) {
        await reader.cancel();
        throw new FormRequestError("The form request is too large.", 413);
      }

      body += decoder.decode(value, { stream: true });
    }

    body += decoder.decode();
    return body;
  } catch (error) {
    if (error instanceof FormRequestError) {
      throw error;
    }

    throw new FormRequestError("The form request contains invalid text.", 400);
  } finally {
    reader.releaseLock();
  }
}

export async function readFormJson(request: Request): Promise<unknown> {
  assertSameOrigin(request);
  assertJsonContentType(request);
  assertDeclaredBodySize(request);

  const body = await readLimitedBody(request);

  try {
    return JSON.parse(body) as unknown;
  } catch {
    throw new FormRequestError("The form request contains invalid JSON.", 400);
  }
}
