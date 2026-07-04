"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Server,
  Shield,
  Zap,
  Brain,
  ArrowRight,
  Layers,
  Lock,
  Gauge,
  Cpu,
  Network,
} from "lucide-react";

const spring = { type: "spring" as const, stiffness: 260, damping: 24 };
const softSpring = { type: "spring" as const, stiffness: 180, damping: 28 };

// Each philosophy gets its own muted identity — a real spread, not just one accent
const philosophyPalette = [
  {
    key: "architecture",
    color: "#9DBE95", // sage
    icon: Server,
    secondaryIcon: Layers,
    tag: "Foundation",
    stat: "0",
    statLabel: "lines written before design",
    title: "Design Before Code",
    principle: "Design the data model before the route handler. Map the service boundary before the function signature.",
    evidence: [
      "Entity-relationship diagrams precede every migration",
      "API contracts are versioned before implementation",
      "Event schemas define the system language",
    ],
  },
  {
    key: "reliability",
    color: "#9FB8C4", // dusty blue
    icon: Shield,
    secondaryIcon: Lock,
    tag: "Resilience",
    stat: "99.99%",
    statLabel: "uptime target",
    title: "Survive Failure",
    principle: "Graceful degradation is a feature, not a fallback. The system must survive its own failure modes.",
    evidence: [
      "Circuit breakers on every external dependency",
      "Retry policies with exponential backoff and jitter",
      "Dead-letter queues for poisoned messages",
    ],
  },
  {
    key: "performance",
    color: "#C99271", // terracotta
    icon: Zap,
    secondaryIcon: Gauge,
    tag: "Velocity",
    stat: "<50ms",
    statLabel: "p95 latency",
    title: "Latency is UX",
    principle: "Performance is an architectural constraint, not a tuning phase. Latency is a user experience metric.",
    evidence: [
      "Read replicas and materialized views by default",
      "Connection pooling and prepared statements",
      "Edge caching with stale-while-revalidate",
    ],
  },
  {
    key: "ai",
    color: "#B49AAE", // mauve
    icon: Brain,
    secondaryIcon: Cpu,
    tag: "Intelligence",
    stat: "1st-class",
    statLabel: "citizen in stack",
    title: "AI as Infrastructure",
    principle: "AI is infrastructure — not a feature. It belongs in the data layer, the API layer, and the observability layer.",
    evidence: [
      "Embedding stores for semantic search",
      "LLM gateways with token budgets and rate limiting",
      "Observability pipelines that learn normal patterns",
    ],
  },
];

function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    up: { opacity: 0, y: 50 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial[direction]}
      transition={{ ...softSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PhilosophyCard({
  item,
  index,
}: {
  item: (typeof philosophyPalette)[0];
  index: number;
}) {
  const Icon = item.icon;
  const SecondaryIcon = item.secondaryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...softSpring, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative h-full"
    >
      <article
        className="relative overflow-hidden rounded-2xl h-full flex flex-col"
        style={{
          backgroundColor: item.color,
          boxShadow: `0 4px 24px -10px ${item.color}60`,
        }}
      >
        {/* Surface sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-black/[0.06] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Corner index mark */}
        <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
          <span
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] opacity-30"
            style={{ color: "#1a1a1a" }}
          >
            0{index + 1}
          </span>
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col h-full">
          {/* Header cluster */}
          <div className="flex items-start justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#faf8f5]/90 flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#faf8f5]/60 flex items-center justify-center">
                <SecondaryIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: `${item.color}cc` }} />
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#faf8f5]/80 text-[#1a1a1a]/70 shadow-sm">
              {item.tag}
            </span>
          </div>

          {/* Stat */}
          <div className="mb-5 sm:mb-6">
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-none">
              {item.stat}
            </span>
            <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/50 mt-1.5">
              {item.statLabel}
            </span>
          </div>

          {/* Principle statement */}
          <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1a1a1a] leading-snug mb-3 sm:mb-4 tracking-tight">
            {item.title}
          </h3>

          <p className="text-sm sm:text-[0.9rem] text-[#1a1a1a]/65 leading-[1.7] mb-6 sm:mb-8 flex-1">
            {item.principle}
          </p>

          {/* Evidence list */}
          <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-[#1a1a1a]/[0.08]">
            {item.evidence.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.2 + i * 0.06 }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "#1a1a1a" }}
                />
                <span className="text-xs sm:text-sm text-[#1a1a1a]/60 leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

// ---------- Connecting diagram for desktop ----------
function SystemDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    { label: "Data Model", x: 10, y: 50, color: "#9DBE95" },
    { label: "API Contract", x: 35, y: 20, color: "#9FB8C4" },
    { label: "Service Mesh", x: 65, y: 20, color: "#C99271" },
    { label: "AI Layer", x: 90, y: 50, color: "#B49AAE" },
    { label: "Observability", x: 50, y: 85, color: "#D4B36A" },
  ];

  return (
    <div ref={ref} className="hidden lg:block relative h-64 mb-16">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection lines */}
        <motion.path
          d="M 15 50 Q 25 35 35 25"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 40 25 Q 52 22 62 25"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M 68 25 Q 78 35 85 50"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.path
          d="M 50 25 Q 50 55 50 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.path
          d="M 15 50 Q 30 70 45 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.path
          d="M 85 50 Q 70 70 55 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }}
        />
      </svg>

      <div className="relative h-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute flex flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ ...spring, delay: 0.3 + i * 0.15 }}
          >
            <div
              className="w-3 h-3 rounded-full shadow-sm mb-2"
              style={{ backgroundColor: node.color }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1a1a1a]/60">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Philosophy() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#faf8f5] overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="max-w-3xl mb-16 sm:mb-20 lg:mb-24"
        >
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-5 sm:mb-6">
              <Network className="w-3.5 h-3.5" />
              Design Philosophy
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-5 sm:mb-6">
              How I think about
              <br />
              <span className="font-serif italic font-normal">systems</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-[#1a1a1a]/55 leading-[1.7] max-w-xl">
              Architecture is not a phase — it is a continuous discipline. Every
              decision is a trade-off documented, every abstraction is a bet on the
              future, every failure mode is designed before it is encountered.
            </p>
          </ScrollReveal>
        </motion.div>

        {/* System diagram — desktop only */}
        <SystemDiagram />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {philosophyPalette.map((item, index) => (
            <PhilosophyCard key={item.key} item={item} index={index} />
          ))}
        </div>

        {/* Footer statement */}
        <ScrollReveal delay={0.2} className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1e] p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9DBE95]/10 via-transparent to-[#B49AAE]/10 pointer-events-none" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              <div className="max-w-xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#faf8f5]/40 mb-3 block">
                  The Result
                </span>
                <p className="text-lg sm:text-xl text-[#faf8f5]/90 leading-[1.6] font-light">
                  Systems that scale quietly. Teams that move confidently. Users that
                  never notice the infrastructure — because it simply works.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="shrink-0"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#faf8f5] text-[#1a1a1a] text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  See the systems
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}