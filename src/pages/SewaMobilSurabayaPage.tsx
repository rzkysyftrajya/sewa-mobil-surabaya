import { useEffect } from "react";
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
  CheckCircle2,
  Clock3,
  Compass,
  MapPinned,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20Surabaya.`;
const LEPAS_KUNCI_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin menanyakan opsi lepas kunci untuk sewa mobil Surabaya. Mohon info kendaraan dan ketentuannya."
)}`;

const needs = [
  {
    title: "Dengan Driver",
    description: "Cocok untuk perjalanan santai, tamu dari luar kota, atau kebutuhan bisnis yang ingin fokus bekerja.",
    target: "#cara-pemesanan",
    icon: Users,
  },
  {
    title: "Lepas Kunci",
    description: "Pilihan fleksibel untuk perjalanan yang ingin Anda kendalikan sendiri. Opsi lepas kunci dapat ditanyakan berdasarkan kendaraan dan kebutuhan perjalanan Anda.",
    target: "#armada",
    icon: Car,
  },
  {
    title: "Perjalanan Dalam Kota",
    description: "Mudah untuk kebutuhan harian, acara, dan mobilitas antar lokasi di Surabaya.",
    target: "#perjalanan-apa",
    icon: Compass,
  },
  {
    title: "Perjalanan Luar Kota",
    description: "Untuk tujuan seperti Bromo, Malang, Batu, dan perjalanan antar kota lainnya.",
    target: "#perjalanan-apa",
    icon: MapPinned,
  },
];

const armada = [
  {
    name: "Toyota Avanza",
    capacity: "6-7 penumpang",
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio", "Area bagasi cukup"],
    image: "/assets/armada-lepas-kunci/AVANZA.webp",
  },
  {
    name: "Toyota Innova Reborn",
    capacity: "6-7 penumpang",
    transmission: "Matic",
    fuel: "Bensin / Diesel",
    features: ["AC premium", "Ruang kabin nyaman", "Cocok keluarga & bisnis"],
    image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp",
  },
  {
    name: "Toyota Fortuner",
    capacity: "6-7 penumpang",
    transmission: "Matic",
    fuel: "Diesel",
    features: ["Kuat untuk perjalanan jauh", "Tampilan premium", "Ruang nyaman"],
    image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
  },
  {
    name: "Toyota Alphard",
    capacity: "7 penumpang",
    transmission: "Matic",
    fuel: "Hybrid / Bensin",
    features: ["Kabiner luas", "Nyaman untuk keluarga", "Tampilan mewah"],
    image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
  },
  {
    name: "Toyota Hiace Premio",
    capacity: "12-16 penumpang",
    transmission: "Manual",
    fuel: "Diesel",
    features: ["Kapasitas besar", "Cocok rombongan", "Bagasi luas"],
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
  },
  {
    name: "Mitsubishi Pajero",
    capacity: "7 penumpang",
    transmission: "Matic",
    fuel: "Diesel",
    features: ["Kekuatan tinggi", "Cocok perjalanan premium", "Interior nyaman"],
    image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
  },
];

const featuredArmada = armada.slice(0, 3);

const reasons = [
  {
    icon: Shield,
    title: "Armada Terawat",
    description: "Setiap mobil dicek kondisi mesin, kebersihan, dan kelengkapan sebelum digunakan.",
  },
  {
    icon: Users,
    title: "Sopir Profesional",
    description: "Sopir kami berpengalaman dan siap membantu perjalanan Anda dengan lebih nyaman.",
  },
  {
    icon: Clock3,
    title: "Tepat Waktu",
    description: "Kami menghargai waktu Anda dan berusaha menjaga jadwal perjalanan tetap lancar.",
  },
  {
    icon: MessageSquare,
    title: "Fleksibel & Komunikatif",
    description: "Tim kami membantu memilih kendaraan dan menyesuaikan kebutuhan perjalanan keluarga, bisnis, maupun wisata.",
  },
];

const orderSteps = [
  "Pilih kendaraan atau kebutuhan perjalanan Anda.",
  "Konsultasikan detail perjalanan melalui WhatsApp.",
  "Konfirmasi pilihan dan detail sewa.",
  "Booking selesai sesuai kesepakatan.",
];

