import { Project, Video, Experience, SpeakingEvent } from "@/types";

// ─── Blog Posts ───
// Re-exported from the dedicated blog-posts module (source of truth)
export {
  blogPosts,
  blogDrafts,
  featuredPosts,
  blogCategories,
  blogTags,
} from "./blog-posts";

// ============================================================
// PROJECTS
// ============================================================

export const projects: Project[] = [
  {
    slug: "proova",
    title: "Proova",
    description:
      "Revenue attribution SaaS that tracks influencer-driven revenue from WhatsApp, DMs, and offline payments.",
    longDescription:
      "Proova is a comprehensive revenue attribution platform designed for businesses leveraging influencer marketing. It bridges the gap between online engagement and offline transactions by providing real-time tracking of revenue generated through various channels including WhatsApp, direct messages, and offline payments.",
    problem:
      "Businesses struggled to accurately attribute revenue to specific influencers when transactions occurred through informal channels like WhatsApp, DMs, or offline payments. Traditional analytics tools only tracked online conversions, leaving a significant portion of revenue unattributed.",
    solution:
      "Built a comprehensive attribution system that generates unique tracking links and codes for each influencer, captures transaction data across all channels, and provides real-time dashboards showing true ROI for every marketing partnership.",
    architecture: [
      "Next.js frontend with SSR for SEO and performance",
      "Django REST API with PostgreSQL for data persistence",
      "Redis for caching and real-time analytics",
      "Celery workers for async processing of attribution data",
      "Webhook system for integration with payment processors",
    ],
    techStack: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "AWS",
    ],
    challenges: [
      "Handling offline payment attribution without relying on online tracking pixels",
      "Building a real-time analytics pipeline that processes thousands of events per second",
      "Creating a flexible webhook system that integrates with various payment processors",
    ],
    decisions: [
      "Chose Next.js with SSR over a pure SPA — faster first paint on dashboards, at the cost of more complex server-side data fetching logic",
      "Chose a double-entry ledger over a simple balance-update model — guarantees financial integrity and auditability, at the cost of more complex write paths for every transaction",
      "Chose Redis Streams over a dedicated message queue (e.g. RabbitMQ) for real-time events — lower operational overhead since Redis was already in the stack, at the cost of weaker delivery guarantees than a purpose-built queue",
    ],
    lessons: [
      "Offline attribution requires creative solutions beyond traditional web analytics",
      "Financial data demands rigorous validation and audit trails",
      "Real-time systems require careful consideration of eventual consistency",
    ],
    github: "https://github.com",
    liveDemo: "https://proova.app",
    timeline: "6 months",
    category: "SaaS Platform",
    featured: true,
  },
  {
    slug: "txcore",
    title: "TxCore",
    description:
      "Financial transaction infrastructure with distributed backend, double-entry accounting, and webhook processing.",
    longDescription:
      "TxCore is a robust financial transaction infrastructure designed to handle high-volume payment processing with guaranteed reliability. It implements double-entry accounting principles to ensure financial data integrity while providing a flexible webhook system for real-time notifications.",
    problem:
      "Existing payment infrastructure solutions were either too expensive for startups or lacked the reliability and audit capabilities required for financial compliance. Building in-house solutions often resulted in data inconsistencies and reconciliation nightmares.",
    solution:
      "Developed a distributed transaction processing system with built-in double-entry accounting, idempotent operations, and comprehensive webhook delivery guarantees. The system handles retries, dead letter queues, and automatic reconciliation.",
    architecture: [
      "Distributed microservices architecture",
      "Event-driven design with idempotent processors",
      "Double-entry ledger with PostgreSQL",
      "Redis for distributed locking and rate limiting",
      "Webhook delivery system with exponential backoff",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
    ],
    challenges: [
      "Ensuring exactly-once processing in a distributed system",
      "Building a ledger system that maintains ACID properties at scale",
      "Designing webhook delivery with guaranteed at-least-once semantics",
    ],
    decisions: [
      "Chose the saga pattern over two-phase commit for distributed transactions — avoids blocking locks across services, at the cost of eventual consistency and more complex compensating-transaction logic",
      "Chose event sourcing over storing only current state — gives a complete, replayable audit history, at the cost of higher storage volume and more complex read-model projections",
      "Required idempotency keys on every endpoint rather than only payment-critical ones — consistent guarantees everywhere, at the cost of extra validation overhead on low-risk endpoints",
    ],
    lessons: [
      "Financial systems require a fundamentally different approach to error handling",
      "Idempotency is not optional in payment processing",
      "Observability is critical for debugging distributed financial transactions",
    ],
    github: "https://github.com",
    timeline: "8 months",
    category: "Financial Infrastructure",
    featured: true,
  },
  {
    slug: "naija-co-op-hub",
    title: "Naija Co-op Hub",
    description:
      "Cooperative marketplace platform with escrow, wallet, loans, bulk deals, and messaging.",
    longDescription:
      "Naija Co-op Hub is a comprehensive cooperative marketplace platform that enables communities to pool resources, make bulk purchases, access loans, and trade securely through an integrated escrow system.",
    problem:
      "Cooperative societies in Nigeria lacked a unified digital platform to manage their operations. Members needed separate tools for savings, loans, marketplace trading, and communication, leading to fragmented experiences and poor financial visibility.",
    solution:
      "Built an all-in-one cooperative platform featuring a marketplace with escrow protection, individual and group wallets, loan management, bulk purchasing deals, and integrated messaging for seamless member communication.",
    architecture: [
      "Monolithic Django backend with modular apps",
      "React frontend with real-time updates via WebSockets",
      "PostgreSQL with row-level security for multi-tenant data",
      "Escrow service with time-locked releases",
      "Integrated payment processing with Paystack",
    ],
    techStack: [
      "Django",
      "React",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Paystack API",
      "AWS",
    ],
    challenges: [
      "Implementing a secure escrow system that protects both buyers and sellers",
      "Building a loan approval workflow with credit scoring integration",
      "Creating a real-time messaging system that scales with member growth",
    ],
    decisions: [
      "Chose PostgreSQL row-level security over separate databases per cooperative — simpler operations and lower infrastructure cost, at the cost of needing rigorous policy testing to prevent cross-tenant data leaks",
      "Chose an event-driven state machine for escrow over direct status updates — a clear audit trail of every transition, at the cost of more upfront design work per state",
      "Built notifications in-house instead of using a third-party service — full control over delivery logic with no per-message cost at scale, at the cost of having to build and maintain retry and delivery infrastructure ourselves",
    ],
    lessons: [
      "Trust is the most important feature in financial platforms",
      "Local payment integration requires deep understanding of regional banking",
      "Community platforms need strong moderation tools from day one",
    ],
    liveDemo: "https://naijacoophub.com",
    timeline: "10 months",
    category: "Marketplace",
    featured: true,
  },
  {
    slug: "jos-eventia",
    title: "Jos Eventia",
    description:
      "Vendor marketplace with escrow bookings and secure Paystack payments for events.",
    longDescription:
      "Jos Eventia connects event organizers with verified vendors while providing escrow-protected bookings and secure payment processing through Paystack integration.",
    problem:
      "Event organizers in Jos faced challenges finding reliable vendors and making secure payments. Vendors struggled with payment collection and booking management. There was no trusted intermediary to protect both parties.",
    solution:
      "Created a vendor marketplace with verified profiles, escrow-protected bookings, milestone-based payment releases, and integrated Paystack processing for seamless transactions.",
    architecture: [
      "Next.js frontend with ISR for vendor profiles",
      "Django REST API with PostgreSQL",
      "Escrow system with milestone releases",
      "Paystack integration for payment processing",
      "Real-time booking notifications",
    ],
    techStack: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Paystack",
      "Redis",
      "AWS S3",
    ],
    challenges: [
      "Building trust between organizers and vendors in a new marketplace",
      "Implementing milestone-based escrow releases that satisfy both parties",
      "Handling payment disputes with fair resolution mechanisms",
    ],
    decisions: [
      "Chose ISR over full static generation for vendor profiles — pages stay fresh as vendors update listings, at the cost of occasionally serving a slightly stale page between revalidations",
      "Sequenced reviews before escrow rather than shipping both together — let trust signals accumulate before real money moved through the platform, delaying the more complex escrow feature",
      "Chose manual admin dispute resolution over automated rules at launch — the right call during a low-volume launch phase, at the cost of not scaling past a small support team without further investment",
    ],
    lessons: [
      "Marketplaces need to solve the chicken-and-egg problem creatively",
      "Escrow complexity increases with the number of edge cases",
      "Local payment methods significantly improve conversion rates",
    ],
    liveDemo: "https://joseventia.com",
    timeline: "4 months",
    category: "Marketplace",
    featured: false,
  },
  {
    slug: "thriftbyzee",
    title: "ThriftbyZee",
    description: "Fashion e-commerce platform with curated thrift collections.",
    longDescription:
      "ThriftbyZee is a fashion e-commerce platform specializing in curated thrift and vintage clothing collections, providing a seamless shopping experience with intelligent recommendations.",
    problem:
      "Thrift shopping online lacked the curated experience of physical vintage stores. Customers couldn't easily discover items that matched their style, and sellers had limited tools to showcase their collections.",
    solution:
      "Built an e-commerce platform with curated collections, style-based recommendations, seller dashboards, and a streamlined checkout process optimized for fashion purchases.",
    architecture: [
      "Next.js with App Router for optimal performance",
      "Django REST API",
      "PostgreSQL with full-text search",
      "Image optimization pipeline",
      "Recommendation engine based on purchase history",
    ],
    techStack: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Stripe",
    ],
    challenges: [
      "Building a recommendation system with limited initial data",
      "Optimizing image loading for fashion photography",
      "Creating a seller experience that rivals dedicated platforms",
    ],
    decisions: [
      "Chose hybrid full-text + vector search over full-text alone — better handles fuzzy style queries like 'boho summer dress', at the cost of maintaining an embeddings pipeline alongside the search index",
      "Used custom image loaders over a managed image CDN — kept infrastructure costs low at launch, at the cost of building and maintaining the optimization pipeline in-house",
      "Chose collaborative filtering over a more complex ML recommendation model — usable results from day one with limited data, at the cost of weaker recommendations for new users with no purchase history",
    ],
    lessons: [
      "Fashion e-commerce is heavily visual — image quality matters more than features",
      "Seller onboarding is the biggest growth bottleneck",
      "Recommendation quality improves dramatically with more interaction data",
    ],
    liveDemo: "https://thriftbyzee.com",
    timeline: "3 months",
    category: "E-commerce",
    featured: false,
  },
  {
    slug: "gits",
    title: "GITS",
    description: "Agency website and client work portfolio.",
    longDescription:
      "GITS is a creative agency website showcasing client work, services, and case studies with a focus on modern design and performance.",
    problem:
      "The agency needed a website that reflected their design capabilities while maintaining fast load times and excellent SEO performance.",
    solution:
      "Built a high-performance agency website with stunning animations, optimized assets, and comprehensive SEO implementation.",
    architecture: [
      "Next.js with App Router",
      "Static generation for optimal performance",
      "Framer Motion for animations",
      "CMS integration for easy content updates",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity CMS",
    ],
    challenges: [
      "Balancing visual richness with performance",
      "Implementing complex animations without sacrificing accessibility",
      "Creating a CMS structure flexible enough for diverse client work",
    ],
    decisions: [
      "Chose static generation with ISR over server-side rendering for case studies — near-instant page loads for visitors, at the cost of a short delay before content edits go live",
      "Built animations as progressive enhancement rather than a hard dependency — the site stays fully usable if motion fails or is disabled, at the cost of extra testing across reduced-motion states",
      "Chose Sanity over a simpler flat-file CMS — real editing flexibility for the content team, at the cost of an extra external dependency and its own learning curve",
    ],
    lessons: [
      "Agency websites are judged by their own quality",
      "Performance is a feature, not an afterthought",
      "CMS choice significantly impacts content team productivity",
    ],
    liveDemo: "https://gits.agency",
    timeline: "2 months",
    category: "Agency",
    featured: false,
  },

  // ---------- Personal projects ----------

  {
    slug: "sentinel",
    title: "Sentinel",
    description:
      "Open-source trust layer for financial systems where AI agents, services, and humans all act on shared infrastructure — built around an immutable audit ledger and real-time risk intelligence.",
    longDescription:
      "Sentinel is an event-driven security, audit, and risk intelligence platform for financial systems that now have more than human users — backend services, third-party APIs, and increasingly AI agents acting on the same infrastructure. It doesn't process money; it's the trust layer between every actor and the systems that do, answering who or what performed an action, whether it should be trusted, and whether it can be proven months later.",
    problem:
      "Financial systems are no longer just operated by humans — AI support agents, autonomous models, and MCP servers now perform real actions with production access. Most platforms have no way to attribute an action to the actor that took it, no way to tell if an AI agent is behaving anomalously in real time, and no tamper-proof record to reconstruct an incident after the fact.",
    solution:
      "Built an audit-first platform with a tamper-evident, HMAC-signed ledger that records every action by every actor type, JWT-based auth with role-based access, and a phased roadmap toward real-time risk scoring and AI actor tracking — treating AI agents as a first-class, separately attributable actor type rather than bolting tracking on after the fact.",
    architecture: [
      "Django REST API with JWT auth, RBAC, and versioned api/v1/ endpoints",
      "Immutable, HMAC-signed audit ledger as the system's core record",
      "PostgreSQL, Redis, and Celery for persistence, caching, and async work",
      "Kafka-based event streaming for an ordered, replayable pipeline (Phase 3)",
      "Risk Intelligence Engine for real-time behavioral scoring of human and AI actors (Phase 3)",
      "OpenTelemetry, Prometheus, and Grafana for tracing, metrics, and observability",
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Redis", "Kafka", "Next.js"],
    challenges: [
      "Designing an audit ledger that's genuinely tamper-evident, not just append-only by convention",
      "Modeling AI agents as a distinct, separately attributable actor type without fragmenting the data model",
      "Building a risk engine flexible enough to score wildly different actor behaviors — human, service, and AI — on the same scale",
    ],
    decisions: [
      "Chose HMAC-signed ledger records over plain append-only logging — tampering becomes provably detectable rather than just discouraged, at the cost of key-rotation complexity and slightly higher write overhead per record",
      "Modeled humans, services, and AI agents as a unified actor type from day one instead of bolting AI tracking on later — avoids a costly schema migration down the line, at the cost of more upfront design work before any feature could ship",
      "Sequenced delivery — audit ledger and auth first, risk engine and AI tracking later — so early phases are genuinely usable on their own, at the cost of the platform's most distinctive feature not existing yet",
    ],
    lessons: [
      "Auditability has to be designed in from the first schema decision — it can't be retrofitted once data already exists",
      "Treating AI agents as a first-class actor type, not just another service account, changes nearly every downstream design choice",
      "Observability tooling earns its cost back the first time something needs explaining six months later",
    ],
    github: "https://github.com/Gwerdonatus/Sentinel",
    timeline: "Ongoing — Phase 3",
    category: "Financial Infrastructure",
    featured: true,
  },
  {
    slug: "drift-recon",
    title: "Data Drift Diagnosis & Reconciliation Service",
    description:
      "A production-grade reconciliation engine that matches transactions against bank statements, then statistically detects and diagnoses why match rates have drifted — not just that something broke.",
    longDescription:
      "Most reconciliation tools stop at \"something is wrong.\" This system goes further, answering what broke, when it broke, and why — combining confidence-weighted transaction matching with statistical drift detection on a rolling 30-day window, and surfacing rule-based root-cause hypotheses for every drift event it flags.",
    problem:
      "Reconciliation tools typically surface mismatches without context. When match rates degrade, teams are left manually digging through transactions to figure out whether it's a data quality issue, a timing shift, or a genuine upstream break — with no historical baseline to tell normal noise from a real problem.",
    solution:
      "Built a FastAPI service with a multi-factor weighted matching engine (amount, date, reference, description), a dead-letter quarantine so invalid rows are never silently dropped, and a drift analyzer that computes z-scores against a 30-day rolling baseline across match rate, confidence, and date delta — only activating once enough history exists to be statistically meaningful.",
    architecture: [
      "Nginx (TLS) routing to FastAPI (ingestion, matching, drift analysis) and a Streamlit dashboard",
      "PostgreSQL storing transactions, bank statements, reconciliation results, snapshots, drift events, and quarantined records",
      "Redis for rate limiting and the APScheduler job store",
      "APScheduler with a PostgreSQL-backed store so scheduled runs survive restarts",
      "Idempotent ingestion via SHA-256 content hashing into deterministic batch IDs",
    ],
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Streamlit", "Docker", "APScheduler"],
    challenges: [
      "Designing a confidence score that weighs amount, date, reference, and description fairly across different data sources",
      "Setting drift thresholds (z-score bands) that catch real anomalies without flagging normal day-to-day variance",
      "Making ingestion truly idempotent so reruns and retries never duplicate or corrupt data",
    ],
    decisions: [
      "Chose SHA-256 content hashing for idempotent ingestion over a manual dedup step — reruns are safe by construction, at the cost of needing careful hash design to avoid false-positive collisions on near-duplicate files",
      "Chose a rolling 30-day z-score baseline over fixed thresholds — drift detection adapts to each source's own normal variance, at the cost of a 7-snapshot warm-up period before it activates at all",
      "Added a human-review band between auto-matched and unmatched instead of a single binary threshold — reduces false confidence in automated decisions, at the cost of an ongoing manual review queue",
      "Quarantined invalid rows instead of dropping them — nothing the system has seen is ever silently lost, at the cost of extra storage and a quarantine table that needs periodic triage",
    ],
    lessons: [
      "A reconciliation tool is judged by what it does after it finds a mismatch, not by the matching itself",
      "Idempotency has to be the default behavior of every endpoint, not a special case for retries",
      "A human review band between auto-matched and unmatched reduces false confidence in fully automated decisions",
    ],
    github: "https://github.com/Gwerdonatus/drift-recon",
    timeline: "4 months",
    category: "Financial Infrastructure",
    featured: true,
  },
  {
    slug: "finops-console",
    title: "FinOps Ops Console",
    description:
      "An operations dashboard for refund and dispute risk, built on the insight that most chargebacks aren't fraud — they're refunds that were missed or delayed.",
    longDescription:
      "FinOps Ops Console gives merchants and support teams a single operational view of refund and dispute risk across payment providers. Instead of treating refunds as isolated events, it tracks them as a time-sensitive workflow with automatic risk classification, alerting, and universal search — and seeds realistic demo data straight from the Stripe API so the risk logic can be seen working on genuine data shapes.",
    problem:
      "In most payment stacks, refunds arrive as scattered emails or isolated events with no clear deadline visibility. Teams have no way to see which refunds are about to become disputes, and by the time a chargeback appears, the window to prevent it has usually already closed.",
    solution:
      "Built a Django console that classifies every refund into SAFE, DUE_SOON, AT_RISK, or OVERDUE based on SLA logic, raises alerts automatically as refunds approach risk thresholds, and provides universal search across customer, transaction, refund, and order data — with a demo-seeding pipeline that generates real Stripe test payments and time-shifts them to naturally produce every risk state.",
    architecture: [
      "Django backend with workspace-scoped authentication and core domain models for transactions, refunds, and alerts",
      "Refund SLA and risk-state logic (SAFE / DUE_SOON / AT_RISK / OVERDUE)",
      "Encrypted provider credential storage for Stripe, Shopify, and Paystack connections",
      "Stripe demo seeding that generates test payments and refunds, then time-shifts them to populate every risk state",
      "Tailwind-styled dashboard UI with alert-driven navigation",
    ],
    techStack: ["Django", "PostgreSQL", "Tailwind CSS", "Stripe API", "Docker"],
    challenges: [
      "Modeling refund risk as a continuous, time-based state rather than a simple binary status",
      "Building demo data realistic enough to genuinely exercise the risk engine, not just fake the UI",
      "Storing and managing multiple provider credentials securely across Stripe, Shopify, and Paystack",
    ],
    decisions: [
      "Built the SLA and risk logic before any live provider integration — the tool was demonstrably useful early, at the cost of validating assumptions against real provider data later than ideal",
      "Chose real Stripe test-API seeding over static JSON fixtures for demo data — the risk engine is exercised against genuine data shapes, at the cost of a slower, network-dependent seeding process",
      "Modeled refund risk as four fixed states (SAFE / DUE_SOON / AT_RISK / OVERDUE) instead of a free-form status field — predictable UI and alerting logic, at the cost of less flexibility if a future edge case doesn't cleanly fit one of the four",
    ],
    lessons: [
      "Most chargebacks are missed deadlines, not fraud — solving for visibility prevents more disputes than solving for detection after the fact",
      "An ops tool earns trust faster when it's convincing in demo mode before a single real provider is connected",
    ],
    github: "https://github.com/Gwerdonatus/FinOps",
    timeline: "3 months",
    category: "SaaS Platform",
    featured: false,
  },
  {
    slug: "ledgerlens-recon",
    title: "LedgerLens Recon",
    description:
      "A lightweight, auditable reconciliation CLI that matches Stripe payments against an internal ledger and produces a color-coded Excel report.",
    longDescription:
      "LedgerLens Recon is a small, production-minded reconciliation CLI built on a simple premise: not every reconciliation problem needs Airflow or Kafka. Many are batch, deterministic, and moderate-volume — better solved with strong correctness and clear reporting than with orchestration overhead. It matches Stripe (API or mock) against an internal database or CSV, scores confidence per match, and outputs a summary Excel report with color-coded rows.",
    problem:
      "Teams often reach for heavyweight orchestration frameworks for reconciliation jobs that are actually batch, deterministic, and moderate in volume — adding operational complexity to a problem that mainly needs correctness, idempotency, and a report someone can actually read.",
    solution:
      "Built a modular CLI with a Stripe client (with a mock mode), a SQLAlchemy DB client (with a CSV mock fallback), and a matcher that uses transaction ID as the primary key plus amount and timestamp tolerance for validation — categorizing every record as matched, mismatched, or missing, with a 0.0–1.0 confidence score, then writing it all to a structured Excel report via openpyxl.",
    architecture: [
      "Modular package layout: data_sources, reconciliation, reporting, utils",
      "Stripe API client with a mock mode for credential-free runs",
      "SQLAlchemy DB client with a CSV mock fallback",
      "Matcher using transaction ID as primary key, with configurable amount and timestamp tolerance",
      "openpyxl-based Excel writer producing a summary sheet plus color-coded status rows",
    ],
    techStack: ["Python", "SQLAlchemy", "Stripe API", "openpyxl"],
    challenges: [
      "Keeping the tool genuinely simple while still meeting production basics — structured logging, config-driven thresholds, unit tests",
      "Making the Excel report itself a usable artifact for non-engineers, not just a debug dump",
    ],
    decisions: [
      "Chose a CLI over a scheduled service or dashboard — matches how batch, moderate-volume reconciliation is actually run day-to-day, at the cost of no built-in scheduling or historical trend view",
      "Built mock modes for every external dependency instead of requiring live credentials to run — the whole pipeline is testable and demoable with zero setup, at the cost of mocks needing to be kept in sync with real API behavior",
      "Kept report output deterministic with stable ordering rather than optimizing for write speed — reruns are safely diffable, at the cost of slightly slower report generation on large files",
    ],
    lessons: [
      "Not every reconciliation problem needs orchestration — clarity and idempotency often matter more than scale",
      "A well-designed report can be the actual product, with the matching logic underneath it just doing its job quietly",
    ],
    github: "https://github.com/Gwerdonatus/Ledgerlens-recon",
    timeline: "3 weeks",
    category: "Financial Infrastructure",
    featured: false,
  },
  {
    slug: "alerts-monitoring-dashboard",
    title: "Alerts Monitoring Dashboard",
    description:
      "A full-stack dashboard that lets managers monitor, filter, and dismiss employee alerts across an org hierarchy.",
    longDescription:
      "Originally built as a take-home engineering assignment and maintained as a portfolio piece, this dashboard gives a manager a clean way to view, filter, search, and act on employee alerts — switching between direct reports and an entire reporting subtree, with server-side pagination and idempotent dismiss actions.",
    problem:
      "Managers needed a way to monitor alerts across their team without wading through an unfiltered list or losing track of which alerts had already been actioned — especially across larger, multi-level reporting structures.",
    solution:
      "Built a React/TypeScript frontend with fully controlled filter state and a debounced search input, paired with a Django backend that models employees as a self-referential hierarchy — enabling efficient subtree traversal for the \"direct reports vs. entire subtree\" toggle, plus indexed queries and deterministic seed data for testing.",
    architecture: [
      "React + TypeScript frontend (components, api layer, types)",
      "Django backend with a self-referential Employee model supporting subtree traversal",
      "Alert model with severity/status enums and indexed fields for query performance",
      "REST-style API endpoints with server-side pagination",
      "Deterministic seed data fixtures for predictable local testing",
    ],
    techStack: ["React", "TypeScript", "Django", "Tailwind CSS"],
    challenges: [
      "Modeling an org hierarchy that supports efficient subtree queries without recursive query blowup",
      "Keeping filter, search, and pagination state fully controlled and free of UI jank",
      "Making the dismiss action idempotent so duplicate clicks can't produce inconsistent state",
    ],
    decisions: [
      "Chose a self-referential employee model over a separate closure/hierarchy table — a simpler schema with one fewer join, at the cost of subtree queries needing careful indexing to stay fast as the org grows",
      "Debounced search client-side instead of server-side — fewer round trips and a simpler backend, at the cost of a small delay before results update while typing",
      "Chose server-side pagination over loading the full alert list client-side — the UI stays fast regardless of team size, at the cost of extra query complexity to keep counts accurate across filters",
    ],
    lessons: [
      "A take-home assignment is a good forcing function for clean architecture under real time pressure",
      "Idempotent actions are worth the extra design effort even in smaller internal tools",
    ],
    github: "https://github.com/Gwerdonatus/alerts-monitoring-dashboard",
    timeline: "2 weeks",
    category: "SaaS Platform",
    featured: false,
  },
  {
    slug: "hands-action-demo",
    title: "Hands Action Demo",
    description:
      "A gesture-controlled desktop automation tool that reads hand poses from a webcam in real time and triggers OS-level actions without a keyboard or mouse.",
    longDescription:
      "Hands Action Demo is a real-time computer vision pipeline that detects hand gestures — thumbs up, peace sign, open palm, fist, swipes, and more — and maps each one directly to a desktop action: opening Chrome, switching tabs, taking a screenshot, or playing a system sound, all triggered purely by hand movement.",
    problem:
      "Most desktop automation still assumes a keyboard and mouse, even for simple, repeatable actions like switching tabs or taking a screenshot. There was no lightweight way to trigger common OS-level actions purely from hand gestures.",
    solution:
      "Built a pipeline that captures webcam frames, runs MediaPipe Hands with TensorFlow Lite for fast landmark detection, classifies the pose against a defined gesture set, and dispatches the matching action through PyAutoGUI, winsound, and OS-specific subprocess calls.",
    architecture: [
      "Webcam capture loop driving real-time frame processing",
      "MediaPipe Hands + TensorFlow Lite for landmark extraction",
      "Custom rule-based gesture classification",
      "Action dispatcher mapping gestures to PyAutoGUI / winsound / subprocess calls",
      "JSON config for user-specific paths (Chrome, project directories)",
    ],
    techStack: ["Python", "MediaPipe", "TensorFlow Lite", "PyAutoGUI"],
    challenges: [
      "Classifying gestures reliably in real time without a heavyweight custom-trained model",
      "Keeping false-positive triggers low enough that the system feels controllable rather than twitchy",
      "Mapping detected gestures cleanly onto cross-platform OS-level actions",
    ],
    decisions: [
      "Chose rule-based classification on top of MediaPipe's landmarks over training a custom model — fast to build and easy to extend with new gestures, at the cost of being less robust to lighting, hand size, or camera angle than a trained classifier",
      "Separated gesture detection from action execution into distinct modules — new gestures can be added without touching automation code, at the cost of an extra layer of indirection for a project this size",
      "Built for a single-user, single-camera setup rather than generalizing early — kept the scope realistic for a demo project, at the cost of the system not yet handling multiple hands or users robustly",
    ],
    lessons: [
      "Real-time computer vision projects live or die on classification stability, not raw model accuracy",
      "Designing for extensibility — clear separation between detection and action — makes a small project genuinely reusable",
    ],
    github: "https://github.com/Gwerdonatus/hands-action-demo",
    timeline: "2 weeks",
    category: "Automation",
    featured: false,
  },
  {
    slug: "quick-product-uploader",
    title: "Quick Product Uploader",
    description:
      "A Chrome extension paired with a Django API that lets a store owner upload products in bulk without touching an admin panel.",
    longDescription:
      "Quick Product Uploader is a Chrome extension backed by a Django API that lets a store owner capture and submit product details directly from the browser, cutting a multi-step admin-panel workflow down to a few clicks.",
    problem:
      "Store owners needed a faster way to add products than navigating a full admin panel for every single item, especially when adding several products in one sitting.",
    solution:
      "Built a thin Chrome extension that captures product details from the browser and forwards them to a Django REST API, which owns all the actual business logic and persistence — keeping the extension simple and the backend reusable.",
    architecture: [
      "Chrome extension front-end for capturing product data in-browser",
      "Django REST API handling validation, persistence, and product logic",
      "Simple product model with a dedicated upload endpoint",
    ],
    techStack: ["Python", "Django", "JavaScript", "Chrome Extension API"],
    challenges: [
      "Keeping the extension's permissions and footprint minimal while still talking reliably to the backend",
      "Handling the handoff between browser-extension storage and server-side persistence cleanly",
    ],
    decisions: [
      "Kept the extension intentionally thin — captures and forwards data only, with all business logic living in the Django API so the same backend could serve other front ends later, at the cost of every action requiring a network round trip with no offline capability",
      "Chose a Django REST API over a serverless function for the backend — simpler to reason about and extend for a small team, at the cost of managing and paying for a running server rather than paying only per invocation",
    ],
    lessons: [
      "Small utility tools are a good way to practice the browser-extension-to-API integration pattern without much scope creep",
    ],
    github: "https://github.com/Gwerdonatus/quick-product-uploader",
    timeline: "1 week",
    category: "Automation",
    featured: false,
  },
];

