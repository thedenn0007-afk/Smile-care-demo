import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Facilities from "@/components/Facilities";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Testimonials />
      <Gallery />
      <Facilities />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
