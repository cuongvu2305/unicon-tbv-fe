import Image from "next/image";
import { partnerLogos } from "@/i18n/assets";
import type { Dictionary } from "@/i18n/dictionary";

export function PartnerLogoGrid({ items }: { items: Dictionary["partners"]["items"] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {items.map((partner) => (
        <div
          key={partner.id}
          title={partner.name}
          className="flex flex-col items-center gap-3 rounded-xl border border-navy-100 bg-white p-5"
        >
          <div className="relative h-16 w-full">
            <Image
              src={partnerLogos[partner.id]}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="(min-width: 640px) 25vw, 50vw"
            />
          </div>
          <span className="text-center text-xs font-medium text-navy-600">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}
