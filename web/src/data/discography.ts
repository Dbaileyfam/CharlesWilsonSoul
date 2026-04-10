export type AlbumEntry = {
  year: number
  title: string
  label: string
  location: string | null
}

export type SingleEntry = {
  year: string
  title: string
  label: string
  notes: string
}

export type CreditEntry = {
  work: string
  role: string
}

export const discographyAlbums: AlbumEntry[] = [
  {
    year: 1991,
    title: 'Blues in the Key of C',
    label: 'Ichiban',
    location: 'Chicago, IL',
  },
  {
    year: 1995,
    title: "It's Sweet on the Backstreet",
    label: 'Ecko',
    location: 'Memphis, TN',
  },
  {
    year: 1997,
    title: 'Why?',
    label: 'Traction',
    location: null,
  },
  {
    year: 1998,
    title: 'Love Seat',
    label: 'Ecko',
    location: 'Memphis, TN',
  },
  {
    year: 1999,
    title: "It Ain't the Size",
    label: 'Ecko',
    location: 'Memphis, TN',
  },
  {
    year: 2000,
    title: 'Mr. Freak',
    label: 'Ecko',
    location: 'Memphis, TN',
  },
  {
    year: 2001,
    title: 'Songs from the Vault',
    label: 'Wilson Records',
    location: null,
  },
  {
    year: 2001,
    title: "Goin' Jookin'",
    label: 'Ecko',
    location: 'Memphis, TN',
  },
  {
    year: 2002,
    title: 'You Got to Pay to Play',
    label: 'Wilson Records',
    location: null,
  },
  {
    year: 2004,
    title: 'If Heartaches Were Nickels',
    label: 'Delmark',
    location: 'Chicago, IL',
  },
  {
    year: 2005,
    title: "If It Ain't Broke Don't Fix It",
    label: 'Delta',
    location: null,
  },
  {
    year: 2007,
    title: 'The After Party',
    label: 'Severn',
    location: null,
  },
  {
    year: 2009,
    title: 'Troubled Child',
    label: 'Severn',
    location: null,
  },
  {
    year: 2010,
    title: 'That Girl Belongs to Me',
    label: 'Severn',
    location: null,
  },
  {
    year: 2011,
    title: 'Sweet & Sour Blues',
    label: '—',
    location: null,
  },
]

export const discographySingles: SingleEntry[] = [
  {
    year: '1984 (some sources list 1964)',
    title: 'Trying to Make a Wrong Thing Right',
    label: 'AlleyCat',
    notes: 'First single',
  },
  {
    year: '1980s',
    title: "You Cut Off My Love Supply / It's a Crying Shame",
    label: 'Ichiban',
    notes: 'Single',
  },
  {
    year: '1995',
    title: "It's Sweet on the Backstreet",
    label: 'Ecko',
    notes: 'Southern soul single',
  },
  {
    year: '1998',
    title: 'Love Seat',
    label: 'Ecko',
    notes: 'Southern soul single',
  },
  {
    year: '2000',
    title: 'Mr. Freak',
    label: 'Ecko',
    notes: 'Southern soul single',
  },
  {
    year: '2009',
    title: 'Pay Myself First',
    label: 'Severn',
    notes: 'Modern soul single',
  },
]

export const discographyCredits: CreditEntry[] = [
  {
    work: 'Blues in the Key of C',
    role: 'Producer',
  },
  {
    work: 'Ecko-era albums',
    role: 'Writer / producer',
  },
  {
    work: 'If Heartaches Were Nickels',
    role: 'Performer / writer',
  },
  {
    work: 'Troubled Child',
    role: 'Performer / writer',
  },
  {
    work: 'Various Ecko compilations',
    role: 'Co-writer',
  },
]
