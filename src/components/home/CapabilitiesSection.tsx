import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamStatBlock } from "@/components/capabilities/TeamStatBlock";
import { EquipmentTable } from "@/components/capabilities/EquipmentTable";

export function CapabilitiesSection() {
  return (
    <Section id="nang-luc" variant="light">
      <SectionHeading
        eyebrow="Năng lực"
        title="Nhân sự và thiết bị đáp ứng mọi quy mô công trình"
        subtitle="Đội ngũ kỹ sư chính quy cùng hệ thống máy móc hiện đại giúp UNICON TBV đảm bảo tiến độ và chất lượng thi công."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TeamStatBlock />
        <EquipmentTable />
      </div>
    </Section>
  );
}
