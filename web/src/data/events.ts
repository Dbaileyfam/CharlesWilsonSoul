export type EventItem = {
  id: string
  date: string
  venue: string
  city: string
  region: string
  note?: string
  ticketUrl?: string
}

/** Replace with confirmed dates; placeholders show layout only. */
export const upcomingEvents: EventItem[] = [
  {
    id: '1',
    date: 'TBA',
    venue: 'Venue to be announced',
    city: 'Memphis',
    region: 'TN',
    note: 'Add confirmed shows here or remove this card.',
  },
]
