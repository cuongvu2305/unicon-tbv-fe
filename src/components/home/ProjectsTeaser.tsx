import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function ProjectsTeaser({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const featured = dict.projects.items.slice(0, 3);

  return (
    <Section id="du-an" variant="dark">
      <SectionHeading
        eyebrow={dict.projects.teaser.eyebrow}
        title={dict.projects.teaser.title}
        subtitle={dict.projects.teaser.subtitle}
        dark
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            scopeLabel={dict.projects.scopeLabel}
            locale={locale}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href={`/${locale}/du-an`} variant="outline">
          {dict.projects.teaser.viewAll}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
