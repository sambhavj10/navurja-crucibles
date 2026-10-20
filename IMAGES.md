# Image swap guide — Navurja Quartz Crucibles site

This site currently uses placeholder graphics so nothing renders broken. Replace them
with real crucible photos whenever you're ready. All image assets live in `attached_assets/`
and are referenced through the `@assets/...` import alias.

## Product card images (Products section)
Replace these three SVG placeholders with real product photos (JPG/PNG is fine).
Recommended size: ~640×360 (16:9), landscape.

| Placeholder file (in `attached_assets/`) | Product card | How to swap |
|---|---|---|
| `crucible-ptype.svg` | P-Type CZ Quartz Crucibles | Add your photo, then edit the import in `client/src/components/Products.tsx` |
| `crucible-ntype.svg` | N-Type Bubble-Free Crucibles | same |
| `crucible-g12.svg`   | G12 Large-Format Crucibles | same |

To swap, drop e.g. `ptype.jpg` into `attached_assets/` and change the import at the top of
`client/src/components/Products.tsx`:
```ts
import pTypeImage from '@assets/ptype.jpg';   // was crucible-ptype.svg
```

## Hero background (Hero section)
The hero uses a dark gradient (no photo). To use a real photo — e.g. a CZ furnace or a
quartz crucible close-up — uncomment/add an import in `client/src/components/Hero.tsx` and
add `url(${heroImage})` to the `backgroundImage` style (there's a comment marking the spot).

## Partner / customer logos (Partners section)
`client/src/components/Partners.tsx` shows three dashed placeholder slots labelled
"Ingot Manufacturer", etc. To use real logos, drop logo files into `attached_assets/`,
import them, and set each entry's `logoUrl` to the imported image (a `null` logoUrl shows
the text placeholder).

## Logo & favicon
- Header logo: `attached_assets/navurja-logo.png` (unchanged Navurja wordmark).
- Favicon: `client/public/favicon.svg` (brand mark).
