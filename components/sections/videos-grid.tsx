"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { videos } from "@/lib/data";
import { AnimatedSection } from "@/components/motion/animated-section";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Backend Engineering",
  "Python",
  "AI",
  "Architecture",
  "System Design",
  "Career",
];

export function VideosGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Filter Tabs */}
      <AnimatedSection className="mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-dark-btn text-light-btn"
                  : "bg-light-card text-body hover:bg-light-card-hover hover:text-heading"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Videos Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="group cursor-pointer">
                <article className="card-light overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-dark-card overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-text-on-dark ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-dark-card/80 text-text-on-dark text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="label mb-2 block">{video.category}</span>
                    <h3 className="font-display text-base font-semibold text-heading mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(video.date)}
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
