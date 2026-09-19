import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

const primaryAreas = [
  {
    name: "Surabaya Pusat",
    description: "Tunjungan, Genteng, Bubutan, Tegalsari, Simokerto",
    highlight: true,
  },
  {
    name: "Surabaya Utara",
    description: "Kenjeran, Bulak, Semampir, Pabean Cantikan, Krembangan",
    highlight: false,
  },
  {
    name: "Surabaya Selatan",
    description: "Wonokromo, Wonocolo, Gayungan, Jambangan, Karangpilang",
    highlight: false,
  },
  {
    name: "Surabaya Timur",
    description: "Gubeng, Sukolilo, Mulyorejo, Rungkut, Tenggilis Mejoyo",
    highlight: false,
  },
  {
    name: "Surabaya Barat",
    description: "Benowo, Pakal, Asemrowo, Sukomanunggal, Tandes, Sambikerep",
    highlight: false,
  },
];

const extendedAreas = [
  { name: "Bandara Juanda", time: "30-45 menit" },
  { name: "Sidoarjo", time: "30-60 menit" },
  { name: "Gresik", time: "30-60 menit" },
  { name: "Mojokerto", time: "60-90 menit" },
  { name: "Malang", time: "2-3 jam" },
  { name: "Batu", time: "2.5-3 jam" },
  { name: "Bromo", time: "3-4 jam" },
  { name: "Pasuruan", time: "1.5-2 jam" },
];

const localInsights = [
  {
    title: "Jam Sibuk Surabaya",
    content: "Pagi (07:00-09:00) dan sore (16:00-19:00). Hindari jalan Ahmad Yani dan HR Muhammad di jam ini. Kami tahu jalur alternatif.",
  },
  {
    title: "Dari/Ke Bandara Juanda",
    content: "Jarak sekitar 20 km dari pusat kota. Waktu tempuh bisa 30 menit (lancar) hingga 90 menit (macet). Kami selalu memperhitungkan buffer waktu.",
  },
  {
    title: "Wisata Populer dari Surabaya",
    content: "Bromo, Kawah Ijen, Malang, Batu, Pantai Selatan. Semua bisa dijangkau dalam day trip atau overnight dengan armada kami.",
  },
];

export default function AreaCakupanPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <MapPin className="h-4 w-4" />
              Area Layanan
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Area & Cakupan Layanan
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Kami melayani seluruh area Surabaya dan sekitarnya. Sopir kami paham betul 
              kondisi lalu lintas dan jalur terbaik di setiap wilayah.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl opacity-0 animate-fade-up">
            Area Utama: Surabaya
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {primaryAreas.map((area, index) => (
              <div
                key={area.name}
                className={`rounded-xl border p-6 transition-all hover:shadow-card opacity-0 animate-fade-up ${
                  area.highlight
                    ? "border-primary/30 bg-accent"
                    : "border-border bg-card"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className={`h-5 w-5 ${area.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-semibold text-foreground">{area.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Areas */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-8 opacity-0 animate-fade-up">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Jangkauan Lebih Luas
            </h2>
            <p className="text-muted-foreground">
              Kami juga melayani perjalanan ke luar kota Surabaya dengan estimasi waktu tempuh berikut:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extendedAreas.map((area, index) => (
              <div
                key={area.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{area.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {area.time}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground opacity-0 animate-fade-up delay-200">
            *Estimasi waktu dalam kondisi lalu lintas normal. Kami selalu memperhitungkan 
            buffer waktu untuk memastikan Anda sampai tepat waktu.
          </p>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 opacity-0 animate-fade-up">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Kami Paham Surabaya
            </h2>
            <p className="text-muted-foreground">
              Lebih dari sekadar peta—kami tahu karakteristik dan dinamika kota ini.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {localInsights.map((insight, index) => (
              <div
                key={insight.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="mb-3 font-semibold text-foreground">{insight.title}</h3>
                <p className="text-muted-foreground">{insight.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Tujuan Anda Tidak Ada di Daftar?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tidak masalah. Hubungi kami untuk konsultasi—kami bisa mengakomodasi 
              hampir semua tujuan di Jawa Timur.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" />
                Tanya Ketersediaan
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
