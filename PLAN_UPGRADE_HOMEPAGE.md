# Plan: Upgrade Halaman Beranda Menjadi Lebih Menarik

## Informasi yang Dikumpulkan:

**Kondisi Saat Ini:**

- Halaman beranda sudah memiliki struktur yang baik dengan hero section, layanan, armada, social proof, dan CTA
- Menggunakan animasi fade-up dasar
- Design system yang solid dengan color scheme orange/burnt orange
- 5 section utama sudah cukup komprehensif

**Potensi Improvement yang Bisa Diterapkan:**

## Plan Upgrade:

### 1. **Tambahkan Section Testimonials (Ulasan Pelanggan)**

- **Tujuan:** Meningkatkan trust dan credibility
- **Implementasi:**
  - Carousel testimonials dengan foto profil
  - Rating bintang
  - Quote yang compelling
  - Auto-play dengan pause on hover

### 2. **Tambahkan Statistics Section (Angka Impressive)**

- **Tujuan:** Menunjukkan expertise dan experience
- **Implementasi:**
  - Counter animation untuk angka (contoh: 1000+ pelanggan, 50+ armada)
  - Background pattern yang subtle
  - Grid layout dengan icon

### 3. **Tambahkan Quick Booking Process (Langkah Pesan)**

- **Tujuan:** Membuat proses booking terlihat mudah
- **Implementasi:**
  - 4 step process: Pilih Layanan → Pilih Armada → Konfirmasi → Selesai
  - Icon dan deskripsi untuk setiap step
  - Timeline visual

### 4. **Tambahkan FAQ Section (Pertanyaan Umum)**

- **Tujuan:** Mengatasi objection dan pertanyaan umum
- **Implementasi:**
  - Accordion component yang sudah tersedia
  - 6-8 pertanyaan umum
  - Collapsible untuk UX yang baik

### 5. **Enhanced Visual Effects**

- **Tujuan:** Membuat halaman lebih engaging
- **Implementasi:**
  - Parallax effect pada hero section
  - Better hover animations
  - Smooth scrolling enhancement
  - Loading animations untuk images

### 6. **Improved Call-to-Action**

- **Tujuan:** Meningkatkan conversion
- **Implementasi:**
  - Sticky floating CTA button
  - Multiple CTA buttons di berbagai section
  - Better button design dengan gradients

### 7. **Enhanced Image Gallery**

- **Tujuan:** Showcase armada dan layanan
- **Implementasi:**
  - Interactive image gallery dengan lightbox effect
  - Hover effects dengan info overlay
  - Navigation arrows

## File yang Akan Diedit:

- `src/pages/HomePage.tsx` (file utama untuk semua enhancement)

## Komponen UI yang Akan Digunakan:

- `Card` untuk testimonials dan statistics
- `Accordion` untuk FAQ section
- `Button` variants untuk CTA yang lebih menarik
- `Carousel` untuk testimonials (jika perlu)

## Dependent Files:

- Tidak ada file lain yang perlu diedit (self-contained dalam HomePage.tsx)

## Timeline Implementasi:

1. Tambahkan imports untuk komponen baru yang diperlukan
2. Implementasi Statistics Section dengan counter animation
3. Implementasi Testimonials Section dengan design menarik
4. Implementasi Quick Booking Process section
5. Implementasi FAQ Section dengan accordion
6. Enhanced visual effects dan animations
7. Improved CTA placement dan design
8. Testing dan fine-tuning

## Expected Result:

- Halaman beranda yang lebih engaging dan modern
- Better user experience dengan informasi yang lebih lengkap
- Higher conversion potential dengan multiple CTA dan trust signals
- Professional appearance yang meningkatkan brand credibility
