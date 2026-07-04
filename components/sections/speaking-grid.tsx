"use client";

import { motion } from "framer-motion";
import { Mic, Podcast, Users, ExternalLink, Calendar } from "lucide-react";
import { speakingEvents } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated-section";
import { formatDate } from "@/lib/utils";

const typeIcons = {
  talk: Mic,
  podcast: Podcast,
  workshop: Users,
};

const typeLabels = {
  talk: "Talk",
  podcast: "Podcast",
  workshop: "Workshop",
};

export function SpeakingGrid() {
  return (
    <StaggerContainer className="space-y-6">
      {speakingEvents.map((event) => {
        const Icon = typeIcons[event.type];
        return (
          <StaggerItem key={event.id}>
            <motion.div
              className="card-light p-6 lg:p-8"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  {/* Type & Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-content-bg text-body">
                      <Icon className="w-3.5 h-3.5" />
                      {typeLabels[event.type]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(event.date)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-heading mb-2">
                    {event.title}
                  </h3>

                  {/* Event */}
                  <p className="text-sm text-accent font-medium mb-3">
                    {event.event}
                  </p>

                  {/* Description */}
                  <p className="text-body text-sm leading-relaxed mb-4 max-w-2xl">
                    {event.description}
                  </p>
                </div>

                {/* Link */}
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-light-card text-body hover:text-heading hover:bg-light-card-hover transition-all text-sm font-medium shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch
                  </a>
                )}
              </div>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
