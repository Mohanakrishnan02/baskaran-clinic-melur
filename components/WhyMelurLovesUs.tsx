"use client";

import { motion } from "framer-motion";
import { Heart, Phone, ThumbsUp } from "lucide-react";
import { TEL_HREF } from "@/lib/clinic";

const REASONS = [
  {
    icon: Heart,
    title: "Patients choose us first",
    text: "When Melur families need a doctor, Baskaran Clinic is the name they already know and prefer.",
  },
  {
    icon: ThumbsUp,
    title: "Word-of-mouth famous",
    text: "Neighbours recommend neighbours — our reputation in Melur is built by people who keep coming back.",
  },
  {
    icon: Phone,
    title: "Care that feels personal",
    text: "Not a crowded city hospital. Clear advice, familiar faces, and attention Melur patients appreciate.",
  },
] as const;

export default function WhyMelurLovesUs() {
  return (
    <section
      id="why-melur"
      className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-blue-950 py-20 text-white sm:py-24"
      aria-labelledby="why-melur-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 90% 70%, rgba(16,185,129,0.25), transparent 35%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Why Melur likes us
          </p>
          <h2
            id="why-melur-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            The clinic Melur people trust — and recommend
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-teal-50/90 sm:text-lg">
            Baskaran Clinic is famous in Melur for one reason: patients like the
            care. Local families return, refer friends, and choose us for
            everyday medical needs.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REASONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="border-t border-white/20 pt-6"
              >
                <Icon className="h-6 w-6 text-teal-200" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-50/85">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm text-teal-100/90 sm:text-base">
            Join the Melur families who already book with the clinic they like
            most.
          </p>
          <a
            href={TEL_HREF}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call the clinic Melur prefers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
