import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Timeline } from "@/components/sections/timeline";
import { TechStack } from "@/components/sections/tech-stack";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gwer Donatus — Backend Systems Engineer building AI-powered software that scales.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Philosophy />
      <Timeline />
      <TechStack />
    </>
  );
}
