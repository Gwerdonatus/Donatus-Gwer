"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Tag, Copy, Check } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "@/types";
import { AnimatedSection } from "@/components/motion/animated-section";
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/lib/data";

interface BlogPostDetailProps {
  post: BlogPost;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = blogPosts
    .filter((p: BlogPost) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const renderContent = (content: string) => {
    if (!content || content.trim() === "") {
      return (
        <div className="prose prose-lg max-w-none">
          <p className="text-body leading-relaxed">
            This article is being prepared. Check back soon for the full content.
          </p>
        </div>
      );
    }

    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = "";

    lines.forEach((line, i) => {
      if (line.trim().startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeContent = "";
        } else {
          inCodeBlock = false;
          elements.push(
            <pre
              key={`code-${i}`}
              className="bg-dark-card text-text-on-dark p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono leading-relaxed"
            >
              <code>{codeContent.trim()}</code>
            </pre>
          );
          codeContent = "";
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="font-display text-3xl font-semibold text-heading mt-12 mb-6">
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-display text-2xl font-semibold text-heading mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-display text-xl font-semibold text-heading mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="font-semibold text-heading mt-6 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="text-body ml-4 mb-1">
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-2" />);
      } else if (line.trim().startsWith("|")) {
        if (line.includes("---")) return;
        elements.push(
          <div key={i} className="text-body text-sm my-1 font-mono">
            {line}
          </div>
        );
      } else {
        const formatted = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")
          .replace(/`([^`]+)`/g, '<code class="text-accent bg-light-card px-1 rounded">$1</code>');

        elements.push(
          <p
            key={i}
            className="text-body leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    });

    return <div className="prose prose-lg max-w-none">{elements}</div>;
  };

  return (
    <div className="section-padding pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span className="label">{post.category}</span>
            <span className="text-xs text-muted">{formatDate(post.date)}</span>
          </div>
          <h1 className="heading-md text-heading mb-6">{post.title}</h1>
          <p className="body-lg mb-8">{post.description}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border-light mb-12">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
              <div className="flex items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-light-card text-body"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {renderContent(post.content)}
        </AnimatedSection>

        {relatedPosts.length > 0 && (
          <AnimatedSection delay={0.3} className="mt-16 pt-8 border-t border-border-light">
            <h3 className="font-display text-lg font-semibold text-heading mb-6">
              Related Articles
            </h3>
            <div className="space-y-4">
              {relatedPosts.map((related: BlogPost) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block card-light p-5 hover:bg-light-card-hover transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label">{related.category}</span>
                    <span className="text-xs text-muted">
                      {formatDate(related.date)}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-semibold text-heading group-hover:text-accent transition-colors">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}