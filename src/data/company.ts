import type { CompanyInfo } from "@/types/content";

/**
 * Locale-independent company facts (address, phone, tax code, person names —
 * things that don't get translated). Translated copy (motto, job titles,
 * etc.) lives in the per-locale dictionaries under src/i18n/dictionaries/.
 */
export const company: CompanyInfo = {
  nameVi: "CÔNG TY CỔ PHẦN THƯƠNG MẠI KỸ THUẬT UNICON TBV",
  nameEn: "UNICON TBV TECHNICAL TRADING JOINT STOCK COMPANY",
  shortName: "UNICON TBV",
  since: "2025",
  address:
    "Tầng 6, Tòa nhà Plaschem Tower, Số 562 Đường Nguyễn Văn Cừ, Phường Bồ Đề, TP Hà Nội, Việt Nam",
  phone: "0919 478 755",
  email: "unicontbv@gmail.com",
  legalRepresentative: "Ông Nguyễn Văn Khiêm",
  taxCode: "0111020107",
};