// ============================================================
// VIDEOS
// ============================================================

export const videos: Video[] = [
  {
    id: "1",
    title: "Building Scalable Django APIs",
    description: "A comprehensive guide to structuring Django projects for scale.",
    thumbnail: "/images/video-thumb-1.jpg",
    category: "Backend Engineering",
    date: "2024-12-01",
    duration: "45:30",
  },
  {
    id: "2",
    title: "System Design: Payment Processing",
    description: "Designing payment systems that handle millions of transactions.",
    thumbnail: "/images/video-thumb-2.jpg",
    category: "System Design",
    date: "2024-11-15",
    duration: "52:15",
  },
  {
    id: "3",
    title: "Python Async Deep Dive",
    description: "Understanding asyncio, event loops, and concurrency in Python.",
    thumbnail: "/images/video-thumb-3.jpg",
    category: "Python",
    date: "2024-10-20",
    duration: "38:45",
  },
  {
    id: "4",
    title: "AI Architecture Patterns",
    description: "Common patterns for integrating AI into production systems.",
    thumbnail: "/images/video-thumb-4.jpg",
    category: "AI",
    date: "2024-09-30",
    duration: "41:20",
  },
  {
    id: "5",
    title: "From Developer to Founder",
    description: "My journey from software engineer to building products.",
    thumbnail: "/images/video-thumb-5.jpg",
    category: "Career",
    date: "2024-09-10",
    duration: "35:00",
  },
  {
    id: "6",
    title: "Database Design for Startups",
    description: "Database design principles that save startups from future pain.",
    thumbnail: "/images/video-thumb-6.jpg",
    category: "Architecture",
    date: "2024-08-20",
    duration: "44:10",
  },
];

