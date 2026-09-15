import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="linh-vuc-hoat-dong" variant="muted">
      <SectionHeading
        eyebrow="Lĩnh vực hoạt động"
        title="Thiết kế và thi công hạng mục Cơ Điện"
        subtitle="UNICON TBV cung cấp giải pháp trọn gói cho các hệ thống cơ điện trong công trình công nghiệp và dân dụng."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
