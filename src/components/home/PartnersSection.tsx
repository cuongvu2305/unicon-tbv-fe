import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";
import type { Dictionary } from "@/i18n/dictionary";

export function PartnersSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="doi-tac" variant="muted">
      <SectionHeading eyebrow={dict.partners.eyebrow} title={dict.partners.homeTitle} />
      <div className="mt-12">
        <PartnerLogoGrid items={dict.partners.items} />
      </div>
    </Section>
  );
}
