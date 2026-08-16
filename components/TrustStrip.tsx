"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Star } from "lucide-react";

const ITEMS = [
  {
    icon: Heart,
    title: "Loved by Melur patients",
    detail: "Families return because they like the care",
  },
  {
    icon: Star,
    title: "Famous in Melur",
    detail: "A name locals know and recommend",
  },
  {
    icon: MapPin,
    title: "Only Melur address",
    detail: "One clinic on Alagar Kovil Road",
  },
] as const;

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:-mt-8 sm:px-6" aria-label="Why Melur patients prefer us">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-soft backdrop-blur sm:grid-cols-3 sm:gap-0 sm:p-2">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-start gap-3 px-3 py-3 sm:px-5 sm:py-4 ${
                i < ITEMS.length - 1 ? "sm:border-r sm:border-slate-100" : ""
              }`}
            >
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-blue-950">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
