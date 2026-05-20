import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "standard" | "highlight";

const variants: Record<CardVariant, string> = {
  standard: "border border-border bg-card-bg shadow-soft",
  highlight: "border border-border bg-teal-light"
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export function Card({ variant = "standard", className, ...props }: CardProps) {
  return <div className={cn("rounded-card p-6", variants[variant], className)} {...props} />;
}
