"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Baby,
  Cross,
  Phone,
  Stethoscope,
  Syringe,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { TEL_HREF } from "@/lib/clinic";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const SERVICES: ServiceItem[] = [
  {
    title: "General Medicine & Health Checkups",
    description:
      "Routine consultations and health assessments for common illnesses and wellness follow-ups.",
    icon: Stethoscope,
  },
  {
    title: "Fever, Cold & Infection Management",
    description:
      "Prompt evaluation and treatment guidance for fever, cough, cold, and seasonal infections.",
    icon: Thermometer,
  },
  {
    title: "Diabetes & Blood Pressure Monitoring",
    description:
      "Regular BP and sugar checks with practical advice to manage chronic conditions day to day.",
    icon: Activity,
  },
  {
    title: "Preventive Health & Diagnostic Prescriptions",
    description:
      "Clear diagnostic guidance and prescriptions to help you act early and stay healthier.",
    icon: Syringe,
  },
  {
    title: "Pediatric & Elderly Family Care",
    description:
      "Attentive care for children and senior family members with patient, easy-to-follow advice.",
    icon: Baby,
  },
  {
    title: "Minor Emergency Care & First Aid",
    description:
      "Support for minor injuries and urgent symptoms — severe emergencies should go to hospital ER.",
    icon: Cross,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            What Melur comes for
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
            Services patients already trust us for
          </h2>
          <p className="mt-3 text-slate-600">
            The care Melur likes — call the clinic to inquire about any service.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group flex flex-col bg-white p-6 transition hover:bg-teal-50/40 sm:p-7"
              >
                <Icon
                  className="h-6 w-6 text-teal-700 transition group-hover:text-emerald-600"
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-blue-950">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <a
                  href={TEL_HREF}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call to inquire
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
