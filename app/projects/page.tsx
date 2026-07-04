import { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of backend systems, SaaS platforms, and AI-powered applications.",
};

export default function ProjectsPage() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <ProjectsGrid />
      </div>
    </section>
  );
}