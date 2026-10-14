import { Phone } from "lucide-react";
import { company } from "@/data/company";

export function FloatingCall({ label }: { label: string }) {
  return (
    <a
      href={`tel:${company.phone.replace(/\s/g, "")}`}
      aria-label={`${label} ${company.phone}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-navy-950/30 transition-colors hover:bg-gold-400"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline">{company.phone}</span>
    </a>
  );
}
