import { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey — from software developer to lead backend engineer building systems at scale.",
};

export default function ExperiencePage() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="label mb-3 block">Career</span>
          <h1 className="heading-lg text-heading mb-6">Experience</h1>
          <p className="body-lg">
            A timeline of my professional growth — from building my first
            production API to leading backend teams and architecting systems
            that process millions of transactions.
          </p>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
