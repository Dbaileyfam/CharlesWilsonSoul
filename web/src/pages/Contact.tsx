import { useForm, ValidationError } from '@formspree/react'

const BOOKING_EMAIL = 'booking@801familystudios.com'
const FORMSPREE_FORM_ID = 'xeepdegp'

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        Bookings & inquiries
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Reach out for festivals, clubs, private events, and press.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Booking
          </h2>
          <p className="mt-4 leading-relaxed text-cream/75">
            For all booking inquiries, email{' '}
            <a
              href={`mailto:${BOOKING_EMAIL}`}
              className="font-medium text-gold underline-offset-2 hover:underline"
            >
              {BOOKING_EMAIL}
            </a>{' '}
            or call{' '}
            <a
              href="tel:+18019186782"
              className="font-medium text-gold underline-offset-2 hover:underline"
            >
              801-918-6782
            </a>
            .
          </p>
          <p className="mt-6 font-display text-lg text-cream/90">
            801 Family studios
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-burgundy/10 p-8 md:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Send a message
          </h2>
          {state.succeeded ? (
            <p className="mt-6 leading-relaxed text-cream/80">
              Thank you — your message was sent. We&apos;ll get back to you
              soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 text-left">
              <label className="block" htmlFor="contact-name">
                <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  Name
                </span>
                <input
                  id="contact-name"
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <ValidationError
                errors={state.errors}
                field="name"
                className="mt-1 text-sm text-amber-300/90"
              />

              <label className="mt-5 block" htmlFor="contact-email">
                <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  Email
                </span>
                <input
                  id="contact-email"
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>
              <ValidationError
                errors={state.errors}
                field="email"
                className="mt-1 text-sm text-amber-300/90"
              />

              <label className="mt-5 block" htmlFor="contact-phone">
                <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  Phone
                </span>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
                  placeholder="Optional"
                />
              </label>
              <ValidationError
                errors={state.errors}
                field="phone"
                className="mt-1 text-sm text-amber-300/90"
              />

              <label className="mt-5 block" htmlFor="contact-message">
                <span className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  Message
                </span>
                <textarea
                  id="contact-message"
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/30 focus:border-gold/40 focus:ring-2"
                  placeholder="Date, city, venue type, production needs…"
                />
              </label>
              <ValidationError
                errors={state.errors}
                field="message"
                className="mt-1 text-sm text-amber-300/90"
              />

              <ValidationError
                errors={state.errors}
                className="mt-4 text-sm text-amber-300/90"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-8 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-dim disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-10"
              >
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
