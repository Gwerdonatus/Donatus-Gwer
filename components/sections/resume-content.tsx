"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { experiences } from "@/lib/data";
import { AnimatedSection } from "@/components/motion/animated-section";

export function ResumeContent() {
  return (
    <div className="space-y-8">
      {/* Download Button */}
      <AnimatedSection>
        <motion.a
          href="/resume.pdf"
          download
          className="btn-primary inline-flex"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-4 h-4" />
          Download Resume (PDF)
        </motion.a>
      </AnimatedSection>

      {/* Resume Card */}
      <AnimatedSection delay={0.1}>
        <div className="card-light p-8 lg:p-12 print:shadow-none print:border-none">
          {/* Header */}
          <div className="border-b border-border-light pb-8 mb-8">
            <h2 className="font-display text-3xl font-bold text-heading mb-2">
              Gwer Donatus
            </h2>
            <p className="text-lg text-accent font-medium mb-4">
              Backend Systems Engineer
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-body">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Nigeria
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                hello@gwerdonatus.dev
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Github className="w-4 h-4" />
                github.com/gwerdonatus
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/gwerdonatus
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold text-heading mb-3">
              Professional Summary
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Backend Systems Engineer with 5+ years of experience designing and
              building scalable infrastructure, SaaS platforms, and distributed
              systems. Proven track record of architecting financial transaction
              systems, revenue attribution platforms, and AI-powered applications.
              Passionate about reliability, performance, and clean architecture.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold text-heading mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-border-light pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-display text-base font-semibold text-heading">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-muted">{exp.period}</span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-body text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="text-sm text-body flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold text-heading mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">Languages</h4>
                <p className="text-sm text-body">Python, TypeScript, JavaScript, SQL, Go</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">Frameworks</h4>
                <p className="text-sm text-body">Django, FastAPI, Next.js, React, Flask</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">Databases</h4>
                <p className="text-sm text-body">PostgreSQL, Redis, MongoDB, Elasticsearch</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-body">AWS, Docker, Kubernetes, Terraform, CI/CD</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display text-lg font-semibold text-heading mb-4">
              Education
            </h3>
            <div className="border-l-2 border-border-light pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h4 className="font-display text-base font-semibold text-heading">
                  B.Sc. Computer Science
                </h4>
                <span className="text-xs text-muted">2016 - 2020</span>
              </div>
              <p className="text-sm text-accent font-medium">University of Jos</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
