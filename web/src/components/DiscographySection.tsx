import {
  discographyAlbums,
  discographyCredits,
  discographySingles,
} from '../data/discography'

export function DiscographySection() {
  return (
    <section
      className="border-t border-white/10 bg-black/20"
      aria-labelledby="discography-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Crown Prince of Soul
          </p>
          <h2
            id="discography-heading"
            className="mt-3 font-display text-3xl font-medium text-cream md:text-4xl"
          >
            Discography
          </h2>
          <p className="mt-4 text-cream/60">
            Studio albums, singles, and select writing & production credits —
            from Chicago blues rooms to Memphis soul labels and beyond.
          </p>
        </div>

        <h3 className="mt-14 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Albums
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {discographyAlbums.map((album) => (
            <article
              key={`${album.year}-${album.title}`}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/25 hover:bg-white/[0.05]"
            >
              <p className="font-mono text-sm tabular-nums text-gold">
                {album.year}
              </p>
              <h4 className="mt-2 font-display text-lg font-medium leading-snug text-cream">
                {album.title}
              </h4>
              <p className="mt-1 text-sm text-cream/45">{album.label}</p>
              <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-cream/65">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-cream/40">
                    Producers / writers
                  </dt>
                  <dd className="mt-0.5">{album.producers}</dd>
                </div>
                {album.location ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-cream/40">
                      Recorded
                    </dt>
                    <dd className="mt-0.5">{album.location}</dd>
                  </div>
                ) : null}
              </dl>
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Singles
        </h3>
        <ul className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
          {discographySingles.map((single) => (
            <li
              key={`${single.year}-${single.title}`}
              className="grid gap-3 px-5 py-4 md:grid-cols-[minmax(0,9rem)_1fr_auto] md:items-start md:gap-6"
            >
              <p className="shrink-0 text-sm font-medium tabular-nums text-gold">
                {single.year}
              </p>
              <div className="min-w-0">
                <p className="font-medium text-cream">{single.title}</p>
                <p className="mt-0.5 text-sm text-cream/45">{single.label}</p>
                <p className="mt-2 text-sm text-cream/55">
                  <span className="text-cream/40">Writers / producers: </span>
                  {single.writers}
                </p>
              </div>
              <p className="text-sm text-cream/50 md:text-right md:max-w-[12rem]">
                {single.notes}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Writing & production
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {discographyCredits.map((credit) => (
            <div
              key={credit.work}
              className="rounded-xl border border-white/10 bg-burgundy/10 px-5 py-4"
            >
              <p className="font-display text-lg text-cream">{credit.work}</p>
              <p className="mt-1 text-sm font-medium text-gold">{credit.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
