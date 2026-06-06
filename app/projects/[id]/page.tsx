import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProjectClient } from "./ProjectClient";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.id === id);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  return <ProjectClient project={project} next={next} prev={prev} />;
}
