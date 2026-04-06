import { Link } from 'react-router-dom'
import { social } from '../data/links'

const assetRow = (
  label: string,
  detail: string,
  status: 'ready' | 'soon',
) => (
  <div className="flex flex-col gap-2 border-b border-white/10 py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="font-medium text-cream">{label}</p>
      <p className="text-sm text-cream/50">{detail}</p>
    </div>
    <span
      className={
        status === 'ready'
          ? 'text-xs font-semibold uppercase tracking-wider text-gold'
          : 'text-xs font-semibold uppercase tracking-wider text-cream/40'
      }
    >
      {status === 'ready' ? 'On request' : 'Coming soon'}
    </span>
  </div>
)

export function EPK() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        For promoters & press
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Electronic press kit
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        One-pagers, approved bios, and production details for Charles Wilson
        and The Soul Town Sinners. Swap “coming soon” rows for download links
        when PDFs and photo packs are ready.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Short bio
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              Charles Wilson, known as the Crown Prince of Soul, delivers retro
              soul and blues with Chicago roots and road-tested showmanship.
              Backed by The Soul Town Sinners, his sets honor the lineage of
              classic soul while staying immediate and electric for modern
              audiences.
            </p>
            <p className="mt-4 leading-relaxed text-cream/75">
              Nephew of the late Little Milton; nominated for multiple Blues
              Music Awards and Blues Foundation honors; festival and club
              appearances across the U.S. and Europe.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-burgundy/15 p-8 md:p-10">
            <h2 className="font-display text-2xl text-cream">Downloads</h2>
            <p className="mt-2 text-sm text-cream/55">
              Wire these to static files in <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/</code> when available.
            </p>
            <div className="mt-4">
              {assetRow(
                'EPK PDF',
                'Bio, credits, highlights, contact block',
                'soon',
              )}
              {assetRow(
                'Hi-res photos',
                'Press-approved portraits & live shots',
                'soon',
              )}
              {assetRow(
                'Stage plot / input list',
                'For FOH and festival production',
                'soon',
              )}
              {assetRow(
                'Logos & wordmarks',
                'Vector and PNG on dark / light',
                'soon',
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16 rounded-2xl border border-white/10 p-8 md:p-10">
        <h2 className="font-display text-2xl text-cream">Booking & representation</h2>
        <p className="mt-3 max-w-2xl text-cream/65">
          For private events and agency routing, Bandstand Entertainment lists
          Charles Wilson as a premiere entertainer — use the link below or the
          contact form for routing.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={social.bandstand}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink"
          >
            Bandstand Entertainment
          </a>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
          >
            Contact form
          </Link>
        </div>
      </section>
    </div>
  )
}