const faqs = [
  {
    q: "Bagaimana cara memesan mobil di Surabaya?",
    a: "Hubungi kami via WhatsApp atau telepon, lalu jelaskan kebutuhan perjalanan, jumlah penumpang, tujuan, dan durasi. Kami akan membantu merekomendasikan kendaraan yang sesuai.",
  },
  {
    q: "Apakah tersedia opsi dengan sopir?",
    a: "Ya. Kami menyediakan opsi dengan sopir untuk perjalanan yang lebih santai, khususnya untuk tamu dari luar kota, keluarga, atau kebutuhan bisnis.",
  },
  {
    q: "Apakah bisa untuk perjalanan luar kota?",
    a: "Bisa. Kami melayani kebutuhan perjalanan ke tujuan seperti Bromo, Malang, Batu, dan kota lain sesuai kebutuhan perjalanan Anda.",
  },
  {
    q: "Apakah tersedia kendaraan untuk keluarga atau rombongan?",
    a: "Ya. Tersedia berbagai pilihan kendaraan dengan kapasitas yang sesuai untuk keluarga, kelompok kecil, atau rombongan.",
  },
  {
    q: "Apakah bisa untuk Bandara Juanda?",
    a: "Ya. Kami dapat membantu kebutuhan antar jemput bandara sesuai jadwal dan tujuan perjalanan Anda.",
  },
];

