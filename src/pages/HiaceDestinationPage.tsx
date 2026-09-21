import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  Sunrise,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "6285373293935";

type Destination = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  accent: string;
  duration: string;
  passengers: string;
  departure: string;
  route: string[];
  highlights: string[];
  practical: { label: string; value: string }[];
};

const destinations: Record<string, Destination> = {
  bromo: {
    slug: "bromo",
    name: "Bromo",
    eyebrow: "Hiace untuk perjalanan sunrise",
    title: "Berangkat malam, pulang membawa cerita dari Bromo.",
    intro:
      "Perjalanan Bromo bukan sekadar pindah kota. Kami siapkan Hiace, driver yang mengenal ritmenya, dan waktu berangkat yang masuk akal agar Anda tiba sebelum matahari muncul.",
    image: "/hiace/hiace-premio-mojokerto.png",
    accent: "from-slate-950 via-slate-900 to-orange-950",
    duration: "12–14 jam",
    passengers: "12–16 orang",
    departure: "23.00–00.00 WIB",
    route: ["Surabaya", "Penanjakan", "Lautan Pasir", "Kawah Bromo"],
    highlights: [
      "Cocok untuk rombongan keluarga, komunitas, dan kantor",
      "Driver familiar dengan jalur sunrise Bromo",
      "Hiace Premio atau Commuter dengan AC ducting",
    ],
    practical: [
      { label: "Waktu terbaik", value: "April–Oktober" },
      { label: "Yang dibawa", value: "Jaket tebal, masker, sepatu nyaman" },
      { label: "Titik jemput", value: "Surabaya dan sekitarnya" },
    ],
  },
  malang: {
    slug: "malang",
    name: "Malang",
    eyebrow: "Hiace untuk city tour dan keluarga",
    title: "Satu hari yang rapi untuk menikmati Malang tanpa terburu-buru.",
    intro:
      "Susun rute Malang sesuai gaya rombongan Anda: kampung warna-warni, kuliner, museum, sampai area Batu. Hiace membuat perjalanan bersama tetap lega dan mudah diatur.",
    image: "/hiace/hiace-premio-juanda.png",
    accent: "from-emerald-950 via-teal-950 to-slate-950",
    duration: "10–12 jam",
    passengers: "12–16 orang",
    departure: "07.00–08.00 WIB",
    route: ["Surabaya", "Jodipan", "Museum Angkut", "Alun-Alun Malang"],
    highlights: [
      "Rute fleksibel untuk keluarga dan outing kantor",
      "Bagasi cukup untuk barang bawaan satu hari",
      "Driver membantu mengatur urutan destinasi agar tidak bolak-balik",
    ],
    practical: [
      { label: "Waktu terbaik", value: "Hari kerja untuk rute lebih lengang" },
      { label: "Yang dibawa", value: "Sepatu nyaman dan payung kecil" },
      { label: "Titik jemput", value: "Surabaya, Sidoarjo, Gresik" },
    ],
  },
  batu: {
    slug: "batu",
    name: "Batu",
    eyebrow: "Hiace untuk liburan keluarga",
    title: "Bawa keluarga ke udara sejuk Batu dengan ruang yang cukup.",
    intro:
      "Mulai dari theme park sampai alun-alun, Batu paling nyaman dijalani dengan kendaraan yang tidak membuat rombongan terpecah. Pilih Hiace, tentukan tujuan, sisanya kami bantu.",
    image: "/hiace/armada-hiace-bersama.png",
    accent: "from-blue-950 via-indigo-950 to-slate-950",
    duration: "10–12 jam",
    passengers: "12–16 orang",
    departure: "08.00–09.00 WIB",
    route: ["Surabaya", "Jawa Timur Park", "Museum Satwa", "Alun-Alun Batu"],
    highlights: [
      "Ideal untuk keluarga besar dan rombongan sekolah",
      "Kursi nyaman untuk perjalanan menuju dataran tinggi",
      "Bisa ditambah destinasi sesuai waktu dan usia rombongan",
    ],
    practical: [
      { label: "Waktu terbaik", value: "Mei–September" },
      { label: "Yang dibawa", value: "Jaket ringan dan alas kaki nyaman" },
      { label: "Titik jemput", value: "Surabaya dan area Jawa Timur" },
    ],
  },
};

export default function HiaceDestinationPage() {
  const { destination = "bromo" } = useParams();
  const detail = destinations[destination] ?? destinations.bromo;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya ingin konsultasi sewa Hiace untuk perjalanan ke ${detail.name}.`
  )}`;

  useEffect(() => {
    document.title = `Sewa Hiace ke ${detail.name} | Sewa Mobil Surabaya`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [detail.name]);

  return (
    <main>
      <section className={`relative overflow-hidden bg-gradient-to-br ${detail.accent} text-white`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative grid min-h-[620px] items-end gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="max-w-2xl">
            <Link to="/tour-surabaya#paket-wisata" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <ArrowRight className="h-4 w-4 rotate-180" /> Kembali ke Paket Wisata
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">{detail.eyebrow}</p>
            <h1 className="!text-white max-w-xl text-4xl font-bold leading-tight md:text-6xl">{detail.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{detail.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="cta" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Tanya Jadwal {detail.name}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-900">
                <a href="#rute">Lihat rute perjalanan</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl">
            <img src={detail.image} alt={`Perjalanan Hiace ke ${detail.name}`} className="max-h-[620px] w-full rounded-[1.5rem] object-contain" />
            <div className="absolute bottom-7 left-7 rounded-2xl bg-white px-4 py-3 text-slate-900 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tujuan pilihan</p>
              <p className="text-xl font-bold">{detail.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container grid gap-6 py-8 sm:grid-cols-3">
          <Info icon={Clock3} label="Durasi" value={detail.duration} />
          <Info icon={Users} label="Kapasitas" value={detail.passengers} />
          <Info icon={Sunrise} label="Waktu berangkat" value={detail.departure} />
        </div>
      </section>

      <section id="rute" className="scroll-mt-24 py-20 md:py-28">
        <div className="container grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Rute yang masuk akal</p>
            <h2 className="text-3xl font-bold md:text-4xl">Tidak perlu menebak-nebak urutan perjalanan.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Ceritakan titik jemput dan jumlah penumpang. Kami bantu menyesuaikan rute dengan jam buka destinasi dan waktu istirahat rombongan.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-border" />
            <div className="space-y-7">
              {detail.route.map((stop, index) => (
                <div key={stop} className="relative flex items-center gap-5">
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <span className="text-xl font-semibold">{stop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="section-kicker">Yang kami siapkan</p>
            <h2 className="text-3xl font-bold md:text-4xl">Perjalanan rombongan yang terasa lebih sederhana.</h2>
          </div>
          <ul className="space-y-5">
            {detail.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 leading-relaxed">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" /> {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="section-kicker">Catatan perjalanan</p>
            <h2 className="text-3xl font-bold md:text-4xl">Hal kecil yang membuat perjalanan lebih nyaman.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {detail.practical.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border p-5">
                <p className="mb-2 text-sm font-semibold text-primary">{item.label}</p>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Siap berangkat?</p>
            <h2 className="text-3xl font-bold">Cek ketersediaan Hiace ke {detail.name}.</h2>
          </div>
          <Button asChild size="lg" variant="whatsapp" className="rounded-full">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a>
          </Button>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary"><Icon className="h-5 w-5" /></div>
      <div><p className="text-sm text-muted-foreground">{label}</p><p className="font-semibold">{value}</p></div>
    </div>
  );
}
