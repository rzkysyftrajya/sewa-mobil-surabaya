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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20mobil%20Surabaya`;

// Services data with enhanced navigation
type Service = {
  title: string;
  description: string;
  href: string;
  serviceId: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    icon: Car,
    title: "Sewa Mobil Harian",
    description:
      "Fleksibel untuk kebutuhan harian Anda di Surabaya. Lepas kunci atau dengan sopir.",
    href: "/layanan#harian",
    serviceId: "harian",
  },
  {
    icon: Users,
    title: "Dengan Sopir Berpengalaman",
    description:
      "Sopir lokal yang hafal jalanan Surabaya. Anda santai, kami yang menyetir.",
    href: "/layanan#sopir",
    serviceId: "sopir",
  },
  {
    icon: MapPin,
    title: "Antar Jemput Bandara Juanda",
    description:
      "Tepat waktu, tanpa ribet. Kami pantau jadwal penerbangan Anda.",
    href: "/layanan#bandara",
    serviceId: "bandara",
  },
  {
    icon: Briefcase,
    title: "Transport Corporate",
    description:
      "Solusi mobilitas untuk tim dan proyek bisnis Anda di Jawa Timur.",
    href: "/layanan#corporate",
    serviceId: "corporate",
  },
  {
    icon: Heart,
    title: "Perjalanan Keluarga",
    description:
      "Liburan keluarga tanpa stres. Armada nyaman untuk segala usia.",
    href: "/layanan#keluarga",
    serviceId: "keluarga",
  },
];

// Armada data - Simplified cards with descriptions
const armadaCars = [
  {
    name: "Toyota Alphard",
    capacity: "7-8 penumpang",
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
    description:
      "MPV Luxury premium dengan captain seat dan fitur kenyamanan kelas tinggi",
    slug: "toyota-alphard",
  },
  {
    name: "Toyota Hiace Premio",
    capacity: "10-12 penumpang",
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
    description:
      "Minibus premium 12-16 penumpang dengan AC ducting dan interior mewah",
    slug: "toyota-hiace-premio",
  },
  {
    name: "Toyota Hiace Commuter",
    capacity: "12-15 penumpang",
    image: "/assets/armada-lepas-kunci/HIACE-COMMUTER.webp",
    description:
      "Minibus ekonomis 12-16 penumpang, cocok untuk rombongan dengan budget terjangkau",
    slug: "toyota-hiace-commuter",
  },
  {
    name: "Toyota Innova Zenix",
    capacity: "7-8 penumpang",
    image: "/assets/armada-lepas-kunci/INNOVA-ZENIX.webp",
    description:
      "MPV hybrid modern dengan teknologi terdepan dan fitur keselamatan lengkap",
    slug: "toyota-innova-zenix",
  },
  {
    name: "Mitsubishi Pajero",
    capacity: "7 penumpang",
    image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
    description:
      "SUV premium 4WD tangguh untuk off-road dan tampilan prestisius",
    slug: "mitsubishi-pajero",
  },
  {
    name: "Toyota Fortuner",
    capacity: "7-8 penumpang",
    image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
    description:
      "SUV diesel 4WD kokoh untuk perjalanan luar kota dan medan berat",
    slug: "toyota-fortuner",
  },
  {
    name: "Toyota Hilux Double Cabin",
    capacity: "4-5 penumpang",
    image: "/assets/armada-lepas-kunci/HILUX-DOUBLE-CABIN.webp",
    description: "Pickup 4WD untuk kebutuhan logistik dan petualangan off-road",
    slug: "toyota-hilux-double-cabin",
  },
  {
    name: "Toyota Innova Reborn",
    capacity: "6-7 penumpang",
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
    description: "MPV keluarga nyaman dengan fitur lengkap dan performa handal",
    slug: "toyota-innova-reborn",
  },
  {
    name: "Toyota Avanza",
    capacity: "6-7 penumpang",
    image: "/assets/armada-lepas-kunci/AVANZA.webp",
    description:
      "MPV ekonomis 6-7 penumpang, pilihan populer untuk keluarga budget terbatas",
    slug: "toyota-avanza",
  },
];

// Video files data
const videoFiles = [
  { src: "/armada-video/armada-1.mp4", title: "Armada Video 1" },
  { src: "/armada-video/armada-2.mp4", title: "Armada Video 2" },
  { src: "/armada-video/armada-3.mp4", title: "Armada Video 3" },
  { src: "/armada-video/armada-4.mp4", title: "Armada Video 4" },
  { src: "/armada-video/armada-5.mp4", title: "Armada Video 5" },
];

// Documentation images data
const documentationImages = Array.from({ length: 29 }, (_, i) => ({
  src: `/dokumentasi/dokumentasi-${i + 1}.webp`,
  alt: `Dokumentasi ${i + 1}`,
}));

// Why choose us data
type WhyChooseUsItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const whyChooseUs: WhyChooseUsItem[] = [
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
type StatisticItem = {
  icon: React.ElementType;
  number: string;
  label: string;
  description: string;
};

const statistics: StatisticItem[] = [
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
type BookingStep = {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const bookingSteps: BookingStep[] = [
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
      "Sewa mobil untuk tim kantor selalu puas dengan pelayanannya. Tepat waktu dan harga wajar.",
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

// Custom Video Player Component
const CustomVideoPlayer = ({
  src,
  title,
  videoIndex,
  isCurrentlyPlaying,
  onPlay,
  onPause,
  className = "",
  maxHeight = "400px",
}: {
  src: string;
  title: string;
  videoIndex: number;
  isCurrentlyPlaying: boolean;
  onPlay: (index: number) => void;
  onPause: (index: number) => void;
  className?: string;
  maxHeight?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync with parent's playing state
  useEffect(() => {
    if (videoRef.current) {
      if (isCurrentlyPlaying && !isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else if (!isCurrentlyPlaying && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isCurrentlyPlaying, isPlaying]);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        onPause(videoIndex);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        onPlay(videoIndex);
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-black shadow-lg ${className}`}
    >
      <video
        ref={videoRef}
        className="w-full h-auto object-contain rounded-lg bg-black"
        loop
        playsInline
        preload="metadata"
        style={{ maxHeight }}
        onLoadedData={handleLoadedData}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlay}
            className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200 group"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform ml-1" />
            )}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleMute}
            className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200 group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg
                className="h-6 w-6 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Video Title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
          {title}
        </h3>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const [currentlyPlayingVideo, setCurrentlyPlayingVideo] = useState<
    number | null
  >(null);

  const handleVideoPlay = (videoIndex: number) => {
    // Pause currently playing video if any
    if (
      currentlyPlayingVideo !== null &&
      currentlyPlayingVideo !== videoIndex
    ) {
      setCurrentlyPlayingVideo(null);
    }
    setCurrentlyPlayingVideo(videoIndex);
  };

  const handleVideoPause = (videoIndex: number) => {
    if (currentlyPlayingVideo === videoIndex) {
      setCurrentlyPlayingVideo(null);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Image - No Cropping, Object-Contain, Responsive */}
        <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <img
            src="/hero-section.webp"
            alt="Sewa Mobil Surabaya"
            className="w-full h-full max-w-6xl object-contain rounded-lg shadow-lg"
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

      {/* High-Conversion Booster Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-200/30 rounded-full blur-xl animate-bounce" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-200/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-5 w-20 h-20 bg-slate-100/50 rounded-full blur-lg animate-pulse" />

        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/50 rounded-full blur-xl animate-bounce" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-200/50 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-5 w-20 h-20 bg-emerald-100/70 rounded-full blur-lg animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Trust Signals & Stats */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Urgency Badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Zap className="w-4 h-4" />
                  Slots Terbatas!
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Clock className="w-4 h-4" />
                  Booking 5 Menit
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Shield className="w-4 h-4" />
                  Full Asuransi
                </div>
              </div>

              {/* Hero Headline */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 bg-clip-text text-transparent leading-tight mb-6">
                  <span className="block">Lelah Macet Surabaya?</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text">Sopir Pro Bantu Anda!</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg">
                  2500+ pelanggan percaya. <strong>Harga transparan, tidak ada biaya tersembunyi.</strong> 
                  Mulai perjalanan tanpa stress sekarang juga.
                </p>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200">
                  <Users className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                  <div className="text-3xl font-black text-slate-800 mb-1" data-count="2500">0</div>
                  <div className="text-slate-700 font-bold text-lg">Pelanggan</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200">
                  <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                  <div className="text-3xl font-black text-slate-800 mb-1" data-count="99">0</div>
                  <div className="text-amber-600 font-bold text-lg">Kepuasan</div>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK + '%20Saya%20mau%20booking%20mobil%20sekarang%20-%20apa%20rekomendasi%20terbaik?'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-black text-lg px-8 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <svg className="inline w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Booking Langsung WA</span>
                </a>
                <Link
                  to="/armada"
                  className="group flex-1 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-emerald-200 hover:border-emerald-400 text-slate-800 font-bold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <Car className="inline w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Lihat Armada Lengkap
                </Link>
              </div>
            </div>

            {/* Right Column - Benefits & Testimonials */}
            <div className="lg:col-span-6">
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: Users,
                    title: "Sopir Lokal Pro",
                    desc: "Hafal jalan Surabaya, hindari macet, tepat waktu 99%"
                  },
                  {
                    icon: Shield,
                    title: "Asuransi Penuh",
                    desc: "Kendaraan & penumpang terlindungi, tenang perjalanan"
                  },
                  {
                    icon: Clock,
                    title: "Booking Cepat",
                    desc: "Konfirmasi <5 menit, jemput sesuai jadwal Anda"
                  },
                  {
                    icon: MapPin,
                    title: "Gratis Jemput",
                    desc: "Surabaya kota, bandara Juanda, area sekitar"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Quick Testimonials */}
              <div>
                <h5 className="text-slate-800 font-bold text-xl mb-6 flex items-center gap-2">
                  ⭐ 4.9/5 dari 2500+ Pelanggan
                </h5>
                <div className="space-y-4">
                  {[
                    '"Sopir profesional, mobil bersih, tepat waktu. Recommended!" - Budi S.',
                    '"Antar jemput bandara perfect. Gak khawatir macet lagi!" - Maya P.',
                    '"Harga transparan, pelayanan top. Business partner tetap." - Ahmad W.'
                  ].map((quote, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-400">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                      <p className="italic text-slate-700 font-medium">"{quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
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
                  <service.icon className="h-6 w-6" />
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

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 opacity-0 animate-fade-up">
            {armadaCars.map((car, index) => {
              const whatsappMessage = `Halo, saya tertarik dengan ${car.name} kapasitas ${car.capacity}. Bisa info lebih detail?`;
              const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                whatsappMessage
              )}`;

              return (
                <div
                  key={car.name}
                  className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden bg-muted p-2">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-full w-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                      {car.name}
                    </h3>
                    <div className="text-xs text-primary font-medium mb-2">
                      {car.capacity}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {car.description}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs h-8"
                        asChild
                      >
                        <Link to={`/armada#${car.slug}`}>Detail</Link>
                      </Button>
                      <Button
                        variant="whatsapp"
                        size="sm"
                        className="flex-1 text-xs h-8"
                        asChild
                      >
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Pesan
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden px-4 opacity-0 animate-fade-up">
            <Carousel
              className="w-full touch-pan-y"
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
                skipSnaps: false,
              }}
              plugins={[]}
            >
              <CarouselContent className="ml-0">
                {armadaCars.map((car, index) => {
                  const whatsappMessage = `Halo, saya tertarik dengan ${car.name} kapasitas ${car.capacity}. Bisa info lebih detail?`;
                  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`;

                  return (
                    <CarouselItem
                      key={`${car.name}-${index}`}
                      className="basis-2/3 pl-0"
                    >
                      <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated mx-2">
                        <div className="aspect-square overflow-hidden bg-muted p-3">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="h-full w-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="mb-1 text-sm font-semibold text-foreground">
                            {car.name}
                          </h3>
                          <div className="text-xs text-primary font-medium mb-2">
                            {car.capacity}
                          </div>
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                            {car.description}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-xs h-8"
                              asChild
                            >
                              <Link to={`/armada#${car.slug}`}>Detail</Link>
                            </Button>
                            <Button
                              variant="whatsapp"
                              size="sm"
                              className="flex-1 text-xs h-8"
                              asChild
                            >
                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <MessageCircle className="h-3 w-3 mr-1" />
                                Pesan
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
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

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 opacity-0 animate-fade-up">
            {videoFiles.map((video, index) => (
              <CustomVideoPlayer
                key={index}
                src={video.src}
                title={video.title}
                videoIndex={index}
                isCurrentlyPlaying={currentlyPlayingVideo === index}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                maxHeight="400px"
              />
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden px-4 opacity-0 animate-fade-up">
            <Carousel
              className="w-full touch-pan-y"
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
                skipSnaps: false,
              }}
              plugins={[]}
            >
              <CarouselContent className="ml-0">
                {videoFiles.map((video, index) => (
                  <CarouselItem key={index} className="basis-4/5 pl-0">
                    <div className="mx-2">
                      <CustomVideoPlayer
                        src={video.src}
                        title={video.title}
                        videoIndex={index}
                        isCurrentlyPlaying={currentlyPlayingVideo === index}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        maxHeight="300px"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-0 animate-fade-up">
            {documentationImages.map((doc, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elevated p-3"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted rounded-lg">
                  <img
                    src={doc.src}
                    alt={doc.alt}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden px-4 opacity-0 animate-fade-up">
            <Carousel
              className="w-full touch-pan-y"
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
                skipSnaps: false,
              }}
              plugins={[]}
            >
              <CarouselContent className="ml-0">
                {documentationImages.map((doc, index) => (
                  <CarouselItem key={index} className="basis-3/4 pl-0">
                    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elevated mx-2 p-3">
                      <div className="aspect-square overflow-hidden bg-muted rounded-lg">
                        <img
                          src={doc.src}
                          alt={doc.alt}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
                      <item.icon className="h-6 w-6" />
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
                    <stat.icon className="h-8 w-8 text-primary" />
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
                      <step.icon className="h-10 w-10" />
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

      {/* Lokasi Kami Section */}
      <section id="lokasi-kami" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Lokasi Kami</h2>
            <p className="text-lg text-muted-foreground">
              Kunjungi kantor kami atau lihat lokasi layanan sewa mobil Surabaya
            </p>
          </div>

          <div className="mx-auto max-w-5xl opacity-0 animate-fade-up delay-200">
            <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
              <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.096112306946!2d112.72506109999999!3d-7.3431033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb9cc4035e1b%3A0xa301f239a06002c1!2ssewamobilsurabaya!5e0!3m2!1sid!2sid!4v1766739360350!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:text-left sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        Alamat Kantor
                      </h3>
                      <p className="text-muted-foreground">
                        MP4G+Q23, Jl. Dukuh Menanggal, Dukuh Menanggal, Kec.
                        Gayungan, Surabaya, Jawa Timur 60243
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://maps.google.com/?q=MP4G+Q23,+Jl.+Dukuh+Menanggal,+Dukuh+Menanggal,+Kec.+Gayungan,+Surabaya,+Jawa+Timur+60243"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Buka di Google Maps
                    </a>
                  </Button>
                </div>
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
                  <Phone className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
              <span className="text-muted-foreground">atau</span>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>
                  <Phone className="h-4 w-4" />
                  +62 853-7329-3935
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
