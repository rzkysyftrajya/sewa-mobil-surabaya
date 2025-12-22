# TODO - Implementasi Fitur Detail Armada di HomePage

## Status: ✅ COMPLETED

### Step 1: Update Data Armada di HomePage.tsx

- [x] Buat rencana implementasi
- [x] Update array armadaCars dengan deskripsi dan slug
- [x] Verifikasi data armada sesuai dengan ArmadaPage

### Step 2: Update Tampilan Card Armada di HomePage.tsx

- [x] Update layout card dengan 2 tombol (Detail + Pesan)
- [x] Implementasi link anchor ke ArmadaPage
- [x] Maintain responsive design untuk mobile dan desktop

### Step 3: Update ArmadaPage.tsx untuk Anchor Support

- [x] Tambahkan ID untuk setiap mobil berdasarkan slug
- [x] Implementasi scroll otomatis ke mobil yang dipilih
- [x] Tambahkan highlighting untuk mobil yang diklik

### Step 4: Testing dan Verifikasi

- [x] Test navigasi dari home ke armada dengan anchor
- [x] Test responsive design di mobile dan desktop
- [x] Test highlight dan scroll behavior di ArmadaPage

### Step 5: Deploy dan Finalisasi

- [x] Review final code
- [x] Build dan test
- [x] Documentasi implementasi

## Fitur yang Telah Diimplementasikan:

### HomePage.tsx Updates:

1. **Data Enhancement**: Setiap armada sekarang memiliki `description` dan `slug`
2. **UI Enhancement**: Card armada sekarang memiliki 2 tombol:
   - "Detail" - mengarah ke `/armada#{slug}` dengan scroll otomatis
   - "Pesan" - tetap mengarah ke WhatsApp
3. **Responsive Design**: Berfungsi baik di desktop grid dan mobile carousel
4. **Line Clamp**: Deskripsi dibatasi 2 baris dengan ellipsis

### ArmadaPage.tsx Updates:

1. **Anchor Support**: Setiap mobil memiliki ID berdasarkan slug
2. **Scroll Behavior**: Otomatis scroll ke mobil yang diklik dari HomePage
3. **Highlight Effect**: Mobil yang dipilih mendapat highlight visual selama 3 detik
4. **Smooth Animation**: Scroll dengan behavior smooth dan offset yang tepat

### Data Armada yang Diperbarui:

- Toyota Alphard, Hiace Premio, Hiace Commuter, Innova Zenix, Pajero, Fortuner, Hilux Double Cabin, Innova Reborn, Avanza (9 armada total)
