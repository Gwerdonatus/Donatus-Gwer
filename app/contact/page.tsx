// app/contact/page.tsx
import { Metadata } from "next";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Music2,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Donatus Gwer",
  description:
    "Get in touch with Donatus Gwer — Backend Systems Engineer. Open to projects, collaborations, and speaking opportunities.",
};

const keypadKeys = [
  {
    url: "https://github.com/Gwerdonatus",
    icon: Github,
    bg: "#e8e4df",
    side: "#b8b4af",
    iconColor: "#24292e",
  },
  {
    url: "https://www.linkedin.com/in/donatus-gwer-857610338",
    icon: Linkedin,
    bg: "#0a66c2",
    side: "#004182",
    iconColor: "#ffffff",
  },
  {
    url: "https://x.com/donatus_gwer",
    icon: Twitter,
    bg: "#e8e4df",
    side: "#b8b4af",
    iconColor: "#000000",
  },
  {
    url: "https://www.instagram.com/gwerthedev/",
    icon: Instagram,
    bg: "#E4405F",
    side: "#c13584",
    iconColor: "#ffffff",
  },
  {
    url: "https://www.youtube.com/@Gwerdonatus",
    icon: Youtube,
    bg: "#FF0000",
    side: "#cc0000",
    iconColor: "#ffffff",
  },
  {
    url: "https://www.tiktok.com/@gwerdonatus?is_from_webapp=1&sender_device=pc",
    icon: Music2,
    bg: "#000000",
    side: "#333333",
    iconColor: "#ffffff",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61590181777793&sk=directory_links",
    icon: Facebook,
    bg: "#1877F2",
    side: "#166fe5",
    iconColor: "#ffffff",
  },
  {
    url: "mailto:donatusgwer@gmail.com",
    icon: Mail,
    bg: "#e8e4df",
    side: "#b8b4af",
    iconColor: "#2d4a3e",
  },
  {
    url: "https://gwerdonatus.dev",
    icon: Globe,
    bg: "#e8e4df",
    side: "#b8b4af",
    iconColor: "#2d4a3e",
  },
];

const quickInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "donatusgwer@gmail.com",
    href: "mailto:donatusgwer@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abuja, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Response",
    value: "Usually within 24h",
    href: null,
  },
];

