import Badge from "./Badge";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href ?? "#"} target={project.href ? "_blank" : "_self"} className="block card hover:-translate-y-1 transition will-change-transform">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-white/70">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
      </div>
    </a>
  );
}
