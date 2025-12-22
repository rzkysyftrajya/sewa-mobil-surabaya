import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  MessageCircle,
  Briefcase,
  Quote,
  Plane,
  Calendar,
  TrendingUp,
  Key,
} from "lucide-react";

// WhatsApp link configuration
const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20mobil%20Surabaya`;

// Services data
const services = [
  {
    icon: Car,
    title: "Sewa Mobil Harian",
    description:
      "Fleksibel untuk kebutuhan harian Anda di Surabaya. Lepas kunci atau dengan sopir.",
    href: "/layanan#harian",
  },
  {
    icon: Users,
    title: "Dengan Sopir Berpengalaman",
    description:
      "Sopir lokal yang hafal jalanan Surabaya. Anda santai, kami yang menyetir.",
    href: "/layanan#sopir",
  },
  {
    icon: MapPin,
    title: "Antar Jemput Bandara Juanda",
    description:
      "Tepat waktu, tanpa ribet. Kami pantau jadwal penerbangan Anda.",
    href: "/layanan#bandara",
  },
  {
    icon: Briefcase,
    title: "Transport Corporate",
    description:
      "Solusi mobilitas untuk tim dan proyek bisnis Anda di Jawa Timur.",
    href: "/layanan#corporate",
  },
  {
    icon: Heart,
    title: "Perjalanan Keluarga",
    description:
      "Liburan keluarga tanpa stres. Armada nyaman untuk segala usia.",
    href: "/layanan#keluarga",
  },
];

// Armada data
const armadaCars = [
  {
    name: "Toyota Alphard",
    description:
      "MPV mewah dengan kapasitas 7-8 kursi leather, fitur entertainment lengkap dan AC terpisah untuk setiap baris.",
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
  },
  {
    name: "Toyota Hiace Premio",
    description:
      "Van premium dengan kapasitas 10-12 kursi, interior lux, AC double blower dan sound system premium.",
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
  },
  {
    name: "Toyota Hiace Commuter",
    description:
      "Van ekonomis dengan kapasitas 12-15 kursi, AC central, kursi fabric nyaman untuk perjalanan jauh.",
    image: "/assets/armada-lepas-kunci/HIACE-COMMUTER.webp",
  },
  {
    name: "Toyota Innova Zenix",
    description:
      "MPV hybrid dengan kapasitas 7-8 kursi, sistem hybrid yang hemat BBM, fitur keselamatan Toyota Safety Sense.",
    image: "/assets/armada-lepas-kunci/INNOVA-ZENIX.webp",
  },
  {
    name: "Mitsubishi Pajero",
    description:
      "SUV 7 kursi dengan mesin diesel turbo, sistem 4WD untuk off-road, interior leather dan fitur mewah.",
    image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
  },
  {
    name: "Toyota Fortuner",
    description:
      "SUV premium kapasitas 7-8 kursi, mesin bensin 2.7L, ground clearance tinggi, fitur entertainment touchscreen.",
    image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
  },
  {
    name: "Toyota Hilux Double Cabin",
    description:
      "Pickup double cabin kapasitas 5 kursi, mesin diesel 2.8L, bak luas, 4WD untuk medan berat.",
    image: "/assets/armada-lepas-kunci/HILUX-DOUBLE-CABIN.webp",
  },
  {
    name: "Toyota Innova Reborn",
    description:
      "MPV kapasitas 7-8 kursi, mesin diesel 2.5L, AC double blower, kursi fabric berkualitas tinggi.",
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
  },
  {
    name: "Toyota Avanza",
    description:
      "Mobil keluarga kapasitas 7 kursi, mesin bensin 1.5L, AC standar, konsumsi BBM ekonomis.",
    image: "/assets/armada-lepas-kunci/AVANZA.webp",
  },
];

// Dokumentasi pelayanan data
const serviceDocumentation = [
  {
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
    caption: "Pelayanan Premium – Pukul 08:00",
  },
  {
    image: "/assets/armada-lepas-kunci/INNOVA-ZENIX.webp",
    caption: "Perjalanan Bisnis – Pukul 14:15",
  },
  {
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
    caption: "Liburan Keluarga – Pukul 06:00",
  },
  {
    image: "/assets/armada-lepas-kunci/HILUX-DOUBLE-CABIN.webp",
    caption: "Proyek Konstruksi – Pukul 07:20",
  },
  {
    image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
    caption: "Touring Surabaya – Pukul 11:45",
  },
  {
    image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
    caption: "Event Corporate – Pukul 16:30",
  },
];

// Why choose us data
const whyChooseUs = [
  {
    icon: Clock,
    title: "Respons Cepat",
    description: "Konfirmasi dalam hitungan menit, bukan jam.",
  },
  {
    icon: Shield,
    title: "Armada Terawat",
    description: "Mobil dicek rutin untuk keamanan perjalanan Anda.",
  },
  {
    icon: MapPin,
    title: "Lokal Surabaya",
    description: "Kami paham jalanan dan kebutuhan transportasi kota ini.",
  },
];

// Statistics data
const statistics = [
  {
    icon: Users,
    number: "2500+",
    label: "Pelanggan Puas",
    description: "Trusted by families & businesses",
  },
  {
    icon: Car,
    number: "50+",
    label: "Armada Ready",
    description: "Various car types available",
  },
  {
    icon: Calendar,
    number: "8",
    label: "Tahun Pengalaman",
    description: "Serving Surabaya since 2016",
  },
  {
    icon: Award,
    number: "99%",
    label: "Tingkat Kepuasan",
    description: "Based on customer reviews",
  },
];

// Booking steps data
const bookingSteps = [
  {
    step: "1",
    title: "Pilih Layanan",
    description: "Tentukan jenis layanan sesuai kebutuhan Anda",
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Pilih Armada",
    description: "Sesuaikan armada dengan kebutuhan dan budget",
    icon: Car,
  },
  {
    step: "3",
    title: "Konfirmasi",
    description: "Konfirmasi detail dan lakukan pembayaran",
    icon: CheckCircle,
  },
  {
    step: "4",
    title: "Nikmati Layanan",
    description: "Armada dan sopir siap melayani Anda",
    icon: Star,
  },
];

// FAQs data
const faqs = [
  {
    question: "Bagaimana cara memesan layanan sewa mobil?",
    answer:
      "Anda dapat memesan melalui WhatsApp, telepon, atau datang langsung ke kantor kami. Tim kami akan membantu menyesuaikan kebutuhan Anda dengan armada yang tersedia.",
  },
  {
    question: "Apakah tersedia sopir profesional?",
    answer:
      "Ya, kami menyediakan sopir berpengalaman yang sudah pelatihan keselamatan dan mengetahui jalanan Surabaya dengan baik. Semua sopir kami berizin dan terpercaya.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan pada kendaraan?",
    answer:
      "Semua armada kami telah diasuransikan. Untuk kerusakan kecil, akan ada proses klaim melalui asuransi. Tim kami akan membantu menangani proses tersebut.",
  },
  {
    question: "Berapa lama durasi sewa minimum?",
    answer:
      "Sewa minimum adalah 6 jam untuk layanan harian. Namun kami juga melayani sewa harian, mingguan, hingga bulanan sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah bisa antar jemput di luar Surabaya?",
    answer:
      "Bisa, kami melayani perjalanan luar kota seperti Malang, Batu, Solo, Yogyakarta, dan kota-kota lain di Jawa Timur dengan harga khusus.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau cash. Untuk pemesanan, dibutuhkanDP 30% dan pelunasan sebelum kendaraan digunakan.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Budi Santoso",
    role: "Business Owner",
    content:
      "Pelayanan sangat profesional dan armada kondisi prima. Sudah 2 tahun menggunakan jasa mereka untuk kebutuhan bisnis.",
    rating: 5,
    avatar: "BS",
  },
  {
    name: "Siti Nurhaliza",
    role: "Family Travel",
    content:
      "Liburan keluarga jadi nyaman banget. Sopirnya ramah dan tahu tempat tempat bagus di Surabaya. Highly recommended!",
    rating: 5,
    avatar: "SN",
  },
  {
    name: "Ahmad Wijaya",
    role: "Corporate Client",
    content:
      "Sewa mobil untuk tim kantor selalu puas dengan pelayanannya. Tepat waktu dan harga wajar. Terus berlanjut的合作annya.",
    rating: 5,
    avatar: "AW",
  },
  {
    name: "Maya Putri",
    role: "Frequent Traveler",
    content:
      "Antar jemput bandara nya selalu tepat waktu. Gak pernah kejebak macet atau terlambat. Trust worthy banget!",
    rating: 5,
    avatar: "MP",
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

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl space-y-6 opacity-0 animate-fade-up">
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

            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Tidak perlu pusing cari kendaraan. Dari antar jemput bandara
              hingga perjalanan bisnis—kami siap kapan pun Anda butuhkan.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Konsultasi Gratis via WhatsApp
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
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Layanan yang Menyesuaikan Kebutuhan Anda
            </h2>
            <p className="text-lg text-muted-foreground">
              Apapun keperluan transportasi Anda di Surabaya, kami punya
              solusinya.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {React.createElement(service.icon as any, {
                    className: "h-6 w-6",
                  })}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section className="bg-secondary/30 py-8 md:py-12">
        <div className="container">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end opacity-0 animate-fade-up">
            <div>
              <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                <Car className="h-3 w-3" />
                Armada Kami
              </div>
              <h2 className="mb-1 text-xl font-bold md:text-2xl">
                Pilihan Armada Lengkap
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                Berbagai jenis kendaraan untuk memenuhi kebutuhan transportasi
                Anda dengan kenyamanan dan keamanan terjamin.
              </p>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-5">
            {armadaCars.map((car, index) => (
              <div
                key={car.name}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-1.5">
                  <h3 className="mb-0.5 text-xs font-semibold text-foreground">
                    {car.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {car.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center opacity-0 animate-fade-up delay-300">
            <p className="mb-3 text-xs text-muted-foreground">
              Butuh sewa lepas kunci?
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/armada">
                Lihat Armada Lepas Kunci
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Cinematic Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Armada Kami dalam Video
            </h2>
            <p className="text-lg text-muted-foreground">
              Lihat langsung kualitas armada dan pelayanan profesional kami
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-black opacity-0 animate-fade-up">
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp"
                preload="metadata"
              >
                <source src="/assets/armada-video.mp4" type="video/mp4" />
                <source src="/assets/armada-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">
                    Video Armada & Layanan
                  </h3>
                  <p className="text-sm opacity-90">
                    Kualitas dan pelayanan terbaik
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  asChild
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Konsultasi
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dokumentasi Pelayanan Kami Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Dokumentasi Pelayanan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Momen saat kami melayani berbagai kebutuhan transportasi dengan
              profesional
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDocumentation.map((doc, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elevated opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={doc.image}
                    alt={doc.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {doc.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8 opacity-0 animate-fade-up">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Kenapa Banyak yang Memilih Kami?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Bukan sekadar rental mobil. Kami partner transportasi yang
                  memahami kebutuhan Anda di Surabaya.
                </p>
              </div>

              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      {React.createElement(item.icon as any, {
                        className: "h-6 w-6",
                      })}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="cta" size="lg" asChild>
                <Link to="/kenapa-kami">
                  Kenapa Kami Berbeda
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-up delay-200">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Plane className="h-16 w-16 text-primary" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-primary p-6 text-center text-primary-foreground shadow-card">
                  <div>
                    <div className="text-4xl font-bold">10+</div>
                    <div className="mt-1 text-sm opacity-90">
                      Tahun Melayani Surabaya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Angka yang Bicara
            </h2>
            <p className="text-lg text-muted-foreground">
              Kepercayaan pelanggan adalah bukti nyata kualitas pelayanan kami
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 transition-all group-hover:from-primary/20 group-hover:to-primary/30">
                    {React.createElement(stat.icon as any, {
                      className: "h-8 w-8 text-primary",
                    })}
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimoni dari pelanggan yang sudah merasakan pelayanan terbaik
              kami
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Cara Memesan Mudah & Cepat
            </h2>
            <p className="text-lg text-muted-foreground">
              Hanya 4 langkah sederhana untuk mendapatkan layanan transportasi
              terbaik
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                      {React.createElement(step.icon as any, {
                        className: "h-10 w-10",
                      })}
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary/30 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 animate-fade-up delay-300">
            <p className="mb-6 text-lg text-muted-foreground">
              Siap untuk mencoba? Mulai sekarang juga!
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Mulai Pesan Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="mx-auto max-w-3xl opacity-0 animate-fade-up delay-200">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl rounded-3xl bg-card p-8 text-center shadow-card md:p-12 opacity-0 animate-fade-up">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Butuh Mobil Sekarang atau Besok?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Langsung hubungi kami via WhatsApp. Konsultasi gratis, respons
              cepat, tanpa kewajiban booking. Tim kami siap 24/7 melayani
              kebutuhan transportasi Anda.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
              <span className="text-muted-foreground">atau</span>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>
                  <Phone className="h-4 w-4" />
                  0812-3456-7890
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Respon Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Konsultasi Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