// ============================================================
// EXPERIENCES
// ============================================================

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Lead Backend Engineer",
    company: "Proova",
    period: "2023 - Present",
    description:
      "Leading backend development for a revenue attribution SaaS platform serving hundreds of businesses.",
    achievements: [
      "Architected distributed system processing 1M+ events daily",
      "Reduced API response times by 60% through caching and query optimization",
      "Built real-time analytics pipeline with sub-second latency",
      "Implemented comprehensive monitoring and alerting systems",
    ],
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "AWS",
    ],
  },
  {
    id: "2",
    role: "Backend Engineer",
    company: "TxCore",
    period: "2022 - 2023",
    description:
      "Built financial transaction infrastructure handling millions in monthly transaction volume.",
    achievements: [
      "Designed double-entry ledger system with 100% data integrity",
      "Built webhook delivery system with 99.9% reliability",
      "Implemented idempotent API design preventing duplicate transactions",
      "Created comprehensive API documentation and developer guides",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Kubernetes",
    ],
  },
  {
    id: "3",
    role: "Full Stack Developer",
    company: "Naija Co-op Hub",
    period: "2021 - 2022",
    description:
      "Developed a cooperative marketplace platform with escrow, loans, and bulk purchasing.",
    achievements: [
      "Built marketplace serving 10,000+ cooperative members",
      "Implemented escrow system processing $2M+ in transactions",
      "Created loan management workflow reducing approval time by 70%",
      "Integrated with local payment processors for seamless transactions",
    ],
    technologies: [
      "Django",
      "React",
      "PostgreSQL",
      "Redis",
      "Paystack",
      "AWS",
    ],
  },
  {
    id: "4",
    role: "Software Developer",
    company: "Jos Eventia",
    period: "2020 - 2021",
    description:
      "Built vendor marketplace platform for event organizers and service providers.",
    achievements: [
      "Launched marketplace with 200+ verified vendors in first 3 months",
      "Built booking system handling 500+ events monthly",
      "Implemented review system achieving 4.8/5 average rating",
      "Created vendor dashboard with real-time analytics",
    ],
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Paystack",
      "AWS",
    ],
  },
];

