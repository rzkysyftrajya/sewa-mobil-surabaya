import { Button } from "@/components/ui/button";
import {
  Car,
  Users,
  Plane,
  Briefcase,
  Heart,
  Clock,
  Check,
  Phone,
  ArrowRight,
} from "lucide-react";

const images = {
  harian: "/layanan/SEWA-MOBIL-HARIAN.webp",
  sopir: "/layanan/SEWA-MOBIL-DENGAN-SUPIR.webp",
  bandara: "/layanan/antar-jemput-bandara-juanda.webp",
  corporate: "/layanan/transport-corporate-proyek.webp",
  keluarga: "/layanan/perjalanan-keluarga-event.webp",
};

const WHATSAPP_NUMBER = "85373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

const services = [
  {
    id: "harian",
    icon: Car,
    title: "Sewa Mobil Harian Surabaya",
    subtitle: "Fleksibel Sesuai Kebutuhan",
    image: images.harian,
    problem:
      "Butuh kendaraan untuk aktivitas harian tapi tidak ingin repot dengan kepemilikan mobil? Atau sedang di Surabaya tanpa kendaraan pribadi?",
    solution:
      "Kami menyediakan mobil harian dengan pilihan lepas kunci atau dengan sopir. Proses cepat, tanpa ribet, langsung bisa jalan.",
    suitable: [
      "Wisatawan domestik",
      "Profesional yang butuh mobilitas",
      "Kebutuhan dadakan",
    ],
    features: [
      "Pilihan lepas kunci atau pakai sopir",
      "Durasi fleksibel (12-24 jam)",
      "Pengantaran ke lokasi Anda",
    ],
  },
  {
    id: "sopir",
    icon: Users,
    title: "Sewa Mobil dengan Sopir",
    subtitle: "Anda Santai, Kami yang Menyetir",
    image: images.sopir,
    problem:
      "Tidak familiar dengan jalanan Surabaya? Atau ingin fokus pada pekerjaan/istirahat selama perjalanan?",
    solution:
      "Sopir kami berpengalaman dan hafal seluk-beluk Surabaya—dari jalan tikus hingga jalur bebas macet. Anda cukup duduk nyaman.",
    suitable: [
      "Tamu dari luar kota",
      "Eksekutif dan profesional",
      "Acara formal dan meeting",
    ],
    features: [
      "Sopir lokal berpengalaman",
      "Paham kondisi lalu lintas Surabaya",
      "Berpenampilan rapi dan sopan",
    ],
  },
  {
    id: "bandara",
    icon: Plane,
    title: "Antar Jemput Bandara Juanda",
    subtitle: "Tepat Waktu, Tanpa Ribet",
    image: images.bandara,
    problem:
      "Khawatir telat ke bandara atau bingung transportasi setelah landing di Surabaya?",
    solution:
      "Kami memantau jadwal penerbangan Anda. Jemput tepat waktu, antar sampai tujuan dengan nyaman—tanpa drama tarif bandara yang mahal.",
    suitable: [
      "Penumpang domestik dan internasional",
      "Pebisnis dengan jadwal ketat",
      "Keluarga dengan banyak bagasi",
    ],
    features: [
      "Pantau jadwal penerbangan real-time",
      "Pickup di area kedatangan",
      "Tarif transparan, tanpa biaya tersembunyi",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Transport Corporate & Proyek",
    subtitle: "Partner Mobilitas Bisnis Anda",
    image: images.corporate,
    problem:
      "Perusahaan Anda punya proyek di Surabaya/Jawa Timur? Tim butuh transportasi rutin yang bisa diandalkan?",
    solution:
      "Kami menyediakan armada dan sopir dedicated untuk kebutuhan corporate—daily, weekly, atau project-based. Tagihan bulanan? Bisa diatur.",
    suitable: [
      "Tim proyek dari luar kota",
      "Perusahaan dengan mobilitas tinggi",
      "Event dan konferensi bisnis",
    ],
    features: [
      "Armada dedicated untuk tim",
      "Kontrak fleksibel",
      "Invoice dan laporan perjalanan",
    ],
  },
  {
    id: "keluarga",
    icon: Heart,
    title: "Perjalanan Keluarga & Event",
    subtitle: "Liburan Tanpa Stres",
    image: images.keluarga,
    problem:
      "Mau liburan keluarga tapi stress mikirin transportasi? Takut mobil tidak cukup nyaman untuk anak-anak atau orang tua?",
    solution:
      "Kami punya armada yang nyaman untuk segala usia. Sopir yang sabar dan ramah, siap menemani perjalanan keluarga Anda ke destinasi wisata Jawa Timur.",
    suitable: [
      "Liburan keluarga",
      "Wisata Bromo, Malang, Batu",
      "Acara keluarga besar",
    ],
    features: [
      "MPV dan Innova untuk keluarga",
      "Baby seat tersedia (request)",
      "Sopir ramah anak",
    ],
  },
];

export default function LayananPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Layanan Transportasi Kami
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Bukan sekadar sewa mobil—kami menyediakan solusi transportasi yang
              disesuaikan dengan kebutuhan spesifik Anda di Surabaya dan
              sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="opacity-0 animate-fade-up">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-video w-full rounded-2xl object-cover shadow-card"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 opacity-0 animate-fade-up delay-100">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                  <service.icon className="h-4 w-4" />
                  {service.subtitle}
                </div>

                <h2 className="text-2xl font-bold md:text-3xl">
                  {service.title}
                </h2>

                {/* Problem */}
                <div className="rounded-xl border border-border bg-muted/50 p-4">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Masalah Umum
                  </h4>
                  <p className="text-foreground">{service.problem}</p>
                </div>

                {/* Solution */}
                <div className="rounded-xl border border-primary/20 bg-accent p-4">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    Solusi Kami
                  </h4>
                  <p className="text-foreground">{service.solution}</p>
                </div>

                {/* Suitable for */}
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">
                    Cocok untuk:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.suitable.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" size="lg" asChild>
                  <a
                    href={`${WHATSAPP_LINK}&text=Halo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-5 w-5" />
                    Konsultasi Layanan Ini
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-up">
            <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Tidak Yakin Layanan Mana yang Cocok?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ceritakan kebutuhan Anda, kami bantu carikan solusi terbaik.
              Konsultasi gratis, tanpa kewajiban booking.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
