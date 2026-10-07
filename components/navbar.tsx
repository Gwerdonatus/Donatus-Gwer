"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Fraunces } from "next/font/google";
import {
  Menu,
  X,
  Moon,
  Sun,
  Command,
  Github,
  Linkedin,
  Mail,
  Home,
  ArrowUpRight,
  Share2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
  variable: "--font-nav-display",
});

const headerSpring = { type: "spring" as const, stiffness: 200, damping: 28 };
const linkSpring = { type: "spring" as const, stiffness: 260, damping: 24 };

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Gwerdonatus", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/donatus-gwer", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:donatusgwer@gmail.com", icon: Mail, label: "Email" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showSocials, setShowSocials] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, 12]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillRect, setPillRect] = useState({ left: 0, width: 0, opacity: 0 });

  const activeIndex = navLinks.findIndex((link) => link.href === pathname);
  const targetIndex = hoveredIndex !== null ? hoveredIndex : Math.max(0, activeIndex);

  const measurePill = useCallback(() => {
    const link = linkRefs.current[targetIndex];
    const container = containerRef.current;
    if (!link || !container) return;

    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setPillRect({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, [targetIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(measurePill);
    return () => cancelAnimationFrame(raf);
  }, [measurePill]);

  useEffect(() => {
    const handleResize = () => measurePill();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measurePill]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ─── Desktop Navigation ─── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...headerSpring, delay: 0.1 }}
        className={cn(
          fraunces.variable,
          "fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center pt-5 pointer-events-none"
        )}
      >
        <motion.div
          style={{ y: navY, scale: navScale }}
          className="pointer-events-auto relative flex items-center bg-white/90 backdrop-blur-2xl rounded-full pl-1.5 pr-1.5 py-1.5 shadow-[0_8px_40px_-12px_rgba(26,10,46,0.16)] border border-[#1a0a2e]/[0.05]"
        >
          {/* Links + Measured Pill */}
          <div
            ref={containerRef}
            className="relative flex items-center"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="absolute top-[6px] bottom-[6px] rounded-full bg-dark-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)]"
              initial={false}
              animate={{
                left: pillRect.left,
                width: pillRect.width,
                opacity: pillRect.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
            />

            {navLinks.map((link, index) => {
              const isHome = link.href === "/";
              const Icon = link.icon;
              const isTarget = index === targetIndex;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  className={cn(
                    "relative z-10 px-3.5 xl:px-4 py-2.5 text-[12px] xl:text-[13px] font-medium tracking-wide rounded-full outline-none transition-colors duration-200 whitespace-nowrap",
                    isTarget
                      ? "text-white font-semibold"
                      : "text-[#1a0a2e]/50 hover:text-[#1a0a2e]"
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...linkSpring, delay: 0.15 + index * 0.04 }}
                    className="flex items-center justify-center gap-1.5"
                  >
                    {isHome && isTarget && Icon ? (
                      <motion.span
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="w-[15px] h-[15px]" strokeWidth={2.5} />
                      </motion.span>
                    ) : isHome && Icon ? (
                      <Icon className="w-[15px] h-[15px]" strokeWidth={2} />
                    ) : (
                      link.label
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          <div className="w-px h-5 bg-[#1a0a2e]/8 mx-2 shrink-0" />

          {/* Actions */}
          <div className="flex items-center gap-0.5 pr-0.5 shrink-0">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              whileTap={{ scale: 0.88 }}
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full text-[#1a0a2e]/45 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.05] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2, ease: "backOut" }}
                  >
                    <Sun className="w-[15px] h-[15px]" strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2, ease: "backOut" }}
                  >
                    <Moon className="w-[15px] h-[15px]" strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              whileTap={{ scale: 0.88 }}
              className="p-2.5 rounded-full text-[#1a0a2e]/45 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.05] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15"
              aria-label="Command menu"
            >
              <Command className="w-[15px] h-[15px]" strokeWidth={2} />
            </motion.button>

            <div
              className="relative"
              onMouseEnter={() => setShowSocials(true)}
              onMouseLeave={() => setShowSocials(false)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.35 }}
                whileTap={{ scale: 0.88 }}
                className={cn(
                  "p-2.5 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15",
                  showSocials
                    ? "text-[#1a0a2e] bg-[#1a0a2e]/[0.06]"
                    : "text-[#1a0a2e]/45 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.05]"
                )}
                aria-label="Social links"
              >
                <Share2 className="w-[15px] h-[15px]" strokeWidth={2} />
              </motion.button>

              <AnimatePresence>
                {showSocials && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 6, scale: 0.96, filter: "blur(4px)" }}
                    transition={linkSpring}
                    className="absolute top-full right-0 mt-2.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_12px_40px_-12px_rgba(26,10,46,0.18)] border border-[#1a0a2e]/[0.05] p-1.5 flex flex-col gap-0.5 min-w-[148px] overflow-hidden"
                  >
                    {socialLinks.map((social, i) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={social.href}
                          target={
                            social.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#1a0a2e]/65 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.04] transition-all duration-200 text-[13px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15"
                          aria-label={social.label}
                        >
                          <social.icon className="w-4 h-4" strokeWidth={2} />
                          <span>{social.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ─── Mobile Navigation ─── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...headerSpring, delay: 0.05 }}
        className={cn(fraunces.variable, "fixed top-0 left-0 right-0 z-50 lg:hidden")}
      >
        <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-3 rounded-full bg-white/90 backdrop-blur-2xl border border-[#1a0a2e]/[0.06] shadow-[0_8px_32px_-12px_rgba(26,10,46,0.12)] text-[#1a0a2e]/45 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.05] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15 active:scale-90"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "backOut" }}
                >
                  <X className="w-[18px] h-[18px]" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "backOut" }}
                >
                  <Menu className="w-[18px] h-[18px]" strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#1a0a2e]/12 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(6px)" }}
              transition={linkSpring}
              className={cn(
                fraunces.variable,
                "absolute top-20 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_24px_64px_-16px_rgba(26,10,46,0.28)] border border-[#1a0a2e]/[0.05] p-5 overflow-hidden"
              )}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1a0a2e]/[0.02] rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-1 relative">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  const isHome = link.href === "/";
                  const Icon = link.icon;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ ...linkSpring, delay: i * 0.035 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15",
                          isActive
                            ? "bg-dark-card text-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]"
                            : "text-[#1a0a2e]/60 hover:bg-[#1a0a2e]/[0.04] hover:text-[#1a0a2e]"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          {isHome && Icon && (
                            <Icon
                              className={cn(
                                "w-4 h-4",
                                isActive && "animate-pulse"
                              )}
                              strokeWidth={2.5}
                            />
                          )}
                          {link.label}
                        </span>
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-5 pt-5 border-t border-[#1a0a2e]/[0.07] flex items-center justify-between"
              >
                <div className="flex items-center gap-0.5">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      className="p-2.5 rounded-xl text-[#1a0a2e]/40 hover:text-[#1a0a2e] hover:bg-[#1a0a2e]/[0.04] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#1a0a2e]/15 active:scale-90"
                      aria-label={social.label}
                    >
                      <social.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                    </Link>
                  ))}
                </div>
                <span className="text-[11px] text-[#1a0a2e]/25 font-semibold tracking-wider uppercase">
                  © 2026
                </span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
