import Image from "next/image";
import { partnerLogos } from "@/i18n/assets";
import type { Dictionary } from "@/i18n/dictionary";

export function PartnerLogoGrid({ items }: { items: Dictionary["partners"]["items"] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {items.map((partner) => (
        <div
          key={partner.id}
          className="flex items-center justify-center rounded-xl border border-navy-100 bg-white p-4 grayscale transition duration-200 hover:grayscale-0"
        >
          <Image
            src={partnerLogos[partner.id]}
            alt={partner.name}
            width={160}
            height={80}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
