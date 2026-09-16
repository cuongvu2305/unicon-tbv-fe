import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const footerNav = [
    { label: dict.nav.about, href: `/${locale}/gioi-thieu` },
    { label: dict.nav.services, href: `/${locale}#linh-vuc-hoat-dong` },
    { label: dict.nav.capabilities, href: `/${locale}#nang-luc` },
    { label: dict.projects.teaser.eyebrow, href: `/${locale}/du-an` },
    { label: dict.nav.contact, href: `/${locale}/lien-he` },
  ];

  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" locale={locale} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 transition-colors hover:text-gold-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">
              {dict.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-gold-400">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-400">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 opacity-70">
          {dict.partners.items.map((partner) => (
            <span key={partner.id} className="text-xs font-semibold tracking-wide text-white/50">
              {partner.name}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {locale === "en" ? company.nameEn : company.nameVi}.{" "}
            {dict.footer.taxCodeLabel}: {company.taxCode}.
          </span>
          <span>{dict.footer.allRightsReserved}</span>
        </div>
      </Container>
    </footer>
  );
}
