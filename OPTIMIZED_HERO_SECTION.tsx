import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Phone, ArrowRight } from "lucide-react";

// WhatsApp link configuration
const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20mobil%20Surabaya`;

// Optimized Hero Section - No Cropping, Responsive
export const OptimizedHeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Responsive Hero Image Container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] lg:aspect-[3/1] bg-gray-100">
        <img
          src="/hero-section.webp"
          alt="Sewa Mobil Surabaya"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hero Content Below Image */}
      <div className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Award className="h-4 w-4" />
              GROUP PT.VICKY RENTAL NUSANTARAA
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <MapPin className="h-4 w-4" />
              Melayani Surabaya & Sekitanya
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Butuh Transportasi di Surabaya?{" "}
              <span className="text-primary">Kami Solusinya.</span>
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Tidak perlu pusing cari kendaraan. Dari antar jemput bandara
              hingga perjalanan bisnis—kami siap kapan pun Anda butuhkan.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Konsultasi
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/layanan">
                  Lihat Layanan Kami
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;
