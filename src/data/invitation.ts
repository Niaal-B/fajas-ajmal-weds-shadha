export const invitation = {
  bismillah: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Beneficent, the Most Merciful',
  tagline: ['Together', 'in faith'],
  bride: 'Shadha Fathima',
  groom: 'Fajas Ajmal',
  ceremony: 'Nikah',
  dateShort: '10 · 10 · 2026',
  dateLong: '10 October 2026',
  dateIso: '2026-10-10',
  time: 'Saturday · 7:00 PM',
  venueLabel: 'Venue:',
  venue: "Groom's Residence",
  ctaLabel: 'Open Invitation',
  ctaSub: 'Insha Allah',
  ctaHint: 'Tap to begin',
  countdownTarget: '2026-10-10T19:00:00+05:30'
};

// Background song (YouTube), starts when the invitation is opened
export const music = {
  youtubeId: 'ivrumxRUz_Y',
  startSeconds: 0
};

// Creator credit shown on the intro screen and footer
export const creator = {
  label: 'Crafted by',
  handle: '@niaal._',
  url: 'https://www.instagram.com/niaal._/'
};

export const images = {
  doors: '/doors.jpg',
  card: '/card.jpg',
  backdrop: '/backdrop.jpg'
};

export const invitationMessage = [
{ text: 'In the name of Allah, the Most Beneficent, the Most Merciful. Mr. Abdulla & Mrs. Najra cordially invite you to the Nikah and Reception of their son ' },
{ text: 'Fajas Ajmal', emphasis: true },
{ text: ' with ' },
{ text: 'Shadha Fathima', emphasis: true },
{ text: ' (D/O Mr. Foulad & Mrs. Shabana). Your gracious presence and prayers will make our celebration truly blessed.' }];


export const keyDetails = [
{ icon: 'calendar', label: 'Nikah Day', value: 'Saturday, 10 October 2026', note: 'Insha Allah' },
{ icon: 'clock', label: 'Nikah Time', value: '7:00 PM', note: "At the Groom's Residence" },
{ icon: 'moon', label: 'Hosts', value: 'Mr. Abdulla & Mrs. Najra', note: "'Glaze', Mouvery" },
{ icon: 'calendar', label: 'Reception', value: 'Sunday, 11 October 2026', note: "12:00 Noon – 2:00 PM · 'Glaze', Mouvery" }] as
const;

export const timeline = [
{
  date: 'Saturday, 10 October 2026 · Insha Allah',
  title: 'Nikah Ceremony',
  time: '7:00 PM',
  place: "Groom's Residence",
  description: 'Solemnised according to Islamic traditions and sacred Nikah rituals.'
},
{
  date: 'Sunday, 11 October 2026 · Insha Allah',
  title: 'Reception',
  time: '12:00 Noon – 2:00 PM',
  place: "Our residence 'Glaze', Mouvery",
  description: 'Celebrate with us as we begin our new journey together.'
}];


export const couple = {
  groom: {
    role: 'The Groom',
    name: 'Fajas Ajmal',
    lines: ['Son of Mr. Abdulla & Mrs. Najra']
  },
  bride: {
    role: 'The Bride',
    name: 'Shadha Fathima',
    lines: ['Daughter of Mr. Foulad & Mrs. Shabana']
  }
};

export const hosts: {first: string;second: string;address: string;phone?: string;note: string;} = {
  first: 'Mr. Abdulla',
  second: 'Mrs. Najra',
  address: "'Glaze', Mouvery",
  note: 'together with their families, relatives and well-wishers.'
};

export const events = [
{
  label: 'Nikah Ceremony',
  day: 'Saturday',
  date: '10 October 2026',
  time: '7:00 PM',
  venue: "Groom's Residence",
  place: '',
  description: "Join us for the sacred Nikah ceremony as we begin our journey together with Allah's blessings.",
  mapUrl: ''
},
{
  label: 'Reception',
  day: 'Sunday',
  date: '11 October 2026',
  time: '12:00 Noon – 2:00 PM',
  venue: "'Glaze'",
  place: 'Our residence, Mouvery',
  description: 'Join us as we celebrate the couple and their new beginning.',
  mapUrl: 'https://www.google.com/maps?q=11.831120491027832,75.5347900390625&z=17&hl=en'
}];


export const closing = {
  blessing: 'May Almighty Allah bless this union with health, harmony, peace and happiness for a lifetime.',
  dates: 'Nikah · 10 October 2026 · Reception · 11 October 2026'
};
