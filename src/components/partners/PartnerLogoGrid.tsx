import Image from "next/image";
import { partners } from "@/data/partners";

export function PartnerLogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="flex items-center justify-center rounded-xl border border-navy-100 bg-white p-4 grayscale transition duration-200 hover:grayscale-0"
        >
          <Image
            src={partner.logo}
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
