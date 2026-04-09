import { Link } from 'react-router-dom'
import { featuredFlyerEvent, upcomingEvents } from '../data/events'

export function Events() {
  const base = import.meta.env.BASE_URL
  const flyerSrc = `${base}${featuredFlyerEvent.flyerImage}`
  const vendorTel = `+1${featuredFlyerEvent.vendorPhone.replace(/\D/g, '')}`

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        On the road
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Events
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Festival appearances and tour dates with Charles Wilson and The Soul
        Town Sinners.
      </p>

      <section
        className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
        aria-labelledby="featured-event-heading"
      >
        <h2
          id="featured-event-heading"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Featured appearance
        </h2>
        <p className="mt-3 font-display text-2xl text-cream md:text-3xl">
          {featuredFlyerEvent.title}
        </p>
        <p className="mt-1 text-lg text-gold">{featuredFlyerEvent.dateLabel}</p>
        <p className="mt-1 text-cream/70">
          {featuredFlyerEvent.venue} · {featuredFlyerEvent.city},{' '}
          {featuredFlyerEvent.region}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <a
            href={flyerSrc}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-white/15 ring-1 ring-white/10"
          >
            <img
              src={flyerSrc}
              alt={featuredFlyerEvent.flyerAlt}
              width={800}
              height={1200}
              className="h-auto w-full object-cover transition group-hover:opacity-95"
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="space-y-8 text-sm text-cream/80">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
                Schedule
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="text-cream/50">Gates open</span>{' '}
                  <span className="font-medium text-cream">
                    {featuredFlyerEvent.gatesOpen}
                  </span>
                </li>
                <li>
                  <span className="text-cream/50">Show starts</span>{' '}
                  <span className="font-medium text-cream">
                    {featuredFlyerEvent.showStarts}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
                Entertainment
              </h3>
              <p className="mt-3">
                Music by{' '}
                <span className="font-medium text-cream">
                  {featuredFlyerEvent.musicBy}
                </span>
                . Multi-artist lineup (see flyer).
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
                Tickets
              </h3>
              <p className="mt-3 font-medium text-cream">
                {featuredFlyerEvent.ticketPrice}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-cream/45">
                Outlets
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-cream/75">
                {featuredFlyerEvent.ticketOutlets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
                Vendors
              </h3>
              <p className="mt-3">{featuredFlyerEvent.vendorNote}</p>
              <a
                href={`tel:${vendorTel}`}
                className="mt-2 inline-block font-medium text-gold underline-offset-2 hover:underline"
              >
                {featuredFlyerEvent.vendorPhone}
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 text-xs text-cream/45">
              <p>Production: {featuredFlyerEvent.productionCredit}</p>
              <p className="mt-1">Flyer design: {featuredFlyerEvent.designCredit}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="upcoming-heading">
        <h2
          id="upcoming-heading"
          className="font-display text-2xl text-cream md:text-3xl"
        >
          Upcoming dates
        </h2>
        {upcomingEvents.length === 0 ? (
          <p className="mt-4 max-w-2xl text-cream/55">
            New shows will be listed here as they are confirmed. For booking,
            visit{' '}
            <Link
              to="/contact"
              className="font-medium text-gold underline-offset-2 hover:underline"
            >
              Contact
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {upcomingEvents.map((ev) => (
              <li
                key={ev.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div>
                  <p className="font-display text-2xl text-gold md:text-3xl">
                    {ev.date}
                  </p>
                  <p className="mt-1 font-medium text-cream">{ev.venue}</p>
                  <p className="text-sm text-cream/55">
                    {ev.city}, {ev.region}
                  </p>
                  {ev.note ? (
                    <p className="mt-2 text-sm text-cream/45">{ev.note}</p>
                  ) : null}
                </div>
                {ev.ticketUrl ? (
                  <a
                    href={ev.ticketUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold/50 px-6 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink"
                  >
                    Tickets
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
