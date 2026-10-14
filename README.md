# Vedrashi Website

React (Vite) build of the Vedrashi Figma design — fully responsive (desktop → tablet → mobile).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

- `src/components/` — Header (mobile menu), Footer, Layout, 3-step Download App / OTP modal
- `src/pages/` — Home, ConsultAstrologer, BookPandit, EPuja, SpiritualStore, Blogs, About, Contact,
  ServiceDetail (`/services/:slug`), Legal (privacy, terms, refund, cancellation, cookie)
- `src/assets/` — images & icons exported from Figma, grouped per page
- `src/index.css` — design tokens (colors, gradient, radius) and global styles
