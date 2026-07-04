"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { AnimatedSection } from "@/components/motion/animated-section";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section-padding py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="label mb-3 block">Selected Work</span>
            <h2 className="heading-lg text-heading">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-body hover:text-heading transition-colors"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <motion.article
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    index === 0
                      ? "bg-dark-card border-border-dark/50 md:row-span-2"
                      : "bg-light-card border-border-light/50"
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 lg:p-10">
                    {/* Category */}
                    <span
                      className={`label mb-4 block ${
                        index === 0 ? "text-muted-light" : "text-muted"
                      }`}
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3
                      className={`heading-sm mb-4 ${
                        index === 0 ? "text-text-on-dark" : "text-heading"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`body-sm mb-6 ${
                        index === 0 ? "text-muted-light" : "text-body"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            index === 0
                              ? "bg-border-dark/50 text-muted-light"
                              : "bg-content-bg text-body"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                            index === 0
                              ? "text-muted-light hover:text-text-on-dark"
                              : "text-body hover:text-heading"
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </span>
                      )}
                      {project.liveDemo && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                            index === 0
                              ? "text-muted-light hover:text-text-on-dark"
                              : "text-body hover:text-heading"
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
