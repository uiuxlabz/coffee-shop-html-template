# KOPPEE — Artisan Coffee Shop Template

A warm, premium HTML template for coffee shops and cafes. Built with semantic HTML, vanilla CSS with a full design system, and lightweight JavaScript. No frameworks, no dependencies, no build step required.

**Tagline:** *Brewed with Passion, Served with Love.*

---

## Preview

Open `index.html` in any browser to preview the template.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | [index.html](index.html) | Hero, menu highlights, about preview, testimonials, visit CTA, footer |
| About | [about.html](about.html) | Origin story, values, team bios |
| Menu | [menu.html](menu.html) | Drink and food categories with prices, filterable by type |
| Contact | [contact.html](contact.html) | Form with validation, hours, location, map placeholder |

---

## Features

- **Design System:** Custom properties for colors, typography, spacing, shadows, and transitions
- **Typography:** Cabin (headings) + Work Sans (body) loaded from Google Fonts
- **Color Palette:** Brown `#92400E`, Cream `#FEF3C7`, Dark `#1C1917`, Warm `#F5F0EB`
- **Responsive:** Three breakpoints — desktop, tablet (980px), mobile (720px)
- **Animations:** IntersectionObserver-powered reveal effects with delay classes
- **Accessibility:** Semantic HTML5, ARIA labels, prefers-reduced-motion support
- **Mobile Navigation:** Animated burger menu with slide-in panel
- **Form Handling:** Client-side validation with success/error states
- **Active Navigation:** Auto-highlights current page link
- **Dynamic Year:** Footer copyright updates automatically via `[data-year]`
- **Menu Filtering:** Category filter buttons on the menu page
- **Zero Dependencies:** Pure HTML, CSS, and vanilla JavaScript

---

## File Structure

```
coffee-shop-html-template/
├── index.html
├── about.html
├── menu.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
        ├── hero.jpg
        ├── highlight-1.jpg
        ├── highlight-2.jpg
        ├── highlight-3.jpg
        ├── about-preview.jpg
        ├── about-story.jpg
        ├── avatar-1.jpg
        ├── avatar-2.jpg
        ├── avatar-3.jpg
        ├── team-1.jpg
        ├── team-2.jpg
        ├── team-3.jpg
        ├── team-4.jpg
        ├── menu-espresso.jpg
        ├── menu-latte.jpg
        ├── menu-cappuccino.jpg
        └── ... (17 images total)
```

---

## Customization

### Colors
Edit the CSS custom properties in `assets/css/style.css` under `:root`:

```css
:root {
  --clr-brown: #92400E;
  --clr-cream: #FEF3C7;
  --clr-dark: #1C1917;
  --clr-warm: #F5F0EB;
}
```

### Content
All content is inline HTML — no build step, no templating engine. Edit any `.html` file directly.

### Images
Replace the placeholder images in `assets/img/` with your own. Recommended sizes:
- Hero: 1920x1080px
- Card images: 800x600px
- Avatars: 400x400px

---

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## License

This template is provided as-is for personal and commercial use.
