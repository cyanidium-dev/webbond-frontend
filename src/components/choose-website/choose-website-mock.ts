export interface WebsiteType {
  id: string;
  type: string;
  description: string;
  fonImage: string;
  phoneImage: string;
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
    phoneImage: '/choose-iphone.png',
    firstTitle: 'Konvertering',
    secondTitle: 'Resultat',
    firstTitleList: ['Høj konvertering', 'Hurtig indlæsning', 'SEO optimeret'],
    secondTitleList: [
      'Flere kunder',
      'Bedre synlighed',
      'Professionelt design',
    ],
  },
  {
    id: 'hjemmeside',
    type: 'Hjemmeside',
    description:
      'En komplet hjemmeside til din virksomhed, der fortæller din historie og viser dine ydelser frem på den bedste måde',
    fonImage: '/choose-fon.webp',
    phoneImage: '/choose-iphone.png',
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
    phoneImage: '/choose-iphone.png',
    firstTitle: 'Salg',
    secondTitle: 'Effektivitet',
    firstTitleList: ['Nem betaling', 'Produktoffers', 'Lagerstyring'],
    secondTitleList: ['Øget omsætning', 'Automatisering', 'Kundeindsigt'],
  },
];
