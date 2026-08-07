"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";

type TurnstileStatus = "loading" | "ready" | "verified" | "error" | "unavailable";

type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  theme: "light";
  size: "flexible";
  "response-field": false;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export type TurnstileWidgetHandle = {
  reset: () => void;
};

type TurnstileWidgetProps = {
  action: "appointment" | "contact";
  onTokenChange: (token: string) => void;
};

const turnstileScriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let turnstileScriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstileScript() {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  if (turnstileScriptPromise) {
    return turnstileScriptPromise;
  }

  turnstileScriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${turnstileScriptSrc}"]`
    );
    const script = existingScript || document.createElement("script");

    const handleLoad = () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      } else {
        reject(new Error("Turnstile loaded without exposing its client API."));
      }
    };

    const handleError = () => reject(new Error("Turnstile could not be loaded."));

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      script.src = turnstileScriptSrc;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }).catch((error) => {
    turnstileScriptPromise = null;
    throw error;
  });

  return turnstileScriptPromise;
}

export const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ action, onTokenChange }, ref) {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";
    const containerRef = useRef<HTMLDivElement>(null);
    const apiRef = useRef<TurnstileApi | null>(null);
    const widgetIdRef = useRef<string | null>(null);
    const tokenChangeRef = useRef(onTokenChange);
    const [status, setStatus] = useState<TurnstileStatus>(siteKey ? "loading" : "unavailable");

    useEffect(() => {
      tokenChangeRef.current = onTokenChange;
    }, [onTokenChange]);

    useImperativeHandle(ref, () => ({
      reset() {
        tokenChangeRef.current("");

        if (apiRef.current && widgetIdRef.current) {
          apiRef.current.reset(widgetIdRef.current);
          setStatus("ready");
        }
      }
    }));

    useEffect(() => {
      if (!siteKey || !containerRef.current) {
        return;
      }

      let cancelled = false;
      const container = containerRef.current;

      loadTurnstileScript()
        .then((api) => {
          if (cancelled) {
            return;
          }

          apiRef.current = api;
          widgetIdRef.current = api.render(container, {
            sitekey: siteKey,
            action,
            theme: "light",
            size: "flexible",
            "response-field": false,
            callback(token) {
              tokenChangeRef.current(token);
              setStatus("verified");
            },
            "expired-callback"() {
              tokenChangeRef.current("");
              setStatus("ready");
            },
            "error-callback"() {
              tokenChangeRef.current("");
              setStatus("error");
            }
          });
          setStatus("ready");
        })
        .catch(() => {
          if (!cancelled) {
            tokenChangeRef.current("");
            setStatus("error");
          }
        });

      return () => {
        cancelled = true;

        if (apiRef.current && widgetIdRef.current) {
          apiRef.current.remove(widgetIdRef.current);
        }

        widgetIdRef.current = null;
      };
    }, [action, siteKey]);

    return (
      <div className="grid gap-2">
        <div ref={containerRef} className="min-h-[65px]" aria-label="Bot verification" />
        <p className="text-sm text-muted-text" aria-live="polite">
          {status === "unavailable"
            ? "Online form verification is not configured yet. Please use the clinic's call or WhatsApp options."
            : status === "error"
              ? "Verification could not load. Check your connection and try again."
              : status === "verified"
                ? "Verification complete."
                : "Complete the verification before submitting."}
        </p>
      </div>
    );
  }
);

