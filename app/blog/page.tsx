// app/blog/page.tsx
import { Metadata } from "next";
import { BlogGrid } from "@/components/sections/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on backend engineering, distributed systems, AI, and software architecture.",
};

export default function BlogPage() {
  return (
    <section className="bg-[#faf8f5] min-h-screen">
      <BlogGrid />
    </section>
  );
}