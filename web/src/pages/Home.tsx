import { Link } from 'react-router-dom'

const heroPortraitSrc = `${import.meta.env.BASE_URL}images/charles-wilson-hero.png`

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201, 169, 98, 0.25), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(92, 26, 40, 0.45), transparent 50%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="min-w-0 max-w-2xl flex-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                Live soul & blues
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream md:text-6xl lg:text-7xl">
                Charles Wilson
              </h1>
              <p className="mt-4 max-w-xl text-lg text-cream/75 md:text-xl">
                The Crown Prince of Soul — with{' '}
                <span className="text-cream">The Soul Town Sinners</span>.
                Retro soul, blues, and stage energy built for rooms that want
                to feel something real.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold-dim"
                >
                  Upcoming dates
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-cream transition hover:border-gold/50 hover:text-gold"
                >
                  Book the band
                </Link>
                <Link
                  to="/epk"
                  className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-3 text-sm font-medium text-gold underline-offset-4 hover:underline"
                >
                  Press kit (EPK)
                </Link>
              </div>
            </div>
            <div className="flex shrink-0 justify-center lg:justify-end lg:pt-2">
              <img
                src={heroPortraitSrc}
                alt="Charles Wilson"
                width={400}
                height={400}
                className="aspect-square w-full max-w-[200px] rounded-2xl object-cover object-center opacity-100 ring-1 ring-white/25 sm:max-w-[220px] md:max-w-[240px] lg:max-w-[220px]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-medium text-cream md:text-4xl">
              The sound
            </h2>
            <p className="mt-4 leading-relaxed text-cream/70">
              Charles Wilson is a versatile soul singer who moves between the
              blues and retro soul with authority — a live show that reads
              across generations and keeps a dance floor honest.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Chicago roots, nightclub-honed timing, and a lineage tied to the
              greats: he is the nephew of the late blues legend{' '}
              <span className="text-cream/90">Little Milton</span>, and has
              shared stages with artists including B.B. King, James Brown,
              Albert King, Otis Clay, Koko Taylor, and many more.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Accolades
            </h3>
            <ul className="mt-6 space-y-4 text-cream/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Nominated twice for the W.C. Handy Awards (Blues Music Awards).
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Two Soul Blues Album of the Year nominations from The Blues
                Foundation.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Festivals and stages including Chicago Blues Festival, King
                Biscuit Blues Festival, Waterfront Blues Festival, and overseas
                appearances such as Piazza Blues and Lugano Blues.
              </li>
            </ul>
            <Link
              to="/media"
              className="mt-8 inline-block text-sm font-semibold text-gold hover:underline"
            >
              Watch & listen →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
