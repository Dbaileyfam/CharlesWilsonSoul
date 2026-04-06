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
        Official channels and performance archives. Swap in specific video or
        track embeds anytime — the layout is ready for iframes.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            YouTube
          </h2>
          <p className="mt-2 text-sm text-cream/55">
            Performance and feature clips — add a featured video ID below when
            you have a primary reel.
          </p>
          <div className="mt-6 flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/20 bg-black/30 p-8 text-center">
            <p className="max-w-sm text-sm text-cream/55">
              Drop in a featured performance: replace this block with a YouTube
              <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">
                embed
              </code>{' '}
              URL in <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">Media.tsx</code>.
            </p>
            <a
              href={social.youtubeCharlesWilson}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-dim"
            >
              Open YouTube
            </a>
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

      <section className="mt-16 rounded-2xl border border-white/10 bg-burgundy/20 p-8 md:p-10">
        <h2 className="font-display text-2xl text-cream">Social</h2>
        <p className="mt-2 text-sm text-cream/60">
          Follow for show announcements and behind-the-scenes.
        </p>
        <a
          href={social.facebook}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
        >
          Facebook — The Crown Prince of Soul
        </a>
      </section>
    </div>
  )
}
