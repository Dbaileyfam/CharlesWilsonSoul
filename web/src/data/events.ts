export type EventItem = {
  id: string
  date: string
  venue: string
  city: string
  region: string
  note?: string
  ticketUrl?: string
}

/** Featured festival appearance (flyer + details). */
export const featuredFlyerEvent = {
  id: 'spring-fling-2022',
  title: 'THE Spring FLING Music Fest',
  dateLabel: 'April 23, 2022',
  venue: 'Columbus Fairgrounds',
  city: 'Columbus',
  region: 'MS',
  gatesOpen: '12:00 PM',
  showStarts: '3:00 PM',
  musicBy: 'DJ Lovebone',
  ticketPrice: '$40',
  ticketOutlets: [
    "SAM'S — Meridian, MS",
    'CASH TILL — Starkville, MS',
    'WOODS — Noxapater, MS',
    'HAIR 4 U BEAUTY — Columbus, MS',
    "TIFFANY'S — Philadelphia, MS",
  ],
  vendorPhone: '(662) 352-3623',
  vendorNote: 'Vendors welcome — call to inquire.',
  productionCredit: 'G & A Productions',
  designCredit: 'Yea iLike THAT.com — 843-475-8317',
  flyerImage: 'images/events/spring-fling-2022-flyer.png',
  flyerAlt:
    'The Spring Fling Music Fest — April 23, 2022 at Columbus Fairgrounds, Columbus, Mississippi',
} as const

/** Add rows as new dates are confirmed. */
export const upcomingEvents: EventItem[] = []