function KeyCap({
  social,
}: {
  social: (typeof keypadKeys)[0];
}) {
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative select-none"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div
        className="relative rounded-xl sm:rounded-2xl transition-transform duration-75 ease-out active:translate-y-[2px]"
        style={{
          background: social.bg,
          boxShadow: `
            1px 2px 0 ${social.side},
            2px 3px 0 ${social.side},
            3px 4px 0 ${social.side},
            4px 6px 12px rgba(0,0,0,0.15),
            inset 0 2px 4px rgba(255,255,255,0.4),
            inset 0 -1px 2px rgba(0,0,0,0.1)
          `,
        }}
      >
        <div
          className="absolute inset-[8%] rounded-lg sm:rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute top-[12%] left-[15%] w-[25%] h-[20%] rounded-full pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.6), transparent 70%)",
          }}
        />
        <div className="relative flex items-center justify-center py-4 sm:py-6">
          <Icon
            className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110"
            style={{ color: social.iconColor }}
            strokeWidth={1.6}
          />
        </div>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#f0f2ec]">
      {/* Top hint */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4 text-center sm:text-left">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#8a9a8a]">
          Get in Touch
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Hero */}
            <div className="mt-4 sm:mt-8 lg:mt-16">
              <h1
                className="text-[clamp(56px,18vw,140px)] font-bold leading-[0.85] tracking-[-0.04em] text-[#2d4a3e]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
              >
                just
              </h1>
              <h1
                className="text-[clamp(56px,18vw,140px)] font-bold leading-[0.85] tracking-[-0.04em] text-[#2d4a3e]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
              >
                send it.
              </h1>
              <div className="w-2 h-2 rounded-full bg-[#7a9a7a] mt-4 sm:mt-6 mx-auto sm:mx-0 sm:ml-1" />
            </div>

            <p className="mt-8 sm:mt-10 text-[14px] sm:text-[16px] leading-[1.7] text-[#6a7a6a] max-w-md">
              I&apos;m always interested in hearing about new projects,
              opportunities, and collaborations. Whether you need backend
              architecture, API design, or full-stack development — let&apos;s
              talk.
            </p>

            {/* Quick Info */}
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              {quickInfo.map((item) => (
                <div key={item.label} className="flex items-center justify-center sm:justify-start gap-3">
                  <item.icon className="w-4 h-4 text-[#8a9a8a]" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[13px] text-[#5a6a5a] hover:text-[#2d4a3e] transition-colors underline underline-offset-4 decoration-[#2d4a3e]/20 hover:decoration-[#2d4a3e]/50"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[13px] text-[#5a6a5a]">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* ─── Keyboard Keypad — CENTERED ─── */}
            <div className="mt-10 sm:mt-12 w-full flex flex-col items-center sm:items-start">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8a9a8a] mb-4 sm:mb-5">
                Press a key
              </p>

              {/* Keyboard base plate — centered on mobile */}
              <div
                className="inline-block p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl mx-auto sm:mx-0"
                style={{
                  background: "linear-gradient(145deg, #d5d2cd, #c8c5c0)",
                  boxShadow: `
                    0 16px 32px rgba(0,0,0,0.12),
                    0 4px 8px rgba(0,0,0,0.08),
                    inset 0 1px 2px rgba(255,255,255,0.5),
                    inset 0 -1px 2px rgba(0,0,0,0.05)
                  `,
                }}
              >
                <div
                  className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl"
                  style={{
                    background: "linear-gradient(145deg, #b5b2ad, #a8a5a0)",
                    boxShadow: `
                      inset 2px 2px 6px rgba(0,0,0,0.15),
                      inset -1px -1px 4px rgba(255,255,255,0.2)
                    `,
                  }}
                >
                  {/* 3×3 Keypad — tight gap, responsive width */}
                  <div className="grid grid-cols-3 gap-[2px] sm:gap-1 w-[200px] sm:w-[260px]">
                    {keypadKeys.map((social, i) => (
                      <KeyCap key={i} social={social} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:pt-8">
            <div className="bg-white rounded-2xl border border-[#2d4a3e]/[0.06] p-5 sm:p-8 lg:p-10 shadow-xl shadow-[#2d4a3e]/[0.03] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7a9a7a]/[0.03] rounded-bl-full" />

              <div className="mb-6 sm:mb-8 relative">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-[#7a9a7a]" />
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8a9a8a]">
                    New Message
                  </span>
                </div>
                <h2 className="text-[18px] sm:text-[24px] font-semibold text-[#2d4a3e] tracking-[-0.02em]">
                  What&apos;s on your mind?
                </h2>
              </div>

              <form className="space-y-4 sm:space-y-5 relative" action="#" method="POST">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-[#6a7a6a] mb-1.5 sm:mb-2 tracking-wide uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#f6f7f4] border border-[#2d4a3e]/[0.08] rounded-xl px-4 py-3 text-[14px] text-[#2d4a3e] placeholder-[#8a9a8a]/50 focus:outline-none focus:border-[#7a9a7a] focus:bg-white focus:shadow-sm focus:shadow-[#7a9a7a]/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-[#6a7a6a] mb-1.5 sm:mb-2 tracking-wide uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#f6f7f4] border border-[#2d4a3e]/[0.08] rounded-xl px-4 py-3 text-[14px] text-[#2d4a3e] placeholder-[#8a9a8a]/50 focus:outline-none focus:border-[#7a9a7a] focus:bg-white focus:shadow-sm focus:shadow-[#7a9a7a]/10 transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-[#6a7a6a] mb-1.5 sm:mb-2 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#f6f7f4] border border-[#2d4a3e]/[0.08] rounded-xl px-4 py-3 text-[14px] text-[#2d4a3e] placeholder-[#8a9a8a]/50 focus:outline-none focus:border-[#7a9a7a] focus:bg-white focus:shadow-sm focus:shadow-[#7a9a7a]/10 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-[#6a7a6a] mb-1.5 sm:mb-2 tracking-wide uppercase">
                    Tell me about your project
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#f6f7f4] border border-[#2d4a3e]/[0.08] rounded-xl px-4 py-3 text-[14px] text-[#2d4a3e] placeholder-[#8a9a8a]/50 focus:outline-none focus:border-[#7a9a7a] focus:bg-white focus:shadow-sm focus:shadow-[#7a9a7a]/10 transition-all resize-none"
                    placeholder="I'm looking for a backend engineer to help with..."
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-0.5 w-4 h-4 rounded border-[#2d4a3e]/20 bg-[#f6f7f4] text-[#2d4a3e] focus:ring-[#7a9a7a]/30"
                  />
                  <label htmlFor="privacy" className="text-[10px] sm:text-[11px] text-[#8a9a8a] leading-relaxed">
                    I hereby accept that my data will be used to respond to this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 rounded-full bg-[#2d4a3e] text-white text-[13px] font-semibold hover:bg-[#1f362c] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#2d4a3e]/20 active:translate-y-[2px] active:shadow-md"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#2d4a3e]/[0.06] relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <a
                    href="mailto:donatusgwer@gmail.com"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.06] hover:bg-[#2d4a3e] hover:border-[#2d4a3e] transition-all group"
                  >
                    <Mail className="w-4 h-4 text-[#8a9a8a] group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-[10px] text-[#8a9a8a] group-hover:text-white/60 transition-colors">Prefer email?</div>
                      <div className="text-[11px] sm:text-[12px] text-[#2d4a3e] group-hover:text-white transition-colors font-medium">
                        donatusgwer@gmail.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f7f4] border border-[#2d4a3e]/[0.06]">
                    <Clock className="w-4 h-4 text-[#8a9a8a]" />
                    <div>
                      <div className="text-[10px] text-[#8a9a8a]">Availability</div>
                      <div className="text-[11px] sm:text-[12px] text-[#2d4a3e] font-medium">
                        Open to remote & relocation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="border-t border-[#2d4a3e]/[0.08] py-5 sm:py-6 overflow-hidden bg-white/50">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-8 text-[10px] sm:text-[11px] text-[#8a9a8a] font-medium tracking-wide">
              <span>Backend Engineering</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>API Design</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>Payment Systems</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>Distributed Architecture</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>AI-Augmented Development</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>Fintech</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
              <span>Observability</span>
              <span className="w-1 h-1 rounded-full bg-[#8a9a8a]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}