"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
  Tag,
  Hash,
  TrendingUp,
  Landmark,
  Users,
  CalendarCheck,
  ShoppingBag,
  Palette,
  ShieldCheck,
  Activity,
  Wallet,
  FileSpreadsheet,
  BellRing,
  Hand,
  UploadCloud,
  Boxes,
} from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "SaaS Platform", "Financial Infrastructure", "Marketplace", "E-commerce", "Agency", "Automation"];

// Each category tab gets its own muted, sophisticated color
const categoryColors: Record<string, string> = {
  "All": "#8B9D83",
  "SaaS Platform": "#9DBE95",
  "Financial Infrastructure": "#9FB8C4",
  "Marketplace": "#C99271",
  "E-commerce": "#D4B36A",
  "Agency": "#B49AAE",
  "Automation": "#7FA39B",
};

// Physically-grounded spring — tuned for responsiveness
const spring = { type: "spring" as const, stiffness: 280, damping: 26 };
const softSpring = { type: "spring" as const, stiffness: 200, damping: 28 };

type IconType = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

export const projectIcons: Record<string, IconType> = {
  proova: TrendingUp,
  txcore: Landmark,
  "naija-co-op-hub": Users,
  "jos-eventia": CalendarCheck,
  thriftbyzee: ShoppingBag,
  gits: Palette,
  sentinel: ShieldCheck,
  "drift-recon": Activity,
  "finops-console": Wallet,
  "ledgerlens-recon": FileSpreadsheet,
  "alerts-monitoring-dashboard": BellRing,
  "hands-action-demo": Hand,
  "quick-product-uploader": UploadCloud,
};

export const projectColors: Record<string, string> = {
  proova: "#9DBE95",
  txcore: "#9FB8C4",
  "naija-co-op-hub": "#C99271",
  "jos-eventia": "#D4B36A",
  thriftbyzee: "#D6A8A3",
  gits: "#B49AAE",
  sentinel: "#7FA39B",
  "drift-recon": "#B97A5D",
  "finops-console": "#A9A66C",
  "ledgerlens-recon": "#D8C7A1",
  "alerts-monitoring-dashboard": "#C97B6D",
  "hands-action-demo": "#A7A8C9",
  "quick-product-uploader": "#7FA37A",
};

function FlowerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="18"
          rx="6.5"
          ry="14"
          fill="currentColor"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
    </svg>
  );
}

// ---------- Scroll-triggered wrapper ----------
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ ...softSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------- Smart search bar ----------

