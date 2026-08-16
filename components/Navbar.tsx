"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CLINIC, TEL_HREF } from "@/lib/clinic";

const NAV_LINKS = [
  { href: "#why-melur", label: "Why Melur" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#timings", label: "Timings" },
  { href: "#location", label: "Location" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="#home" className="group flex min-w-0 flex-col">
          <span
            className={`font-display text-lg font-semibold tracking-tight transition sm:text-xl ${
              solid ? "text-blue-950" : "text-white"
            }`}
          >
            {CLINIC.name}
          </span>
          <span
            className={`text-xs font-medium tracking-wide sm:text-sm ${
              solid ? "text-teal-700" : "text-teal-100/90"
            }`}
          >
            Famous in Melur · Patients prefer us
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                solid
                  ? "text-slate-600 hover:text-blue-950"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TEL_HREF}
            className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition sm:px-4 ${
              solid
                ? "bg-blue-950 text-white hover:bg-slate-900"
                : "bg-white text-blue-950 hover:bg-teal-50"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Call Clinic</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden ${
              solid
                ? "border border-slate-200 bg-white text-slate-700"
                : "bg-white/15 text-white ring-1 ring-white/25"
            }`}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
