import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";

export function PartnersSection() {
  return (
    <Section id="doi-tac" variant="muted">
      <SectionHeading eyebrow="Đối tác chiến lược" title="Được tin tưởng bởi các doanh nghiệp lớn" />
      <div className="mt-12">
        <PartnerLogoGrid />
      </div>
    </Section>
  );
}
