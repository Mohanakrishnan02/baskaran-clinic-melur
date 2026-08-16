"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_BOOK } from "@/lib/clinic";

export default function DoctorProfile() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
                alt="Physician providing attentive consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Lead Physician
                </p>
                <p className="mt-1 font-display text-3xl font-semibold">
                  Dr. Baskaran
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Local Melur physician · Alagar Kovil Road
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Loved in Melur
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
              Why Melur patients keep choosing us
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Baskaran Clinic is famous in Melur because people like it —
                familiar care, clear advice, and a clinic that feels like it
                belongs to the town. One address on Alagar Kovil Road. No
                hospital chain. Just Melur&apos;s preferred local clinic.
              </p>
              <p>
                Neighbours recommend us for fever care, diabetes and BP checks,
                and everyday consultation. That word-of-mouth trust is why
                Melur families come back.
              </p>
            </div>

            <ul className="mt-8 space-y-3 border-l-2 border-teal-600/40 pl-5 text-sm text-slate-700">
              <li>Patients like the personal, attentive visits</li>
              <li>Recommended across Melur by word of mouth</li>
              <li>Easy WhatsApp booking for busy local families</li>
            </ul>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Message the clinic
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
