# Image swap guide — Navurja Quartz Crucibles site

This site currently uses placeholder graphics so nothing renders broken. Replace them
with real crucible photos whenever you're ready. All image assets live in `attached_assets/`
and are referenced through the `@assets/...` import alias.

## Product card images (Products section) — DONE (real photos in place)
These three cards now use real product photos in `attached_assets/`:

| File | Product card |
|---|---|
| `crucible-cz.png`     | High-Purity Fused Quartz Czochralski Crucibles |
| `crucible-opaque.png` | Opaque Fused Quartz Crucibles |
| `crucible-lab.webp`   | Cylindrical Transparent Quartz Crucibles |

To replace any of them, drop a new file into `attached_assets/` and update the matching
import at the top of `client/src/components/Products.tsx`. Recommended ~640×360 (16:9) or
square (the card crops to 16:9).

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
