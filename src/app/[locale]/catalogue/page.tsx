import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { catalogueFiles } from "@/data/catalogue";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return { title: dict.meta.catalogue.title, description: dict.meta.catalogue.description };
}

export default async function CataloguePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const c = dict.catalogue;

  return (
    <>
      <PageHeader eyebrow={c.page.eyebrow} title={c.page.title} subtitle={c.page.subtitle} />

      <Section variant="light">
        <p className="mb-10 rounded-xl border border-gold-500/30 bg-gold-500/10 px-5 py-4 text-sm leading-relaxed text-navy-700">
          {c.manufacturerNote}
        </p>

        <div className="flex flex-col gap-14">
          {c.groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-6 text-xl font-bold text-navy-900">{group.title}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const doc = catalogueFiles[item.id];
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white"
                    >
                      <div className="relative aspect-[4/3] w-full bg-navy-50">
                        <Image
                          src={doc.thumbnail}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-5">
                        <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-navy-600">{item.description}</p>
                        <p className="text-xs text-navy-500">
                          PDF · {doc.pages} {c.pagesLabel} · {doc.sizeMb} MB
                        </p>
                        <div className="mt-auto flex gap-3 pt-2">
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {c.view}
                          </a>
                          <a
                            href={doc.file}
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                          >
                            <Download className="h-4 w-4" />
                            {c.download}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
