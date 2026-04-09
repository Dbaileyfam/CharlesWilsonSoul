import { pressLinks } from '../data/press'

type PressLinksProps = {
  variant?: 'default' | 'epk'
}

export function PressLinks({ variant = 'default' }: PressLinksProps) {
  const shell =
    variant === 'epk'
      ? 'rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10'
      : 'rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10'

  return (
    <section className={shell} aria-labelledby="press-links-heading">
      <h2
        id="press-links-heading"
        className="font-display text-2xl text-cream md:text-3xl"
      >
        Press & reviews
      </h2>
      <p className="mt-2 text-sm text-cream/55">
        Articles, interviews, and album coverage — opens in a new tab.
      </p>
      <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
        {pressLinks.map((item) => (
          <li key={item.url} className="py-4 first:pt-5">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {item.source}
              </p>
              <p className="mt-1 font-medium text-cream transition group-hover:text-gold">
                {item.title}
                <span className="ml-1 text-gold opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
