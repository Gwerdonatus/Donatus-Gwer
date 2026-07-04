// app/resume/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import {
  Download,
  MapPin,
  Github,
  Linkedin,
  Award,
  Code2,
  Zap,
  Shield,
  Database,
  Clock,
  Star,
  TrendingUp,
  Cpu,
  TestTube,
  Terminal,
  GitBranch,
  ArrowUpRight,
  Box,
  Radio,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Donatus Gwer",
  description:
    "Senior Backend Engineer · Systems Thinker · AI-Augmented Developer. Resume and credentials.",
};

const resumeData = {
  name: "Donatus Gwer",
  title: "Senior Backend Engineer · Systems Thinker · AI-Augmented Developer",
  email: "donatusgwer@gmail.com",
  phone: "+234 811 627 6212",
  github: "github.com/Gwerdonatus",
  linkedin: "linkedin.com/in/donatus-gwer",
  location: "Abuja, Nigeria · Open to Remote & Relocation",
  profile: `Backend engineer with 5+ years building payment infrastructure, financial reconciliation systems, and event-driven SaaS platforms. Founder of GITS, a software agency delivering production systems for African and global markets. Designs systems around failure modes first — idempotency, observability, and resilience are not afterthoughts. Works AI-augmented daily: uses LLMs for architecture review, code generation, test coverage, and documentation. Actively targeting senior backend roles at fintech and globally distributed engineering teams.`,
};

