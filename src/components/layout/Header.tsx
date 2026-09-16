"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.about, href: `/${locale}/gioi-thieu` },
    { label: dict.nav.services, href: `/${locale}#linh-vuc-hoat-dong` },
    { label: dict.nav.capabilities, href: `/${locale}#nang-luc` },
    { label: dict.nav.projects, href: `/${locale}/du-an` },
    { label: dict.nav.contact, href: `/${locale}/lien-he` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant="light" locale={locale} />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch locale={locale} variant="light" />
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-white/90"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            {company.phone}
          </a>
          <Button href={`/${locale}/lien-he`} className="!px-5 !py-2.5 !text-xs">
            {dict.nav.contactCta}
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? dict.header.closeMenu : dict.header.openMenu}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 px-3">
            <LanguageSwitch locale={locale} variant="light" />
          </div>
          <Button href={`/${locale}/lien-he`} className="mt-4 w-full">
            {dict.nav.contactCta}
          </Button>
        </div>
      )}
    </header>
  );
}
