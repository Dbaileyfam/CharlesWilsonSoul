import { upcomingEvents } from '../data/events'

export function Events() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        On the road
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Upcoming events
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Dates with Charles Wilson and The Soul Town Sinners. Replace the sample
        entry in <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">src/data/events.ts</code>{' '}
        as bookings are confirmed.
      </p>

      <ul className="mt-12 space-y-4">
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
    </div>
  )
}
