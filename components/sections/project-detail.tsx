"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  Clock,
  Layers,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Sparkles,
  Tag,
  Wrench,
  Scale,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { Project } from "@/types";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { projectIcons, projectColors } from "@/components/sections/projects-grid";

interface ProjectDetailProps {
  project: Project;
}

const spring = { type: "spring" as const, stiffness: 260, damping: 24 };
const softSpring = { type: "spring" as const, stiffness: 200, damping: 28 };

function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ ...softSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  icon: Icon,
  children,
  color = "#1a1a1a",
  light = false,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  color?: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
        style={{ backgroundColor: light ? `${color}25` : `${color}15` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h2
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          light ? "text-[#faf8f5]" : "text-[#1a1a1a]"
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .concat(projects.filter((p) => p.slug !== project.slug && p.category !== project.category))
    .slice(0, 3);

  const Icon = projectIcons[project.slug] ?? Boxes;
  const color = projectColors[project.slug] ?? "#9DBE95";

  // Determine if color is light enough for dark text
  const isLight = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160;
  };
  const textOnColor = isLight(color) ? "#1a1a1a" : "#faf8f5";

  return (
    <div className="pb-20 lg:pb-28 bg-[#faf8f5]">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress, backgroundColor: color }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
      />

      {/* ---------- Hero — full color wash ---------- */}
      <div
        className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-6 sm:px-10 lg:px-14"
        style={{ backgroundColor: color }}
      >
        {/* Surface sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/[0.06] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.05 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 text-sm font-medium mb-8 sm:mb-10 transition-colors"
              style={{ color: `${textOnColor}cc` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = textOnColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${textOnColor}cc`)}
            >
              <motion.span
                className="inline-flex"
                whileHover={{ x: -4 }}
                transition={spring}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              Back to Projects
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#faf8f5]/90 flex items-center justify-center shadow-lg"
              style={{ color }}
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#faf8f5]/90 text-[#1a1a1a] shadow-sm">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#faf8f5]/90 text-amber-700 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-5 sm:mb-6"
            style={{ color: textOnColor }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.25 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-10"
            style={{ color: `${textOnColor}cc` }}
          >
            {project.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: `${textOnColor}aa` }}
            >
              <Clock className="w-4 h-4" />
              {project.timeline}
            </span>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#faf8f5]/90 text-[#1a1a1a] shadow-sm hover:shadow-md transition-shadow"
              >
                <Github className="w-4 h-4" />
                Source
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#1a1a1a] text-[#faf8f5] shadow-sm hover:shadow-md transition-shadow"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
            <ScrollReveal delay={0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={spring}
                className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: color }}
                />
                <SectionHeading icon={AlertTriangle} color={color}>
                  The Problem
                </SectionHeading>
                <p className="text-[0.9rem] text-[#1a1a1a]/70 leading-[1.7]">
                  {project.problem}
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={spring}
                className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: color }}
                />
                <SectionHeading icon={Lightbulb} color={color}>
                  The Solution
                </SectionHeading>
                <p className="text-[0.9rem] text-[#1a1a1a]/70 leading-[1.7]">
                  {project.solution}
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Architecture */}
          <ScrollReveal delay={0.1} className="mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 shadow-sm">
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: color }}
              />
              <SectionHeading icon={Layers} color={color}>
                Architecture
              </SectionHeading>
              <div className="relative space-y-0">
                {project.architecture.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ ...spring, delay: i * 0.08 }}
                    className="flex items-start gap-4 py-4 border-b border-black/[0.04] last:border-0"
                  >
                    <div className="relative flex flex-col items-center self-stretch">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                        style={{
                          backgroundColor: `${color}18`,
                          color: color,
                        }}
                      >
                        {i + 1}
                      </div>
                      {i < project.architecture.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1"
                          style={{ backgroundColor: `${color}30` }}
                        />
                      )}
                    </div>
                    <span className="text-[0.9rem] text-[#1a1a1a]/70 leading-[1.7] pt-1">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal delay={0.15} className="mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 shadow-sm">
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: color }}
              />
              <SectionHeading icon={Boxes} color={color}>
                Technologies Used
              </SectionHeading>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...spring, delay: i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium border transition-colors duration-300 cursor-default select-none"
                    style={{
                      backgroundColor: `${color}10`,
                      borderColor: `${color}25`,
                      color: `${color}dd`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${color}20`;
                      e.currentTarget.style.borderColor = `${color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${color}10`;
                      e.currentTarget.style.borderColor = `${color}25`;
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Challenges & Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
            <ScrollReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 h-full shadow-sm">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: color }}
                />
                <SectionHeading icon={Wrench} color={color}>
                  Challenges
                </SectionHeading>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[0.9rem] text-[#1a1a1a]/70 leading-[1.7]">
                        {challenge}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 h-full shadow-sm">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: color }}
                />
                <SectionHeading icon={Scale} color={color}>
                  Engineering Trade-offs
                </SectionHeading>
                <ul className="space-y-4">
                  {project.decisions.map((decision, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[0.9rem] text-[#1a1a1a]/70 leading-[1.7]">
                        {decision}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Lessons Learned */}
          <ScrollReveal delay={0.3} className="mb-12 sm:mb-16">
            <div
              className="relative overflow-hidden rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-black/[0.05] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative">
                <SectionHeading
                  icon={BookOpen}
                  color={textOnColor}
                  light={true}
                >
                  Lessons Learned
                </SectionHeading>
                <ul className="space-y-4">
                  {project.lessons.map((lesson, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#faf8f5]/20 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold text-[#faf8f5]">
                        {i + 1}
                      </span>
                      <span
                        className="text-[0.9rem] leading-[1.7]"
                        style={{ color: `${textOnColor}cc` }}
                      >
                        {lesson}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Projects */}
          {related.length > 0 && (
            <ScrollReveal delay={0.35}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold text-[#1a1a1a] tracking-tight">
                  Related Projects
                </h2>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {related.map((p, i) => {
                  const RelatedIcon = projectIcons[p.slug] ?? Boxes;
                  const relatedColor = projectColors[p.slug] ?? "#9DBE95";
                  return (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: i * 0.1 }}
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/projects/${p.slug}`} className="group block h-full">
                        <article
                          className="relative overflow-hidden rounded-2xl h-full flex flex-col"
                          style={{
                            backgroundColor: relatedColor,
                            boxShadow: `0 4px 20px -8px ${relatedColor}60`,
                            transition: "box-shadow 0.5s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 20px 40px -12px ${relatedColor}70`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 4px 20px -8px ${relatedColor}60`;
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/[0.05] pointer-events-none" />
                          <div className="relative p-5 sm:p-6 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-10 h-10 rounded-xl bg-[#faf8f5]/90 flex items-center justify-center shadow-sm" style={{ color: relatedColor }}>
                                <RelatedIcon className="w-4 h-4" />
                              </div>
                              {p.featured && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#faf8f5]/90 text-amber-700">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  Featured
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40 mb-1.5">
                              {p.category}
                            </span>
                            <h3 className="font-display text-sm font-semibold text-[#1a1a1a] mb-2 leading-tight">
                              {p.title}
                            </h3>
                            <p className="text-xs text-[#1a1a1a]/60 leading-relaxed mb-4 flex-1 line-clamp-2">
                              {p.description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] group-hover:gap-1.5 transition-all">
                              View project
                              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}