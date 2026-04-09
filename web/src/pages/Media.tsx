import { PressLinks } from '../components/PressLinks'
import { social } from '../data/links'

export function Media() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        Watch & listen
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-cream md:text-5xl">
        Media
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Featured performance, press coverage, official channels, and
        streaming links.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            YouTube
          </h2>
          <p className="mt-2 text-sm text-cream/55">
            Featured performance — watch on YouTube or open the channel links
            below.
          </p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/n0dAziTRlr0?si=apuRWePC5AgoogCX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={social.youtubeCharlesWilson}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-cream transition hover:border-gold/40 hover:text-gold"
            >
              @charleswilson5288
            </a>
            <a
              href={social.youtubeCelebrityDirect}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-cream transition hover:border-gold/40 hover:text-gold"
            >
              @CelebrityDirect
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            SoundCloud
          </h2>
          <p className="mt-2 text-sm text-cream/55">
            Stream tracks and sets from the Crown Prince of Soul.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2">
            <iframe
              title="SoundCloud — thecrownprinceofsoul"
              width="100%"
              height="380"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecrownprinceofsoul&color=%23c9a962&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
      </div>

      <div className="mt-16">
        <PressLinks />
      </div>

      <section className="mt-16 rounded-2xl border border-white/10 bg-burgundy/20 p-8 md:p-10">
        <h2 className="font-display text-2xl text-cream">Social</h2>
        <p className="mt-2 text-sm text-cream/60">
          Follow for show announcements and behind-the-scenes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={social.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
          >
            Facebook — The Crown Prince of Soul
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
          >
            Instagram — @lastsoulmanstanding
          </a>
        </div>
      </section>
    </div>
  )
}
