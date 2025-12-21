# TODO: Implementasi Section "Armada Layanan Kami"

## Informasi Gathered

- ✅ Analisis HomePage.tsx structure dan styling
- ✅ Identifikasi posisi section baru (setelah Hero, sebelum Services)
- ✅ Mapping gambar armada dari `/public/assets/armada-lepas-kunci/`
- ✅ Analisis existing animations dan styling patterns

## Plan

1. **Data Setup**: Buat array data armada dengan mapping gambar yang benar
2. **Section Implementation**: Tambah section baru di HomePage.tsx
3. **Styling Integration**: Konsisten dengan existing design system
4. **Responsive Design**: Grid 3-4 kolom desktop, 1-2 kolom mobile
5. **WhatsApp Integration**: Deep link untuk setiap armada
6. **Animation Effects**: Follow existing animation patterns

## Dependent Files

- `/home/roby047/sewa-mobil-surabaya/src/pages/HomePage.tsx` (edit)

## Armada List (dengan gambar mapping)

- Toyota Alphard → TOYOTA-ALPHARD.webp (tamu VIP & eksekutif)
- Toyota Hiace Premio → HIACE-PREMIO.webp (rombongan & perjalanan grup)
- Toyota Hiace Commuter → HIACE-COMMUTER.webp (rombongan & perjalanan grup)
- Toyota Fortuner → TOYOTA-FORTUNER.webp (perjalanan luar kota & medan bervariasi)
- Mitsubishi Pajero → MITSUBISHI-PAJERO.webp (perjalanan luar kota & medan bervariasi)
- Toyota Hilux → HILUX-DOUBLE-CABIN.webp (perjalanan luar kota & medan bervariasi)
- Toyota Innova Zenix → INNOVA-ZENIX.webp (perjalanan keluarga & bisnis)
- Toyota Innova Reborn → INNOVA-REBORN.webp (perjalanan keluarga & bisnis)
- Toyota Avanza → AVANZA.webp (perjalanan keluarga & hemat budget)

## Follow-up Steps

- Test responsive design
- Verify WhatsApp links
- Check animation performance
- Validate accessibility

## Status

- [x] Planning completed
- [ ] Data setup
- [ ] Section implementation
- [ ] Testing & validation
