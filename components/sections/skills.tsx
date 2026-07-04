"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Code2,
  Layers,
  Shield,
  Zap,
  Box,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated-section";

const skillCategories = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Building robust APIs, microservices, and distributed systems that handle millions of requests.",
    skills: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    icon: Database,
    title: "Data & Storage",
    description: "Designing database schemas, optimizing queries, and managing data at scale.",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Data Modeling"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying, scaling, and monitoring infrastructure in the cloud.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
  },
  {
    icon: Code2,
    title: "Frontend & Full Stack",
    description: "Creating responsive, performant user interfaces with modern frameworks.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implementing security best practices and ensuring regulatory compliance.",
    skills: ["OAuth 2.0", "JWT", "Encryption", "PCI DSS", "GDPR", "Audit Trails"],
  },
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description: "Integrating AI capabilities into production systems for intelligent automation.",
    skills: ["OpenAI API", "LangChain", "Vector DBs", "Embeddings", "Fine-tuning"],
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Architecting scalable, reliable systems that grow with business needs.",
    skills: ["Microservices", "Event-Driven", "CQRS", "Load Balancing", "Caching"],
  },
  {
    icon: Box,
    title: "Payment Systems",
    description: "Building financial infrastructure with double-entry accounting and webhook processing.",
    skills: ["Paystack", "Stripe", "Webhooks", "Ledgers", "Idempotency"],
  },
];

export function Skills() {
  return (
    <section className="section-padding py-24 lg:py-32 bg-content-bg-light/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="label mb-3 block">Expertise</span>
          <h2 className="heading-lg text-heading mb-4">Skills & Technologies</h2>
          <p className="body-md max-w-2xl mx-auto">
            A comprehensive toolkit built over years of building production systems
            across fintech, SaaS, and marketplace domains.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="group card-light p-6 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 rounded-xl bg-content-bg w-fit mb-4">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-heading mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-body mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-content-bg text-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
