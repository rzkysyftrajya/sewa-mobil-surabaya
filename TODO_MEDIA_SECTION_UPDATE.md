# Plan Update Section Media - Video dan Dokumentasi

## Information Gathered:

- Current HomePage.tsx memiliki section "Video Cinematic Section" dan "Dokumentasi Pelayanan Kami Section"
- Video files tersedia: armada-1.mp4 sampai armada-5.mp4 (5 files) di folder public/armada-video/
- Documentation images tersedia: dokumentasi-1.webp sampai dokumentasi-29.webp (29 files) di folder public/dokumentasi/
- Current implementation menggunakan static data, perlu diganti dengan dynamic mapping

## Plan:

### 1. Update Section "Armada Kami dalam Video"

- Replace existing "Video Cinematic Section"
- Dynamic mapping semua video dari public/armada-video/
- Use <video> tag dengan autoPlay, muted, loop, playsInline
- Responsive layout dengan className="w-full h-auto my-2"
- Display dalam grid atau carousel format

### 2. Update Section "Dokumentasi Pelayanan Kami"

- Replace existing "Dokumentasi Pelayanan Kami Section"
- Dynamic mapping semua 29 images dari public/dokumentasi/
- Use <img> dengan className="w-full h-auto object-contain"
- Alt text: "Dokumentasi {index+1}"
- Grid layout untuk responsive display

### 3. Code Structure:

- Buat array mapping untuk video files
- Buat array mapping untuk documentation images
- Implementasi JSX dengan proper Tailwind classes
- Ensure responsive design dan accessibility

## Dependent Files to be edited:

- src/pages/HomePage.tsx - Update existing sections

## Followup steps:

- Test responsive layout di berbagai screen sizes
- Verify video autoplay functionality
- Check image loading performance
- Validate accessibility dengan proper alt texts
