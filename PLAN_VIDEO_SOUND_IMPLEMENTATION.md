# Plan Implementasi Fitur Suara Video Cinematic

## Informasi yang Dikumpulkan

- Video section saat ini menggunakan `autoPlay` dan `muted`
- Ada 5 video files di `/public/armada-video/`
- Video ada di desktop grid view dan mobile carousel view
- Saat ini menggunakan IntersectionObserver untuk play/pause

## Rencana Implementasi

### 1. Modifikasi Video Properties

- Hapus `autoPlay` agar tidak autoplay
- Hapus `muted` agar ada suara
- Tambah `controls={false}` untuk custom controls

### 2. Custom Play/Pause Controls

- Tambahkan overlay play button di setiap video
- Implementasi play/pause functionality
- Tambahkan mute/unmute button
- Status indicator (playing/paused)

### 3. User Interaction Handling

- Video hanya play saat user klik play button
- Pause saat user klik pause
- Sound tetap aktif (tidak muted)

### 4. Responsive Design

- Pastikan controls bekerja di desktop dan mobile
- Touch-friendly buttons untuk mobile
- Consistent styling dengan theme website

### 5. Performance Considerations

- Load video secara lazy (preload="none")
- Optimize untuk bandwidth
- Maintain smooth scrolling performance

## Files yang Akan Diedit

- `src/pages/HomePage.tsx` - Update video section

## Langkah Implementasi

1. Buat custom video player component
2. Update video elements di desktop grid
3. Update video elements di mobile carousel
4. Test functionality di desktop dan mobile
5. Polish styling dan user experience

## User Experience Goals

- User dapat memilih video mana yang ingin diputar
- Ada suara dari video yang diputar
- Kontrol yang mudah dan intuitif
- Tidak autoplay untuk menghemat bandwidth
