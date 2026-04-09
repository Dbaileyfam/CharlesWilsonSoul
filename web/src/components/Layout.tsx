import { NavLink, Outlet } from 'react-router-dom'
import { social } from '../data/links'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-medium tracking-wide transition-colors',
    isActive ? 'text-gold' : 'text-cream/70 hover:text-cream',
  ].join(' ')

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          <NavLink to="/" className="group text-left">
            <p className="font-display text-xl font-semibold tracking-tight text-cream md:text-2xl">
              Charles Wilson
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/90">
              Crown Prince of Soul
            </p>
          </NavLink>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 md:gap-x-8"
            aria-label="Main"
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
            <NavLink to="/media" className={navLinkClass}>
              Media
            </NavLink>
            <NavLink to="/epk" className={navLinkClass}>
              EPK
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-ink-soft">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="font-display text-lg text-cream">Charles Wilson</p>
            <p className="mt-1 text-sm text-cream/60">
              with The Soul Town Sinners
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
            >
              Facebook
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={social.soundcloud}
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
            >
              SoundCloud
            </a>
            <a
              href={social.youtubeCharlesWilson}
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
            >
              YouTube
            </a>
          </div>
        </div>
        <p className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Charles Wilson. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
