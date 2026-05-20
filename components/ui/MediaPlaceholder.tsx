import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  note?: string;
  className?: string;
};

export function MediaPlaceholder({ label, note, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "placeholder-surface flex min-h-72 flex-col justify-end rounded-card border border-border p-6",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="max-w-sm rounded-card border border-border bg-card-bg p-4 shadow-soft">
        <ImageIcon className="mb-3 h-6 w-6 text-teal" aria-hidden="true" />
        <p className="font-semibold text-charcoal">{label}</p>
        {note ? <p className="mt-1 text-sm leading-6 text-muted-text">{note}</p> : null}
      </div>
    </div>
  );
}
