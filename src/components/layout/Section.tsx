import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "muted";
  className?: string;
}

const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
  light: "bg-white",
  dark: "bg-navy-950 text-white",
  muted: "bg-navy-50/60",
};

export function Section({ id, children, variant = "light", className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${variantClasses[variant]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
