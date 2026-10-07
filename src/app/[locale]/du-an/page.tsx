import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { projectGalleries } from "@/i18n/assets";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return { title: dict.meta.projects.title, description: dict.meta.projects.description };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.projects.page.eyebrow}
        title={dict.projects.page.title}
        subtitle={dict.projects.page.subtitle}
      />

      <Section variant="light">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} scopeLabel={dict.projects.scopeLabel} />
          ))}
        </div>
      </Section>

      {dict.projects.items
        .filter((project) => projectGalleries[project.id])
        .map((project) => (
          <Section key={project.id} variant="muted">
            <h2 className="text-xl font-bold text-navy-900">{project.name}</h2>
            <p className="mb-6 mt-1 text-sm text-navy-500">{dict.projects.galleryTitle}</p>
            <ProjectGallery images={projectGalleries[project.id]} alt={project.name} />
          </Section>
        ))}
    </>
  );
}
