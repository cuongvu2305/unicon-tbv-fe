import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import type { Dictionary } from "@/i18n/dictionary";

export function ServicesSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="linh-vuc-hoat-dong" variant="muted">
      <SectionHeading
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
