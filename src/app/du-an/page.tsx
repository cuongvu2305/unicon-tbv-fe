import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Dự án tiêu biểu",
  description: "Các dự án thi công cơ điện (M&E) tiêu biểu của UNICON TBV.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dự án tiêu biểu"
        title="Các công trình UNICON TBV đã thực hiện"
        subtitle="Từ nhà máy sản xuất đến cơ sở công nghiệp, UNICON TBV mang đến giải pháp cơ điện toàn diện cho từng dự án."
      />

      <Section variant="light">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
