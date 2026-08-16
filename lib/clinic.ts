export const CLINIC = {
  name: "Baskaran Clinic",
  tagline: "The clinic Melur loves",
  addressLine: "280, Alagar Kovil Road",
  city: "Melur, Madurai, Tamil Nadu",
  pincode: "625106",
  fullAddress: "280, Alagar Kovil Road, Melur, Madurai, Tamil Nadu – 625106",
  phoneDisplay: "+91 80988 59590",
  phoneLocal: "080988 59590",
  phoneTel: "+918098859590",
  mapsQuery: "280 Alagar Kovil Road Melur Madurai 625106",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=280+Alagar+Kovil+Road,+Melur,+Madurai,+Tamil+Nadu+625106&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=280+Alagar+Kovil+Road,+Melur,+Madurai,+Tamil+Nadu+625106",
} as const;

export const TIMINGS = {
  morning: "09:30 AM – 01:30 PM",
  evening: "05:30 PM – 09:00 PM",
  sunday: "Morning Session / By Prior Appointment",
} as const;

/** Phone call — this number is not on WhatsApp */
export const TEL_HREF = `tel:${CLINIC.phoneTel}`;

/** Native SMS (not WhatsApp) for appointment details on mobile */
export function smsUrl(message: string): string {
  return `sms:${CLINIC.phoneTel}?body=${encodeURIComponent(message)}`;
}
