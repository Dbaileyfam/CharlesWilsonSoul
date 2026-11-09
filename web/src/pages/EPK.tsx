import { PressLinks } from '../components/PressLinks'
import {
  FEATURED_YOUTUBE_EMBED_SRC,
  SOUNDCLOUD_EMBED_SRC,
} from '../data/media'
import { epkPressPhotos } from '../data/epkPressPhotos'
import { social } from '../data/links'

const heroPortraitSrc = `${import.meta.env.BASE_URL}images/charles-wilson-hero.png`

function DownloadCard({
  eyebrow,
  title,
  description,
  href,
  fileLabel,
  download,
}: {
  eyebrow: string
  title: string
  description: string
  href: string
  fileLabel: string
  download?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      download={download}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-gold/40 hover:bg-white/[0.05] md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>
      <p className="mt-3 font-display text-2xl text-cream">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-cream/55">
        {description}
      </p>
      <span className="mt-auto inline-flex pt-6 text-sm font-semibold text-gold underline-offset-4 group-hover:underline">
        {fileLabel}
      </span>
    </a>
  )
}

export function EPK() {
  const base = import.meta.env.BASE_URL
  const oneSheetPdf = `${base}epk/charles-wilson-one-sheet.pdf`
  const hospitalityPdf = `${base}epk/hospitality-rider.pdf`
  const techDocx = `${base}epk/tech-rider.docx`
  const bandTitleBannerPng = `${base}epk/charles-wilson-band-title-banner.png`

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 50% 42%, rgba(201, 169, 98, 0.18), transparent 60%), radial-gradient(ellipse 40% 35% at 50% 80%, rgba(92, 26, 40, 0.45), transparent 70%)',
          }}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-16 pt-14 text-center md:pb-24 md:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Electronic press kit
          </p>
          <img
            src={heroPortraitSrc}
            alt="Charles Wilson"
            width={800}
            height={1000}
            className="mt-8 h-auto w-full max-w-[min(78vw,380px)] object-contain"
            loading="eager"
            decoding="async"
          />
          <h1 className="mt-6 font-display text-5xl font-semibold leading-none tracking-tight text-cream md:text-7xl">
            Charles Wilson
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-gold">
            The Crown Prince of Soul
          </p>
          <p className="mt-5 max-w-xl text-lg text-cream/70">
            and The Soul Town Sinners — bios, photos, and production details
            for promoters and press.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-16 text-center md:py-24">
        <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          Short bio
        </h2>
        <p className="mt-6 font-display text-2xl leading-snug text-cream md:text-3xl">
          Charles Wilson delivers retro soul and blues with Chicago roots and
          road-tested showmanship.
        </p>
        <p className="mt-6 leading-relaxed text-cream/70">
          Backed by The Soul Town Sinners, his sets honor the lineage of
          classic soul while staying immediate and electric for modern
          audiences. He is the nephew of the late Little Milton, a nominee for
          multiple Blues Music Awards and Blues Foundation honors, with
          festival and club appearances across the U.S. and Europe.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-medium text-cream md:text-5xl">
              Downloads
            </h2>
            <p className="mt-4 text-cream/60">
              One-sheet, approved photos, riders, and the band wordmark.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            <DownloadCard
              eyebrow="One sheet"
              title="Promo sheet"
              description="Bio, credits, highlights, and booking contact for bookers and press."
              href={oneSheetPdf}
              download="Charles-Wilson-One-Sheet.pdf"
              fileLabel="Download PDF"
            />
            <DownloadCard
              eyebrow="Hospitality"
              title="Hospitality rider"
              description="Dressing room, meals, and guest list notes for The Soul Town Sinners."
              href={hospitalityPdf}
              fileLabel="Download PDF"
            />
            <DownloadCard
              eyebrow="Technical"
              title="Tech rider"
              description="Stage plot, inputs, and production specs."
              href={techDocx}
              fileLabel="Download DOCX"
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Press photos
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/55">
              Approved promotional portraits for web and print. Photo 4:
              Chicago Blues Hall of Fame induction (Sept. 2019); photographer
              credit is in the frame.
            </p>
            <div className="mt-8 grid gap-6 text-left sm:grid-cols-2">
              {epkPressPhotos.map((photo) => {
                const src = `${base}epk/${photo.file}`
                return (
                  <figure
                    key={photo.file}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                  >
                    <div className="flex aspect-[4/5] items-center justify-center bg-black/50">
                      <img
                        src={src}
                        alt={photo.alt}
                        width={800}
                        height={1000}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption className="border-t border-white/10 px-4 py-3 text-center">
                      <a
                        href={src}
                        download={photo.downloadName}
                        className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
                      >
                        Download PNG
                      </a>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Logos & wordmarks
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/55">
              Primary horizontal banner — black & white, Charles Wilson & The
              Soul Town Sinners.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
              <img
                src={bandTitleBannerPng}
                alt="Charles Wilson & The Soul Town Sinners — wordmark banner"
                width={1200}
                height={400}
                className="mx-auto h-auto w-full max-w-3xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <a
              href={bandTitleBannerPng}
              download="charles-wilson-soul-town-sinners-banner.png"
              className="mt-5 inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              Download banner (PNG)
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="epk-video-heading"
      >
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <h2
            id="epk-video-heading"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Featured performance
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/55">
            Featured clip for reviewers and bookers.
          </p>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left">
            <iframe
              className="h-full w-full"
              src={FEATURED_YOUTUBE_EMBED_SRC}
              title="YouTube video player — Charles Wilson featured performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="epk-soundcloud-heading"
      >
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <h2
            id="epk-soundcloud-heading"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            SoundCloud
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/55">
            Stream tracks and sets from the Crown Prince of Soul.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2 text-left">
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
            className="mt-5 inline-block text-sm font-semibold text-gold hover:underline"
          >
            Open on SoundCloud →
          </a>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20 [&_section]:text-left">
          <PressLinks variant="epk" />
        </div>
      </div>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-xl px-5 py-16 text-center md:py-20">
          <h2 className="font-display text-4xl text-cream">Booking</h2>
          <p className="mt-3 text-cream/65">
            For festivals, clubs, private events, and press.
          </p>
          <ul className="mt-8 space-y-3 text-lg">
            <li>
              <a
                href="mailto:Tulsasoundmgtgroup@gmail.com"
                className="font-medium text-gold underline-offset-2 hover:underline"
              >
                Tulsasoundmgtgroup@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+19188495710"
                className="font-medium text-gold underline-offset-2 hover:underline"
              >
                918-849-5710
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
