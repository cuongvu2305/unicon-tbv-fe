import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsTeaser() {
  const featured = projects.slice(0, 3);

  return (
    <Section id="du-an" variant="dark">
      <SectionHeading
        eyebrow="Dự án tiêu biểu"
        title="Những công trình chúng tôi tự hào"
        subtitle="Một số dự án cơ điện tiêu biểu UNICON TBV đã triển khai cho các nhà máy, khu công nghiệp."
        dark
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/du-an" variant="outline">
          Xem tất cả dự án
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
