# Progress: Menambahkan Tombol Pesan ke Card Armada

## Status: ✅ SELESAI

### 1. HomePage.tsx - Armada Section ✅

- ✅ **Update armadaCars data**: Ditambahkan field `capacity` untuk setiap armada
- ✅ **Update card structure**: Ditambahkan tombol "Pesan" di setiap card
- ✅ **WhatsApp Link**: Generate pesan spesifik dengan nama armada dan kapasitas
- ✅ **Styling**: Menggunakan Button variant "whatsapp" dengan icon MessageCircle
- ✅ **Message Template**: "Halo, saya tertarik dengan [NAMA ARMADA] kapasitas [KAPASITAS]. Bisa info lebih detail?"

### 2. ArmadaPage.tsx - Detail Cards ✅

- ✅ **Generate WhatsApp Link**: Buat function `generateCarWhatsAppLink` untuk pesan spesifik per armada
- ✅ **Add Order Button**: Ditambahkan tombol "Pesan Armada Ini" di setiap detail card
- ✅ **Message Content**: Include nama armada dan kategori dalam pesan
- ✅ **Positioning**: Button ditempatkan di bawah section "Cocok untuk"
- ✅ **Message Template**: "Halo, saya ingin pesan [NAMA ARMADA] kategori [KATEGORI]. Bisa cek ketersediaan dan harga?"

### 3. Implementation Details ✅

- **WhatsApp Number**: 85373293935 (sudah dikonfigurasi)
- **Button Styling**: variant="whatsapp", size="sm", full width
- **Icons**: MessageCircle untuk HomePage, Phone untuk ArmadaPage
- **Target**: \_blank dengan rel="noopener noreferrer"
- **Mobile Responsive**: Button menggunakan full width untuk kemudahan akses mobile

## Files yang Diedit:

1. ✅ `src/pages/HomePage.tsx` - Tombol ditambahkan di armada cards
2. ✅ `src/pages/ArmadaPage.tsx` - Tombol ditambahkan di detail cards

## Testing yang Diperlukan:

1. ✅ WhatsApp link generation berfungsi dengan benar
2. ✅ Message template sesuai dengan armada yang dipilih
3. ✅ Button responsive di mobile dan desktop
4. ✅ Styling konsisten dengan design system

## Hasil Akhir:

- **HomePage**: 9 card armada dengan tombol "Pesan" yang spesifik per armada
- **ArmadaPage**: 26 detail card dengan tombol "Pesan Armada Ini" yang spesifik per kategori
- **WhatsApp Integration**: Fully functional dengan pesan yang informatif dan call-to-action yang jelas
