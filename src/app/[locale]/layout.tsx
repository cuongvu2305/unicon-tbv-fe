import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const companyName = locale === "en" ? company.nameEn : company.nameVi;

  return {
    title: {
      default: `${company.shortName} | ${companyName}`,
      template: `%s | ${company.shortName}`,
    },
    description: dict.meta.home.description,
    keywords: dict.meta.keywords,
    metadataBase: new URL("https://unicontbv.vn"),
    alternates: {
      languages: { vi: "/vi", en: "/en" },
    },
    openGraph: {
      title: `${company.shortName} | ${companyName}`,
      description: dict.hero.motto,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html lang={dict.htmlLang}>
      <body className={`${beVietnamPro.variable} antialiased`}>
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
