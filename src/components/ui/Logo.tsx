import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  locale: Locale;
}

/** `variant="light"` = for use on dark/navy backgrounds (white/gold text). `variant="dark"` = for use on light backgrounds (navy text). */
export function Logo({ variant = "light", className = "", locale }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-gold-400" : "text-gold-600";

  return (
    <Link href={`/${locale}`} className={`flex items-center gap-3 ${className}`}>
      <Image src="/images/logo-mark.svg" alt="" width={40} height={40} priority />
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-wide ${textColor}`}>
          {company.shortName}
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.3em] ${subColor}`}>
          SINCE {company.since}
        </span>
      </span>
    </Link>
  );
}
