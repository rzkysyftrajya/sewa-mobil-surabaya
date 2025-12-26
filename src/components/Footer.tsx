import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "6285373293935";

const footerLinks = {
  layanan: [
    { label: "Sewa Mobil Harian", href: "/layanan#harian" },
    { label: "Sewa dengan Sopir", href: "/layanan#sopir" },
    { label: "Antar Jemput Bandara", href: "/layanan#bandara" },
    { label: "Transport Corporate", href: "/layanan#corporate" },
    { label: "Perjalanan Keluarga", href: "/layanan#keluarga" },
  ],
  armada: [
    { label: "City Car", href: "/armada" },
    { label: "MPV Keluarga", href: "/armada" },
    { label: "MPV Premium", href: "/armada" },
    { label: "SUV", href: "/armada" },
    { label: "Van / Minibus", href: "/armada" },
  ],
  informasi: [
    { label: "Area Layanan", href: "/area-cakupan" },
    { label: "Kenapa Kami", href: "/kenapa-kami" },
    { label: "FAQ", href: "/faq" },
    { label: "Lihat Lokasi Kami", href: "/#lokasi-kami" },
    { label: "Hubungi Kami", href: "/kontak" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Sewa Mobil Surabaya"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Solusi transportasi terpercaya di Surabaya. Melayani kebutuhan
              mobilitas Anda dengan armada terawat dan pelayanan profesional.
            </p>
          </div>

          {/* Layanan Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Armada Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Armada</h4>
            <ul className="space-y-3">
              {footerLinks.armada.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Hubungi</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    +62 853-7329-3935
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href="mailto:info@sewamobilsurabaya.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@sewamobil
                  <br />
                  surabaya.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Surabaya, Jawa Timur
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  24 Jam, Setiap Hari
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sewa Mobil Surabaya. Hak cipta
              dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Layanan Transportasi Profesional di Surabaya
          </p>
        </div>
      </div>
    </footer>
  );
}
