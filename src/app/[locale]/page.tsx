import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <AboutTeaser locale={locale} dict={dict} />
      <ServicesSection dict={dict} />
      <CapabilitiesSection dict={dict} />
      <ProjectsTeaser locale={locale} dict={dict} />
      <PartnersSection dict={dict} />
      <ContactTeaser locale={locale} dict={dict} />
    </>
  );
}
