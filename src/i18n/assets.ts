import { Zap, Wind, Droplets, Wifi, FlameKindling, Fan, DoorClosed, type LucideIcon } from "lucide-react";

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
  "quat-tran-cong-nghiep": Fan,
  "cua-cuon": DoorClosed,
};

export const projectImages: Record<string, string> = {
  yadea: "/images/projects/yadea.svg",
  "meda-kosen": "/images/projects/meda-kosen.svg",
  "prussia-metal": "/images/projects/prussia-metal.svg",
  "hoa-mau": "/images/projects/hoa-mau/03.jpg",
  "tram-xu-ly-nuoc-thai-hoa-mau": "/images/projects/tram-xu-ly-nuoc-thai-hoa-mau/01.jpg",
  "thuan-thanh-3": "/images/projects/thuan-thanh-3/08.jpg",
  hmt: "/images/projects/hmt/03.jpg",
  yida: "/images/projects/yida/14.jpg",
  "gia-thinh": "/images/projects/gia-thinh/18.jpg",
  "quat-tran-cong-nghiep": "/images/projects/quat-tran-cong-nghiep/03.jpg",
  "cua-cuon": "/images/projects/cua-cuon/05.jpg",
  "soi-gia": "/images/projects/soi-gia.svg",
  enoel: "/images/projects/enoel.svg",
};

/** Site photos per project, keyed by project id (projects without photos are omitted). */
const galleryOf = (id: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${id}/${String(i + 1).padStart(2, "0")}.jpg`);

export const projectGalleries: Record<string, string[]> = {
  "hoa-mau": galleryOf("hoa-mau", 16),
  "cua-cuon": galleryOf("cua-cuon", 5),
  "quat-tran-cong-nghiep": galleryOf("quat-tran-cong-nghiep", 4),
  "gia-thinh": galleryOf("gia-thinh", 21),
  yida: galleryOf("yida", 22),
  hmt: galleryOf("hmt", 4),
  "thuan-thanh-3": galleryOf("thuan-thanh-3", 12),
  "tram-xu-ly-nuoc-thai-hoa-mau": galleryOf("tram-xu-ly-nuoc-thai-hoa-mau", 28),
};

/** Videos per project, keyed by project id (projects without videos are omitted). */
export const projectVideos: Record<string, string[]> = {
  "gia-thinh": ["/videos/gia-thinh/01.mp4"],
  "cua-cuon": ["/videos/cua-cuon/01.mp4", "/videos/cua-cuon/02.mp4"],
  "quat-tran-cong-nghiep": ["/videos/quat-tran-cong-nghiep/01.mp4", "/videos/quat-tran-cong-nghiep/02.mp4", "/videos/quat-tran-cong-nghiep/03.mp4", "/videos/quat-tran-cong-nghiep/04.mp4", "/videos/quat-tran-cong-nghiep/05.mp4"],
};

export const heroSlides: string[] = [
  "/images/projects/yida/14.jpg",
  "/images/projects/tram-xu-ly-nuoc-thai-hoa-mau/01.jpg",
  "/images/projects/thuan-thanh-3/08.jpg",
  "/images/projects/hoa-mau/03.jpg",
  "/images/projects/hmt/03.jpg",
];

export const serviceImages: Record<string, string> = {
  "dien-dong-luc": "/images/projects/yida/15.jpg",
  "dieu-hoa-thong-gio": "/images/projects/yida/20.jpg",
  "cap-thoat-nuoc": "/images/projects/hoa-mau/03.jpg",
  "dien-nhe": "/images/projects/yida/10.jpg",
  pccc: "/images/projects/thuan-thanh-3/04.jpg",
  "quat-tran-cong-nghiep": "/images/projects/quat-tran-cong-nghiep/03.jpg",
  "cua-cuon": "/images/projects/cua-cuon/05.jpg",
};

export const partnerLogos: Record<string, string> = {
  maedakosen: "/images/partners/maedakosen.svg",
  yadea: "/images/partners/yadea.svg",
  kinden: "/images/partners/kinden.svg",
  takasago: "/images/partners/takasago.svg",
};
