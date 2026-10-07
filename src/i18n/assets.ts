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
  "hoa-mau": "/images/projects/hoa-mau/03.jpg",
  "tram-xu-ly-nuoc-thai-hoa-mau": "/images/projects/tram-xu-ly-nuoc-thai-hoa-mau/01.jpg",
  "thuan-thanh-3": "/images/projects/thuan-thanh-3/08.jpg",
  "soi-gia": "/images/projects/soi-gia.svg",
  enoel: "/images/projects/enoel.svg",
};

/** Site photos per project, keyed by project id (projects without photos are omitted). */
const galleryOf = (id: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${id}/${String(i + 1).padStart(2, "0")}.jpg`);

export const projectGalleries: Record<string, string[]> = {
  "hoa-mau": galleryOf("hoa-mau", 16),
  "thuan-thanh-3": galleryOf("thuan-thanh-3", 12),
  "tram-xu-ly-nuoc-thai-hoa-mau": galleryOf("tram-xu-ly-nuoc-thai-hoa-mau", 28),
};

export const partnerLogos: Record<string, string> = {
  maedakosen: "/images/partners/maedakosen.svg",
  yadea: "/images/partners/yadea.svg",
  kinden: "/images/partners/kinden.svg",
  takasago: "/images/partners/takasago.svg",
};
