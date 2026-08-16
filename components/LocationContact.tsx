"use client";

import { motion } from "framer-motion";
import { CalendarClock, MapPinned, Navigation, Phone } from "lucide-react";
import { CLINIC, TEL_HREF } from "@/lib/clinic";

export default function LocationContact() {
  return (
    <section id="location" className="bg-[var(--clinic-fog)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Only in Melur
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
            Our one clinic — Alagar Kovil Road
          </h2>
          <p className="mt-3 text-slate-600">
            Baskaran Clinic operates only from this Melur address:{" "}
            {CLINIC.fullAddress}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <iframe
              title="Baskaran Clinic location map — Alagar Kovil Road, Melur"
              src={CLINIC.mapsEmbedUrl}
              className="h-80 w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <div className="flex flex-col gap-5">
            <QuickLink
              icon={Phone}
              label="Phone"
              value={CLINIC.phoneDisplay}
              href={TEL_HREF}
              action="Call Now"
              tone="emerald"
            />
            <QuickLink
              icon={CalendarClock}
              label="Appointments"
              value="Call during OP hours to book"
              href="#timings"
              action="View Timings"
              tone="navy"
            />
            <QuickLink
              icon={Navigation}
              label="Directions"
              value="Open in Google Maps"
              href={CLINIC.mapsDirectionsUrl}
              action="Get Directions"
              tone="slate"
              external
            />
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <MapPinned className="h-5 w-5 text-teal-700" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-blue-950">
                Clinic Address
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {CLINIC.fullAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface QuickLinkProps {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  action: string;
  tone: "navy" | "emerald" | "slate";
  external?: boolean;
}

function QuickLink({
  icon: Icon,
  label,
  value,
  href,
  action,
  tone,
  external,
}: QuickLinkProps) {
  const btn =
    tone === "emerald"
      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
      : tone === "navy"
        ? "bg-blue-950 hover:bg-slate-900 text-white"
        : "bg-slate-800 hover:bg-slate-700 text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-5"
    >
      <Icon className="h-5 w-5 text-teal-700" aria-hidden />
      <p className="mt-3 text-sm font-semibold text-blue-950">{label}</p>
      <p className="mt-1 text-sm text-slate-600">{value}</p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${btn}`}
      >
        {action}
      </a>
    </motion.div>
  );
}
