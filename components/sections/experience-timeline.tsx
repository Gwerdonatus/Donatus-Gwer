"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { AnimatedSection } from "@/components/motion/animated-section";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-light hidden md:block" />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.id} delay={index * 0.1}>
            <div className="relative md:pl-12">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-light-card border border-border-light items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>

              <motion.div
                className="card-light p-6 lg:p-8"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-heading">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted font-medium px-3 py-1 rounded-full bg-content-bg w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-body text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-heading mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-body leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-content-bg text-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
