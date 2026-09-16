"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

interface LanguageSwitchProps {
  locale: Locale;
  variant?: "light" | "dark";
}

export function LanguageSwitch({ locale, variant = "light" }: LanguageSwitchProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  const inactiveColor = variant === "light" ? "text-white/50 hover:text-white" : "text-navy-400 hover:text-navy-800";
  const activeColor = variant === "light" ? "text-gold-400" : "text-gold-600";

  return (
    <div className="flex items-center gap-1 text-xs font-bold tracking-wide">
      {locales.map((l, i) => {
        const href = `/${l}${rest ? `/${rest}` : ""}`;
        const active = l === locale;
        return (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && <span className={variant === "light" ? "text-white/20" : "text-navy-200"}>/</span>}
            <Link
              href={href}
              onClick={() => {
                document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000`;
              }}
              aria-current={active ? "true" : undefined}
              className={active ? activeColor : inactiveColor}
            >
              {l.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
