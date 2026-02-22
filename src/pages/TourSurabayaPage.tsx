import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Sun,
  Mountain,
  Building,
  Users,
  Heart,
  Car,
  Check,
  Phone,
  Star,
  Camera,
  Utensils,
  Sunrise,
  Palmtree,
  Fuel,
  Settings,
  Shield,
  Clock3,
  Wallet,
  Headphones,
} from "lucide-react";

const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20paket%20tour%20di%20Surabaya`;

// Gallery / Testimoni photos (hanya gambar, tanpa teks dan nama)
const galleryImages = [
  "/dokumentasi/dokumentasi-1.webp",
  "/dokumentasi/dokumentasi-2.webp",
  "/dokumentasi/dokumentasi-3.webp",
  "/dokumentasi/dokumentasi-4.webp",
  "/dokumentasi/dokumentasi-5.webp",
  "/dokumentasi/dokumentasi-6.webp",
  "/dokumentasi/dokumentasi-7.webp",
  "/dokumentasi/dokumentasi-8.webp",
  "/dokumentasi/dokumentasi-9.webp",
  "/dokumentasi/dokumentasi-10.webp",
  "/dokumentasi/dokumentasi-11.webp",
  "/dokumentasi/dokumentasi-12.webp",
];

const tourPackages = [
  {
    id: "surabaya-city-tour",
    icon: Building,
    title: "Surabaya City Tour",
    subtitle: "Jelajahi Pesona Kota Pahlawan",
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
    destinations: [
      "Monumen Kapal Selam",
      "Tugu Pahlawan",
      "House of Sampoerna",
      "Surabaya North Quarter",
      "Jalan Dharmawangsa",
    ],
    duration: "8-10 Jam",
    schedule: "08.00 - 18.00 WIB",
    highlights: [
      "Mengenal sejarah perjuangan arek-arek Surabaya",
      "Melihat koleksi pesawat dan kapal selam asli",
      "Belajar proses pembuatan rokok tradisional",
      "Jalan-jalan di kawasan heritage yang instagramable",
      "Ckuliner khas Surabaya (lontong kupang, sate kelinci)",
    ],
    included: [
      "Mobil + Sopir berpengalaman",
      "BBM & Tol",
      "Tour guide lokal (opsional)",
      "Air mineral",
      "Parkir & Retribusi",
    ],
    suitable: [
      "Wisatawan pertama kali ke Surabaya",
      "Keluarga dengan anak",
      "Grup study tour",
      "Pebisnis yang punya waktu luang",
    ],
  },
  {
    id: "bromo-sunrise-tour",
    icon: Sunrise,
    title: "Bromo Sunrise Tour",
    subtitle: "Experience the Majestic Volcano",
    badge: "Popular",
    badgeColor: "bg-orange-500",
    destinations: [
      "Penanjakan Viewpoint",
      "Bromo Crater",
      "Kawah Widodaren",
      "Savanna & Edelweis Field",
      "Sea of Sand",
    ],
    duration: "12-14 Jam (Malam)",
    schedule: "23.00 - 13.00 WIB (Hari Berikutnya)",
    highlights: [
      "Menikmati sunrise spektakuler di atas awan",
      "Berkuda di lautan pasir Bromo",
      "Berfoto di padang rumput Edelweis",
      "Suara dentuman kawah yang megah",
      "Melihat pemandangan luar biasa dari puncak Bromo",
    ],
    included: [
      "Toyota Innova / Hiace",
      "Sopir familiar rute Bromo",
      "BBM & Tol",
      "Air mineral & snack",
      "Jaket & masker debu",
      "Parkir & Retribusi",
    ],
    suitable: [
      "Pecinta fotografi",
      "Adventure seeker",
      "Wisatawan dari luar kota",
      "Keluarga yang ingin pengalaman berbeda",
    ],
  },
  {
    id: "malang-city-tour",
    icon: Building,
    title: "Malang City Tour",
    subtitle: "Kota Pendidikan & Budaya Jawa Timur",
    badge: "Favorit",
    badgeColor: "bg-green-500",
    destinations: [
      "Jodipan Rainbow Village",
      "Museum Angkut",
      "Alun-Alun Malang",
      "Jawa Timur Park 1, 2, & 3",
      "Candi Borobudur (Day Tour)",
    ],
    duration: "10-12 Jam",
    schedule: "07.00 - 19.00 WIB",
    highlights: [
      "Berfoto di village warna-warni yang instagramable",
      "Meng koleksi kendaraan vintage dan klasik",
      "Menikmati berbagai wahana edukatif & menarik",
      "Jalan-jalan di alun-alun & menikmati angin malam",
      "Mencoba kulur khas Malang (bakso Malang, apple pie)",
    ],
    included: [
      "Mobil + Sopir berpengalaman",
      "BBM & Tol",
      "Tour guide lokal (opsional)",
      "Air mineral",
      "Parkir & Retribusi",
    ],
    suitable: [
      "Keluarga dengan anak-anak",
      "Grup student/excursion",
      "Wisatawan yang suka foto-foto",
      "Weekend getaway dari Surabaya",
    ],
  },
  {
    id: "batu-city-tour",
    icon: Heart,
    title: "Batu City Tour",
    subtitle: "Destinasi Liburan Keluarga",
    badge: "Family Friendly",
    badgeColor: "bg-blue-500",
    destinations: [
      "Jawa Timur Park 3 (The Legend Star)",
      "Museum Satwa",
      "Alun-Alun Batu",
      "Paralayang Batu",
      "Kampung Warna Warni Jodipan",
    ],
    duration: "10-12 Jam",
    schedule: "08.00 - 20.00 WIB",
    highlights: [
      "Bermain berbagai wahana seru di JTPark",
      "Melihat koleksi satwa dari berbagai negara",
      "Mencoba paralayang dengan pemandangan pegunungan",
      "Berfoto di tempat-tempat aesthetic",
      "Menikmati udara sejuk pegunungan Batu",
    ],
    included: [
      "Mobil + Sopir berpengalaman",
      "BBM & Tol",
      "Tour guide lokal (opsional)",
      "Air mineral",
      "Parkir & Retribusi",
    ],
    suitable: [
      "Keluarga dengan anak kecil",
      "Grup teman-teman",
      " yang mencari entertainment",
      "Penggemar theme park",
    ],
  },
  {
    id: "kombinasi-jawa-timur",
    icon: MapPin,
    title: "Kombinasi Jawa Timur",
    subtitle: "Multi-Destinasi Dalam Sekali Perjalanan",
    badge: "Ultimate",
    badgeColor: "bg-purple-500",
    destinations: [
      "Surabaya + Bromo + Malang",
      "Surabaya + Malang + Batu",
      "Bromo + Malang + Batu + Surabaya",
      "Custom itinerary sesuai request",
    ],
    duration: "2-3 Hari",
    schedule: "Fleksibel",
    highlights: [
      "Mengunjungi 3-4 destinasi sekaligus",
      "Menghemat waktu & biaya transportasi",
      "Tidak perlu booking hotel berkali-kali",
      "Sopir yang sama",
      "Itinerary yang disesuaikan dengan waktu Anda",
    ],
    included: [
      "Mobil + Sopir berpengalaman",
      "BBM & Tol",
      "Tour guide lokal (opsional)",
      "Air mineral & snack",
      "Parkir & Retribusi",
      "Support 24/7 selama tour",
    ],
    suitable: [
      "Wisatawan dengan waktu terbatas",
      " yang ingin melihat banyak tempat",
      "Grup besar / family gathering",
      "Corporate outing",
    ],
  },
];

// Armada yang cocok untuk tour
const tourArmada = [
  {
    name: "Toyota Innova Reborn",
    category: "MPV Premium",
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
    capacity: "6-7 Penumpang",
    transmission: "Matic",
    bestFor: "Keluarga, Bisnis, Tour Distance",
    features: ["AC Auto", "Captain Seat", "Audio Premium", "Bagasi Luas"],
  },
  {
    name: "Toyota Innova Zenix",
    category: "MPV Hybrid",
    image: "/assets/armada-lepas-kunci/INNOVA-ZENIX.webp",
    capacity: "6-7 Penumpang",
    transmission: "Matic",
    bestFor: "Tour Premium, Bisnis, Keluarga",
    features: ["Hybrid", "Captain Seat", "Safety Features", "Premium Audio"],
  },
  {
    name: "Toyota Hiace Premio",
    category: "Minibus Premium",
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
    capacity: "12-16 Penumpang",
    transmission: "Manual",
    bestFor: "Rombongan, Study Tour, Gathering",
    features: ["AC Ducting", "Bagasi Luas", "Kursi Nyaman", "Premium Interior"],
  },
  {
    name: "Toyota Hiace Commuter",
    category: "Minibus",
    image: "/assets/armada-lepas-kunci/HIACE-COMMUTER.webp",
    capacity: "12-16 Penumpang",
    transmission: "Manual",
    bestFor: "Rombongan, Tour Sekolah",
    features: ["AC Ducting", "Bagasi Luas", "Kursi Standard", "Economical"],
  },
  {
    name: "Toyota Alphard",
    category: "Luxury MPV",
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
    capacity: "7 Penumpang",
    transmission: "Matic",
    bestFor: "VIP Tour, Acara Formal, Keluarga Mewah",
    features: ["Captain Seat", "Ottoman", "Premium Audio", "Dual AC"],
  },
  {
    name: "Mitsubishi Xpander",
    category: "MPV",
    image: "/assets/armada-lepas-kunci/XPANDER.webp",
    capacity: "7 Penumpang",
    transmission: "Matic",
    bestFor: "Keluarga, Tour Dalam Kota",
    features: ["AC Double Blower", "Audio Touchscreen", "Cruise Control"],
  },
];

// Layanan/Pelayanan yang termasuk
const tourServices = [
  {
    icon: Users,
    title: "Sopir Berpengalaman",
    description:
      "Sopir lokal yang familiar dengan rute Jawa Timur. Mengetahui jalan pintas, tempat makan terbaik, dan tips touring.",
  },
  {
    icon: Shield,
    title: "Armada Terawat",
    description:
      "Semua mobil menjalani inspeksi rutin. Bersih, nyaman, dan prima untuk perjalanan jauh.",
  },
  {
    icon: Fuel,
    title: "BBM & Tol Included",
    description:
      "Tidak perlu repot! BBM dan biaya tol sudah termasuk dalam paket. Anda cukup menikmati perjalanan.",
  },
  {
    icon: Clock3,
    title: "Fleksibel Waktu",
    description:
      "Jadwal bisa disesuaikan dengan kebutuhan Anda. Sopir siap menunggu di setiap destinasi.",
  },
  {
    icon: Wallet,
    title: "Tanpa Biaya Tersembunyi",
    description:
      "Harga transparan sejak awal. Tidak ada biaya tambahan yang tidak jelas.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Tim kami siap membantu kapan saja. Darurat atau pertanyaan, hubungi kami kapan saja.",
  },
];

export default function TourSurabayaPage() {
  // Handle smooth scroll to hash on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const navbarHeight = 80;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });

            element.classList.add("focused-section");
            setTimeout(() => {
              element.classList.remove("focused-section");
            }, 2000);
          }
        }, 100);
      }
    };

    handleHashScroll();

    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"></div>
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800">
              <MapPin className="h-4 w-4" />
              Tour & Travel Partner
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Tour Surabaya & Jawa Timur
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Nikmati pengalaman touring yang tak terlupakan bersama kami. Dari
              kota pahlawan Surabaya, gunung berapi Bromo, hingga destinasi
              keluarga di Malang dan Batu — semua bisa Anda jelajahi dengan
              nyaman bersama sopir berpengalaman.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-green-500" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-green-500" />
                <span>Sopir Lokal Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-green-500" />
                <span>Armada Terawat & Bersih</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours */}
      <section className="bg-orange-50 py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Car className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-1 font-semibold">Armada Nyaman</h3>
              <p className="text-sm text-muted-foreground">
                Innova, Hiace, dan berbagai armada premium
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-1 font-semibold">Pemandangan Spektakuler</h3>
              <p className="text-sm text-muted-foreground">
                Dari sunrise Bromo hingga kota-kota menarik
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-1 font-semibold">Tour Guide Profesional</h3>
              <p className="text-sm text-muted-foreground">
                Sopir & guide yang familiar dengan lokasi
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-1 font-semibold">Pengalaman Mengesankan</h3>
              <p className="text-sm text-muted-foreground">
                Ribuan wisatawan puas telah kami layani
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Armada yang Cocok untuk Tour
            </h2>
            <p className="text-muted-foreground">
              Kami menyediakan berbagai pilihan kendaraan yang nyaman dan aman
              untuk perjalanan touring Anda di Jawa Timur. Dari keluarga kecil
              hinggarombongan besar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tourArmada.map((armada, index) => (
              <div
                key={armada.name}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={armada.image}
                    alt={armada.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                      {armada.category}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold">{armada.name}</h3>
                  <div className="mb-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {armada.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Settings className="h-3 w-3" />
                      {armada.transmission}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {armada.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong>Cocok untuk:</strong> {armada.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a href="/armada">
                Lihat Semua Armada
                <Star className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-orange-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Pelayanan Kami
            </h2>
            <p className="text-muted-foreground">
              Kami mengutamakan kenyamanan dan keamanan Anda selama perjalanan.
              Berikut adalah keunggulan layanan kami.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tourServices.map((service, index) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Pilihan Paket Tour Kami
            </h2>
            <p className="text-muted-foreground">
              Tersedia berbagai paket tour yang disesuaikan dengan minat dan
              waktu Anda. Apakah Anda ingin mengeksplorasi kota, menikmati
              keindahan alam, atau menghabiskan waktu dengan keluarga?
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {tourPackages.map((tour, index) => (
              <div
                key={tour.id}
                id={tour.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Header */}
                <div className="relative rounded-t-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                        <tour.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{tour.title}</h3>
                        <p className="text-sm text-white/80">{tour.subtitle}</p>
                      </div>
                    </div>
                    {tour.badge && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium text-white ${tour.badgeColor}`}
                      >
                        {tour.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Destinations */}
                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2 font-semibold">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      Destinasi yang Dikunjungi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-800"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2 font-semibold">
                      <Star className="h-4 w-4 text-orange-500" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span className="text-sm text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2 font-semibold">
                      <Check className="h-4 w-4 text-orange-500" />
                      Fasilitas Termasuk
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold">Cocok untuk:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.suitable.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`${WHATSAPP_LINK}&text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(
                        tour.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-5 w-5" />
                      Pesan Paket Ini
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Camera className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ingin Paket Custom?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Tidak menemukan paket yang sesuai? Jangan khawatir! Kami juga
              menyediakan paket tour custom yang bisa disesuaikan dengan
              kebutuhan Anda — jumlah hari, destinasi, budget, dan preferensi
              lainnya.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-white text-orange-600 hover:bg-white/90"
              asChild
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                Diskusikan Kebutuhan Anda
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Tips Touring di Jawa Timur
            </h2>
            <p className="text-muted-foreground">
              Beberapa hal yang perlu Anda persiapkan sebelum memulai perjalanan
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Sun className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold">Waktu Terbaik Bromo</h3>
              <p className="text-sm text-muted-foreground">
                Untuk sunrise Bromo, lebih baik berangkat tengah malam (23.00-00.00).
                Musim kemarau (April-Oktober) menawarkan langit lebih jelas.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Utensils className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold">Kuliner Wajib Coba</h3>
              <p className="text-sm text-muted-foreground">
                Surabaya: Lontong Kupang, Sate Kelinci, Tahu Campur. Malang:
                Bakso Malang, Apple Pie. Batu: Sup Kepala Kambing, Jagung
                Bakar.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Palmtree className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold">Pakaian yang Disarankan</h3>
              <p className="text-sm text-muted-foreground">
                Bromo: jaket tebal, masker, sepatu nyaman. Kota: pakaian
                casual. Batu/Malang: siapkan jaket karena udara lebih dingin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Testimoni Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Testimoni & Dokumentasi Pelanggan
            </h2>
            <p className="text-muted-foreground">
              Dokumentasi pelanggan kami di Surabaya dan Jawa Timur
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-muted"
              >
                <img
                  src={image}
                  alt={`Tour documentation ${index + 1}`}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Siapkan Perjalanan Anda Sekarang!
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Hubungi kami untuk konsultasi gratis. Tim kami akan membantu Anda
              memilih paket tour yang paling sesuai dengan kebutuhan dan budget
              Anda.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" />
                Hubungi Kami via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
