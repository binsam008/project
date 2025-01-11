export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  TEAM: 'team',
  CONTACT: 'contact',
  QUERY: 'query'
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', to: SECTION_IDS.HOME },
  { name: 'About', to: SECTION_IDS.ABOUT },
  { name: 'Services', to: SECTION_IDS.SERVICES },
  { name: 'Team', to: SECTION_IDS.TEAM },
  { name: 'Contact', to: SECTION_IDS.CONTACT },
  { name: 'Query', to: SECTION_IDS.QUERY }
] as const;