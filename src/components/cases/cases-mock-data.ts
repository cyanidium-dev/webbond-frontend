export interface Case {
  id: string;
  title: string;
  description: string;
  image: string;
  services: string[];
}

export const CASES_MOCK_DATA: Case[] = [
  {
    id: '1',
    title: 'Hjemmeside for et byggefirma',
    description:
      'Integrerede kontaktformularer, beregnere, tabeller, automatiske e-mailbeskeder og grundlæggende SEO sikrer en stabil strøm af kunder og gør hjemmesiden klar til videre synlighed i Google.',
    image: '/cases-1.webp',
    services: [
      'UI/UX Design',
      'SEO',
      'Udvikling af hjemmeside',
      'Marketingstruktur',
    ],
  },
  {
    id: '2',
    title: 'Website for et Fransk Fotostudie',
    description:
      'Vores opgave var at udvikle en hjemmeside for et marketingfirma.',
    image: '/cases-2.webp',
    services: [
      'Website for et Fransk Fotostudie',
      'WebShop & integrationer',
      'UX/UI redesign',
      'Booking-og betalingssystemer',
    ],
  },
  {
    id: '3',
    title: 'Website for en Fencing Academy (USA)',
    description:
      'Vores opgave var at udvikle en hjemmeside for et marketingfirma.',
    image: '/cases-3.webp',
    services: ['Nøglefærdig hjemmeside', 'Markedsføring', 'SEO promovering'],
  },
];
