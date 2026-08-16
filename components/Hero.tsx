"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarClock, Phone } from "lucide-react";
import { CLINIC, TEL_HREF } from "@/lib/clinic";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2400&q=80"
          alt="Doctor consulting a patient at Baskaran Clinic Melur"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-950/92 via-blue-950/75 to-blue-950/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {CLINIC.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-balance text-lg font-medium leading-snug text-teal-50/95 sm:text-xl md:text-2xl"
        >
          The clinic Melur loves — famous locally, preferred by families
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200/90 sm:text-base"
        >
          Patients in Melur choose Baskaran Clinic because they like the care —
          personal consultation, clear advice, one trusted address on Alagar
          Kovil Road.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={TEL_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {CLINIC.phoneLocal}
          </a>
          <a
            href="#timings"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <CalendarClock className="h-5 w-5" aria-hidden />
            Book appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
