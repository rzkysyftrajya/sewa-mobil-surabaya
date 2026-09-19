import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Clock, 
  Car, 
  CheckCircle, 
  Phone, 
  Shield, 
  Users, 
  CreditCard,
  ArrowRight,
  Star
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Hubungi Kami",
    description: "Chat via WhatsApp atau telepon. Ceritakan kebutuhan Anda—kapan, kemana, berapa orang.",
  },
  {
    step: 2,
    icon: Clock,
    title: "Konfirmasi Cepat",
    description: "Dalam hitungan menit, kami akan memberikan rekomendasi armada dan estimasi biaya.",
  },
  {
    step: 3,
    icon: Car,
    title: "Mobil Siap",
    description: "Di hari H, mobil dan sopir (jika diperlukan) sudah standby di lokasi yang disepakati.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Perjalanan Lancar",
    description: "Nikmati perjalanan Anda. Pembayaran bisa dilakukan setelah layanan selesai.",
  },
];

const commitments = [
  {
    icon: Shield,
    title: "Armada Terawat",
    description: "Setiap mobil dicek kondisi mesin, kebersihan, dan kelengkapan sebelum digunakan. Kami tidak kompromi soal keamanan.",
  },
  {
    icon: Users,
    title: "Sopir Profesional",
    description: "Sopir kami bukan sekadar bisa menyetir—mereka ramah, sopan, dan paham etika pelayanan. Background check dilakukan untuk semua sopir.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Kami menghargai waktu Anda. Keterlambatan dari pihak kami? Kami berikan kompensasi.",
  },
  {
    icon: CreditCard,
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi. Harga yang kami sampaikan di awal adalah harga final—kecuali ada perubahan rute dari Anda.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Jelas",
    description: "Ada pertanyaan atau perubahan? Tim kami responsif dan mudah dihubungi. Tidak ada drama 'tidak diangkat' atau 'slow response'.",
  },
  {
    icon: Star,
    title: "Fleksibel",
    description: "Kebutuhan berubah mendadak? Kami coba akomodasi sebaik mungkin. Bisnis kami dibangun di atas kepercayaan, bukan kontrak kaku.",
  },
];

const notUs = [
  "Klaim 'terbaik' atau 'termurah' tanpa bukti",
  "Janji berlebihan yang tidak bisa ditepati",
  "Armada yang tidak jelas kondisinya",
  "Sopir yang tidak terlatih",
];

export default function KenapaKamiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Kenapa Memilih Kami?
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Bukan janji kosong. Ini cara kami bekerja dan komitmen yang kami pegang 
              dalam melayani kebutuhan transportasi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Cara Kerja yang Sederhana
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Tidak perlu proses berbelit. Dari kontak pertama sampai Anda tiba di tujuan, 
              kami buat sesederhana mungkin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-muted-foreground/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Komitmen Kami kepada Anda
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Ini bukan sekadar kata-kata marketing. Ini standar yang kami terapkan 
              setiap hari dalam melayani pelanggan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card opacity-0 animate-fade-up">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Yang Bukan Gaya Kami
              </h2>
              <ul className="space-y-4">
                {notUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      ✕
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-accent p-6">
                <p className="text-foreground">
                  Kami lebih suka bekerja dengan jujur dan membangun hubungan jangka panjang. 
                  Banyak pelanggan kami adalah repeat customer yang sudah percaya dengan layanan kami 
                  bertahun-tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Siap Mencoba Layanan Kami?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tidak ada kewajiban. Hubungi kami, ceritakan kebutuhan Anda, dan lihat 
              sendiri bagaimana cara kami bekerja.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/layanan">
                  Lihat Layanan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
