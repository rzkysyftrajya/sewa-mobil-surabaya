import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Compass,
  MapPinned,
  MessageSquare,
  Plane,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_MESSAGE = "Halo, saya ingin konsultasi sewa Hiace Surabaya.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const armada = [
  {
    name: "Toyota Hiace Premio",
    image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
    capacity: "12-16 penumpang",
    transmission: "Manual",
    fuel: "Diesel",
    features: ["AC Ducting", "Bagasi Luas", "Kursi Nyaman", "Premium Interior"],
  },
  {
    name: "Toyota Hiace Commuter",
    image: "/assets/armada-lepas-kunci/HIACE-COMMUTER.webp",
    capacity: "12-16 penumpang",
    transmission: "Manual",
    fuel: "Diesel",
    features: ["AC Ducting", "Bagasi Luas", "Kursi Standard"],
  },
];

const destinations = [
  { label: "Surabaya", icon: MapPinned },
  { label: "Bromo", icon: Compass },
  { label: "Malang", icon: Compass },
  { label: "Batu", icon: Compass },
  { label: "Bandara Juanda", icon: Plane },
  { label: "Perjalanan keluarga", icon: Users },
  { label: "Rombongan", icon: Users },
];

const orderSteps = [
  "Ceritakan tujuan perjalanan",
  "Beritahu jumlah penumpang",
  "Pilih kendaraan",
  "Konsultasi melalui WhatsApp",
  "Konfirmasi perjalanan",
];

const faqs = [
  {
    question: "Hiace cocok untuk berapa orang?",
    answer:
      "Data armada yang tersedia mencantumkan Toyota Hiace Premio dan Toyota Hiace Commuter dengan kapasitas 12-16 penumpang. Jumlah yang sesuai dapat dibicarakan berdasarkan kebutuhan perjalanan dan barang bawaan.",
  },
  {
    question: "Apakah tersedia dengan driver?",
    answer:
      "Opsi perjalanan dengan driver tersedia. Sampaikan tujuan, tanggal, dan jumlah penumpang melalui WhatsApp agar tim dapat membantu mengecek kebutuhan Anda.",
  },
  {
    question: "Apakah bisa untuk Bromo?",
    answer:
      "Bromo termasuk tujuan yang dapat Anda konsultasikan. Ceritakan rencana perjalanan dan jumlah penumpang untuk mendapatkan arahan yang sesuai.",
  },
  {
    question: "Apakah bisa untuk Malang?",
    answer:
      "Bisa dikonsultasikan untuk perjalanan ke Malang. Tim akan membantu menyesuaikan pilihan kendaraan dengan rencana perjalanan Anda.",
  },
  {
    question: "Bagaimana cara menanyakan ketersediaan?",
    answer:
      "Hubungi kami melalui WhatsApp dengan menyebutkan tujuan, tanggal perjalanan, jumlah penumpang, dan pilihan Hiace jika sudah ada.",
  },
];

export default function SewaHiaceSurabayaPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousDescription = descriptionMeta?.getAttribute("content");
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

    const title = "Sewa Hiace Surabaya | Rental Hiace untuk Rombongan";
    const description =
      "Sewa Hiace Surabaya untuk keluarga dan rombongan, dengan pilihan Hiace Premio atau Commuter. Rental Hiace Surabaya untuk perjalanan wisata.";
    const url = "https://sewamobilsurabaya.id/sewa-hiace-surabaya";
    document.title = title;

    const meta = descriptionMeta ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", description);
    if (!descriptionMeta) document.head.appendChild(meta);

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
      image:
        "https://sewamobilsurabaya.id/assets/armada-lepas-kunci/HIACE-PREMIO.webp",
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
        meta.setAttribute("content", previousDescription);
      } else if (meta.parentNode) {
        meta.parentNode.removeChild(meta);
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
              <span className="section-kicker">Rental Hiace Surabaya</span>
              <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                Sewa Hiace Surabaya untuk Perjalanan Bersama
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Pilihan untuk keluarga, rombongan, atau wisata. Ceritakan rencana Anda untuk menemukan Hiace yang sesuai.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full" variant="cta">
                  <a href="#armada">Cari Hiace yang Cocok</a>
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
                src="/hiace/hiace-premio-mojokerto.png"
                alt="Toyota Hiace Premio milik armada Sewa Mobil Surabaya"
                className="max-h-[620px] w-full rounded-2xl object-contain"
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
                  Mencari mobil untuk perjalanan yang lebih fleksibel?
                </p>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  Lihat pilihan mobil lainnya dan temukan kendaraan yang sesuai dengan kebutuhan perjalanan Anda.
                </h2>
              </div>
              <div className="flex justify-start md:justify-end">
                <Button asChild size="lg" className="rounded-full" variant="cta">
                  <Link to="/sewa-mobil-surabaya">Lihat Semua Pilihan Mobil</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <p className="section-kicker">Dokumentasi armada</p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Ini unit yang kami siapkan untuk perjalanan Anda.
            </h2>
            <p className="text-muted-foreground">
              Foto dokumentasi armada kami di Mojokerto, Juanda, dan garasi.
              Ketersediaan unit dapat berubah, jadi konfirmasi terlebih dahulu.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: "/hiace/hiace-premio-mojokerto.png",
                alt: "Toyota Hiace Premio di Mojokerto",
                label: "Hiace Premio · Mojokerto",
              },
              {
                src: "/hiace/hiace-premio-juanda.png",
                alt: "Toyota Hiace Premio di Bandara Juanda",
                label: "Hiace Premio · Juanda",
              },
              {
                src: "/hiace/armada-hiace-bersama.png",
                alt: "Beberapa unit Hiace di garasi",
                label: "Armada Hiace · Garasi",
              },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={photo.src} alt={photo.alt} className="h-auto max-h-[560px] w-full object-contain" loading="lazy" />
                <figcaption className="px-4 py-3 text-sm font-medium">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <p className="section-kicker">Kenyamanan interior</p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Interior Hiace yang dirancang untuk kenyamanan perjalanan Anda
            </h2>
            <p className="text-muted-foreground">
              Kursi premium, AC ducting, pencahayaan ambient, dan ruang yang luas untuk perjalanan bersama keluarga atau rombongan.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: "/hiace/interior-hiace-1.png",
                alt: "Interior Hiace dengan kursi kulit premium dan pencahayaan LED ambient biru-kuning",
                label: "Kursi Premium & Pencahayaan Ambient",
              },
              {
                src: "/hiace/interior-hiace-2.png",
                alt: "Kabin Hiace dengan AC ducting, layar hiburan headrest, dan kontrol iklim otomatis",
                label: "AC Ducting & Hiburan Kabin",
              },
              {
                src: "/hiace/interior-hiace-3.png",
                alt: "Kursi Hiace dengan logo emboss dan lighting LED di plafon untuk suasana nyaman",
                label: "Desain Kursi Branded & Plafon Terang",
              },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={photo.src} alt={photo.alt} className="h-auto max-h-[560px] w-full object-cover" loading="lazy" />
                <figcaption className="px-4 py-3 text-sm font-medium">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="armada" className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Armada Hiace</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pilihan Hiace yang tercatat di armada kami. Ketersediaan dapat berubah, jadi silakan tanyakan terlebih dahulu.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {armada.map((car) => (
              <div key={car.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img
                  src={car.image}
                  alt={`${car.name} untuk disewa di Surabaya`}
                  className="aspect-square w-full object-contain"
                />
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.capacity}</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between gap-3 border-b border-border pb-2">
                      <span>Transmisi</span><span className="font-medium text-foreground">{car.transmission}</span>
                    </div>
                    <div className="flex justify-between gap-3 border-b border-border pb-2">
                      <span>Bahan bakar</span><span className="font-medium text-foreground">{car.fuel}</span>
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
                        `Halo, saya ingin menanyakan ketersediaan ${car.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanyakan Ketersediaan
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Kebutuhan & Destinasi Hiace</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Untuk keluarga, rombongan, wisata, dan perjalanan luar kota.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-card md:p-12">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
              <Users className="h-7 w-7" />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Perjalanan dengan Driver</h2>
            <p className="text-muted-foreground">
              Tersedia opsi dengan driver. Sampaikan tujuan, jadwal, dan jumlah penumpang melalui WhatsApp.
            </p>
            <Button asChild variant="whatsapp" className="mt-6 rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Konsultasikan dengan Driver</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="cara-pemesanan" className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Cara Pemesanan</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Mulai dengan menceritakan kebutuhan perjalanan Anda.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-5">
            {orderSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">FAQ Sewa Hiace Surabaya</h2>
              <p className="text-muted-foreground">Jawaban singkat untuk pertanyaan yang sering muncul.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container text-center">
          <MessageSquare className="mx-auto mb-4 h-9 w-9" />
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Belum yakin Hiace mana yang sesuai?</h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/80">
            Ceritakan jumlah penumpang dan tujuan perjalanan Anda. Kami bantu arahkan ke pilihan yang sesuai.
          </p>
          <Button asChild size="lg" variant="whatsapp" className="mt-7 rounded-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
