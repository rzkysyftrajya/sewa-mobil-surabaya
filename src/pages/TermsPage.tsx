import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Users,
  Shield,
  Clock,
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <FileText className="h-4 w-4" />
              Syarat & Ketentuan
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Ketentuan penggunaan layanan sewa mobil Surabaya
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
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Pendahuluan
                </h2>
                <p className="text-muted-foreground">
                  Selamat datang di Sewa Mobil Surabaya. Dengan menggunakan
                  layanan kami, Anda menyetujui untuk terikat dengan syarat dan
                  ketentuan berikut. Harap baca dengan saksama sebelum
                  menggunakan layanan kami.
                </p>
              </div>

              {/* Definisi */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">Definisi</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>"Perusahaan"</strong> merujuk pada Sewa Mobil
                      Surabaya sebagai penyedia layanan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>"Pelanggan"</strong> merujuk pada individu atau
                      pihak yang menggunakan layanan kami
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>"Armada"</strong> merujuk pada kendaraan yang
                      disewakan oleh perusahaan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">
                      <strong>"Layanan"</strong> merujuk pada semua jenis услуги
                      sewa mobil yang ditawarkan
                    </p>
                  </div>
                </div>
              </div>

              {/* Syarat Pemesanan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Users className="h-6 w-6 text-primary" />
                  Syarat Pemesanan
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      1. Dokumen yang Diperlukan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>KTP asli yang masih berlaku</li>
                      <li>SIM A asli yang masih berlaku</li>
                      <li>Deposit atau jaminan (kendaraan/dokumen)</li>
                      <li>Nomor HP aktif untuk konfirmasi</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      2. Persyaratan Sopir
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Memiliki SIM A yang masih berlaku</li>
                      <li>Berpengalaman mengemudikan kendaraan</li>
                      <li>Mengetahui jalanan Surabaya dan sekitarnya</li>
                      <li>Berpenampilan rapi dan sopan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      3. Minimum Sewa
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Sewa harian minimum 6 jam</li>
                      <li>Sewa luar kota minimum 12 jam</li>
                      <li>Antar jemput bandara minimum 3 jam</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pembayaran */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      1. Sistem Pembayaran
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>DP 30% untuk konfirmasi pemesanan</li>
                      <li>Pelunasan sebelum kendaraan digunakan</li>
                      <li>
                        Pembayaran dapat melalui transfer bank, e-wallet, atau
                        cash
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      2. Kebijakan Pengembalian
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Deposit akan dikembalikan setelah kendaraan dikembalikan
                        dalam kondisi baik
                      </li>
                      <li>
                        Potongan deposit untuk kerusakan atau keterlambatan
                      </li>
                      <li>Proses refund maksimal 3-5 hari kerja</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tanggung Jawab */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Shield className="h-6 w-6 text-primary" />
                  Tanggung Jawab
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      1. Tanggung Jawab Perusahaan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Menyediakan armada dalam kondisi prima dan layak jalan
                      </li>
                      <li>Memberikan sopir yang berpengalaman dan berizin</li>
                      <li>Menjamin armada telah diasuransikan</li>
                      <li>Memberikan pelayanan customer service 24/7</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      2. Tanggung Jawab Pelanggan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Menjaga kebersihan dan kondisi kendaraan</li>
                      <li>
                        Menggunakan kendaraan sesuai tujuan yang disepakati
                      </li>
                      <li>Melaporkan kerusakan atau masalah segera</li>
                      <li>
                        Membayar biaya perbaikan kerusakan yang disebabkan
                        kelalaian
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Asuransi */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">
                  Asuransi dan Keamanan
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Semua armada kami telah diasuransikan sesuai ketentuan yang
                    berlaku:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Asuransi Komprehensif:</strong> Melindungi
                      kendaraan dari kerusakan dan pencurian
                    </li>
                    <li>
                      <strong>Asuransi Penumpang:</strong> Memberikan
                      perlindungan bagi passengers
                    </li>
                    <li>
                      <strong>Klaim Asuransi:</strong> Tim kami akan membantu
                      proses klaim
                    </li>
                    <li>
                      <strong>Biaya Klaim:</strong> Ditanggung oleh asuransi,
                      kecuali untuk kerusakan karena kelalaian
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ketentuan Khusus */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Clock className="h-6 w-6 text-primary" />
                  Ketentuan Khusus
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      1. Keterlambatan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Grace period 15 menit untuk penjemputan</li>
                      <li>Denda keterlambatan sesuai kesepakatan</li>
                      <li>
                        Biaya tunggu sopir jika terjadi keterlambatan yang
                        berkepanjangan
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      2. Pembatalan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Pembatalan H-1: DP dikembalikan 100%</li>
                      <li>Pembatalan H-3: DP dikembalikan 50%</li>
                      <li>Pembatalan H-7: DP dikembalikan 25%</li>
                      <li>Pembatalan mendadak: DP hangus</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">3. Luar Kota</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Persetujuan perusahaan untuk perjalanan luar kota</li>
                      <li>Biaya BBM ditanggung pelanggan</li>
                      <li>Biaya tol dan parkir ditanggung pelanggan</li>
                      <li>Maksimal radius 200km dari Surabaya</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Larangan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  Larangan
                </h2>
                <p className="text-muted-foreground mb-4">
                  DILARANG keras melakukan hal-hal berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Menggunakan kendaraan untuk tujuan ilegal atau melawan hukum
                  </li>
                  <li>Memindahkan kendaraan tanpa izin perusahaan</li>
                  <li>Membawa kendaraan ke luar wilayah yang disepakati</li>
                  <li>Menggunakan kendaraan untuk balapan atau aksioff-road</li>
                  <li>
                    Merokok atau membawa barang terlarang di dalam kendaraan
                  </li>
                  <li>Menggunakan kendaraan untuk mengangkut barang ilegal</li>
                  <li>Menyewa kendaraan atas nama palsu atau dokumen palsu</li>
                  <li>Menyalahgunakan armada untuk tindakan kriminal</li>
                </ul>
              </div>

              {/* Penyelesaian Sengketa */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">
                  Penyelesaian Sengketa
                </h2>
                <p className="text-muted-foreground">
                  Jika terjadi perselisihan atau keluhan, kami encourage untuk
                  menyelesaikan secara musyawarah terlebih dahulu. Jika tidak
                  dapat diselesaikan, maka akan diselesaikan melalui jalur hukum
                  yang berlaku di Indonesia dengan domicilio hukum di Surabaya.
                </p>
              </div>

              {/* Perubahan Ketentuan */}
              <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold">Perubahan Ketentuan</h2>
                <p className="text-muted-foreground">
                  Perusahaan berhak mengubah syarat dan ketentuan ini
                  sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Perubahan
                  akan berlaku segera setelah dipublikasikan di website kami.
                </p>
              </div>

              {/* Kontak */}
              <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-card">
                <h2 className="mb-6 text-2xl font-bold">Hubungi Kami</h2>
                <p className="mb-4 opacity-90">
                  Untuk pertanyaan terkait syarat dan ketentuan ini, silakan
                  hubungi kami:
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
