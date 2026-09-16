import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamStatBlock } from "@/components/capabilities/TeamStatBlock";
import { EquipmentTable } from "@/components/capabilities/EquipmentTable";
import type { Dictionary } from "@/i18n/dictionary";

export function CapabilitiesSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="nang-luc" variant="light">
      <SectionHeading
        eyebrow={dict.capabilities.eyebrow}
        title={dict.capabilities.title}
        subtitle={dict.capabilities.subtitle}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TeamStatBlock dict={dict} />
        <EquipmentTable dict={dict} />
      </div>
    </Section>
  );
}
