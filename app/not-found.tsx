"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="w-24 h-24 rounded-full bg-light-card flex items-center justify-center mx-auto mb-8">
          <span className="font-display text-4xl font-bold text-heading">404</span>
        </div>
        <h1 className="heading-md text-heading mb-4">Page Not Found</h1>
        <p className="body-md mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline">
            <ArrowLeft className="w-4 h-4" />
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
