import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { CoverLetter } from "@/components/about/CoverLetter";
import { VisionMissionBlock } from "@/components/about/VisionMissionBlock";
import { CoreValues } from "@/components/about/CoreValues";
import { OrgChart } from "@/components/about/OrgChart";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return { title: dict.meta.about.title, description: dict.meta.about.description };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.about.pageEyebrow} title={dict.about.pageTitle} subtitle={dict.hero.motto} />

      <Section variant="light">
        <CoverLetter dict={dict} />
      </Section>

      <Section variant="muted">
        <VisionMissionBlock dict={dict} />
      </Section>

      <Section variant="light">
        <CoreValues dict={dict} />
      </Section>

      <Section variant="muted">
        <OrgChart dict={dict} />
      </Section>

      <Section variant="light">
        <h3 className="text-center text-base font-bold text-navy-900">{dict.about.partnersHeading}</h3>
        <div className="mt-8">
          <PartnerLogoGrid items={dict.partners.items} />
        </div>
      </Section>
    </>
  );
}
