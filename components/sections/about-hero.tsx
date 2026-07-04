"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/animated-section";

export function AboutHero() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="label mb-6 block">About Me</span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="heading-lg text-heading mb-8">
            I build systems that{" "}
            <span className="relative">
              power businesses
              <motion.span
                className="absolute -bottom-2 left-0 h-[6px] bg-accent/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6 body-lg">
            <p>
              I&apos;m Gwer Donatus, a Backend Systems Engineer based in Nigeria.
              I specialize in designing and building the infrastructure that
              powers modern software — from distributed systems and payment
              processing to AI-powered applications.
            </p>
            <p>
              My journey into software engineering started with a fascination for
              how things work under the hood. While many developers focus on what
              users see, I&apos;ve always been drawn to the architecture, the data
              flows, and the systems that make everything possible.
            </p>
            <p>
              Over the years, I&apos;ve built revenue attribution platforms,
              financial transaction infrastructure, cooperative marketplaces, and
              e-commerce systems. Each project has taught me something new about
              scalability, reliability, and the art of writing code that stands the
              test of time.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