function ProjectSearch({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
}: {
  search: string;
  setSearch: (v: string) => void;
  activeCategory: string;
  setActiveCategory: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const blurTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const popularTech = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.techStack.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([t]) => t);
  }, []);

  const query = search.trim().toLowerCase();

  const matchingTech = useMemo(() => {
    if (!query) return [];
    const all = Array.from(new Set(projects.flatMap((p) => p.techStack)));
    return all.filter((t) => t.toLowerCase().includes(query)).slice(0, 8);
  }, [query]);

  const matchingProjects = useMemo(() => {
    if (!query) return [];
    return projects
      .filter(
        (p) =>
          p.techStack.some((t) => t.toLowerCase().includes(query)) ||
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
      .slice(0, 4);
  }, [query]);

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => setFocused(false), 120);
  };
  const cancelBlur = () => {
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
  };

  return (
    <div className="relative max-w-2xl">
      <span className="label mb-3 block">Search Projects</span>

      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => {
            cancelBlur();
            setFocused(true);
          }}
          onBlur={handleBlur}
          placeholder="Search by technology — Docker, Kafka, PostgreSQL…"
          className="w-full rounded-2xl bg-light-card border border-border-light/60 pl-12 pr-11 py-4 text-[15px] text-heading placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all duration-300 shadow-sm focus:shadow-md"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            onMouseDown={cancelBlur}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-heading transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={spring}
            onMouseDown={cancelBlur}
            className="absolute left-0 right-0 mt-3 rounded-2xl bg-light-card border border-border-light/60 shadow-xl p-4 sm:p-5 z-30 max-h-[70vh] overflow-y-auto"
          >
            {!query ? (
              <>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                    <Hash className="w-3 h-3" />
                    Popular Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {popularTech.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => {
                          setSearch(tech);
                          setFocused(false);
                        }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-content-bg text-body hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                    <Tag className="w-3 h-3" />
                    Browse by Category
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {categories
                      .filter((c) => c !== "All")
                      .map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setSearch("");
                            setFocused(false);
                          }}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                            activeCategory === cat
                              ? "bg-accent/15 text-accent"
                              : "bg-content-bg text-body hover:bg-accent/10 hover:text-accent"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {matchingTech.length > 0 && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                      <Hash className="w-3 h-3" />
                      Matching Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {matchingTech.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => {
                            setSearch(tech);
                            setFocused(false);
                          }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent hover:bg-accent/15 transition-colors"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                    <Search className="w-3 h-3" />
                    {matchingProjects.length > 0
                      ? `${matchingProjects.length} matching project${matchingProjects.length > 1 ? "s" : ""}`
                      : "No matching projects"}
                  </span>
                  <div className="space-y-1">
                    {matchingProjects.map((p) => {
                      const Icon = projectIcons[p.slug] ?? Boxes;
                      const color = projectColors[p.slug] ?? "#9DBE95";
                      return (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="flex items-center gap-3 px-2.5 py-2 rounded-xl hover:bg-content-bg transition-colors group"
                        >
                          <span
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                            style={{ backgroundColor: `${color}22`, color }}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-heading truncate">
                              {p.title}
                            </span>
                            <span className="block text-xs text-muted truncate">{p.category}</span>
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------- Main grid ----------

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const byCategory =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const query = search.trim().toLowerCase();
  const filtered = query
    ? byCategory.filter(
        (p) =>
          p.techStack.some((t) => t.toLowerCase().includes(query)) ||
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : byCategory;

  return (
    <>
      {/* ---------- Search ---------- */}
      <ScrollReveal>
        <div className="mb-10 lg:mb-12">
          <ProjectSearch
            search={search}
            setSearch={setSearch}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </ScrollReveal>

      {/* ---------- Cover panel ---------- */}
      <ScrollReveal delay={0.1}>
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#0E2A1C] px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 pb-10 sm:pb-14 mb-12 lg:mb-16">
          {/* Colored folder-tab category filter */}
          <div className="flex items-end gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const color = categoryColors[cat];
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={spring}
                  style={{
                    backgroundColor: isActive ? color : `${color}88`,
                  }}
                  className={cn(
                    "shrink-0 rounded-t-xl px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap select-none",
                    isActive
                      ? "text-[#1a1a1a] -translate-y-1.5 shadow-lg shadow-black/10"
                      : "text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:-translate-y-0.5"
                  )}
                >
                  ( {cat} )
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-start justify-between mt-10 sm:mt-14">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              <FlowerMark className="w-10 h-10 sm:w-12 sm:h-12 text-[#BFE6B0]" />
            </motion.div>
            <div className="text-right">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#BFE6B0] leading-relaxed">
                Backend &amp; AI
                <br />
                Engineering
                <br />
                Vol. 2026
              </p>
            </div>
          </div>

          <h1 className="mt-6 sm:mt-8 text-[#BFE6B0] text-6xl sm:text-7xl lg:text-8xl leading-[0.95]">
            <span className="font-sans font-bold">Pro</span>
            <span className="font-serif italic font-normal">jects</span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base text-[#9FC195] leading-relaxed">
            A collection of systems I&apos;ve designed and built — from revenue
            attribution platforms to financial transaction infrastructure.
            Each project represents real engineering challenges solved with
            thoughtful architecture.
          </p>
        </div>
      </ScrollReveal>

      {/* ---------- Grid ---------- */}
      {filtered.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <p className="text-body text-sm">
            No projects match &ldquo;{search}&rdquo;
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}.
          </p>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + query}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => {
              const Icon = projectIcons[project.slug] ?? Boxes;
              const color = projectColors[project.slug] ?? "#9DBE95";

              return (
                <ScrollReveal key={project.slug} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                    className="h-full"
                  >
                    <Link href={`/projects/${project.slug}`} className="group block h-full">
                      <article
                        className="relative overflow-hidden rounded-2xl h-full flex flex-col"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 4px 24px -8px ${color}60`,
                          transition: "box-shadow 0.5s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 24px 48px -12px ${color}70`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 4px 24px -8px ${color}60`;
                        }}
                      >
                        {/* Surface sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.16] via-transparent to-black/[0.06] pointer-events-none" />

                        {/* Paper texture */}
                        <div
                          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                          }}
                        />

                        <div className="relative p-6 lg:p-8 flex flex-col h-full">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <motion.div
                              className="w-12 h-12 rounded-xl bg-[#faf8f5]/90 flex items-center justify-center shadow-sm"
                              whileHover={{ scale: 1.08, rotate: 4 }}
                              transition={spring}
                            >
                              <Icon className="w-5 h-5" style={{ color }} />
                            </motion.div>
                            {project.featured && (
                              <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ ...spring, delay: 0.2 }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#faf8f5]/90 text-amber-700 shadow-sm"
                              >
                                <Sparkles className="w-3 h-3" />
                                Featured
                              </motion.span>
                            )}
                          </div>

                          {/* Category */}
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40 mb-2">
                            {project.category}
                          </span>

                          {/* Title */}
                          <h3 className="font-display text-[1.35rem] font-semibold text-[#1a1a1a] leading-[1.2] mb-3 tracking-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[0.9rem] text-[#1a1a1a]/65 leading-[1.65] mb-6 flex-1">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...spring, delay: 0.1 + i * 0.04 }}
                                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/40 text-[#2a2a2a] border border-white/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center gap-4 pt-4 border-t border-black/[0.08] mt-auto">
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] transition-all duration-300 group-hover:gap-2">
                              View Details
                              <motion.span
                                className="inline-flex"
                                animate={{ x: 0 }}
                                whileHover={{ x: 4 }}
                                transition={spring}
                              >
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                              </motion.span>
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}