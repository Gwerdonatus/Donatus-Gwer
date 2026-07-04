import { Metadata } from "next";
import { SpeakingGrid } from "@/components/sections/speaking-grid";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks, podcasts, and workshops on backend engineering, distributed systems, and AI.",
};

export default function SpeakingPage() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="label mb-3 block">Sharing Knowledge</span>
          <h1 className="heading-lg text-heading mb-6">Speaking</h1>
          <p className="body-lg">
            I enjoy sharing what I&apos;ve learned through talks, podcasts, and
            workshops. If you&apos;d like me to speak at your event, feel free to
            reach out.
          </p>
        </div>
        <SpeakingGrid />
      </div>
    </section>
  );
}
