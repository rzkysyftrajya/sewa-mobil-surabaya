import { Shield, Eye, Lock, Database, Globe, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Shield className="h-4 w-4" />
              Kebijakan Privasi
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Bagaimana kami melindungi dan mengelola informasi pribadi Anda
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Pendahuluan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Eye className="h-6 w-6 text-primary" />
                  Pendahuluan
                </h2>
                <p className="text-muted-foreground">
                  Sewa Mobil Surabaya ("kami", "perusahaan") berkomitmen untuk
                  melindungi privasi dan keamanan informasi pribadi Anda.
                  Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan,
                  menggunakan, dan melindungi informasi yang Anda berikan kepada
                  kami.
                </p>
              </div>

              {/* Informasi yang Kami Kumpulkan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Database className="h-6 w-6 text-primary" />
                  Informasi yang Kami Kumpulkan
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      1. Informasi Pribadi
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Nama lengkap dan nomor telepon</li>
                      <li>Alamat email (jika disediakan)</li>
                      <li>Alamat penjemputan dan tujuan</li>
                      <li>
                        Informasi dokumen identitas (KTP, SIM) untuk verifikasi
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      2. Informasi Teknis
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Alamat IP dan informasi perangkat</li>
                      <li>Data cookie dan analytics website</li>
                      <li>Informasi browser dan sistem operasi</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      3. Informasi Komunikasi
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Riwayat percakapan WhatsApp</li>
                      <li>Email dan pesan yang Anda kirimkan</li>
                      <li>Umpan balik dan ulasan layanan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bagaimana Kami Menggunakan Informasi */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Globe className="h-6 w-6 text-primary" />
                  Bagaimana Kami Menggunakan Informasi
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>Menyediakan Layanan:</strong> Memproses pemesanan,
                      mengatur penjemputan, dan memberikan layanan sewa mobil
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>Komunikasi:</strong> Mengirim konfirmasi, update
                      status, dan informasi penting terkait layanan
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>Keamanan:</strong> Verifikasi identitas,
                      pencegahan fraud, dan keamanan armada
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>Peningkatan Layanan:</strong> Analisis data untuk
                      meningkatkan kualitas pelayanan
                    </p>
                  </div>
                </div>
              </div>

              {/* Perlindungan Data */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Lock className="h-6 w-6 text-primary" />
                  Perlindungan Data
                </h2>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Kami menerapkan langkah-langkah keamanan yang ketat untuk
                    melindungi informasi pribadi Anda:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Enkripsi data saat transfer dan penyimpanan</li>
                    <li>Akses terbatas hanya untuk персонал yang berwenang</li>
                    <li>Pemantauan keamanan secara berkala</li>
                    <li>Backup data yang aman dan terenkripsi</li>
                    <li>
                      Penghapusan data sesuai periode retensi yang ditentukan
                    </li>
                  </ul>
                </div>
              </div>

              {/* Berbagi Informasi */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold"> Berbagi Informasi</h2>
                <p className="text-muted-foreground mb-4">
                  Kami TIDAK menjual, menyewakan, atau mentransfer informasi
                  pribadi Anda kepada pihak ketiga, kecuali dalam situasi
                  berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>
                    Untuk mematuhi kewajiban hukum atau permintaan pengadilan
                  </li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami</li>
                  <li>
                    Dengan penyedia layanan yang terpercaya (dengan kontrak保密)
                  </li>
                </ul>
              </div>

              {/* Hak Anda */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">Hak Anda</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Sebagai subjek data, Anda memiliki hak berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Hak Akses:</strong> Meminta salinan data pribadi
                      yang kami miliki
                    </li>
                    <li>
                      <strong>Hak Koreksi:</strong> Meminta perbaikan data yang
                      tidak akurat
                    </li>
                    <li>
                      <strong>Hak Penghapusan:</strong> Meminta penghapusan data
                      dalam kondisi tertentu
                    </li>
                    <li>
                      <strong>Hak Pembatasan:</strong> Meminta pembatasan
                      pemrosesan data
                    </li>
                    <li>
                      <strong>Hak Portabilitas:</strong> Meminta transfer data
                      kepada pihak lain
                    </li>
                    <li>
                      <strong>Hak Keberatan:</strong> Menolak pemrosesan data
                      untuk tujuan tertentu
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cookie */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">
                  Cookie dan Teknologi Pelacakan
                </h2>
                <p className="text-muted-foreground mb-4">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman
                  pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Cookie Esensial:</strong> Diperlukan untuk fungsi
                    dasar website
                  </li>
                  <li>
                    <strong>Cookie Analytics:</strong> Membantu kami memahami
                    penggunaan website
                  </li>
                  <li>
                    <strong>Cookie Preferensi:</strong> Menyimpan pengaturan dan
                    preferensi Anda
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Anda dapat mengatur browser untuk menolak cookie, namun
                  beberapa fitur website mungkin tidak berfungsi dengan baik.
                </p>
              </div>

              {/* Perubahan Kebijakan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">
                  Perubahan Kebijakan Privasi
                </h2>
                <p className="text-muted-foreground">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke
                  waktu. Perubahan akan diinformasikan melalui website dan/atau
                  media komunikasi lainnya. Kami encourage Anda untuk meninjau
                  kebijakan ini secara berkala.
                </p>
              </div>

              {/* Kontak */}
              <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Mail className="h-6 w-6" />
                  Hubungi Kami
                </h2>
                <p className="mb-4 opacity-90">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini
                  atau ingin menggunakan hak Anda terkait data pribadi, hubungi
                  kami:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>WhatsApp:</strong> +62 853-7329-3935
                  </p>
                  <p>
                    <strong>Email:</strong> info@sewamobilsurabaya.id
                  </p>
                  <p>
                    <strong>Alamat:</strong> Surabaya, Jawa Timur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
