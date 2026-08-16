import DoctorProfile from "@/components/DoctorProfile";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationContact from "@/components/LocationContact";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import StickyMobileBar from "@/components/StickyMobileBar";
import TimingsAndAppointment from "@/components/TimingsAndAppointment";
import TrustStrip from "@/components/TrustStrip";
import WhyMelurLovesUs from "@/components/WhyMelurLovesUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-sticky">
        <Hero />
        <TrustStrip />
        <WhyMelurLovesUs />
        <DoctorProfile />
        <Services />
        <TimingsAndAppointment />
        <LocationContact />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
