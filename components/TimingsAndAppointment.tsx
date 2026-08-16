"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { CLINIC, TEL_HREF, TIMINGS, smsUrl } from "@/lib/clinic";

type Session = "Morning" | "Evening";

interface FormState {
  name: string;
  phone: string;
  date: string;
  session: Session;
  reason: string;
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  date: "",
  session: "Morning",
  reason: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15";

export default function TimingsAndAppointment() {
  const [form, setForm] = useState<FormState>(INITIAL);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      `Hello ${CLINIC.name}, I would like to book an appointment.`,
      "",
      `Patient Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Preferred Date: ${form.date}`,
      `Preferred Session: ${form.session}`,
      `Reason for Visit: ${form.reason.trim()}`,
    ].join("\n");

    // Native SMS — this clinic number is not on WhatsApp
    window.location.href = smsUrl(message);
  };

  return (
    <section
      id="timings"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
            Melur Clinic Timings
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Book the clinic Melur already prefers
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-display text-2xl font-semibold">
              OP Consultation Timings
            </h3>
            <dl className="mt-8 space-y-5">
              <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
                <dt className="text-slate-300">Morning Session</dt>
                <dd className="text-right font-semibold text-white">
                  {TIMINGS.morning}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
                <dt className="text-slate-300">Evening Session</dt>
                <dd className="text-right font-semibold text-white">
                  {TIMINGS.evening}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-slate-300">Sunday</dt>
                <dd className="text-right font-semibold text-white">
                  {TIMINGS.sunday}
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-teal-100/90">
              Prefer calling {CLINIC.phoneLocal} during OP hours for faster
              confirmation.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            onSubmit={onSubmit}
            className="rounded-2xl bg-white p-6 text-slate-900 sm:p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-blue-950">
              Request Appointment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fill the form to open a phone SMS with your details — or call the
              clinic directly. (This number is not on WhatsApp.)
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Patient Name
                </span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Full name"
                  autoComplete="name"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone Number
                </span>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">
                    Preferred Date
                  </span>
                  <input
                    required
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">
                    Preferred Session
                  </span>
                  <select
                    required
                    name="session"
                    value={form.session}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        session: e.target.value as Session,
                      })
                    }
                    className={inputClass}
                  >
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Reason for Visit
                </span>
                <textarea
                  required
                  name="reason"
                  rows={3}
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className={`${inputClass} resize-y`}
                  placeholder="e.g. Fever, BP check, diabetes follow-up"
                />
              </label>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={TEL_HREF}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call clinic
              </a>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                <Send className="h-4 w-4" aria-hidden />
                Send SMS request
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
