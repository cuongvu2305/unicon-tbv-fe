import { Zap, Wind, Droplets, Wifi, FlameKindling, type LucideIcon } from "lucide-react";

/**
 * Locale-independent lookups keyed by a stable `id` — icons and image paths
 * don't need translating, so they live outside the vi/en dictionaries and
 * get joined back in by id from within components.
 */
export const serviceIcons: Record<string, LucideIcon> = {
  "dien-dong-luc": Zap,
  "dieu-hoa-thong-gio": Wind,
  "cap-thoat-nuoc": Droplets,
  "dien-nhe": Wifi,
  pccc: FlameKindling,
};

export const projectImages: Record<string, string> = {
  yadea: "/images/projects/yadea.svg",
  "meda-kosen": "/images/projects/meda-kosen.svg",
  "prussia-metal": "/images/projects/prussia-metal.svg",
  "hoa-mau": "/images/projects/hoa-mau.svg",
  "soi-gia": "/images/projects/soi-gia.svg",
  enoel: "/images/projects/enoel.svg",
};

export const partnerLogos: Record<string, string> = {
  maedakosen: "/images/partners/maedakosen.svg",
  yadea: "/images/partners/yadea.svg",
  kinden: "/images/partners/kinden.svg",
  takasago: "/images/partners/takasago.svg",
};
