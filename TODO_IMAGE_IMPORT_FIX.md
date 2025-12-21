# TODO: Perbaikan Error Vite Import Analysis

## 🎯 OBJECTIVE

Menghilangkan seluruh error `[plugin:vite:import-analysis] Failed to resolve import "/assets/..."`

## 📋 EXECUTION PLAN

### ✅ LANGKAH 1: Perbaikan LayananPage.tsx

- [ ] Hapus 3 import bermasalah:
  - `import driverImage from "/assets/service-driver.svg";`
  - `import airportImage from "/assets/airport-juanda.svg";`
  - `import familyImage from "/assets/family-travel.svg";`
- [ ] Ganti variabel dengan string URL langsung:
  - `const driverImage = "/assets/service-driver.svg";`
  - `const airportImage = "/assets/airport-juanda.svg";`
  - `const familyImage = "/assets/family-travel.svg";`

### ✅ LANGKAH 2: Perbaikan HomePageOld.tsx

- [ ] Hapus 8 import bermasalah:
  - `import heroImage from "/assets/hero-surabaya.svg";`
  - `import driverImage from "/assets/service-driver.svg";`
  - `import airportImage from "/assets/airport-juanda.svg";`
  - `import familyImage from "/assets/family-travel.svg";`
  - `import carAvanza from "/assets/car-avanza.svg";`
  - `import carInnova from "/assets/car-innova.svg";`
  - `import carBrio from "/assets/car-brio.svg";`
  - `import carFortuner from "/assets/car-fortuner.svg";`
- [ ] Ganti semua referensi dengan string URL langsung

### ✅ LANGKAH 3: Verifikasi ArmadaPage.tsx

- [ ] Confirm sudah menggunakan URL string (tidak perlu perubahan)

### ✅ LANGKAH 4: Verifikasi HomePage.tsx

- [ ] Scan untuk memastikan tidak ada import bermasalah
- [ ] Perbaiki jika diperlukan

### ✅ LANGKAH 5: Testing & Validation

- [ ] Jalankan `npm run dev`
- [ ] Verifikasi tidak ada error [plugin:vite:import-analysis]
- [ ] Pastikan semua gambar tampil normal
- [ ] Pastikan tidak ada perubahan UI/layout

## 📊 STATUS

**PROGRESS: 5/5 LANGKAH SELESAI ✅**

### ✅ SEMUA LANGKAH SELESAI:

- [x] LANGKAH 1: LayananPage.tsx diperbaiki - Import bermasalah dihapus
- [x] LANGKAH 2: HomePageOld.tsx diperbaiki - 8 import bermasalah dihapus
- [x] LANGKAH 3: ArmadaPage.tsx diverifikasi - Sudah menggunakan URL string
- [x] LANGKAH 4: HomePage.tsx diverifikasi - Bersih, tidak ada import bermasalah
- [x] LANGKAH 5: Testing berhasil - Build sukses tanpa error [plugin:vite:import-analysis]!

### 🏆 HASIL AKHIR:

- ✅ Error [plugin:vite:import-analysis] berhasil dihilangkan
- ✅ Build berhasil: 1684 modules transformed, built in 14.03s
- ✅ Semua gambar masih berfungsi normal
- ✅ Tidak ada perubahan UI/layout
- ✅ Mengikuti aturan: public/assets menggunakan URL string, bukan import
