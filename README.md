# Uttarahalli SRS Homestay & PG - Production Ready Codebase

This project is a premium, statically generated Next.js 16 (App Router) website tailored for a luxury homestay. It uses Tailwind CSS, Framer Motion, and shadcn/ui.

## Deployment Notes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
npm start
```

### 4. Deploy to Vercel
This project is pre-configured and optimized for [Vercel](https://vercel.com).
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in your Vercel dashboard.
3. Vercel will automatically detect Next.js and apply the correct build settings.
4. Deploy!

---

## Configuration

**All business information** (phone numbers, emails, addresses, Map URLs) is stored centrally to avoid hardcoding in the UI.

Update the following files before launch:
1. `src/config/contact.ts` - Contains all contact information and Google Maps Embed URL.
2. `src/config/seo.ts` - Contains site metadata, description, and Open Graph information.

---

## Final Asset Checklist 

The following placeholder assets must be replaced before the final production launch. 

### 1. Metadata & Icons
- [ ] `src/app/favicon.ico` - Replace with the actual brand favicon.
- [ ] `src/app/opengraph-image.png` - Replace with a 1200x630 branded image for social sharing (Facebook, LinkedIn).
- [ ] `src/app/twitter-image.png` - Replace with a 1200x630 branded image for Twitter sharing.

### 2. Video Assets
- [ ] **Hero Background Video:** Update the `<source>` tag in `src/components/sections/hero.tsx` (or place the video in `public/videos/hero.mp4` and reference it).
- [ ] **Video Tour Video:** Update the `<source>` tag in `src/components/sections/video-tour.tsx` (or place in `public/videos/tour.mp4`).

### 3. Image Assets
- [ ] **About Section:** Update the `src` attribute of the Next.js `<Image>` in `src/components/sections/about.tsx`.
- [ ] **Gallery Section:** Replace the URLs in the `galleryImages` array in `src/components/sections/gallery.tsx`.

### 4. Content
- [ ] **Testimonials:** Replace the placeholder testimonials array in `src/components/sections/testimonials.tsx` with genuine customer reviews.
- [ ] **Google Maps Embed:** Go to Google Maps -> Share -> Embed a map -> Copy the `src` URL inside the `<iframe>` and paste it into `src/config/contact.ts` under `googleMapsEmbedUrl`.