export default function SewaMobilSurabayaPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute("href");
    const robotsMeta = document.querySelector('meta[name="robots"]');
    const previousRobots = robotsMeta?.getAttribute("content");
    const openGraph = {
      title: document.querySelector('meta[property="og:title"]'),
      description: document.querySelector('meta[property="og:description"]'),
      url: document.querySelector('meta[property="og:url"]'),
      type: document.querySelector('meta[property="og:type"]'),
      image: document.querySelector('meta[property="og:image"]'),
    };
    const previousOpenGraph = Object.fromEntries(
      Object.entries(openGraph).map(([key, meta]) => [
        key,
        meta?.getAttribute("content"),
      ])
    );

    document.title = "Sewa Mobil Surabaya | Rental Mobil dengan Driver";
    const title = "Sewa Mobil Surabaya | Rental Mobil dengan Driver";
    const description =
      "Sewa mobil Surabaya untuk perjalanan keluarga, bisnis, dan wisata, dengan pilihan driver atau lepas kunci. Rental mobil Surabaya sesuai kebutuhan Anda.";
    const url = "https://sewamobilsurabaya.id/sewa-mobil-surabaya";

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute(
      "content",
      description
    );

    const canonical = canonicalLink ?? document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", url);
    if (!canonicalLink) document.head.appendChild(canonical);

    const robots = robotsMeta ?? document.createElement("meta");
    robots.setAttribute("name", "robots");
    robots.setAttribute("content", "index, follow");
    if (!robotsMeta) document.head.appendChild(robots);

    Object.entries({
      title,
      description,
      url,
      type: "website",
      image: "https://sewamobilsurabaya.id/hero-section.webp",
    }).forEach(([property, content]) => {
      const key = property as keyof typeof openGraph;
      const meta = openGraph[key] ?? document.createElement("meta");
      meta.setAttribute("property", `og:${property}`);
      meta.setAttribute("content", content);
      if (!openGraph[key]) {
        document.head.appendChild(meta);
        openGraph[key] = meta;
      }
    });

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        descriptionMeta?.setAttribute("content", previousDescription);
      } else if (descriptionMeta?.parentNode) {
        descriptionMeta.parentNode.removeChild(descriptionMeta);
      }
      if (previousCanonical) {
        canonical.setAttribute("href", previousCanonical);
      } else if (canonical.parentNode) {
        canonical.parentNode.removeChild(canonical);
      }
      if (previousRobots) {
        robots.setAttribute("content", previousRobots);
      } else if (robots.parentNode) {
        robots.parentNode.removeChild(robots);
      }
      Object.entries(openGraph).forEach(([property, meta]) => {
        const previousContent =
          previousOpenGraph[property as keyof typeof previousOpenGraph];
        if (previousContent !== undefined) {
          meta?.setAttribute("content", previousContent);
        } else if (meta?.parentNode) {
          meta.parentNode.removeChild(meta);
        }
      });
    };
  }, []);

  return (
    <main>
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="opacity-0 animate-fade-up">
              <span className="section-kicker">Rental Mobil Surabaya</span>
              <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                Sewa Mobil di Surabaya untuk Perjalanan yang Lebih Praktis
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Pilih kendaraan yang sesuai dengan kebutuhan Anda—baik untuk perjalanan dalam kota, keluarga, bisnis, maupun tujuan luar kota di Jawa Timur.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full" variant="cta">
                  <a href="#armada">Cari Mobil yang Cocok</a>
                </Button>
                <Button asChild size="lg" className="rounded-full" variant="whatsapp">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Chat WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-4 shadow-card opacity-0 animate-fade-up">
              <img
                src="/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp"
                alt="Toyota Alphard untuk sewa mobil Surabaya"
                className="aspect-square w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Butuh kendaraan untuk rombongan?
                </p>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  Jika Anda bepergian bersama keluarga atau kelompok, lihat pilihan Toyota Hiace yang tersedia.
                </h2>
              </div>
              <div className="flex justify-start md:justify-end">
                <Button asChild size="lg" className="rounded-full" variant="cta">
                  <Link to="/sewa-hiace-surabaya">Lihat Pilihan Hiace</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Pilih Kebutuhan</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pilih jenis perjalanan yang paling sesuai agar kendaraan yang Anda pilih benar-benar nyaman untuk kebutuhan Anda.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {needs.map(({ title, description, target, icon: Icon }, index) => (
              <a
                key={title}
                href={target}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Lihat pilihan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Ingin menggunakan mobil sendiri? Tanyakan opsi lepas kunci berdasarkan kendaraan dan kebutuhan perjalanan Anda.
            </p>
            <Button asChild variant="whatsapp" className="w-full shrink-0 rounded-full sm:w-auto">
              <a
                href={LEPAS_KUNCI_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanyakan Lepas Kunci
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="armada" className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Armada yang Cocok untuk Surabaya</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pilihan armada yang relevan untuk perjalanan keluarga, bisnis, dan kebutuhan pribadi di kota maupun luar kota.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredArmada.map((car, index) => (
              <div
                key={car.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="aspect-square w-full object-contain"
                />
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.capacity}</p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-3 border-b border-border pb-2">
                      <span>Transmisi</span>
                      <span className="font-medium text-foreground">{car.transmission}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-border pb-2">
                      <span>Bahan bakar</span>
                      <span className="font-medium text-foreground">{car.fuel}</span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-foreground">Fitur</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {car.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="whatsapp" className="w-full rounded-full">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Halo, saya ingin menanyakan ketersediaan ${car.name} untuk sewa mobil Surabaya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanyakan {car.name.replace("Toyota ", "")}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="cta" className="rounded-full">
              <Link to="/armada">Lihat Semua Armada</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="perjalanan-apa" className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Kebutuhan & Tujuan Perjalanan</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Armada dapat disesuaikan untuk perjalanan dalam kota, keluarga, bisnis, dan tujuan favorit di Jawa Timur.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Surabaya", "Bromo", "Malang", "Batu", "Bandara Juanda", "Keluarga", "Bisnis"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Kenapa Memilih Kami</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-pemesanan" className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Cara Pemesanan</h2>
            <p className="text-muted-foreground">
              Prosesnya sederhana dan cepat untuk membantu Anda segera mendapatkan kendaraan yang tepat.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {orderSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">FAQ</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-3 opacity-0 animate-fade-up">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${index}`}
                  className="rounded-xl border border-border bg-card px-5 shadow-sm"
                >
                  <AccordionTrigger className="py-4 text-left font-medium hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-card opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Masih bingung pilih mobil?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Beritahu jumlah penumpang dan tujuan perjalanan Anda. Kami bantu arahkan ke kendaraan yang sesuai.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="rounded-full" variant="whatsapp">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Konsultasi via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
