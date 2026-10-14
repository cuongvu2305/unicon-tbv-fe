/**
 * Which projects (by project id) to showcase on each service's detail page.
 * Locale-independent; the texts live in the dictionaries under `serviceDetail`.
 */
export const serviceProjects: Record<string, string[]> = {
  "dien-dong-luc": ["yadea", "meda-kosen", "prussia-metal", "thuan-thanh-3", "yida", "gia-thinh"],
  "dieu-hoa-thong-gio": ["yida", "gia-thinh", "thuan-thanh-3", "quat-tran-cong-nghiep"],
  "cap-thoat-nuoc": ["hoa-mau", "tram-xu-ly-nuoc-thai-hoa-mau", "soi-gia", "hmt", "gia-thinh"],
  "dien-nhe": ["gia-thinh", "yida"],
  pccc: ["gia-thinh", "yida", "thuan-thanh-3"],
};
