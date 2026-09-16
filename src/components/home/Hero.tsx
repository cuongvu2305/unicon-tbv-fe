import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-500/20 blur-3xl"
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            {dict.hero.badge}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {dict.hero.motto}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href={`/${locale}/lien-he`}>
              {dict.hero.ctaContact}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={`/${locale}/du-an`} variant="outline">
              {dict.hero.ctaProjects}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
