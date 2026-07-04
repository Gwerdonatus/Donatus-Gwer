import { Metadata } from "next";
import { VideosGrid } from "@/components/sections/videos-grid";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Technical videos on backend engineering, Python, AI, architecture, and system design.",
};

export default function VideosPage() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="label mb-3 block">Content</span>
          <h1 className="heading-lg text-heading mb-6">Videos</h1>
          <p className="body-lg">
            Technical deep dives, tutorials, and talks on backend engineering,
            distributed systems, AI, and software architecture.
          </p>
        </div>
        <VideosGrid />
      </div>
    </section>
  );
}
