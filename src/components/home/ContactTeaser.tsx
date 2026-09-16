import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function ContactTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section variant="light">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 px-6 py-14 text-center text-white sm:px-16">
        <h2 className="text-2xl font-extrabold sm:text-3xl">{dict.contact.teaser.title}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          {dict.contact.teaser.subtitle}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href={`/${locale}/lien-he`}>
            {dict.contact.teaser.ctaSend}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`tel:${company.phone.replace(/\s/g, "")}`} variant="outline">
            <Phone className="h-4 w-4" />
            {company.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
