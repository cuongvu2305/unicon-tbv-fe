import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
      />
      <Container className="relative">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{eyebrow}</span>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{subtitle}</p>}
      </Container>
    </div>
  );
}
