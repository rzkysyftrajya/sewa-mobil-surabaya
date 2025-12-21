# TODO: Fix ArmadaPage.tsx Car Images

## Information Gathered

### Current State Analysis

- ArmadaPage.tsx currently imports SVG images using `import` statement (forbidden)
- Images are located in `public/assets/armada-lepas-kunci/` directory
- Available images are in .webp format
- Current imports need to be replaced with direct URL strings

### Available Car Images

```
AGYA.webp
ALL-NEW-AVANZA.webp
AVANZA.webp
Brio.webp
HIACE-COMMUTER.webp
HIACE-PREMIO.webp
HILUX-DOUBLE-CABIN.webp
INNOVA-REBORN.webp
INNOVA-ZENIX.webp
ISUZU-ELF-MINIBUS (2).webp
ISUZU-ELF-MINIBUS.webp
MITSUBISHI-PAJERO.webp
RUSH.webp
SUZUKI-XL7.webp
TERIOS.webp
TOYOTA-ALPHARD.webp
TOYOTA-FORTUNER.webp
XPANDER.webp
```

### Current Car Categories Mapping

1. Honda Brio → Brio.webp ✅
2. Toyota Avanza → AVANZA.webp ✅
3. Mitsubishi Xpander → XPANDER.webp ✅
4. Toyota Innova Reborn → INNOVA-REBORN.webp ✅
5. Toyota Fortuner → TOYOTA-FORTUNER.webp ✅
6. Toyota Alphard → TOYOTA-ALPHARD.webp ✅
7. Mitsubishi Pajero → MITSUBISHI-PAJERO.webp ✅
8. Toyota Hiace → HIACE-PREMIO.webp ✅

## Plan

### Step 1: Remove All Import Statements

- Remove all `import carX from "/assets/car-x.svg";` lines
- Remove the following imports:
  - `import carAvanza from "/assets/car-avanza.svg";`
  - `import carInnova from "/assets/car-innova.svg";`
  - `import carBrio from "/assets/car-brio.svg";`
  - `import carFortuner from "/assets/car-fortuner.svg";`
  - `import carXpander from "/assets/car-xpander.svg";`
  - `import carHiace from "/assets/car-hiace.svg";`
  - `import carAlphard from "/assets/car-alphard.svg";`
  - `import carPajero from "/assets/car-pajero.svg";`

### Step 2: Update Car Image URLs

Replace all car.image references with direct URL strings:

1. Honda Brio: `image: "/assets/armada-lepas-kunci/Brio.webp"`
2. Toyota Avanza: `image: "/assets/armada-lepas-kunci/AVANZA.webp"`
3. Mitsubishi Xpander: `image: "/assets/armada-lepas-kunci/XPANDER.webp"`
4. Toyota Innova Reborn: `image: "/assets/armada-lepas-kunci/INNOVA-REBORN.webp"`
5. Toyota Fortuner: `image: "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp"`
6. Toyota Alphard: `image: "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp"`
7. Mitsubishi Pajero: `image: "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp"`
8. Toyota Hiace: `image: "/assets/armada-lepas-kunci/HIACE-PREMIO.webp"`

### Step 3: Test and Validate

- Check if all image files exist and are accessible
- Verify no import-analysis errors
- Test build and dev server functionality

## Dependent Files to be Edited

- `src/pages/ArmadaPage.tsx` - Main file to be updated

## Followup Steps

1. Run development server to test changes
2. Verify images load correctly in browser
3. Check for any console errors
4. Test build process

## Success Criteria

- ✅ No import statements for images
- ✅ All images use direct URL strings
- ✅ All referenced image files exist
- ✅ No [plugin:vite:import-analysis] errors
- ✅ Build and dev server work normally
- ✅ Images display correctly in the UI
