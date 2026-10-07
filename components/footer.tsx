"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

const spring = { type: "spring" as const, stiffness: 260, damping: 24 };
const softSpring = { type: "spring" as const, stiffness: 180, damping: 28 };

function AsteriskMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 8 C65 25, 60 45, 60 65 C60 65, 40 60, 15 55"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 8 C75 25, 80 45, 80 65 C80 65, 100 60, 125 55"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 132 C65 115, 60 95, 60 75 C60 75, 40 80, 15 85"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 132 C75 115, 80 95, 80 75 C80 75, 100 80, 125 85"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...softSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const quickLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Gwerdonatus", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/donatus-gwer", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/gwerthedev/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/donatus_gwer", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590181777793&sk=directory_links", label: "Facebook" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 sm:mt-28 lg:mt-32">
      {/* Floating mark — slow continuous spin via CSS */}
      <div className="relative z-10 flex justify-center -mb-8 sm:-mb-10 lg:-mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#BFE6B0] drop-shadow-lg"
        >
          <div className="animate-spin-slow w-full h-full">
            <AsteriskMark className="w-full h-full" />
          </div>
        </motion.div>
      </div>

      {/* Dark green rounded footer body */}
      <div className="relative bg-[#0E2A1C] rounded-t-[1.5rem] sm:rounded-t-[2rem] lg:rounded-t-[2.5rem] overflow-hidden">
        {/* Slow drifting topographic waves via CSS */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden">
          <div className="animate-drift-slow absolute inset-0">
            <svg className="w-[200%] h-full" viewBox="0 0 1600 400" preserveAspectRatio="none">
              <path
                d="M-50 100 Q100 80 200 120 T400 100 T600 130 T800 110 T1000 140 T1200 100 T1400 120 T1650 90"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M-50 150 Q150 130 250 170 T450 140 T650 160 T850 130 T1050 150 T1250 170 T1450 140 T1650 160"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M-50 200 Q120 180 220 220 T420 190 T620 210 T820 180 T1020 200 T1220 220 T1420 190 T1650 210"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M-50 250 Q80 230 180 270 T380 240 T580 260 T780 230 T980 250 T1180 270 T1380 240 T1650 260"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M-50 300 Q130 280 230 320 T430 290 T630 310 T830 280 T1030 300 T1230 320 T1430 290 T1650 310"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M-50 350 Q90 330 190 370 T390 340 T590 360 T790 330 T990 350 T1190 370 T1390 340 T1650 360"
                stroke="#BFE6B0"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 pt-12 sm:pt-14 lg:pt-18 pb-6 sm:pb-8">
          {/* Centered name + tagline + DESKTOP social icons next to name */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="flex items-center justify-center gap-3 sm:gap-4"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BFE6B0] tracking-tight leading-none">
                Gwer <span className="font-serif italic font-normal text-[#9FC195]">Donatus</span>
              </h2>

              {/* Desktop social icons — NEXT to the name, only on lg+ */}
              <div className="hidden lg:flex items-center gap-1.5 ml-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={spring}
                    className="w-8 h-8 rounded-lg bg-[#BFE6B0]/10 border border-[#BFE6B0]/15 flex items-center justify-center text-[#BFE6B0]/60 hover:text-[#BFE6B0] hover:bg-[#BFE6B0]/20 hover:border-[#BFE6B0]/30 transition-colors duration-300"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              className="text-xs sm:text-sm text-[#9FC195]/60 font-light tracking-wide mt-1.5"
            >
              Backend & AI Engineering
            </motion.p>
          </div>

          {/* Three-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 mb-10 sm:mb-12 lg:mb-14">
            {/* Left: Contact */}
            <ScrollReveal delay={0.1}>
              <div className="text-center sm:text-left">
                <h3 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9FC195]/40 mb-4 sm:mb-5">
                  Contact
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#9FC195]/55">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-[#9FC195]/30" />
                    <span>Remote — Available Worldwide</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#9FC195]/55">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-[#9FC195]/30" />
                    <a
                      href="mailto:donatusgwer@gmail.com"
                      className="hover:text-[#BFE6B0] transition-colors duration-300"
                    >
                      donatusgwer@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social links — text on mobile/tablet, hidden on desktop (icons replace them) */}
                <div className="mt-5 sm:mt-6 space-y-1.5 sm:space-y-2 lg:hidden">
                  {[
                    { label: "GitHub", href: "https://github.com/Gwerdonatus" },
                    { label: "LinkedIn", href: "https://linkedin.com/in/donatus-gwer" },
                    { label: "Instagram", href: "https://www.instagram.com/gwerthedev/" },
                    { label: "X / Twitter", href: "https://x.com/donatus_gwer" },
                    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590181777793&sk=directory_links" },
                  ].map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      transition={spring}
                      className="group flex items-center justify-center sm:justify-start gap-1 text-[11px] sm:text-xs text-[#9FC195]/40 hover:text-[#BFE6B0] transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Center: CTAs */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#BFE6B0] text-[#0E2A1C] text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  View Projects
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#BFE6B0]/10 border border-[#BFE6B0]/20 text-[#BFE6B0] text-xs sm:text-sm font-medium hover:bg-[#BFE6B0]/15 transition-colors duration-300"
                >
                  Get in Touch
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Right: Quick Links */}
            <ScrollReveal delay={0.2}>
              <div className="text-center sm:text-right">
                <h3 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9FC195]/40 mb-4 sm:mb-5">
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center justify-center sm:justify-end gap-1 text-xs sm:text-sm text-[#9FC195]/50 hover:text-[#BFE6B0] transition-colors duration-300"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#BFE6B0] group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-5 sm:pt-6 border-t border-[#9FC195]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="text-[10px] sm:text-[11px] text-[#9FC195]/25 hover:text-[#9FC195]/40 transition-colors cursor-pointer">
                Privacy
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#9FC195]/25 hover:text-[#9FC195]/40 transition-colors cursor-pointer">
                Cookies
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#9FC195]/25">
                &copy; {currentYear}
              </span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#9FC195]/25 hover:text-[#BFE6B0] transition-colors duration-300"
            >
              <ArrowUp className="w-3 h-3" />
              Back to top
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
