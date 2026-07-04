"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Wrench,
  Brain,
  ChevronDown,
  Cpu,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const spring = { type: "spring" as const, stiffness: 280, damping: 26 };
const softSpring = { type: "spring" as const, stiffness: 200, damping: 28 };

const techCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "#9DBE95", // sage
    description: "The grammar of systems. Typed, interpreted, and compiled.",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "Go"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "#9FB8C4", // dusty blue
    description: "Opinionated scaffolding that enforces structure at velocity.",
    items: ["Django", "FastAPI", "Next.js", "React", "Flask", "Express"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#C99271", // terracotta
    description: "Persistence layers chosen by access pattern, not habit.",
    items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "#B49AAE", // mauve
    description: "Infrastructure as code. Deployments as declarative truth.",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "#D4B36A", // ochre
    description: "The daily instruments that shape the craft.",
    items: ["Git", "Postman", "Figma", "VS Code", "DataGrip", "TablePlus"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "#7FA39B", // deep teal
    description: "Models, vectors, and pipelines integrated as infrastructure.",
    items: ["OpenAI API", "LangChain", "Hugging Face", "Pinecone", "ChromaDB"],
  },
];

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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ ...softSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TechCard({
  category,
  index,
  isOpen,
  onToggle,
}: {
  category: (typeof techCategories)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...softSpring, delay: index * 0.08 }}
      className="group"
    >
      <motion.button
        onClick={onToggle}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl text-left transition-shadow duration-500",
          isOpen ? "shadow-xl" : "shadow-sm hover:shadow-md"
        )}
        style={{
          backgroundColor: category.color,
          boxShadow: isOpen
            ? `0 20px 40px -12px ${category.color}70`
            : `0 4px 20px -8px ${category.color}50`,
        }}
      >
        {/* Surface sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/[0.05] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative p-5 sm:p-6 lg:p-7">
          {/* Header row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#faf8f5]/90 flex items-center justify-center shadow-sm shrink-0 transition-transform duration-500 group-hover:scale-105">
                <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" style={{ color: category.color }} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 mb-0.5">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#1a1a1a] tracking-tight truncate">
                    {category.title}
                  </h3>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1a1a1a]/10 text-[10px] font-bold text-[#1a1a1a]/60 shrink-0">
                    {category.items.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#1a1a1a]/50 leading-snug truncate hidden sm:block">
                  {category.description}
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ ...spring, duration: 0.4 }}
              className="w-8 h-8 rounded-full bg-[#faf8f5]/80 flex items-center justify-center shadow-sm shrink-0"
            >
              <ChevronDown className="w-4 h-4 text-[#1a1a1a]/60" />
            </motion.div>
          </div>

          {/* Mobile description */}
          <p className="text-xs text-[#1a1a1a]/50 leading-relaxed mt-2 sm:hidden">
            {category.description}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ ...spring, duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="pt-5 sm:pt-6 mt-4 sm:mt-5 border-t border-[#1a1a1a]/[0.08]">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {category.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ ...spring, delay: i * 0.04 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#faf8f5]/85 text-[#1a1a1a]/80 border border-[#faf8f5]/50 shadow-sm cursor-default select-none backdrop-blur-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </motion.div>
  );
}

export function TechStack() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#faf8f5] overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-5 sm:mb-6">
              <Terminal className="w-3.5 h-3.5" />
              Toolkit
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-5 sm:mb-6">
              The <span className="font-serif italic font-normal">stack</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-[#1a1a1a]/50 leading-[1.7]">
              Technologies are chosen by constraint, not comfort. Each category
              expands to show the specific tools I use to build, deploy, and
              maintain production systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion grid */}
        <div className="space-y-3 sm:space-y-4">
          {techCategories.map((category, index) => (
            <TechCard
              key={category.title}
              category={category}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Footer summary */}
        <ScrollReveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a1a1e] text-[#faf8f5] text-xs sm:text-sm font-medium shadow-sm">
              <Cpu className="w-3.5 h-3.5" />
              {techCategories.reduce((acc, c) => acc + c.items.length, 0)} tools across {techCategories.length} disciplines
            </div>
            <span className="text-xs sm:text-sm text-[#1a1a1a]/40">
              Tap any category to explore
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}