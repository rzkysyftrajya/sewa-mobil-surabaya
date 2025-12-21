# PLAN: Armada Image Display Fix

## TASK ANALYSIS

**Problem**: Armada images (3375×3375, 1:1 ratio) are being cropped in HomePage.tsx and ArmadaPage.tsx
**Root Cause**: Using `object-cover` instead of `object-contain` with incorrect aspect ratios
**Solution**: Implement proper aspect-square wrapper with object-contain

## FILES TO EDIT

### 1. ArmadaPage.tsx

**Current Issue**:

- Line ~248: `<div className="aspect-[4/3] bg-muted md:aspect-auto">`
- Line ~251: `<img className="h-full w-full object-cover" />`

**Required Changes**:

- Replace `aspect-[4/3]` with `aspect-square`
- Replace `object-cover` with `object-contain`
- Add proper wrapper div structure

### 2. HomePage.tsx

**Current Issue**:

- Line ~730: `<div className="relative aspect-[4/3] overflow-hidden bg-muted/50">`
- Line ~739: `<img className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />`

**Required Changes**:

- Replace `aspect-[4/3]` with `aspect-square`
- Replace `object-cover` with `object-contain`
- Ensure image doesn't get cropped while maintaining hover effects

## IMPLEMENTATION PLAN

### Phase 1: Fix ArmadaPage.tsx

1. Locate image container div (line ~248)
2. Change `aspect-[4/3]` to `aspect-square`
3. Change `object-cover` to `object-contain` on img element
4. Verify image loads properly

### Phase 2: Fix HomePage.tsx

1. Locate armada car image containers (line ~730)
2. Change `aspect-[4/3]` to `aspect-square`
3. Change `object-cover` to `object-contain`
4. Ensure hover effects still work (scale, rotate)
5. Test responsive behavior

### Phase 3: Add Overflow Prevention

1. Add `overflow-x-hidden` to armada sections to prevent horizontal scroll
2. Verify mobile responsiveness
3. Test on different screen sizes

## VERIFICATION CHECKLIST

- [ ] Images display full size without cropping
- [ ] Consistent display on desktop & mobile
- [ ] No horizontal overflow/scroll
- [ ] Hover effects still functional
- [ ] No Vite build errors
- [ ] Image loading performance maintained

## EXPECTED RESULT

All armada images will display in their full 1:1 aspect ratio using the correct wrapper structure:

```tsx
<div className="relative w-full aspect-square">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-contain"
    loading="lazy"
  />
</div>
```