const skills = [
  { category: "Backend", items: ["Python", "Django", "DRF", "FastAPI", "Celery", "Async"] },
  { category: "Payments", items: ["Stripe", "Paystack", "HMAC", "Idempotency", "Recon", "Escrow"] },
  { category: "Data", items: ["PostgreSQL", "Redis", "Query Opt", "Bulk Ops", "N+1 Fix"] },
  { category: "Distributed", items: ["Kafka", "Event-Driven", "Workers", "Backoff", "SLA"] },
  { category: "Observability", items: ["Prometheus", "Grafana", "Metrics", "Locust", "Logging"] },
  { category: "Infra", items: ["Docker", "Compose", "GH Actions", "Nginx", "Render", "VPS"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Motion"] },
  { category: "AI & LLMs", items: ["Claude API", "Anthropic SDK", "Prompt Eng", "AI Review", "Tests"] },
];

const experience = [
  {
    period: "2022 – Present",
    company: "GITS — Gwer Intelligent Tech Solutions",
    role: "Founder & Lead Engineer",
    highlights: [
      "Founded and operate a software agency delivering production-grade web and backend systems for clients in Nigeria and internationally.",
      "Architected and shipped 5+ full-stack products including multi-tenant SaaS platforms, payment-integrated marketplaces, and AI-powered chat interfaces.",
      "Built AI-augmented delivery workflow: use LLMs for architecture review, boilerplate generation, test coverage, and client documentation — reducing delivery time by ~40%.",
      "Clients include NOTGATE (Nigerian construction firm), Lamed Pharmacy, and multiple FinTech-adjacent startups.",
    ],
  },
  {
    period: "2025",
    company: "TxCore (Open Source)",
    role: "Backend Engineer — Founder Project",
    highlights: [
      "Built a production-grade distributed payment processing system to demonstrate senior-level fintech backend patterns.",
      "Implemented Redis-backed idempotency key store — prevents duplicate transactions on client retry without DB uniqueness constraint errors.",
      "Built HMAC-SHA256 webhook validation with constant-time comparison (hmac.compare_digest) — closes timing attack vector missed in naive implementations.",
      "Designed CSV reconciliation engine using bulk DB fetch and bulk_create() — reduces 10,000-row reconciliation from ~10,000 queries to 2.",
      "Kafka event bus decouples API from async workers; Celery settlement worker uses exponential backoff to prevent retry storms.",
      "29 tests at 83% coverage · Prometheus metrics · Locust load tested at 200 concurrent users · GitHub Actions CI/CD.",
    ],
  },
  {
    period: "2025 – Present",
    company: "Proova — Revenue Attribution SaaS",
    role: "Full-Stack Engineer — Founder Project",
    highlights: [
      "Building a revenue attribution platform for African e-commerce tracking sales across WhatsApp, DMs, influencers, and offline channels.",
      "Designed hybrid deterministic/probabilistic attribution engine combining click-tracking with reference code matching.",
      "Built CSV financial reconciliation pipeline matching bank transactions to tracked attribution events.",
      "Integrated Stripe and Paystack for global and Nigerian market SaaS billing.",
    ],
  },
  {
    period: "2024 – 2025",
    company: "FinOps Operations Console",
    role: "Backend Engineer — Founder Project",
    highlights: [
      "Built financial operations platform for managing refunds, disputes, and payment investigations at scale.",
      "Implemented multi-tenant workspace architecture with strict data isolation between company accounts.",
      "Built automated refund risk classification engine detecting SLA breaches and flagging at-risk transactions.",
      "Created financial export system for reporting, audit trails, and reconciliation workflows.",
    ],
  },
  {
    period: "2025",
    company: "Naija Co-op Hub",
    role: "Backend Developer — Founder Project",
    highlights: [
      "Designed backend for cooperative savings marketplace with escrow-backed transaction flows.",
      "Implemented Paystack webhook validation and secure payment workflows.",
      "Built real-time messaging with Django Channels and Redis caching for query optimisation.",
      "Role-based access control across member, admin, and cooperative manager user types.",
    ],
  },
  {
    period: "2023 – 2024",
    company: "ThriftbyZee & Client Projects",
    role: "Freelance Backend Developer",
    highlights: [
      "Built REST APIs for product listings, filtering, and e-commerce workflows.",
      "Improved page performance by 40% through lazy loading and query optimisation.",
      "Automated CI/CD pipelines with GitHub Actions; maintained deployments on Netlify and Render.",
    ],
  },
];

const keyProjects = [
  {
    name: "TxCore",
    desc: "Distributed payment processing system · Django · Kafka · Celery · PostgreSQL · Redis · Prometheus",
    metrics: "29 tests · 83% coverage · 200 concurrent users · full CI/CD",
    github: "https://github.com/Gwerdonatus/txcore",
  },
  {
    name: "drift-recon",
    desc: "Financial reconciliation system · FastAPI · PostgreSQL · Redis · Nginx · Streamlit",
    metrics: "Docker Compose stack · CI/CD via GHCR · operational runbooks",
    github: "https://github.com/Gwerdonatus/drift-recon",
  },
  {
    name: "Proova",
    desc: "Revenue attribution SaaS for African e-commerce · Django · Stripe · Paystack",
    metrics: "Tracks revenue across WhatsApp, DMs, influencers, offline channels",
    github: null,
  },
];

const certifications = [
  "Django Full Stack Web Dev — Udemy",
  "100 Days of Code Bootcamp — Udemy",
  "Responsive Web Design — freeCodeCamp",
];

const credibilityBoosters = [
  { icon: TestTube, label: "Tests", value: "83%", sub: "TxCore suite" },
  { icon: TrendingUp, label: "Load", value: "200", sub: "Concurrent users" },
  { icon: Zap, label: "Perf", value: "40%", sub: "Lazy loading + query opt" },
  { icon: Clock, label: "Speed", value: "~40%", sub: "Faster with AI" },
  { icon: Shield, label: "Secure", value: "HMAC", sub: "Constant-time" },
  { icon: Database, label: "Recon", value: "10k→2", sub: "Queries per batch" },
];

const architecturePrinciples = [
  { icon: Shield, title: "Security First", desc: "HMAC-SHA256 validation, constant-time comparison, RBAC" },
  { icon: Database, title: "Data Integrity", desc: "Idempotency keys, reconciliation engines, bulk ops" },
  { icon: Radio, title: "Observability", desc: "Prometheus metrics, structured logging, SLA monitoring" },
  { icon: BarChart3, title: "Performance", desc: "Query optimisation, N+1 elimination, lazy loading" },
  { icon: Box, title: "Resilience", desc: "Exponential backoff, circuit breakers, retry policies" },
  { icon: GitBranch, title: "Scalability", desc: "Event-driven architecture, Kafka, Celery workers" },
];

const techStackBadges = [
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "FastAPI", color: "#009688" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redis", color: "#DC382D" },
  { name: "Kafka", color: "#231F20" },
  { name: "Docker", color: "#2496ED" },
  { name: "Stripe", color: "#635BFF" },
];

function SectionDot() {
  return <span className="inline-block w-2 h-2 rounded-full bg-[#2d4a3e] mr-2.5 shrink-0" />;
}

function SkillPill({ text }: { text: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wide rounded bg-[#2d4a3e]/[0.06] text-[#2d4a3e] border border-[#2d4a3e]/10">
      {text}
    </span>
  );
}

export default function ResumePage() {
  return (
    <section className="min-h-screen bg-[#f0f2ec]">
      {/* ─── Top Bar ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-32 pb-6 sm:pb-8">
        <div className="flex flex-row items-center justify-between gap-3 mb-6 sm:mb-10">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6a7a6a]">
              Professional Resume
            </span>
          </div>
          <a
            href="/master.pdf"
            download
            className="group inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#2d4a3e] text-white text-[11px] sm:text-[13px] font-medium tracking-wide hover:bg-[#1f362c] transition-all shadow-lg shadow-[#2d4a3e]/20 shrink-0"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </div>

        {/* ─── Resume Card ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#2d4a3e]/[0.04] overflow-hidden border border-[#2d4a3e]/[0.06]">
          {/* Header */}
          <div className="relative px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 lg:px-14 lg:pt-14 lg:pb-10">
            <div className="flex flex-row items-start justify-between gap-4 sm:gap-8">
              {/* Left: Name + Contact */}
              <div className="flex-1 min-w-0">
                <div className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#6a7a6a] tracking-wide">
                    <span className="w-6 sm:w-8 h-px bg-[#2d4a3e]/20 shrink-0" />
                    <span className="truncate">Senior Backend Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#6a7a6a] tracking-wide">
                    <span className="w-6 sm:w-8 h-px bg-[#2d4a3e]/20 shrink-0" />
                    <span className="truncate text-[10px] sm:text-[12px]">{resumeData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#6a7a6a] tracking-wide">
                    <span className="w-6 sm:w-8 h-px bg-[#2d4a3e]/20 shrink-0" />
                    <span className="text-[10px] sm:text-[12px]">{resumeData.phone}</span>
                  </div>
                </div>

                <h1
                  className="text-[clamp(28px,10vw,100px)] font-bold leading-[0.85] tracking-[-0.03em] text-[#2d4a3e]"
                  style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                >
                  Donatus
                </h1>
                <h2
                  className="text-[clamp(20px,7vw,64px)] font-light italic leading-[0.95] tracking-[-0.02em] text-[#2d4a3e]/80 -mt-0.5 sm:-mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                >
                  Gwer
                </h2>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                  <a
                    href={`https://${resumeData.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] text-[#6a7a6a] hover:text-[#2d4a3e] transition-colors"
                  >
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="underline underline-offset-2 decoration-[#2d4a3e]/20 hover:decoration-[#2d4a3e]">
                      {resumeData.github.replace("github.com/", "")}
                    </span>
                  </a>
                  <a
                    href={`https://${resumeData.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] text-[#6a7a6a] hover:text-[#2d4a3e] transition-colors"
                  >
                    <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="underline underline-offset-2 decoration-[#2d4a3e]/20 hover:decoration-[#2d4a3e]">
                      LinkedIn
                    </span>
                  </a>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] text-[#6a7a6a]">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">{resumeData.location}</span>
                    <span className="sm:hidden">Nigeria · Remote</span>
                  </span>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="shrink-0">
                <div className="relative">
                  <div
                    className="absolute -top-1.5 -right-1.5 sm:-top-3 sm:-right-3 w-20 h-24 sm:w-32 sm:h-40 lg:w-40 lg:h-52 rounded-sm rotate-6 opacity-50"
                    style={{
                      background: "linear-gradient(145deg, #5a7a5a 0%, #2d4a3e 40%, #1a2e1a 100%)",
                      filter: "blur(0.5px)",
                    }}
                  />
                  <div className="absolute -top-1.5 right-4 sm:-top-3 sm:right-8 z-20">
                    <svg width="18" height="36" viewBox="0 0 32 64" fill="none" className="drop-shadow-md sm:w-[28px] sm:h-[56px]">
                      <path
                        d="M8 20V44C8 50.627 13.373 56 20 56C26.627 56 32 50.627 32 44V16C32 7.163 24.837 0 16 0C7.163 0 0 7.163 0 16V44C0 55.046 8.954 64 20 64C31.046 64 40 55.046 40 44V20"
                        stroke="#8a9a8a"
                        strokeWidth="3"
                        fill="none"
                        transform="scale(0.6) translate(4, 4)"
                      />
                    </svg>
                  </div>
                  <div className="relative w-20 h-24 sm:w-32 sm:h-40 lg:w-40 lg:h-52 bg-[#e8ebe4] rounded-sm shadow-lg rotate-2 border-[3px] sm:border-[6px] border-white z-10 overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      alt="Donatus Gwer"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 160px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Credibility Bar ─── */}
          <div className="border-y border-[#2d4a3e]/[0.06] bg-[#f6f7f4]">
            <div className="px-5 py-4 sm:px-8 sm:py-5 lg:px-14 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {credibilityBoosters.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2d4a3e]/[0.06] mb-1.5 sm:mb-2">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d4a3e]" />
                  </div>
                  <div className="text-[15px] sm:text-[18px] font-semibold text-[#2d4a3e] leading-none">{item.value}</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-[#6a7a6a] uppercase tracking-wider mt-0.5 sm:mt-1">{item.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-[#8a9a8a] mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── NEW: Tech Stack Color Bar ─── */}
          <div className="px-5 py-3 sm:px-8 sm:py-4 lg:px-14 border-b border-[#2d4a3e]/[0.06]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase text-[#8a9a8a] mr-1">Stack</span>
              {techStackBadges.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium text-white"
                  style={{ backgroundColor: tech.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* ─── Body ─── */}
          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-10 sm:space-y-12">
                {/* Profile */}
                <section>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Profile
                    </h3>
                  </div>
                  <p className="text-[12.5px] sm:text-[13.5px] leading-[1.7] sm:leading-[1.75] text-[#4a5a4a] pl-4 sm:pl-5">
                    {resumeData.profile}
                  </p>
                </section>

                {/* NEW: Architecture Principles */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Architecture Principles
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {architecturePrinciples.map((principle) => (
                      <div
                        key={principle.title}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.05] group hover:border-[#2d4a3e]/20 transition-colors"
                      >
                        <principle.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d4a3e] mb-2" />
                        <h4 className="text-[11px] sm:text-[12px] font-semibold text-[#2d4a3e] mb-0.5">
                          {principle.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-[#6a7a6a] leading-snug">
                          {principle.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Experience */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Experience
                    </h3>
                  </div>
                  <div className="space-y-7 sm:space-y-8 pl-4 sm:pl-5">
                    {experience.map((job, i) => (
                      <div key={i} className="relative">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-[#8a9a8a] tracking-wide shrink-0 sm:w-28">
                            {job.period}
                          </span>
                          <div>
                            <h4 className="text-[13.5px] sm:text-[15px] font-semibold text-[#2d4a3e] leading-tight">
                              {job.company}
                            </h4>
                            <span className="text-[11px] sm:text-[12px] text-[#6a7a6a] italic">
                              {job.role}
                            </span>
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1.5 sm:pl-32">
                          {job.highlights.map((h, j) => (
                            <li key={j} className="text-[11.5px] sm:text-[12.5px] leading-[1.65] sm:leading-[1.7] text-[#5a6a5a] flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#2d4a3e]/30 mt-1.5 sm:mt-2 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Key Projects */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Key Projects
                    </h3>
                  </div>
                  <div className="space-y-4 sm:space-y-5 pl-4 sm:pl-5">
                    {keyProjects.map((proj, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-5 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.05]"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-[#2d4a3e]" />
                            <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#2d4a3e]">
                              {proj.name}
                            </h4>
                          </div>
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] text-[#6a7a6a] hover:text-[#2d4a3e] transition-colors"
                            >
                              <Github className="w-3 h-3" />
                              <span className="hidden sm:inline">View</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-[11.5px] sm:text-[12.5px] text-[#5a6a5a] leading-[1.55] sm:leading-[1.6] mb-2">
                          {proj.desc}
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-medium text-[#6a7a6a] bg-white px-2 py-1 rounded-full border border-[#2d4a3e]/[0.06]">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#b8a050]" />
                          {proj.metrics}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 space-y-10 sm:space-y-12">
                {/* Technical Skills */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Technical Skills
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5 space-y-4 sm:space-y-5">
                    {skills.map((group) => (
                      <div key={group.category}>
                        <h4 className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase text-[#8a9a8a] mb-2 sm:mb-2.5">
                          {group.category}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((s) => (
                            <SkillPill key={s} text={s} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* NEW: Open Source Contributions */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Open Source
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5 space-y-3">
                    <a
                      href="https://github.com/Gwerdonatus/txcore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.05] hover:border-[#2d4a3e]/20 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2d4a3e] flex items-center justify-center shrink-0">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[12px] sm:text-[13px] font-semibold text-[#2d4a3e]">TxCore</span>
                          <ArrowUpRight className="w-3 h-3 text-[#6a7a6a] group-hover:text-[#2d4a3e] transition-colors" />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#6a7a6a] leading-snug mt-0.5">
                          Distributed payment processing · 29 tests · 83% coverage
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/Gwerdonatus/drift-recon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.05] hover:border-[#2d4a3e]/20 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#5a7a5a] flex items-center justify-center shrink-0">
                        <GitBranch className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[12px] sm:text-[13px] font-semibold text-[#2d4a3e]">drift-recon</span>
                          <ArrowUpRight className="w-3 h-3 text-[#6a7a6a] group-hover:text-[#2d4a3e] transition-colors" />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#6a7a6a] leading-snug mt-0.5">
                          Financial reconciliation · FastAPI · Docker Compose
                        </p>
                      </div>
                    </a>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Certifications
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5 space-y-2.5 sm:space-y-3">
                    {certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-[#f6f7f4] border border-[#2d4a3e]/[0.04]"
                      >
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d4a3e] shrink-0 mt-0.5" />
                        <span className="text-[11.5px] sm:text-[12.5px] text-[#4a5a4a] leading-snug">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Education
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5">
                    <div className="p-3.5 sm:p-4 rounded-lg bg-[#f6f7f4] border border-[#2d4a3e]/[0.04]">
                      <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#2d4a3e] mb-1">
                        B.A. Philosophy
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#6a7a6a]">
                        Benue State University
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-[#8a9a8a] mt-1 italic">
                        Logic, reasoning, structured problem solving
                      </p>
                    </div>
                  </div>
                </section>

                {/* Working Style */}
                <section>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <SectionDot />
                    <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d4a3e]">
                      Working Style
                    </h3>
                  </div>
                  <div className="pl-4 sm:pl-5 p-3.5 sm:p-4 rounded-xl bg-[#2d4a3e]/[0.03] border border-[#2d4a3e]/[0.06]">
                    <p className="text-[11.5px] sm:text-[12.5px] leading-[1.7] sm:leading-[1.75] text-[#4a5a4a] italic">
                      &ldquo;Designs around failure modes before writing code. Treats observability as a first-class concern. Uses AI tools daily as a force multiplier — not to replace engineering judgment but to increase the surface area of what one engineer can confidently ship and maintain. Comfortable owning features end-to-end across database, API, worker, and infrastructure.&rdquo;
                    </p>
                  </div>
                </section>

                {/* AI-Augmented Badge */}
                <section>
                  <div className="pl-4 sm:pl-5">
                    <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-[#2d4a3e]/5 to-[#2d4a3e]/10 border border-[#2d4a3e]/10">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2d4a3e] flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[12px] sm:text-[13px] font-semibold text-[#2d4a3e]">
                          AI-Augmented Developer
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[#6a7a6a] leading-snug mt-0.5">
                          &ldquo;Designs around failure modes before writing code. Treats observability as a first-class concern. Uses AI tools daily as a force multiplier — not to replace engineering judgment but to increase the surface area of what one engineer can confidently ship and maintain. Comfortable owning features end-to-end across database, API, worker, and infrastructure.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* ─── Footer ─── */}
          <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-14 border-t border-[#2d4a3e]/[0.06] bg-[#f6f7f4]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-[10px] sm:text-[11px] text-[#8a9a8a]">
                © {new Date().getFullYear()} Donatus Gwer. Built with Next.js & Tailwind.
              </p>
              <a
                href="/master.pdf"
                download
                className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-medium text-[#2d4a3e] hover:text-[#1f362c] transition-colors underline underline-offset-4 decoration-[#2d4a3e]/20 hover:decoration-[#2d4a3e]"
              >
                <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}