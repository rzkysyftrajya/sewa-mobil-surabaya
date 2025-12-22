# TODO: Image Implementation Plan

## Task Summary

Add hero section background image and update services page images without replacing existing text content.

## Information Gathered

### Current Files Examined:

1. **HomePage.tsx**: Hero section currently has gradient overlay but no background image
2. **LayananPage.tsx**: Services section has incorrect image paths pointing to SVG files instead of the actual WebP images

### Available Images:

- **Hero Section**: `/public/hero-section.webp` (pure image without text overlay)
- **Services Page**:
  - `/public/layanan/SEWA-MOBIL-HARIAN.webp`
  - `/public/layanan/SEWA-MOBIL-DENGAN-SUPIR.webp`
  - `/public/layanan/antar-jemput-bandara-juanda.webp`
  - `/public/layanan/transport-corporate-proyek.webp`
  - `/public/layanan/perjalanan-keluarga-event.webp`

## Implementation Plan

### Step 1: Hero Section Image Integration

- Add `hero-section.webp` as background image to hero section in HomePage.tsx
- Maintain existing text overlay and styling
- Ensure image doesn't interfere with text readability
- Keep gradient overlay for better text contrast

### Step 2: Services Page Image Updates

- Update image paths in LayananPage.tsx from SVG references to correct WebP paths
- Map each service to its corresponding image:
  - "Sewa Mobil Harian" → `SEWA-MOBIL-HARIAN.webp`
  - "Sewa Mobil dengan Sopir" → `SEWA-MOBIL-DENGAN-SUPIR.webp`
  - "Antar Jemput Bandara Juanda" → `antar-jemput-bandara-juanda.webp`
  - "Transport Corporate & Proyek" → `transport-corporate-proyek.webp`
  - "Perjalanan Keluarga & Event" → `perjalanan-keluarga-event.webp`

## Files to Edit:

1. `/src/pages/HomePage.tsx` - Hero section background image
2. `/src/pages/LayananPage.tsx` - Services images path updates

## Expected Outcome:

- Hero section with background image while preserving existing text and layout
- Services page with correct image references displaying actual service photos
