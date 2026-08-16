import { CLINIC, TEL_HREF } from "@/lib/clinic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-blue-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            {CLINIC.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            The clinic Melur loves — famous locally, preferred by families. One
            address on Alagar Kovil Road.
          </p>
          <p className="mt-4 text-sm">{CLINIC.fullAddress}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#why-melur" className="hover:text-white">
                Why Melur
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#timings" className="hover:text-white">
                Timings
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-white">
                Location
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={TEL_HREF} className="hover:text-white">
                Call {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a href="#timings" className="hover:text-white">
                Appointment timings
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-3 text-xs leading-relaxed text-slate-400">
          <p>
            <strong className="font-semibold text-slate-300">
              Medical disclaimer:
            </strong>{" "}
            In case of severe emergency, please visit the nearest hospital
            emergency department immediately. This website is for clinic
            information and appointment enquiries only and does not replace
            emergency medical care.
          </p>
          <p>
            © {year} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
