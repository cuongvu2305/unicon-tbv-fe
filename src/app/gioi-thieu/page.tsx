import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { CoverLetter } from "@/components/about/CoverLetter";
import { VisionMissionBlock } from "@/components/about/VisionMissionBlock";
import { CoreValues } from "@/components/about/CoreValues";
import { OrgChart } from "@/components/about/OrgChart";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Tìm hiểu về ${company.nameVi} - tầm nhìn, sứ mệnh, giá trị cốt lõi và sơ đồ tổ chức.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Giới thiệu"
        title="Về UNICON TBV"
        subtitle={company.motto}
      />

      <Section variant="light">
        <CoverLetter />
      </Section>

      <Section variant="muted">
        <VisionMissionBlock />
      </Section>

      <Section variant="light">
        <CoreValues />
      </Section>

      <Section variant="muted">
        <OrgChart />
      </Section>

      <Section variant="light">
        <h3 className="text-center text-base font-bold text-navy-900">Đối tác chiến lược</h3>
        <div className="mt-8">
          <PartnerLogoGrid />
        </div>
      </Section>
    </>
  );
}
