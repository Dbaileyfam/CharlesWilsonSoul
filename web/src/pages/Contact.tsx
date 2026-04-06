import { useState } from 'react'
import { social } from '../data/links'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Booking inquiry — ${String(data.get('name') || 'Charles Wilson site')}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone')}`,
        '',
        String(data.get('message') || ''),
      ].join('\n'),
    )
    window.location.href = `mailto:booking@example.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        Bookings & inquiries
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Reach out for festivals, clubs, private events, and press. Replace the
        placeholder email in this page with the client&apos;s real address when
        ready.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Direct lines
          </h2>
          <p className="mt-4 text-cream/70">
            <span className="text-cream/50">Bandstand Entertainment</span>
            <br />
            <a
              href="tel:+19014090081"
              className="font-display text-2xl text-gold hover:underline"
            >
              901.409.0081
            </a>
          </p>
          <p className="mt-6 text-sm text-cream/55">
            Listed on{' '}
            <a
              href={social.bandstand}
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              Bandstand Entertainment — Charles Wilson
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-burgundy/10 p-8 md:p-10"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Send a message
          </h2>
          <label className="mt-6 block text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
              Name
            </span>
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
              placeholder="Your name"
            />
          </label>
          <label className="mt-5 block text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
              Email
            </span>
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
              placeholder="you@email.com"
            />
          </label>
          <label className="mt-5 block text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
              Phone
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
              placeholder="Optional"
            />
          </label>
          <label className="mt-5 block text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={4}
              className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
              placeholder="Date, city, venue type, production needs…"
            />
          </label>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-dim md:w-auto md:px-10"
          >
            Open email draft
          </button>
          {sent ? (
            <p className="mt-4 text-left text-sm text-cream/55">
              If your mail app did not open, set a real address in{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                Contact.tsx
              </code>{' '}
              (search for{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                booking@example.com
              </code>
              ).
            </p>
          ) : null}
        </form>
      </div>
    </div>
  )
}
