"use client";

import { AnimatedSection } from "@/components/motion/animated-section";
import { experiences } from "@/lib/data";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    institution: "University of Jos",
    period: "2016 - 2020",
    description:
      "Focused on algorithms, data structures, distributed systems, and software engineering principles.",
  },
];

const certifications = [
  {
    icon: Award,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    period: "2023",
  },
  {
    icon: Award,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    period: "2022",
  },
];

export function Timeline() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-content-bg-light/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-16">
          <span className="label mb-3 block">Journey</span>
          <h2 className="heading-md text-heading mb-4">Experience & Education</h2>
          <p className="body-md max-w-2xl">
            A timeline of my professional growth, from university to leading backend teams.
          </p>
        </AnimatedSection>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="font-display text-lg font-semibold text-heading mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-accent" />
            Work Experience
          </h3>
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-light" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.id} delay={index * 0.1}>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-light-card border border-border-light flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                    <div className="card-light p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h4 className="font-display text-lg font-semibold text-heading">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-muted font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-accent font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-body text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-content-bg text-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-display text-lg font-semibold text-heading mb-8 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <AnimatedSection key={edu.title}>
                <div className="card-light p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="font-display text-lg font-semibold text-heading">
                      {edu.title}
                    </h4>
                    <span className="text-sm text-muted font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-body text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-lg font-semibold text-heading mb-8 flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <AnimatedSection key={cert.title}>
                <div className="card-light p-5">
                  <h4 className="font-display text-base font-semibold text-heading mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-body">{cert.issuer}</p>
                  <span className="text-xs text-muted mt-2 block">{cert.period}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
