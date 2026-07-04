"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  User,
  FolderOpen,
  BookOpen,
  Video,
  Briefcase,
  Mic,
  FileText,
  Mail,
  Github,
  Linkedin,
  Moon,
  Sun,
  Download,
} from "lucide-react";
import { useTheme } from "next-themes";

const navigationItems = [
  { icon: Home, label: "Home", href: "/", shortcut: "H" },
  { icon: User, label: "About", href: "/about", shortcut: "A" },
  { icon: FolderOpen, label: "Projects", href: "/projects", shortcut: "P" },
  { icon: BookOpen, label: "Blog", href: "/blog", shortcut: "B" },
  { icon: Video, label: "Videos", href: "/videos", shortcut: "V" },
  { icon: Briefcase, label: "Experience", href: "/experience", shortcut: "E" },
  { icon: Mic, label: "Speaking", href: "/speaking", shortcut: "S" },
  { icon: FileText, label: "Resume", href: "/resume", shortcut: "R" },
  { icon: Mail, label: "Contact", href: "/contact", shortcut: "C" },
];

const socialItems = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (cmd: () => void) => {
    setOpen(false);
    cmd();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => runCommand(() => router.push(item.href))}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
              {item.shortcut && (
                <span className="ml-auto text-xs text-muted">
                  {item.shortcut}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Social">
          {socialItems.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => runCommand(() => window.open(item.href, "_blank"))}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>Toggle Theme</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => window.open("/resume.pdf", "_blank"))
            }
          >
            <Download className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
