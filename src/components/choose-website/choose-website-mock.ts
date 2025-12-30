export interface WebsiteType {
  id: string;
  type: string;
  description: string;
  fonImage: string;
  fonImageDesktop: string;
  phoneImage: string;
  bannerImage: string;
  firstTitle: string;
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
    phoneImage: '/choose-iphone.png',
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
      'En komplet hjemmeside til din virksomhed, der fortæller din historie og viser dine ydelser frem på den bedste måde',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone.png',
    bannerImage: '/banner-for-choose-list.webp',
    firstTitle: 'Struktur',
    secondTitle: 'Vækst',
    firstTitleList: ['Brugervenlig', 'Responsivt design', 'Moderne layout'],
    secondTitleList: ['Tillidsskabende', 'Brand identity', 'Skalérbar løsning'],
  },
  {
    id: 'webshop',
    type: 'Webshop',
    description:
      'En professionel webshop med fokus på salg, brugervenlighed og sikkerhed, så dine kunder kan handle trygt og nemt',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone.png',
    bannerImage: '/banner-for-choose-list.webp',
    firstTitle: 'Salg',
    secondTitle: 'Effektivitet',
    firstTitleList: ['Nem betaling', 'Produktoffers', 'Lagerstyring'],
    secondTitleList: ['Øget omsætning', 'Automatisering', 'Kundeindsigt'],
  },
];
