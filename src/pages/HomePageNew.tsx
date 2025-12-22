import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Car,
  Star,
  Users,
  Clock,
  Shield,
  Phone,
  MapPin,
  CheckCircle,
  Award,
  Heart,
  Zap,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

// WhatsApp link configuration
const WHATSAPP_LINK =
  "https://wa.me/85373293935?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20mobil%20Surabaya";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Jakarta",
    rating: 5,
    text: "Layanannya sangat memuaskan! Driver ramah, mobil bersih, dan harga terjangkau. Pasti akan jadi langganan untuk ke Surabaya.",
    avatar: "👨‍💼",
  },
  {
    id: 2,
    name: "Sari Dewi",
    location: "Bandung",
    rating: 5,
    text: "Airport transfer yang sangat reliable! Driver sudah menunggu even though flight delay. Highly recommended!",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    location: "Malang",
    rating: 5,
    text: "Proses booking mudah, responsive, dan driver yang sangat mengetahui tempat wisata di Surabaya. Liburan jadi menyenangkan!",
    avatar: "👨‍🎓",
  },
  {
    id: 4,
    name: "Maya Putri",
    location: "Yogyakarta",
    rating: 5,
    text: "Pelayanan terbaik! Harga fair, mobil bagus, driver profesional. Recommended banget untuk yang butuh sewa mobil di Surabaya.",
    avatar: "👩‍💻",
  },
];

// Hook for counting animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOutQuart
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isVisible, end, duration, start]);

  return { count, elementRef };
};

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isVisible, elementRef };
};

// Animated Stat Component
const AnimatedStat = ({
  number,
  suffix,
  label,
  icon,
}: {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const { count, elementRef } = useCountUp(number);
  const { isVisible, elementRef: scrollRef } = useScrollAnimation();

  return (
    <div ref={scrollRef} className="text-center">
      <div className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
        <span className="animate-pulse-glow">{icon}</span>
        <span className="counter-animation">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

// Interactive Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextTestimonial, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      {/* Main Testimonial Card */}
      <Card
        className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg card-3d"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <CardContent className="p-8">
          {/* Star Rating */}
          <div className="mb-6 flex items-center gap-1">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-primary text-primary animate-bounce-in"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="mb-6 text-lg text-muted-foreground leading-relaxed">
            "{currentTestimonial.text}"
          </blockquote>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl hover-scale">
              {currentTestimonial.avatar}
            </div>
            <div>
              <div className="font-semibold text-lg">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {currentTestimonial.location}
              </div>
            </div>
            <div className="ml-auto">
              <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between">
        {/* Previous/Next Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="hover-lift"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="hover-lift"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Auto-play Control */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="hover-lift"
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {isAutoPlaying ? "Pause" : "Play"}
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-primary/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary progress-bar transition-all duration-5000 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animationPlayState: isAutoPlaying ? "running" : "paused",
          }}
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Award className="h-4 w-4" />
              <span>#1 Sewa Mobil Surabaya</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Sewa Mobil{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Surabaya
              </span>
              <br />
              Tanpa Ribet
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Layanan sewa mobil terpercaya di Surabaya dengan driver
              profesional, armada berkualitas, dan harga transparan. Konsultasi
              gratis!
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="group" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Pesan via WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link to="/armada">
                  <Car className="mr-2 h-5 w-5" />
                  Lihat Armada
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <AnimatedStat
                number={500}
                suffix="+"
                label="Pelanggan Puas"
                icon={<Users className="h-5 w-5" />}
              />
              <AnimatedStat
                number={24}
                suffix="/7"
                label="Customer Service"
                icon={<Clock className="h-5 w-5" />}
              />
              <AnimatedStat
                number={100}
                suffix="+"
                label="Armada Ready"
                icon={<Car className="h-5 w-5" />}
              />
              <AnimatedStat
                number={5}
                suffix="★"
                label="Rating Pelanggan"
                icon={<Star className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Berbagai pilihan layanan sewa mobil untuk memenuhi kebutuhan
              transportasi Anda
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Daily Rental */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sewa Harian</h3>
                <p className="mb-4 text-muted-foreground">
                  Sewa mobil harian dengan driver untuk aktivitas sehari-hari di
                  Surabaya
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Driver Profesional</Badge>
                  <Badge variant="secondary">BBM Included</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">
                  Mulai Rp 350k/hari
                </div>
              </CardContent>
            </Card>

            {/* Airport Transfer */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Airport Transfer</h3>
                <p className="mb-4 text-muted-foreground">
                  Antar jemput dari/ke bandara dengan driver yang sudah
                  berpengalaman
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">On Time</Badge>
                  <Badge variant="secondary">Flight Tracking</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">
                  Mulai Rp 200k
                </div>
              </CardContent>
            </Card>

            {/* City Tour */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">City Tour</h3>
                <p className="mb-4 text-muted-foreground">
                  Jelajahi Surabaya dengan driver yang mengerti tempat wisata
                  terbaik
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Tour Guide</Badge>
                  <Badge variant="secondary">Rekomendasi Tempat</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">
                  Mulai Rp 400k/hari
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/layanan">
                Lihat Semua Layanan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Mengapa Pilih Kami?
            </h2>
            <p className="text-lg text-muted-foreground">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk sewa
              mobil di Surabaya
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Armada Terpercaya</h3>
              <p className="text-muted-foreground">
                Semua mobil telah melalui pemeriksaan ketat dan asuransi lengkap
                untuk keamanan perjalanan Anda
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Layanan 24/7</h3>
              <p className="text-muted-foreground">
                Customer service siap membantu Anda kapan saja, termasuk untuk
                kebutuhan mendadak
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Driver Profesional</h3>
              <p className="text-muted-foreground">
                Driver berpengalaman dan terpercaya dengan pengetahuan luas
                tentang Surabaya
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Harga Transparan</h3>
              <p className="text-muted-foreground">
                Tidak ada biaya tersembunyi. Harga yang ditawarkan sudah all-in
                tanpa kekhawatiran
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Proses Cepat</h3>
              <p className="text-muted-foreground">
                Booking mudah dan cepat melalui WhatsApp, konfirmasi dalam
                hitungan menit
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Garansi Kepuasan</h3>
              <p className="text-muted-foreground">
                Jika tidak puas dengan layanan, kami akan perbaiki atau
                kembalikan uang Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Kata Mereka yang Sudah Merasakan
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimoni nyata dari pelanggan yang puas dengan layanan kami
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Siap untuk Perjalanan Anda?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Jangan biarkan transportasi menjadi kendala. Hubungi kami sekarang
              dan rasakan pengalaman sewa mobil yang berbeda di Surabaya!
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Hubungi Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/kontak">Info Kontak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
