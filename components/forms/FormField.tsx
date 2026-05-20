import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function FieldShell({ id, label, error, hint, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-2 text-sm text-muted-text">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export function TextInput({ label, error, hint, id, ...props }: TextInputProps) {
  const fieldId = id || props.name || label;

  return (
    <FieldShell id={fieldId} label={label} error={error} hint={hint}>
      <input
        id={fieldId}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="min-h-12 w-full rounded-md border border-border bg-card-bg px-4 py-3 text-charcoal transition placeholder:text-muted-text focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal-light"
        {...props}
      />
    </FieldShell>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export function TextArea({ label, error, hint, id, ...props }: TextAreaProps) {
  const fieldId = id || props.name || label;

  return (
    <FieldShell id={fieldId} label={label} error={error} hint={hint}>
      <textarea
        id={fieldId}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="min-h-32 w-full rounded-md border border-border bg-card-bg px-4 py-3 text-charcoal transition placeholder:text-muted-text focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal-light"
        {...props}
      />
    </FieldShell>
  );
}

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  hint?: string;
  options: Array<{ label: string; value: string }>;
};

export function SelectInput({ label, error, hint, id, options, ...props }: SelectInputProps) {
  const fieldId = id || props.name || label;

  return (
    <FieldShell id={fieldId} label={label} error={error} hint={hint}>
      <select
        id={fieldId}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="min-h-12 w-full rounded-md border border-border bg-card-bg px-4 py-3 text-charcoal transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal-light"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
