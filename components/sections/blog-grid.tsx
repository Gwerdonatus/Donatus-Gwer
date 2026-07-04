"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, FileText } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types";

// ─── Brand colors ───
const brandColors = [
  { bg: "#9DBE95", text: "#1a1a1a" },
  { bg: "#9FB8C4", text: "#1a1a1a" },
  { bg: "#C99271", text: "#1a1a1a" },
  { bg: "#D4B36A", text: "#1a1a1a" },
  { bg: "#D6A8A3", text: "#1a1a1a" },
  { bg: "#B49AAE", text: "#1a1a1a" },
  { bg: "#7FA39B", text: "#1a1a1a" },
  { bg: "#B97A5D", text: "#f5f5f5" },
  { bg: "#A9A66C", text: "#1a1a1a" },
  { bg: "#D8C7A1", text: "#1a1a1a" },
  { bg: "#C97B6D", text: "#1a1a1a" },
  { bg: "#A7A8C9", text: "#1a1a1a" },
  { bg: "#7FA37A", text: "#1a1a1a" },
];

// ─── Deterministic scatter (SSR-safe) ───
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function generateScatterPositions(count: number, viewportWidth: number) {
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  // Row density patterns: minimum 3 on desktop, 2 on tablet, 2 on mobile
  const rowPattern = isMobile
    ? [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    : isTablet
      ? [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]
      : [3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3];

  const cardHeight = isMobile ? 160 : 200;
  const rowHeight = isMobile ? 125 : 150; // tighter than card height for overlap

  const positions = [];
  let currentY = 0;
  let rowIndex = 0;
  let indexInRow = 0;

  for (let i = 0; i < count; i++) {
    const cardsThisRow = rowPattern[rowIndex % rowPattern.length];

    if (indexInRow >= cardsThisRow) {
      indexInRow = 0;
      rowIndex++;
      currentY += rowHeight;
    }

    const slotWidth = 100 / cardsThisRow;
    const baseLeft = indexInRow * slotWidth + slotWidth / 2;

    // Card width adapts to column count
    const cardWidth = isMobile ? 46 : isTablet ? 45 : cardsThisRow === 4 ? 23 : 30;

    // Organic scatter within each slot
    const left = baseLeft - cardWidth / 2 + (seededRandom(i * 3 + 1) - 0.5) * 10;
    const top = currentY + (seededRandom(i * 7 + 2) - 0.5) * 35;
    const rotate = (seededRandom(i * 11 + 3) - 0.5) * (isMobile ? 8 : 14);
    const z = Math.floor(seededRandom(i * 13 + 4) * 5) + 1;

    positions.push({
      left: `${Math.max(0, Math.min(100 - cardWidth, left))}%`,
      top: `${Math.max(0, top)}px`,
      rotate,
      z,
      width: `${cardWidth}vw`,
      height: `${cardHeight}px`,
    });

    indexInRow++;
  }

  const totalHeight = currentY + cardHeight + 40;
  return { positions, totalHeight };
}

// ─── Card Component ───
function BlogCard({
  post,
  index,
  color,
  scatter,
  isHovered,
  isFocused,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  post: BlogPost;
  index: number;
  color: (typeof brandColors)[0];
  scatter: ReturnType<typeof generateScatterPositions>["positions"][number];
  isHovered: boolean;
  isFocused: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}) {
  const idx = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, rotate: scatter.rotate + (index % 2 === 0 ? -18 : 18), scale: 0.6, y: 50 }}
      animate={{
        opacity: 1,
        rotate: scatter.rotate,
        scale: 1,
        y: 0,
        transition: {
          delay: Math.min(index * 0.035, 0.6),
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      exit={{ opacity: 0, scale: 0.85, y: -20, transition: { duration: 0.3 } }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      className="absolute cursor-pointer"
      style={{
        width: scatter.width,
        height: scatter.height,
        left: scatter.left,
        top: scatter.top,
        zIndex: isFocused ? 100 : isHovered ? 50 : scatter.z,
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full"
        onClick={(e) => {
          if (!isFocused) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <motion.div
          className="h-full rounded-2xl overflow-hidden relative"
          animate={{
            scale: isFocused ? 1.14 : isHovered ? 1.06 : 1,
            rotate: isFocused ? 0 : isHovered ? scatter.rotate * 0.3 : scatter.rotate,
            zIndex: isFocused ? 100 : isHovered ? 50 : scatter.z,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          style={{
            background: color.bg,
            boxShadow: isFocused
              ? `0 50px 100px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.1)`
              : isHovered
                ? `0 28px 56px -12px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.06)`
                : `0 10px 20px -8px rgba(0,0,0,0.18)`,
          }}
        >
          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative h-full p-5 flex flex-col justify-between">
            {/* Top */}
            <div className="flex items-start justify-between gap-2">
              <span
                className="text-[9px] font-semibold tracking-[0.22em] uppercase leading-relaxed"
                style={{ color: color.text, opacity: 0.5, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {post.category}
              </span>
              <span className="text-[10px] font-medium tracking-wider shrink-0" style={{ color: color.text, opacity: 0.35 }}>
                {idx}
              </span>
            </div>

            {/* Title */}
            <div className="flex-1 flex items-center py-2">
              <h3
                className="text-[clamp(13px,1.3vw,17px)] font-medium leading-[1.35] tracking-[-0.01em]"
                style={{ color: color.text, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {post.title}
              </h3>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2" style={{ borderTop: `1px solid ${color.text}12` }}>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px]" style={{ color: color.text, opacity: 0.45 }}>
                  <Clock className="w-3 h-3" />
                  {post.readingTime}m
                </span>
                <span className="text-[10px]" style={{ color: color.text, opacity: 0.35 }}>
                  {formatDate(post.date)}
                </span>
              </div>
              <motion.div
                className="w-6 h-6 rounded-full border flex items-center justify-center"
                animate={{
                  borderColor: isFocused ? `${color.text}50` : `${color.text}20`,
                  opacity: isFocused ? 1 : 0.5,
                  rotate: isFocused ? -45 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ color: color.text }}
              >
                <ArrowUpRight className="w-3 h-3" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [focusedSlug, setFocusedSlug] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((p: BlogPost) => p.category === activeCategory),
    [activeCategory]
  );

  const { positions, totalHeight } = useMemo(
    () => generateScatterPositions(filtered.length, viewportWidth),
    [filtered.length, viewportWidth]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocusedSlug(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCardClick = (slug: string) => {
    setFocusedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="relative py-20 min-h-screen" style={{ background: "#f0f2ec" }}>
      {/* ─── Hero ─── */}
      <div className="max-w-4xl mx-auto px-6 mb-16 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start gap-4 mb-8"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <FileText className="w-7 h-7 mt-4" style={{ color: "#2d4a3e" }} />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(48px,10vw,120px)] font-light leading-[0.9] tracking-[-0.03em] italic"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                color: "#2d4a3e",
              }}
            >
              Field Notes
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-[15px] leading-[1.7] max-w-xl pl-11"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#6a7a6a",
          }}
        >
          Engineering process, system design decisions, and the occasional deep dive into things that break in production.
        </motion.p>
      </div>

      {/* ─── Filter + Cards ─── */}
      <div className="relative px-4 sm:px-6">
        <div
          ref={containerRef}
          className="relative mx-auto"
          style={{ maxWidth: 1200, minHeight: totalHeight }}
        >
          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-10 flex justify-center"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setFocusedSlug(null);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all duration-500",
                    activeCategory === cat
                      ? "text-[#1a1a1a] bg-white/80 shadow-sm"
                      : "text-[#8a9a8a] hover:text-[#5a6a5a]"
                  )}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Scattered Cards — ALL of them */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full"
              style={{ height: totalHeight }}
            >
              {filtered.map((post: BlogPost, index: number) => {
                const color = brandColors[index % brandColors.length];
                const scatter = positions[index];
                const isHovered = hoveredSlug === post.slug;
                const isFocused = focusedSlug === post.slug;

                if (!scatter) return null;

                return (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={index}
                    color={color}
                    scatter={scatter}
                    isHovered={isHovered}
                    isFocused={isFocused}
                    onHoverStart={() => setHoveredSlug(post.slug)}
                    onHoverEnd={() => setHoveredSlug(null)}
                    onClick={() => handleCardClick(post.slug)}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}