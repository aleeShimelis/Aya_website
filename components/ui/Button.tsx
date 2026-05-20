import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "teal";

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-5 py-3 text-center text-sm font-semibold transition duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring disabled:cursor-not-allowed disabled:opacity-70";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-charcoal text-card-bg hover:bg-slate",
  secondary: "border border-border bg-card-bg text-charcoal hover:border-teal hover:text-teal",
  teal: "bg-teal text-card-bg hover:bg-slate"
};

export function buttonClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseClassName, variants[variant], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonClassName(variant, className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName(variant, className)} {...props}>
      {children}
    </Link>
  );
}
