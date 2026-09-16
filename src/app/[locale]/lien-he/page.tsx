import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
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
  return { title: dict.meta.contact.title, description: dict.meta.contact.description };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.page.eyebrow}
        title={dict.contact.page.title}
        subtitle={dict.contact.page.subtitle}
      />

      <Section variant="light">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfoCard locale={locale} dict={dict} />
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 lg:col-span-3">
            <ContactForm dict={dict} />
          </div>
        </div>
      </Section>
    </>
  );
}
