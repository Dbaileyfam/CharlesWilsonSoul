export type AlbumEntry = {
  year: number
  title: string
  label: string
  producers: string
  location: string | null
}

export type SingleEntry = {
  year: string
  title: string
  label: string
  writers: string
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
    producers: 'Willie Clayton, Ronnie Hicks, Little Milton, Charles Wilson',
    location: 'Chicago, IL',
  },
  {
    year: 1995,
    title: "It's Sweet on the Backstreet",
    label: 'Ecko',
    producers: 'Earl Randle, John Ward',
    location: 'Memphis, TN',
  },
  {
    year: 1997,
    title: 'Why?',
    label: 'Traction',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 1998,
    title: 'Love Seat',
    label: 'Ecko',
    producers: 'John Ward, Chuck Roberson, Charles Wilson',
    location: 'Memphis, TN',
  },
  {
    year: 1999,
    title: "It Ain't the Size",
    label: 'Ecko',
    producers: 'John Ward',
    location: 'Memphis, TN',
  },
  {
    year: 2000,
    title: 'Mr. Freak',
    label: 'Ecko',
    producers: 'John Ward',
    location: 'Memphis, TN',
  },
  {
    year: 2001,
    title: 'Songs from the Vault',
    label: 'Wilson Records',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2001,
    title: "Goin' Jookin'",
    label: 'Ecko',
    producers: 'John Ward',
    location: 'Memphis, TN',
  },
  {
    year: 2002,
    title: 'You Got to Pay to Play',
    label: 'Wilson Records',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2004,
    title: 'If Heartaches Were Nickels',
    label: 'Delmark',
    producers: 'Charles Wilson',
    location: 'Chicago, IL',
  },
  {
    year: 2005,
    title: "If It Ain't Broke Don't Fix It",
    label: 'Delta',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2007,
    title: 'The After Party',
    label: 'Severn',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2009,
    title: 'Troubled Child',
    label: 'Severn',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2010,
    title: 'That Girl Belongs to Me',
    label: 'Severn',
    producers: 'Charles Wilson',
    location: null,
  },
  {
    year: 2011,
    title: 'Sweet & Sour Blues',
    label: '—',
    producers: 'Charles Wilson',
    location: null,
  },
]

export const discographySingles: SingleEntry[] = [
  {
    year: '1984 (some sources list 1964)',
    title: 'Trying to Make a Wrong Thing Right',
    label: 'AlleyCat',
    writers: 'Charles Wilson',
    notes: 'First single',
  },
  {
    year: '1980s',
    title: "You Cut Off My Love Supply / It's a Crying Shame",
    label: 'Ichiban',
    writers: 'Charles Wilson',
    notes: 'Single',
  },
  {
    year: '1995',
    title: "It's Sweet on the Backstreet",
    label: 'Ecko',
    writers: 'Earl Randle, John Ward',
    notes: 'Southern soul single',
  },
  {
    year: '1998',
    title: 'Love Seat',
    label: 'Ecko',
    writers: 'John Ward, Charles Wilson, Chuck Roberson',
    notes: 'Southern soul single',
  },
  {
    year: '2000',
    title: 'Mr. Freak',
    label: 'Ecko',
    writers: 'John Ward',
    notes: 'Southern soul single',
  },
  {
    year: '2009',
    title: 'Pay Myself First',
    label: 'Severn',
    writers: 'Charles Wilson',
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
