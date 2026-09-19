import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, BookOpen, HelpCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20sewa%20mobil%20di%20Surabaya`;

const faqCategories = [
  {
    title: "Pemesanan & Proses",
    icon: BookOpen,
    questions: [
      {
        q: "Bagaimana cara memesan mobil?",
        a: "Hubungi kami via WhatsApp atau telepon. Sampaikan tanggal, tujuan, durasi, dan jumlah penumpang. Kami akan memberikan rekomendasi armada dan estimasi biaya dalam hitungan menit. Tidak perlu DP untuk konsultasi—Anda hanya bayar saat konfirmasi pemesanan.",
      },
      {
        q: "Berapa lama waktu minimal pemesanan?",
        a: "Minimal 12 jam untuk sewa harian. Untuk antar jemput bandara atau perjalanan singkat, tidak ada minimal waktu—kami menghitung berdasarkan rute dan layanan yang diperlukan.",
      },
      {
        q: "Bisa booking mendadak atau di hari yang sama?",
        a: "Bisa, selama armada tersedia. Untuk pemesanan mendadak, hubungi langsung via telepon untuk respons lebih cepat. Kami usahakan akomodasi sebaik mungkin.",
      },
      {
        q: "Apakah ada DP atau uang muka?",
        a: "Untuk pemesanan reguler, kami minta DP 20-30% sebagai konfirmasi. Pelunasan dilakukan setelah layanan selesai. Untuk pelanggan repeat atau corporate, skema pembayaran bisa disesuaikan.",
      },
    ],
  },
  {
    title: "Lepas Kunci vs Dengan Sopir",
    icon: HelpCircle,
    questions: [
      {
        q: "Apa bedanya sewa lepas kunci dengan pakai sopir?",
        a: "Lepas kunci: Anda menyetir sendiri. Cocok jika Anda familiar dengan Surabaya dan butuh fleksibilitas penuh. Kami minta jaminan (KTP + deposit atau kendaraan pribadi sebagai jaminan). Dengan sopir: Kami sediakan sopir berpengalaman. Anda tinggal duduk nyaman. Cocok untuk tamu dari luar kota, perjalanan bisnis, atau jika Anda ingin santai selama perjalanan.",
      },
      {
        q: "Apakah sopir bisa standby menunggu?",
        a: "Ya. Untuk paket dengan sopir, sopir akan standby selama durasi sewa. Jika ada jeda waktu (misalnya Anda meeting), sopir menunggu di lokasi yang disepakati.",
      },
      {
        q: "Bagaimana jika saya mau ganti antara lepas kunci dan pakai sopir?",
        a: "Bisa dikonsultasikan. Jika di tengah perjalanan Anda butuh sopir (atau sebaliknya), hubungi kami untuk pengaturan—dengan catatan ketersediaan sopir.",
      },
    ],
  },
  {
    title: "Perjalanan Luar Kota",
    icon: HelpCircle,
    questions: [
      {
        q: "Bisa sewa untuk perjalanan luar kota Surabaya?",
        a: "Tentu. Kami melayani perjalanan ke seluruh Jawa Timur: Malang, Batu, Bromo, Pasuruan, Mojokerto, bahkan sampai Banyuwangi atau Surabaya-Jogja. Untuk perjalanan jauh, kami rekomendasikan paket dengan sopir.",
      },
      {
        q: "Bagaimana perhitungan biaya untuk luar kota?",
        a: "Kami hitung berdasarkan tujuan, durasi, dan kebutuhan menginap sopir (jika overnight). Biaya bahan bakar sudah termasuk untuk paket tertentu, atau bisa ditanggung pengguna—tergantung kesepakatan.",
      },
      {
        q: "Apakah sopir paham rute wisata seperti Bromo?",
        a: "Ya. Sopir kami sudah berpengalaman mengantarkan wisatawan ke destinasi populer. Mereka tahu timing terbaik, tempat makan lokal, dan spot foto yang bagus.",
      },
    ],
  },
  {
    title: "Pembayaran & Biaya",
    icon: HelpCircle,
    questions: [
      {
        q: "Metode pembayaran apa saja yang diterima?",
        a: "Transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, DANA), dan tunai. Untuk corporate, kami bisa terbitkan invoice dengan terms pembayaran yang disepakati.",
      },
      {
        q: "Apakah ada biaya tambahan yang harus saya tahu?",
        a: "Harga yang kami sampaikan sudah all-in untuk rute dan durasi yang disepakati. Biaya tambahan hanya muncul jika ada: (1) perpanjangan waktu, (2) perubahan rute signifikan, (3) tol dan parkir (biasanya ditanggung pengguna). Semua biaya tambahan akan dikomunikasikan sebelum dikenakan.",
      },
      {
        q: "Apakah ada diskon untuk pemakaian rutin atau corporate?",
        a: "Ya. Untuk pemakaian berulang atau kontrak jangka panjang, kami berikan harga khusus. Hubungi kami untuk diskusi kebutuhan corporate Anda.",
      },
    ],
  },
  {
    title: "Keamanan & Asuransi",
    icon: HelpCircle,
    questions: [
      {
        q: "Apakah mobil diasuransikan?",
        a: "Ya. Semua armada kami memiliki asuransi kendaraan yang aktif. Untuk kecelakaan atau kejadian tak terduga, prosedur klaim akan kami bantu sepenuhnya.",
      },
      {
        q: "Bagaimana jika terjadi kerusakan atau kecelakaan?",
        a: "Untuk sewa lepas kunci: kerusakan akibat kelalaian pengguna menjadi tanggung jawab pengguna (sesuai kesepakatan awal). Untuk sewa dengan sopir: kerusakan akibat kesalahan sopir menjadi tanggung jawab kami. Kecelakaan karena force majeure ditangani sesuai prosedur asuransi.",
      },
      {
        q: "Apakah sopir di-background check?",
        a: "Ya. Semua sopir kami melalui proses verifikasi identitas, pengecekan SIM, dan track record. Kami tidak mempekerjakan sopir yang tidak memenuhi standar keamanan kami.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Pertanyaan yang Sering Ditanyakan
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Jawaban untuk pertanyaan umum seputar layanan sewa mobil di Surabaya. 
              Tidak menemukan jawaban Anda? Langsung hubungi kami.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={category.title} className="opacity-0 animate-fade-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`${catIndex}-${qIndex}`}
                      className="rounded-xl border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-card"
                    >
                      <AccordionTrigger className="py-5 text-left font-medium hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-up">
            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Masih Ada Pertanyaan?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tidak perlu ragu untuk bertanya langsung. Tim kami siap membantu 
              menjawab pertanyaan spesifik tentang kebutuhan Anda.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" />
                Tanya via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
