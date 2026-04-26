# PrimeAdvertising

A high-converting marketing landing page for **PrimeAdvertising** — an AI growth infrastructure platform that helps agencies and consultants scale their services. Built with React and Vite, featuring scroll-driven animations, an interactive booking calendar, and a responsive dark-themed design.

## Tech Stack

| Layer       | Technology                                                                 |
|-------------|---------------------------------------------------------------------------|
| Framework   | [React 18](https://react.dev/) with JSX                                   |
| Build Tool  | [Vite 5](https://vitejs.dev/) — fast HMR and optimized production builds  |
| Styling     | CSS Modules — scoped per-component, zero naming collisions                |
| Animations  | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)              |
| Carousel    | [Swiper](https://swiperjs.com/) — touch-friendly testimonial slider       |
| Navigation  | [react-scroll](https://github.com/fisshy/react-scroll) — smooth scrolling|
| Linting     | ESLint with React-specific rules                                          |

## Architecture

The project follows a **sections + components** architecture that cleanly separates page-specific layout from reusable UI elements:

```
src/
├── components/              # Reusable UI building blocks
│   ├── Button/              # CTA button with glow effect
│   ├── Calendar/            # Interactive date picker
│   ├── StarRating/          # Rating star display
│   └── SwiperNavigation/    # Carousel navigation arrows
│
├── sections/                # Page sections (rendered once per page)
│   ├── Header/              # Fixed navbar with responsive hamburger menu
│   ├── Hero/                # Full-width hero with background image
│   ├── Statistics/          # Performance metrics bar
│   ├── About/               # "What we do" content block
│   ├── Workflow/            # Three-step process with scroll-driven progress
│   ├── WhyUs/               # Competitive advantages section
│   ├── Testimonials/        # Client reviews carousel (Swiper)
│   ├── Contact/             # Booking form with calendar integration
│   └── Footer/              # Copyright and legal links
│
├── context/                 # React Context providers
│   └── BookingContext.jsx   # Shared state for selected booking date
│
├── services/                # External API integrations
│   └── telegram.js          # Telegram Bot API for booking notifications
│
├── styles/                  # Global stylesheets
│   ├── reset.css            # CSS reset (Eric Meyer's)
│   └── global.css           # Design tokens, typography, container layout
│
├── assets/                  # Static resources
│   ├── fonts/               # DM Sans font files (woff2)
│   └── *.png, *.svg         # Images and icons
│
├── App.jsx                  # Root component — section composition
└── main.jsx                 # Entry point — React mount and AOS init
```

### Key Decisions

- **CSS Modules** over global CSS: every component gets scoped styles via `*.module.css` files, preventing class name collisions without adding a CSS-in-JS runtime.
- **Sections vs Components**: page-specific sections (rendered once) live in `sections/`, while reusable pieces live in `components/`. This makes the distinction clear when reading the codebase.
- **Services Layer**: the Telegram bot API integration is extracted from the form component into `services/telegram.js`, keeping business logic out of the view layer.
- **Context for Shared State**: the booking date is shared between the Calendar component and the Contact form via `BookingContext`, avoiding prop drilling.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/beka4kaa/PrimeAdvertisenment.git
cd PrimeAdvertisenment
npm install
```

### Environment Variables

Copy the example env file and fill in your Telegram bot credentials:

```bash
cp .env.example .env
```

| Variable                   | Description                                      |
|----------------------------|--------------------------------------------------|
| `VITE_TELEGRAM_BOT_TOKEN`  | Telegram bot token from [@BotFather](https://t.me/botfather) |
| `VITE_TELEGRAM_CHAT_ID`    | Target chat ID for booking notifications          |

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
npm run preview   # preview production build locally
```

Output is written to `dist/`.

### Linting

```bash
npm run lint
```

## Features

- **Responsive Design** — adapts from mobile (320px) to ultrawide (1400px+) with fluid breakpoints
- **Scroll Animations** — elements fade-in on scroll via AOS library
- **Scroll-Driven Progress Bars** — the Workflow section fills progress indicators as the user scrolls through each step
- **Interactive Calendar** — custom-built date picker that only allows future dates
- **Testimonial Carousel** — touch-enabled slider with custom navigation arrows
- **Telegram Integration** — form submissions are sent directly to a Telegram chat via Bot API
- **SEO Ready** — proper meta tags, Open Graph tags, semantic HTML5 elements

## License

This project is private and not licensed for redistribution.
