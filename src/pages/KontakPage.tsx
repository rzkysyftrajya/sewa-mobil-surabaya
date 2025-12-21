import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Cara tercepat untuk menghubungi kami. Biasanya dibalas dalam 5 menit.",
    value: "0812-3456-7890",
    action: WHATSAPP_LINK,
    actionLabel: "Chat Sekarang",
    primary: true,
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Untuk pemesanan mendadak atau percakapan langsung.",
    value: "0812-3456-7890",
    action: `tel:+${WHATSAPP_NUMBER}`,
    actionLabel: "Telepon",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Untuk pertanyaan detail, proposal corporate, atau dokumen.",
    value: "info@sewamobilsurabaya.com",
    action: "mailto:info@sewamobilsurabaya.com",
    actionLabel: "Kirim Email",
    primary: false,
  },
];

const operationalInfo = [
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "24 Jam, 7 Hari Seminggu",
    subtext: "Termasuk hari libur nasional",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    content: "Surabaya, Jawa Timur",
    subtext: "Pickup & dropoff di seluruh area Surabaya",
  },
];

export default function KontakPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Hubungi Kami
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Siap membantu kebutuhan transportasi Anda. Konsultasi gratis, tanpa kewajiban booking.
              Kami responsif dan mudah dihubungi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`rounded-2xl border p-6 shadow-card transition-all hover:shadow-elevated opacity-0 animate-fade-up ${
                  method.primary
                    ? "border-primary/30 bg-accent"
                    : "border-border bg-card"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  method.primary ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                }`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{method.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{method.description}</p>
                <p className="mb-4 text-lg font-medium text-foreground">{method.value}</p>
                <Button
                  variant={method.primary ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {method.actionLabel}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Info */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {operationalInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-foreground">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-card opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold">Tidak Perlu Sungkan</h2>
            <p className="mb-6 text-muted-foreground">
              Kami paham bahwa memilih layanan transportasi butuh pertimbangan. 
              Tidak ada pertanyaan yang terlalu kecil atau permintaan yang terlalu spesifik. 
              Hubungi kami untuk konsultasi—benar-benar gratis dan tanpa tekanan untuk booking.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Mulai Chat WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Biasanya dibalas dalam 5 menit pada jam operasional
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
