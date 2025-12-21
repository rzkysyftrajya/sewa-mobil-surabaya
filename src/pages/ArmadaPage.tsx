import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Phone,
  Users,
  Fuel,
  Settings,
  Key,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import carAvanza from "/assets/car-avanza.svg";
import carInnova from "/assets/car-innova.svg";
import carBrio from "/assets/car-brio.svg";
import carFortuner from "/assets/car-fortuner.svg";
import carXpander from "/assets/car-xpander.svg";
import carHiace from "/assets/car-hiace.svg";
import carAlphard from "/assets/car-alphard.svg";
import carPajero from "/assets/car-pajero.svg";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20sewa%20mobil%20lepas%20kunci%20di%20Surabaya`;

const carCategories = [
  {
    category: "City Car",
    description:
      "Compact, irit, mudah parkir. Cocok untuk mobilitas harian di dalam kota.",
    cars: [
      {
        name: "Honda Brio",
        image: carBrio,
        capacity: "4 penumpang",
        transmission: "Manual / Matic",
        fuel: "Bensin",
        features: ["AC", "Audio", "Power Window"],
        bestFor: "Solo traveler, couple, mobilitas harian",
      },
    ],
  },
  {
    category: "MPV Ekonomis",
    description:
      "Pilihan populer untuk keluarga kecil dengan budget terjangkau.",
    cars: [
      {
        name: "Toyota Avanza",
        image: carAvanza,
        capacity: "6-7 penumpang",
        transmission: "Manual / Matic",
        fuel: "Bensin",
        features: ["AC Double Blower", "Audio", "Power Window"],
        bestFor: "Keluarga kecil, perjalanan dalam kota",
      },
      {
        name: "Mitsubishi Xpander",
        image: carXpander,
        capacity: "7 penumpang",
        transmission: "Matic",
        fuel: "Bensin",
        features: ["AC Double Blower", "Audio Touchscreen", "Cruise Control"],
        bestFor: "Keluarga, perjalanan nyaman",
      },
    ],
  },
  {
    category: "MPV Premium",
    description: "Kenyamanan ekstra untuk perjalanan bisnis atau keluarga.",
    cars: [
      {
        name: "Toyota Innova Reborn",
        image: carInnova,
        capacity: "6-7 penumpang",
        transmission: "Matic",
        fuel: "Bensin / Diesel",
        features: ["AC Auto", "Captain Seat (opsional)", "Audio Premium"],
        bestFor: "Bisnis, keluarga, kenyamanan maksimal",
      },
    ],
  },
  {
    category: "SUV",
    description:
      "Tangguh untuk berbagai medan, cocok untuk perjalanan luar kota.",
    cars: [
      {
        name: "Toyota Fortuner",
        image: carFortuner,
        capacity: "6-7 penumpang",
        transmission: "Matic",
        fuel: "Diesel",
        features: ["4WD (opsional)", "AC Auto", "Leather Seat"],
        bestFor: "Luar kota, medan berat, tampil prestisius",
      },
    ],
  },
  {
    category: "Luxury MPV",
    description:
      "Kenyamanan premium untuk perjalanan executivo atau keluarga terhormat.",
    cars: [
      {
        name: "Toyota Alphard",
        image: carAlphard,
        capacity: "7 penumpang",
        transmission: "Matic",
        fuel: "Hybrid / Bensin",
        features: ["Captain Seat", "Ottoman", "Premium Audio", "Dual AC"],
        bestFor: "Executivo, acara formal, keluarga mewah",
      },
    ],
  },
  {
    category: "SUV Premium",
    description: "Kekuatan dan kemewahan untuk petualangan premium.",
    cars: [
      {
        name: "Mitsubishi Pajero",
        image: carPajero,
        capacity: "7 penumpang",
        transmission: "Matic",
        fuel: "Diesel",
        features: ["4WD", "Hill Start Assist", "Premium Interior", "Sunroof"],
        bestFor: "Off-road, pegunungan, tampil prestisius",
      },
    ],
  },
  {
    category: "Van / Minibus",
    description: "Kapasitas besar untuk rombongan atau keluarga besar.",
    cars: [
      {
        name: "Toyota Hiace",
        image: carHiace,
        capacity: "12-16 penumpang",
        transmission: "Manual",
        fuel: "Diesel",
        features: ["AC Ducting", "Bagasi Luas", "Kursi Nyaman"],
        bestFor: "Rombongan, study tour, gathering",
      },
    ],
  },
];

const requirements = [
  "KTP asli yang masih berlaku",
  "SIM A asli yang masih berlaku",
  "Deposit atau jaminan (kendaraan/dokumen)",
  "Nomor HP aktif untuk konfirmasi",
];

const notes = [
  "Ketersediaan unit tergantung booking yang ada",
  "Kondisi mobil dicek bersama sebelum dan sesudah pemakaian",
  "BBM ditanggung penyewa, dikembalikan sesuai kondisi awal",
  "Denda keterlambatan pengembalian berlaku",
];

export default function ArmadaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Key className="h-4 w-4" />
              Sewa Lepas Kunci
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Pilihan Armada Lepas Kunci
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Sudah familiar dengan Surabaya dan ingin menyetir sendiri? Pilih
              mobil yang sesuai kebutuhan Anda. Semua armada terawat dan siap
              pakai.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="border-b border-border bg-accent/50 py-6">
        <div className="container">
          <div className="flex items-start gap-3 text-sm">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-muted-foreground">
              <strong className="text-foreground">Catatan:</strong> Halaman ini
              menampilkan jenis armada yang tersedia. Untuk ketersediaan unit,
              harga terkini, dan syarat lengkap, silakan hubungi kami langsung
              via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {carCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold">{category.category}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {category.cars.map((car) => (
                  <div
                    key={car.name}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-[4/3] bg-muted md:aspect-auto">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-3 text-xl font-semibold text-foreground">
                          {car.name}
                        </h3>

                        <div className="mb-4 space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            {car.capacity}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Settings className="h-4 w-4 text-primary" />
                            {car.transmission}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Fuel className="h-4 w-4 text-primary" />
                            {car.fuel}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Fitur
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {car.features.map((feature) => (
                              <span
                                key={feature}
                                className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-lg bg-accent p-3">
                          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Cocok untuk
                          </div>
                          <p className="text-sm text-foreground">
                            {car.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Syarat */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Syarat Sewa Lepas Kunci
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Catatan */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-up delay-100">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Ketentuan Penting
                </h3>
                <ul className="space-y-3">
                  {notes.map((note) => (
                    <li key={note} className="flex items-start gap-3">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-up">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Mau Sewa atau Tanya Dulu?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Hubungi kami untuk cek ketersediaan, harga terkini, atau
              konsultasi mobil mana yang paling cocok untuk kebutuhan Anda.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/layanan">
                  Lihat Layanan Lain
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
