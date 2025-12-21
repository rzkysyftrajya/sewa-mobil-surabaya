import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import specific icons as components - more natural looking icons
import {
  Car,
  Users,
  Plane,
  Briefcase,
  Heart,
  Clock,
  Shield,
  MapPin,
  Phone,
  ArrowRight,
  Key,
  CheckCircle,
  Star,
  Quote,
  MessageCircle,
  TrendingUp,
  Award,
  Calendar,
  ChevronDown,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

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
    icon: Plane,
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

const featuredCars = [
  {
    name: "City Car",
    model: "Honda Brio / Agya",
    capacity: "4 penumpang",
    useCase: "Mobilitas harian, solo/couple",
    image: "/assets/car-brio.svg",
  },
  {
    name: "MPV Keluarga",
    model: "Toyota Avanza / Xenia",
    capacity: "6-7 penumpang",
    useCase: "Keluarga kecil, hemat budget",
    image: "/assets/car-avanza.svg",
  },
  {
    name: "MPV Premium",
    model: "Toyota Innova Reborn",
    capacity: "6-7 penumpang",
    useCase: "Bisnis, keluarga, kenyamanan",
    image: "/assets/car-innova.svg",
  },
  {
    name: "SUV",
    model: "Toyota Fortuner",
    capacity: "6-7 penumpang",
    useCase: "Luar kota, medan berat",
    image: "/assets/car-fortuner.svg",
  },
  {
    name: "Luxury MPV",
    model: "Toyota Alphard",
    capacity: "7 penumpang",
    useCase: "Executivo, acara formal",
    image: "/assets/car-alphard.svg",
  },
  {
    name: "SUV Premium",
    model: "Mitsubishi Pajero",
    capacity: "7 penumpang",
    useCase: "Off-road, pegunungan",
    image: "/assets/car-pajero.svg",
  },
];

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
      "Antar jemput bandaranya selalu tepat waktu. Gak pernah kejebak macet atau terlambat. Trust worthy banget!",
    rating: 5,
    avatar: "MP",
  },
];

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

const armadaServices = [
  {
    name: "Toyota Alphard",
    description: "tamu VIP & eksekutif",
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
    category: "Luxury MPV",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Alphard untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Hiace Premio",
    description: "rombongan & perjalanan grup",
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
    category: "Big MPV",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Hiace Premio untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Hiace Commuter",
    description: "rombongan & perjalanan grup",
    image: "/assets/armada-lepas-kunci/HIACE-COMMUTER.webp",
    category: "Big MPV",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Hiace Commuter untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Mitsubishi Pajero",
    description: "perjalanan luar kota & medan bervariasi",
    image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
    category: "SUV",
    whatsappMessage:
      "Halo, saya tertarik dengan Mitsubishi Pajero untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Fortuner",
    description: "perjalanan luar kota & medan bervariasi",
    image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
    category: "SUV",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Fortuner untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Innova Zenix",
    description: "perjalanan keluarga & bisnis",
    image: "/assets/armada-lepas-kunci/INNOVA-ZENIX.webp",
    category: "MPV Premium",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Innova Zenix untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Innova Reborn",
    description: "perjalanan keluarga & bisnis",
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
    category: "MPV",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Innova Reborn untuk sewa mobil dengan sopir di Surabaya",
  },
  {
    name: "Toyota Hilux Double Cabin",
    description: "perjalanan luar kota & medan bervariasi",
    image: "/assets/armada-lepas-kunci/HILUX-DOUBLE-CABIN.webp",
    category: "Pickup",
    whatsappMessage:
      "Halo, saya tertarik dengan Toyota Hilux Double Cabin untuk sewa mobil dengan sopir di Surabaya",
  },
];

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
      "Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau cash. Untuk pemesanan, dibutuhkan DP 30% dan pelunasan sebelum kendaraan digunakan.",
  },
];

