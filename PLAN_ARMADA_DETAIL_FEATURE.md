# Rencana Fitur Detail Armada di HomePage

## Tujuan

Menambahkan fitur detail pada section armada di halaman home, termasuk:

1. Deskripsi singkat untuk setiap armada
2. Tombol "Detail" yang mengarah ke halaman armada dengan anchor
3. Tombol "Pesan" yang tetap mengarah ke WhatsApp

## Analisis File

- **HomePage.tsx**: Berisi section armada dengan array `armadaCars` dan tampilan grid
- **ArmadaPage.tsx**: Halaman khusus armada dengan kategorisasi mobil lengkap

## Rencana Implementasi

### 1. Update Data Armada di HomePage.tsx

- **File**: `/home/roby047/sewa-mobil-surabaya/src/pages/HomePage.tsx`
- **Perubahan**:
  - Tambahkan field `description` untuk setiap armada
  - Tambahkan field `slug` untuk anchor links
  - Update 9 armada yang ada

### 2. Update Tampilan Card Armada di HomePage.tsx

- **Perubahan**:
  - Tambahkan deskripsi di bawah kapasitas
  - Ubah layout menjadi 2 tombol: "Detail" dan "Pesan"
  - Tombol "Detail" mengarah ke `/armada#{slug}`
  - Tombol "Pesan" tetap WhatsApp
  - Maintain responsive design untuk mobile dan desktop

### 3. Update ArmadaPage.tsx untuk Anchor Support

- **File**: `/home/roby047/sewa-mobil-surabaya/src/pages/ArmadaPage.tsx`
- **Perubahan**:
  - Tambahkan ID/anchor untuk setiap mobil berdasarkan slug
  - Implementasi scroll otomatis ke mobil yang diklik
  - Tambahkan highlighting untuk mobil yang dipilih

### 4. Implementasi Fitur Scroll Anchor

- **Perubahan**:
  - Gunakan `useEffect` untuk handle URL hash
  - Scroll otomatis ke elemen yang sesuai
  - Highlight mobil yang dipilih

## Data Armada dengan Deskripsi

1. **Toyota Alphard**: "MPV Luxury premium dengan captain seat dan fitur kenyamanan класса tinggi"
2. **Toyota Hiace Premio**: "Minibus premium 12-16 penumpang dengan AC ducting dan interior mewah"
3. **Toyota Hiace Commuter**: "Minibus ekonomis 12-16 penumpang, cocok untuk rombongan dengan budget terjangkau"
4. **Toyota Innova Zenix**: "MPV hybrid modern dengan teknologi terdepan dan fitur keselamatan lengkap"
5. **Mitsubishi Pajero**: "SUV premium 4WD tangguh untuk off-road dan tampilan prestisius"
6. **Toyota Fortuner**: "SUV diesel 4WD kokoh untuk perjalanan luar kota dan medan berat"
7. **Toyota Hilux Double Cabin**: "Pickup 4WD untuk kebutuhan logistik dan petualangan off-road"
8. **Toyota Innova Reborn**: "MPV keluarga nyaman dengan fitur lengkap dan performa handal"
9. **Toyota Avanza**: "MPV ekonomis 6-7 penumpang, pilihan populer untuk keluarga budget terbatas"

## Testing

- Test navigasi dari home ke armada dengan anchor
- Test responsive design di mobile dan desktop
- Test highlight dan scroll behavior di ArmadaPage

## Langkah Implementasi

1. Update data armadaCars di HomePage.tsx
2. Update tampilan card armada
3. Update ArmadaPage.tsx untuk support anchor
4. Test implementasi
5. Deploy dan verifikasi
