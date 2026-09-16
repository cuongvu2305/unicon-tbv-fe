import { MapPin, Phone, Mail, UserRound, FileText } from "lucide-react";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function ContactInfoCard({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { info } = dict.contact;

  const items = [
    { icon: MapPin, label: info.addressLabel, value: company.address },
    { icon: Phone, label: info.phoneLabel, value: company.phone },
    { icon: Mail, label: info.emailLabel, value: company.email },
    {
      icon: UserRound,
      label: info.legalRepLabel,
      value: `${company.legalRepresentative} — ${info.legalRepTitle}`,
    },
    { icon: FileText, label: info.taxCodeLabel, value: company.taxCode },
  ];

  return (
    <div className="rounded-2xl bg-navy-950 p-8 text-white">
      <h3 className="text-lg font-bold">{locale === "en" ? company.nameEn : company.nameVi}</h3>
      <p className="mt-1 text-sm text-white/60">{locale === "en" ? company.nameVi : company.nameEn}</p>

      <ul className="mt-8 space-y-5">
        {items.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Icon className="h-4 w-4 text-gold-400" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
              <p className="text-sm text-white/90">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
