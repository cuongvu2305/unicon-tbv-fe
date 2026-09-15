import Image from "next/image";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-navy-900/5">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold text-navy-900">{project.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-navy-500">
          <span className="font-semibold text-gold-700">Hạng mục thực hiện:</span>{" "}
          {project.scopeOfWork}
        </p>
      </div>
    </div>
  );
}