// ============================================================
// SPEAKING EVENTS
// ============================================================

export const speakingEvents: SpeakingEvent[] = [
  {
    id: "1",
    title: "Building Financial Infrastructure at Scale",
    event: "PyCon Africa 2024",
    date: "2024-11-15",
    type: "talk",
    description:
      "A technical deep dive into designing payment systems that handle millions of transactions with reliability and compliance.",
    link: "https://youtube.com",
  },
  {
    id: "2",
    title: "The Backend Engineer's Guide to AI Integration",
    event: "Backend Engineering Show",
    date: "2024-10-20",
    type: "podcast",
    description:
      "Discussing practical approaches to integrating AI capabilities into existing backend systems without compromising reliability.",
    link: "https://spotify.com",
  },
  {
    id: "3",
    title: "Distributed Systems Workshop",
    event: "DevFest Lagos 2024",
    date: "2024-09-10",
    type: "workshop",
    description:
      "Hands-on workshop covering consensus algorithms, distributed transactions, and failure handling patterns.",
    link: "https://youtube.com",
  },
  {
    id: "4",
    title: "From Code to Product: A Founder's Journey",
    event: "Startup Grind Jos",
    date: "2024-08-05",
    type: "talk",
    description:
      "Sharing lessons learned transitioning from developer to founder and building products that solve real problems.",
  },
];