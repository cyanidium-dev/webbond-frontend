export interface WebsiteType {
  id: string;
  type: string;
  description: string;
  fonImage: string;
  fonImageDesktop: string;
  phoneImage: string;
  firstTitle: string;
  bannerImage: string;
  secondTitle: string;
  firstTitleList: string[];
  secondTitleList: string[];
}

export const WEBSITE_TYPES_MOCK: WebsiteType[] = [
  {
    id: 'landingpage',
    type: 'Landingpage',
    description:
      'En enkel side med alt det vigtigste – perfekt, når du vil præsentere ét produkt eller én tjeneste og få kunder hurtigt',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone.webp',
    bannerImage: '/banner-for-choose-list.webp',
    firstTitle: 'Hvem passer det til',
    secondTitle: 'Fordele',
    firstTitleList: [
      'Et specifikt produkt eller kampagne',
      'Startups og små virksomheder, personlige brands',
      'Tjenester med ét klart tilbud',
    ],
    secondTitleList: [
      'Fokuserer kundens opmærksomhed på ét mål',
      'Hurtig lancering og lav pris',
      'Giver hurtige resultater og salg',
    ],
  },
  {
    id: 'hjemmeside',
    type: 'Hjemmeside',
    description:
      'En professionelt website, der viser alt, hvad din virksomhed tilbyder — bygget til at skabe tillid og tiltrække kunder fra Google.',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone-2.webp',
    bannerImage: '/banner-for-choose-list-2.webp',
    firstTitle: 'Struktur',
    secondTitle: 'Vækst',
    firstTitleList: [
      'Virksomheder med flere tjenester',
      'Servicefirmaer og konsulenter',
      'Dem, der ønsker stabil trafik uden annoncer',
    ],
    secondTitleList: [
      'Vises højt på Google (SEO-optimeret)',
      'Bygger tillid hos kunder',
      'Giver en jævn strøm af henvendelser',
    ],
  },
  {
    id: 'webshop',
    type: 'Webshop',
    description:
      'En webshop, der gør det nemt at sælge online – automatiske betalinger, ordrer og lagerstyring samlet ét sted.',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone-3.webp',
    bannerImage: '/banner-for-choose-list-3.webp',
    firstTitle: 'Salg',
    secondTitle: 'Effektivitet',
    firstTitleList: [
      'Fysiske butikker, der vil sælge online',
      'Producenter og håndværkere',
      'Dem, der vil spare tid på manuelle opgaver',
    ],
    secondTitleList: [
      'Salg 24/7 – selv når du sover',
      'Automatiseret system sparer tid og fejl',
      'Flere kunder, større omsætning',
    ],
  },
];
