import { PressLinks } from '../components/PressLinks'
import {
  FEATURED_YOUTUBE_EMBED_SRC,
  SOUNDCLOUD_EMBED_SRC,
} from '../data/media'
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

function RiderRow({
  title,
  description,
  href,
  fileLabel,
}: {
  title: string
  description: string
  href: string
  fileLabel: string
}) {
  return (
    <details className="group border-b border-white/10 py-4 last:border-0 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
        <div>
          <p className="font-medium text-cream">{title}</p>
          <p className="mt-1 text-sm text-cream/50">{description}</p>
        </div>
        <span
          className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        >
          ▼
        </span>
      </summary>
      <div className="mt-4 border-l-2 border-gold/40 pl-4">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
        >
          {fileLabel}
        </a>
      </div>
    </details>
  )
}

export function EPK() {
  const base = import.meta.env.BASE_URL
  const hospitalityPdf = `${base}epk/hospitality-rider.pdf`
  const techDocx = `${base}epk/tech-rider.docx`

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
        and The Soul Town Sinners.
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
              Tap a rider to open the download link.
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
              <div className="border-b border-white/10 py-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Production riders
                </h3>
                <p className="mt-2 text-sm text-cream/50">
                  Hospitality and technical requirements for The Soul Town
                  Sinners.
                </p>
                <div className="mt-2">
                  <RiderRow
                    title="Hospitality rider"
                    description="Dressing room, meals, and guest list notes."
                    href={hospitalityPdf}
                    fileLabel="Download hospitality rider (PDF)"
                  />
                  <RiderRow
                    title="Tech rider"
                    description="Stage plot, inputs, and production specs."
                    href={techDocx}
                    fileLabel="Download tech rider (DOCX)"
                  />
                </div>
              </div>
              {assetRow(
                'Logos & wordmarks',
                'Vector and PNG on dark / light',
                'soon',
              )}
            </div>
          </div>
        </div>
      </div>

      <section
        className="mt-16 rounded-2xl border border-white/10 bg-black/20 p-8 md:p-10"
        aria-labelledby="epk-video-heading"
      >
        <h2
          id="epk-video-heading"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Featured performance
        </h2>
        <p className="mt-2 text-sm text-cream/55">
          Same featured clip as on the Media page — embed for reviewers and
          bookers.
        </p>
        <div className="mx-auto mt-8 max-w-4xl aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <iframe
            className="h-full w-full"
            src={FEATURED_YOUTUBE_EMBED_SRC}
            title="YouTube video player — Charles Wilson featured performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section
        className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-8 md:p-10"
        aria-labelledby="epk-soundcloud-heading"
      >
        <h2
          id="epk-soundcloud-heading"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          SoundCloud
        </h2>
        <p className="mt-2 text-sm text-cream/55">
          Same player as on the Media page — stream tracks and sets from the
          Crown Prince of Soul.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2">
          <iframe
            title="SoundCloud — thecrownprinceofsoul"
            width="100%"
            height={380}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={SOUNDCLOUD_EMBED_SRC}
          />
        </div>
        <a
          href={social.soundcloud}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
        >
          Open on SoundCloud →
        </a>
      </section>

      <div className="mt-16">
        <PressLinks variant="epk" />
      </div>

      <section className="mt-16 rounded-2xl border border-white/10 p-8 md:p-10">
        <h2 className="font-display text-2xl text-cream">Booking & representation</h2>
        <p className="mt-3 max-w-2xl text-cream/65">
          For private events and agency routing, Bandstand Entertainment lists
          Charles Wilson as a premiere entertainer — use the link below for
          routing.
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
        </div>
      </section>
    </div>
  )
}