export default function HomePage() {
  // Performance Optimizations & Animations
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Counter Animation Function
    const animateCounter = (element: HTMLElement) => {
      if (prefersReducedMotion) return;

      const target = parseInt(element.getAttribute("data-target") || "0");
      const duration = 2000; // 2 seconds
      const start = 0;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);

        element.textContent = current.toString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target.toString();
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // Scroll Reveal Animation
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(
        ".scroll-reveal, .opacity-0.animate-fade-up, .opacity-0.animate-slide-up, .opacity-0.animate-fade-in, .opacity-0.animate-scale-in"
      );

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("is-visible");
          (element as HTMLElement).style.opacity = "1";
          (element as HTMLElement).style.transform = "translateY(0)";
        }
      });
    };

    // Intersection Observer for Performance
    const setupIntersectionObserver = () => {
      if (!("IntersectionObserver" in window) || prefersReducedMotion) {
        revealOnScroll();
        return;
      }

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";

            // Start counter animation for statistics
            if (entry.target.querySelector(".counter")) {
              const counters = entry.target.querySelectorAll(".counter");
              counters.forEach((counter) => {
                if (!counter.classList.contains("animated")) {
                  counter.classList.add("animated");
                  animateCounter(counter as HTMLElement);
                }
              });
            }

            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all elements that need animation
      const elementsToObserve = document.querySelectorAll(
        ".scroll-reveal, .opacity-0.animate-fade-up, .opacity-0.animate-slide-up, .opacity-0.animate-fade-in, .opacity-0.animate-scale-in"
      );

      elementsToObserve.forEach((element) => {
        observer.observe(element);
      });
    };

    // Progress Bar Animation
    const animateProgressBars = () => {
      if (prefersReducedMotion) return;

      const progressBars = document.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const targetWidth = (bar as HTMLElement).style.width;
        (bar as HTMLElement).style.width = "0%";
        setTimeout(() => {
          (bar as HTMLElement).style.width = targetWidth;
        }, 500);
      });
    };

    // Enhanced Ripple Effect
    const enhanceRippleEffect = () => {
      const buttons = document.querySelectorAll(".btn-ripple");
      buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
          if (prefersReducedMotion) return;

          const rect = (this as Element).getBoundingClientRect();
          const ripple = (this as Element).querySelector(
            ".ripple"
          ) as HTMLElement;
          if (ripple) ripple.remove();

          const mouseEvent = e as MouseEvent;
          const newRipple = document.createElement("span");
          newRipple.classList.add("ripple");
          newRipple.style.left = mouseEvent.clientX - rect.left + "px";
          newRipple.style.top = mouseEvent.clientY - rect.top + "px";
          this.appendChild(newRipple);

          setTimeout(() => {
            newRipple.remove();
          }, 600);
        });
      });
    };

    // Performance Monitor
    const monitorPerformance = () => {
      if ("performance" in window) {
        window.addEventListener("load", () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType(
              "navigation"
            )[0] as PerformanceNavigationTiming;
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

            // Log performance metrics (can be sent to analytics)
            console.log("Page Load Time:", loadTime + "ms");

            // Optimize animations based on device performance
            if (loadTime > 3000) {
              document.body.classList.add("slow-device");
            }
          }, 0);
        });
      }
    };

    // Initialize all optimizations
    const initializeOptimizations = () => {
      setupIntersectionObserver();
      animateProgressBars();
      enhanceRippleEffect();
      monitorPerformance();

      // Add stagger animations to cards
      const cards = document.querySelectorAll(".card-3d");
      cards.forEach((card, index) => {
        (card as HTMLElement).style.animationDelay = index * 100 + "ms";
        card.classList.add("stagger-animation");
      });
    };

    // Start optimizations
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeOptimizations);
    } else {
      initializeOptimizations();
    }

    // Handle window resize for performance
    let resizeTimer: NodeJS.Timeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        revealOnScroll();
      }, 250);
    });

    // Cleanup function
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", () => {
        clearTimeout(resizeTimer);
      });
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Enhanced Background with Parallax */}
        <div className="absolute inset-0 z-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-background" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/70 to-background/30" />
        </div>

        {/* Enhanced Content */}
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl space-y-8">
            {/* Location Badge */}
            <div className="opacity-0 animate-bounce-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/80 px-6 py-3 text-sm font-medium text-accent-foreground shadow-lg border border-accent/20">
                <MapPin className="h-4 w-4 animate-pulse" />
                <span className="text-gradient font-semibold">
                  Melayani Surabaya & Sekitarnya
                </span>
              </div>
            </div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-slide-up delay-200">
                Butuh Transportasi di Surabaya?{" "}
                <span className="text-gradient font-extrabold animate-pulse-glow">
                  Kami Solusinya.
                </span>
              </h1>

              {/* Enhanced description with typing effect simulation */}
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl max-w-lg opacity-0 animate-fade-in delay-500">
                Tidak perlu pusing cari kendaraan. Dari antar jemput bandarа
                hingga perjalanan bisnis—kami siap kapan pun Anda butuhkan.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row opacity-0 animate-scale-in delay-700">
              {/* Primary CTA with ripple effect */}
              <Button
                variant="cta"
                size="xl"
                className="btn-ripple hover-lift group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  <span className="font-semibold">Konsultasi Gratis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>

              {/* Secondary CTA with hover effects */}
              <Button
                variant="outline"
                size="xl"
                className="hover-tilt hover-glow group bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link
                  to="/layanan"
                  className="group-hover:text-primary transition-colors"
                >
                  <span className="font-semibold">Lihat Layanan Kami</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-8 opacity-0 animate-fade-in delay-1000">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-1">
                  <div className="h-6 w-6 rounded-full bg-primary/20 border border-white flex items-center justify-center text-xs font-semibold text-primary">
                    A
                  </div>
                  <div className="h-6 w-6 rounded-full bg-primary/30 border border-white flex items-center justify-center text-xs font-semibold text-primary">
                    B
                  </div>
                  <div className="h-6 w-6 rounded-full bg-primary/40 border border-white flex items-center justify-center text-xs font-semibold text-primary">
                    C
                  </div>
                </div>
                <span className="font-medium">2,500+ Pelanggan Puas</span>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                <span className="ml-2 text-sm font-semibold text-primary">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl opacity-0 animate-slide-up">
              <span className="text-gradient">Layanan</span> yang Menyesuaikan
              Kebutuhan Anda
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in delay-200">
              Apapun keperluan transportasi Anda di Surabaya, kami punya
              solusinya.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group relative overflow-hidden"
              >
                {/* Card with enhanced effects */}
                <div className="card-3d hover-lift relative h-full rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with enhanced animation */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
                      {React.createElement(service.icon, {
                        className: "h-8 w-8 group-hover:animate-bounce",
                      })}
                    </div>

                    {/* Title with gradient effect */}
                    <h3 className="mb-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Enhanced CTA */}
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Pelajari lebih lanjut
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary" />
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>

                {/* Hover glow outline */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
              </Link>
            ))}
          </div>

          {/* Enhanced section footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4 text-sm font-medium text-primary shadow-lg border border-primary/20">
              <Star className="h-4 w-4 animate-pulse" />
              <span>Layanan terpercaya sejak 2016</span>
              <Star
                className="h-4 w-4 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Armada Lepas Kunci Section */}
      <section className="relative overflow-x-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full floating" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-lg floating"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accent/80 px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg border border-accent/20">
                <Key className="h-4 w-4 animate-pulse" />
                <span className="text-gradient font-bold">Layanan</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-gradient">Pilihan Armada</span> untuk
                Layanan
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                Butuh armada premium untuk kebutuhan perjalanan Anda? Berikut
                pilihan armada berkualitas yang siap melayani.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="hover-tilt hover-glow bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl group"
              asChild
            >
              <Link
                to="/armada"
                className="group-hover:text-primary transition-colors"
              >
                <span className="font-semibold">Lihat Semua Armada</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Enhanced Car Gallery */}
          <div className="relative">
            {/* Gallery Navigation Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from(
                { length: Math.ceil(armadaServices.length / 4) },
                (_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      i === 0 ? "bg-primary" : "bg-primary/20"
                    }`}
                  />
                )
              )}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {armadaServices.map((armada, index) => (
                <div key={armada.name} className="group relative">
                  {/* Main Car Card */}
                  <div className="card-3d hover-lift relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Car Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden bg-muted/50">
                      {/* Loading skeleton */}
                      <div className="absolute inset-0 skeleton" />

                      <img
                        src={armada.image}
                        alt={armada.name}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.previousElementSibling?.classList.remove(
                            "skeleton"
                          );
                        }}
                      />

                      {/* Image overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Floating action buttons on hover */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
                          <Star className="h-4 w-4" />
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Car Details */}
                    <div className="relative z-10 p-6">
                      {/* Car Category Badge */}
                      <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                        {armada.category}
                      </div>

                      {/* Car Model */}
                      <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {armada.name}
                      </h3>

                      {/* Car Specifications */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-medium">
                            {armada.description}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          asChild
                        >
                          <Link to="/armada">Detail</Link>
                        </Button>
                        <Button
                          variant="cta"
                          size="sm"
                          className="flex-1 text-xs btn-ripple"
                          asChild
                        >
                          <a
                            href={`${WHATSAPP_LINK}&text=${encodeURIComponent(
                              armada.whatsappMessage
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sewa
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                  <div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 shadow-xl border border-primary/20">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Tidak yakin mobil mana yang cocok?
                </h3>
                <p className="text-muted-foreground">
                  Konsultasikan kebutuhan Anda dengan tim ahli kami
                </p>
              </div>
              <Button
                variant="cta"
                size="lg"
                className="btn-ripple hover-lift bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl"
                asChild
              >
                <a
                  href={`${WHATSAPP_LINK}&text=Halo,%20saya%20ingin%20sewa%20mobil%20lepas%20kunci%20di%20Surabaya%20tapi%20belum%20tahu%20armada%20mana%20yang%20cocok`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">
                    Tanya Ketersediaan Armada
                  </span>
                </a>
              </Button>
            </div>
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
                      {React.createElement(item.icon, { className: "h-6 w-6" })}
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
                  <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Enhanced Statistics Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/5 rounded-full floating" />
        <div
          className="absolute bottom-20 right-20 w-20 h-20 bg-primary/8 rounded-lg floating"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl opacity-0 animate-slide-up">
              <span className="text-gradient">Angka</span> yang Bicara
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in delay-200">
              Kepercayaan pelanggan adalah bukti nyata kualitas pelayanan kami
            </p>
          </div>

          {/* Enhanced Statistics Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <div key={stat.label} className="group relative">
                {/* Main Stat Card */}
                <div className="card-3d hover-lift relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8 text-center shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Enhanced Icon with pulsing animation */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary transition-all duration-500 group-hover:from-primary/20 group-hover:to-primary/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                          {React.createElement(stat.icon, {
                            className: "h-10 w-10 group-hover:animate-pulse",
                          })}
                        </div>
                        {/* Pulsing ring effect */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping opacity-75" />
                      </div>
                    </div>

                    {/* Animated Number Counter */}
                    <div className="mb-4 relative">
                      <div className="text-4xl font-extrabold text-gradient mb-2 counter-animation">
                        <span
                          className="counter"
                          data-target={stat.number.replace(/[^0-9]/g, "")}
                        >
                          {stat.number.replace(/[^0-9]/g, "")}
                        </span>
                        <span className="text-2xl text-primary/60">
                          {stat.number.replace(/[0-9]/g, "")}
                        </span>
                      </div>

                      {/* Progress bar animation */}
                      <div className="mx-auto h-2 w-24 rounded-full bg-primary/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full progress-bar transition-all duration-1000 ease-out"
                          style={{
                            width: `${
                              ((parseInt(stat.number.replace(/[^0-9]/g, "")) ||
                                0) /
                                (stat.number.includes("+") ? 100 : 10)) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Enhanced Label */}
                    <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>

                {/* Hover glow outline */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
              </div>
            ))}
          </div>

          {/* Enhanced Section Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4 text-sm font-semibold text-primary shadow-lg border border-primary/20">
              <TrendingUp className="h-5 w-5 animate-bounce" />
              <span>Angka terus bertambah seiring kepercayaan pelanggan</span>
              <TrendingUp
                className="h-5 w-5 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Testimonials Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/5 rounded-full floating" />
        <div
          className="absolute bottom-20 left-10 w-32 h-32 bg-primary/8 rounded-lg floating"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl opacity-0 animate-slide-up">
              <span className="text-gradient">Apa Kata</span> Pelanggan Kami?
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in delay-200">
              Testimoni dari pelanggan yang sudah merasakan pelayanan terbaik
              kami
            </p>
          </div>

          {/* Interactive Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out hover:pause-animation"
                style={{ transform: `translateX(0%)` }}
              >
                {/* Testimonial Cards */}
                <div className="w-full flex-shrink-0 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.name} className="group relative">
                      {/* Main Testimonial Card */}
                      <div className="card-3d hover-lift relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Enhanced Star Rating with Animations */}
                          <div className="mb-6 flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 transition-all duration-300 ${
                                  i < testimonial.rating
                                    ? "fill-primary text-primary"
                                    : "text-muted-foreground"
                                } group-hover:animate-pulse`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                          </div>

                          {/* Quote Icon and Content */}
                          <div className="mb-6">
                            <Quote className="h-8 w-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300" />
                            <div className="relative">
                              <p className="text-sm text-muted-foreground italic leading-relaxed typing-effect">
                                "{testimonial.content}"
                              </p>
                              {/* Animated underline */}
                              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-1000" />
                            </div>
                          </div>

                          {/* Enhanced User Info */}
                          <div className="flex items-center gap-4">
                            {/* Enhanced Avatar */}
                            <div className="relative">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm font-bold shadow-lg group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-110">
                                {testimonial.avatar}
                              </div>
                              {/* Online status indicator */}
                              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-card animate-pulse" />
                            </div>

                            {/* User Details */}
                            <div>
                              <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                              <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                                {testimonial.role}
                              </p>

                              {/* Verification badge */}
                              <div className="flex items-center gap-1 mt-1">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span className="text-xs text-green-600 font-medium">
                                  Terverifikasi
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Floating particles */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                        <div
                          className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>

                      {/* Hover glow outline */}
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {Array.from(
                { length: Math.ceil(testimonials.length / 4) },
                (_, i) => (
                  <button
                    key={i}
                    className={`h-3 w-8 rounded-full transition-all duration-300 ${
                      i === 0
                        ? "bg-primary shadow-lg"
                        : "bg-primary/20 hover:bg-primary/40"
                    }`}
                    onClick={() => {
                      // Handle carousel navigation
                      console.log(`Navigate to slide ${i}`);
                    }}
                  />
                )
              )}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1 w-16 bg-primary/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full animate-pulse"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>

          {/* Enhanced Section Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4 text-sm font-semibold text-primary shadow-lg border border-primary/20">
              <Quote className="h-5 w-5 animate-pulse" />
              <span>2,500+ testimoni positif dari pelanggan</span>
              <Star
                className="h-5 w-5 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Booking Process Timeline */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/5 rounded-full floating" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary/8 rounded-lg floating"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl opacity-0 animate-slide-up">
              <span className="text-gradient">Cara Memesan</span> Mudah & Cepat
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in delay-200">
              Hanya 4 langkah sederhana untuk mendapatkan layanan transportasi
              terbaik
            </p>
          </div>

          {/* Enhanced Booking Timeline */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <div key={step.step} className="group relative">
                {/* Main Step Card */}
                <div className="card-3d hover-lift relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Enhanced Step Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground font-bold text-sm shadow-lg animate-pulse">
                            {step.step}
                          </div>
                        </div>

                        {/* Icon Container */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-110">
                          {React.createElement(step.icon, {
                            className: "h-10 w-10 group-hover:animate-bounce",
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Title */}
                    <h3 className="mb-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Enhanced Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary/70 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>

                {/* Hover glow outline */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 shadow-xl border border-primary/20">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Siap untuk mencoba? Mulai sekarang juga!
                </h3>
                <p className="text-muted-foreground">
                  Tim kami siap membantu 24/7 untuk kebutuhan transportasi Anda
                </p>
              </div>
              <Button
                variant="cta"
                size="lg"
                className="btn-ripple hover-lift bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl"
                asChild
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Mulai Pesan Sekarang</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with Advanced Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-primary/5 rounded-full floating" />
        <div
          className="absolute bottom-20 left-20 w-20 h-20 bg-primary/8 rounded-lg floating"
          style={{ animationDelay: "2.5s" }}
        />

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl opacity-0 animate-slide-up">
              <span className="text-gradient">Pertanyaan</span> yang Sering
              Ditanyakan
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in delay-200">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          {/* Enhanced FAQ Accordion */}
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group"
                >
                  {/* Enhanced FAQ Item */}
                  <div className="card-3d hover-lift relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                    <AccordionTrigger className="text-left hover:no-underline py-8 px-8 group-hover:px-10 transition-all duration-300 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-primary/60 [&>svg]:group-hover:text-primary [&>svg]:transition-all [&>svg]:group-hover:rotate-180">
                      <div className="flex items-center gap-4 w-full">
                        {/* Question Icon */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-110">
                          <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
                        </div>

                        {/* Question Text */}
                        <div className="flex-1">
                          <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                            {faq.question}
                          </span>
                        </div>

                        {/* Glow effect for chevron */}
                        <div className="relative">
                          <div className="absolute inset-0 h-6 w-6 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                        </div>
                      </div>
                    </AccordionTrigger>

                    {/* Enhanced Accordion Content */}
                    <AccordionContent className="pb-8 px-8 group-hover:px-10 transition-all duration-300">
                      <div className="ml-16">
                        {/* Answer Icon */}
                        <div className="flex items-start gap-3 mb-4">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 animate-pulse" />
                          <span className="text-sm font-semibold text-green-600">
                            Answer
                          </span>
                        </div>

                        {/* Answer Content */}
                        <p className="text-muted-foreground leading-relaxed text-base group-hover:text-primary/80 transition-colors duration-300">
                          {faq.answer}
                        </p>

                        {/* Additional Actions */}
                        <div className="mt-6 flex items-center gap-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            asChild
                          >
                            <a
                              href={WHATSAPP_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              Tanya Lebih Lanjut
                            </a>
                          </Button>

                          {/* Helpful indicator */}
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>FAQ ini membantu?</span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>

                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating" />
                    <div
                      className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 floating"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>

                  {/* Hover glow outline */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Enhanced Section Footer */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 shadow-xl border border-primary/20">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Masih ada pertanyaan lain?
                </h3>
                <p className="text-muted-foreground">
                  Tim customer service kami siap membantu 24/7
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  variant="cta"
                  size="lg"
                  className="btn-ripple hover-lift bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl"
                  asChild
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Chat WhatsApp</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="hover-tilt hover-glow bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href={`tel:+${WHATSAPP_NUMBER}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Telepon Langsung</span>
                  </a>
                </Button>
              </div>
            </div>
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
                  <Phone className="h-5 w-5 mr-2" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
              <span className="text-muted-foreground">atau</span>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>
                  <Phone className="h-4 w-4 mr-2" />
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
}
