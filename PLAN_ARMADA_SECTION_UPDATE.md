# Plan: Update Armada Section to "Pilihan Armada Layanan"

## Information Gathered:

- ✅ Found "Enhanced Armada Lepas Kunci Section" in HomePage.tsx
- ✅ Located existing `armadaServices` array with current armada data
- ✅ Confirmed required images are available in `/public/assets/armada-lepas-kunci/`
- ✅ Identified section header: "Pilihan Armada untuk Sewa Lepas Kunci"

## Plan: Detailed Code Update

### 1. Change Section Title

**Location:** HomePage.tsx - Enhanced Armada Lepas Kunci Section header
**Current:** "Pilihan Armada untuk Sewa Lepas Kunci"
**Target:** "Pilihan Armada untuk Layanan"

### 2. Replace armadaServices Array Content

**Location:** HomePage.tsx - armadaServices constant
**Action:** Replace current 9 armada entries with exactly these 8 cars:

Required Armada (in this exact order):

1. Toyota Alphard → `/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp`
2. Toyota Hiace Premio → `/assets/armada-lepas-kunci/HIACE-PREMIO.webp`
3. Toyota Hiace Commuter → `/assets/armada-lepas-kunci/HIACE-COMMUTER.webp`
4. Mitsubishi Pajero → `/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp`
5. Toyota Fortuner → `/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp`
6. Toyota Innova Zenix → `/assets/armada-lepas-kunci/INNOVA-ZENIX.webp`
7. Toyota Innova Reborn → `/assets/armada-lepas-kunci/INNOVA-REBORN.webp`
8. Toyota Hilux Double Cabin → `/assets/armada-lepas-kunci/HILUX-DOUBLE-CABIN.webp`

### 3. Data Structure Requirements

Each armada entry must include:

- `name`: Car model name
- `description`: Brief description
- `image`: String path (NOT import) `/assets/armada-lepas-kunci/FILENAME.webp`
- `category`: Car category
- `whatsappMessage`: WhatsApp message template

### 4. Preserve Everything Else

- ❌ DO NOT change layout structure
- ❌ DO NOT modify component styling
- ❌ DO NOT touch ArmadaPage.tsx
- ❌ DO NOT add new functionality
- ✅ DO keep responsive behavior
- ✅ DO maintain CTA buttons (WhatsApp/Detail)
- ✅ DO preserve card animations and hover effects

## Dependent Files to be edited:

1. `/home/roby047/sewa-mobil-surabaya/src/pages/HomePage.tsx` - Primary file containing the armada section

## Follow-up steps after editing:

1. Run `npm run dev` to test the changes
2. Verify no Vite import errors
3. Check responsive behavior on mobile
4. Confirm all 8 armada cards display correctly
5. Test WhatsApp CTA functionality

## Success Criteria:

- ✅ Section title changed to "Pilihan Armada untuk Layanan"
- ✅ Exactly 8 armada entries as specified
- ✅ All images load from `/assets/armada-lepas-kunci/` directory
- ✅ No import errors in Vite
- ✅ Responsive design maintained
- ✅ No horizontal scroll issues
