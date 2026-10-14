/**
 * Locale-independent facts about each downloadable document, keyed by the
 * same `id` used in the dictionaries' `catalogue.groups[].items`.
 */
export interface CatalogueFile {
  file: string;
  thumbnail: string;
  pages: number;
  sizeMb: number;
}

export const catalogueFiles: Record<string, CatalogueFile> = {
  "product-catalogue": {
    file: "/documents/lusida-product-catalogue.pdf",
    thumbnail: "/images/catalogue/lusida-product-catalogue.jpg",
    pages: 12,
    sizeMb: 2.3,
  },
  "iso-9001": {
    file: "/documents/lusida-iso-9001-certificate.pdf",
    thumbnail: "/images/catalogue/lusida-iso-9001-certificate.jpg",
    pages: 1,
    sizeMb: 0.5,
  },
  "ce-technical-file": {
    file: "/documents/lusida-ce-technical-file.pdf",
    thumbnail: "/images/catalogue/lusida-ce-technical-file.jpg",
    pages: 160,
    sizeMb: 2.8,
  },
  "emc-technical-file": {
    file: "/documents/lusida-emc-technical-file.pdf",
    thumbnail: "/images/catalogue/lusida-emc-technical-file.jpg",
    pages: 29,
    sizeMb: 2.4,
  },
};
