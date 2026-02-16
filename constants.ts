import { NavItem } from './types';

export const NAVIGATION: NavItem[] = [
  { id: 'nav5', label: 'Work', path: '/work', row: 1 },
  { id: 'nav4', label: 'Exhibitions', path: '/exhibitions', row: 1 },
  { id: 'nav2', label: 'Portraits', path: '/portraits', row: 1 },
  { id: 'nav-arch', label: 'Architecture', path: '/architecture', row: 1 },
  { id: 'nav1', label: 'Photographs', path: '/photographs', row: 2 },
  { id: 'nav7', label: 'Personal Collections', path: '/collections', row: 2 },
  { id: 'nav9', label: 'Writings', path: '/writings', row: 2 },
  { id: 'nav-recordings', label: 'Recordings', path: '/recordings', row: 2 },
  { id: 'nav10', label: 'About', path: '/biography', row: 2 },
];

export const SIDEBAR_MAP: Record<string, string[]> = {
  photographs: [], 
  architecture: ['DUNELAND', 'LARKRISE', 'TIDE VIEW', 'CHANDLERS REACH', 'STARVECROW'],
  exhibitions: ['Common Ground', 'ORDERED CHAOS', 'TRANSFORMATION'],
  sculptures: ['Punk Plates'],
  work: ['ADHD', 'PUNK PLATES', 'BUT I LOVE YOU'],
  originals: ['ADHD', 'PUNK PLATES', 'BUT I LOVE YOU'],
  collections: [],
  'new-work': ['Latest Work', 'In Progress', 'Experimental', 'Studio Views'],
  recordings: [],
};

export const MOCK_RECORDINGS = [
  { id: 'rec-01', title: 'Recording 01', soundcloudUrl: 'https://soundcloud.com/artistname/track-01' },
  { id: 'rec-02', title: 'Recording 02', soundcloudUrl: 'https://soundcloud.com/artistname/track-02' },
  { id: 'rec-03', title: 'Recording 03', soundcloudUrl: 'https://soundcloud.com/artistname/track-03' },
  { id: 'rec-04', title: 'Recording 04', soundcloudUrl: 'https://soundcloud.com/artistname/track-04' },
  { id: 'rec-05', title: 'Recording 05', soundcloudUrl: 'https://soundcloud.com/artistname/track-05' },
  { id: 'rec-06', title: 'Recording 06', soundcloudUrl: 'https://soundcloud.com/artistname/track-06' },
];

const generateCollection = (type: string, count: number, namePrefix: string) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${type}-${i}`,
    title: `${namePrefix} ${i + 1}`,
    year: '2024',
    medium: 'Inkjet print on paper',
    dimensions: '24 x 20 inches',
    imageUrl: `https://picsum.photos/seed/${type}-${i}-neutral/800/600?grayscale`
  }));
};

export const MOCK_ARTWORKS: Record<string, any[]> = {
  photographs: generateCollection('photographs', 16, 'Photograph'),
  'adhd': generateCollection('adhd', 12, 'ADHD'),
  'punk-plates': [
    { id: 'sc-1', imageUrl: 'https://i.ibb.co/Kj0LN9Q0/IMG-6525.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-2', imageUrl: 'https://i.ibb.co/939GhX1d/IMG-6526.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-3', imageUrl: 'https://i.ibb.co/mr4Khm1s/IMG-6527.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-4', imageUrl: 'https://i.ibb.co/wFmVtMCm/IMG-6528.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-5', imageUrl: 'https://picsum.photos/seed/pp5/600/600?grayscale', title: 'Punk Plate', year: '2024' },
    { id: 'sc-6', imageUrl: 'https://picsum.photos/seed/pp6/600/600?grayscale', title: 'Punk Plate', year: '2024' },
  ],
  'but-i-love-you': generateCollection('but-i-love-you', 8, 'But I Love You'),
  'ordered-chaos': [
    { id: 'photo-1', imageUrl: 'https://i.ibb.co/KzmWCbLj/IMG-5197.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-2', imageUrl: 'https://i.ibb.co/FLdNhwdJ/IMG-5198.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-3', imageUrl: 'https://i.ibb.co/dwTyL2cf/IMG-5199.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-4', imageUrl: 'https://i.ibb.co/Fbhhvmcj/IMG-5205.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-5', imageUrl: 'https://i.ibb.co/ZpzK97mK/IMG-5206.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-6', imageUrl: 'https://i.ibb.co/Q3rGtTLT/IMG-5207.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-7', imageUrl: 'https://i.ibb.co/PGbBGtKX/IMG-5209.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-8', imageUrl: 'https://i.ibb.co/VYXmTMdj/IMG-5220.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
    { id: 'photo-9', imageUrl: 'https://i.ibb.co/3Yh7b4VR/IMG-5223.jpg', title: 'Untitled (Photo)', year: '2024', medium: 'C-Print', dimensions: '20 x 24 in' },
  ],
  'mexican-wrestler-one': [
    { id: 'mw1-1', imageUrl: 'https://i.ibb.co/wjr8Y3Z/5371a8e3-7841-4e53-9b71-15b6330e6cdb.jpg', title: 'Mexican Wrestler One #1', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw1-2', imageUrl: 'https://i.ibb.co/C3M6STy9/17f15f87-a39a-45bb-8270-0af51ec20618.jpg', title: 'Mexican Wrestler One #2', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw1-3', imageUrl: 'https://i.ibb.co/TM0XxjRk/6cb97d9d-3cf6-496e-9fa3-e772f4af330b.jpg', title: 'Mexican Wrestler One #3', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw1-4', imageUrl: 'https://i.ibb.co/cS5VKsN2/a989d7b4-510f-4c8a-95ad-2e3cfb73401c.jpg', title: 'Mexican Wrestler One #4', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw1-5', imageUrl: 'https://i.ibb.co/xKYp0XRf/353bf2ab-a0ef-4b1f-8cfa-0ece9345e9eb.jpg', title: 'Mexican Wrestler One #5', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw1-6', imageUrl: 'https://i.ibb.co/VpmjZ57j/1d3fb49a-02b5-4bc8-8046-85671f2a4a21.jpg', title: 'Mexican Wrestler One #6', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
  ],
  'mexican-wrestler-two': [
    { id: 'mw2-1', imageUrl: 'https://i.ibb.co/4wCr7w43/72a4f59d-b5f8-4bb4-a448-dff84c96af6a.jpg', title: 'Mexican Wrestler Two #1', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw2-2', imageUrl: 'https://i.ibb.co/k2zTWw7w/cf244688-481e-423b-b10a-a280319229b9.jpg', title: 'Mexican Wrestler Two #2', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw2-3', imageUrl: 'https://i.ibb.co/bjCRTRK0/5b9b114e-7d4f-4f60-b34b-591bb2e64efa.jpg', title: 'Mexican Wrestler Two #3', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw2-4', imageUrl: 'https://i.ibb.co/FLLRGXfj/95e08f04-fcf9-4284-8401-a5f406f731ec.jpg', title: 'Mexican Wrestler Two #4', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw2-5', imageUrl: 'https://i.ibb.co/kvL6xJd/97721b0f-9f6b-49df-b78b-8f5aa7790d27.jpg', title: 'Mexican Wrestler Two #5', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
  ],
  'mexican-wrestler-three': [
    { id: 'mw3-1', imageUrl: 'https://i.ibb.co/FRgG3TQ/34bce711-b078-4c7c-ba41-2f94b4488643.jpg', title: 'Mexican Wrestler Three #1', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw3-2', imageUrl: 'https://i.ibb.co/gkVc7Hd/291169c1-a905-417d-aceb-dbec73d1df3e.jpg', title: 'Mexican Wrestler Three #2', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw3-3', imageUrl: 'https://i.ibb.co/C5vxv3YW/dc607d5a-543e-439f-90e6-c2c634ac6cbd.jpg', title: 'Mexican Wrestler Three #3', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw3-4', imageUrl: 'https://i.ibb.co/BVnM20rb/4553d6e0-78e5-4c57-8f8e-f62e5eb4d40d.jpg', title: 'Mexican Wrestler Three #4', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
    { id: 'mw3-5', imageUrl: 'https://i.ibb.co/fYw3BTxZ/b0586488-0381-41db-9e9f-8d7f98d0b230.jpg', title: 'Mexican Wrestler Three #5', year: '2023', medium: 'C-Print', dimensions: '30 x 40 in' },
  ],
  'architecture-duneland': generateCollection('arch-duneland', 8, 'Duneland'),
  'architecture-larkrise': generateCollection('arch-larkrise', 8, 'Larkrise'),
  'architecture-tide-view': generateCollection('arch-tide-view', 8, 'Tide View'),
  'architecture-chandlers-reach': generateCollection('arch-chandlers-reach', 8, 'Chandlers Reach'),
  'architecture-starvecrow': generateCollection('arch-starvecrow', 8, 'Starvecrow'),
  portraits: [], 
  sculptures: [
    { id: 'sc-1', imageUrl: 'https://i.ibb.co/Kj0LN9Q0/IMG-6525.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-2', imageUrl: 'https://i.ibb.co/939GhX1d/IMG-6526.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-3', imageUrl: 'https://i.ibb.co/mr4Khm1s/IMG-6527.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
    { id: 'sc-4', imageUrl: 'https://i.ibb.co/wFmVtMCm/IMG-6528.jpg', title: 'Punk Plate', year: '2024', medium: 'Sculptural Plate', dimensions: '12 x 12 in' },
  ],
  originals: generateCollection('adhd', 10, 'ADHD'),
  collections: generateCollection('collections', 16, 'Collection Item'),
  'new-work': generateCollection('new-work', 6, 'Work'),
  'transformation': generateCollection('transformation', 9, 'Transformation'),
  exhibitions: [
    { id: 'ex-1', imageUrl: 'https://i.ibb.co/QxYKLZp/IMG-2055.jpg', title: '', year: '' },
    { id: 'ex-2', imageUrl: 'https://i.ibb.co/WN58LKDt/IMG-2071.jpg', title: '', year: '' },
    { id: 'ex-3', imageUrl: 'https://i.ibb.co/Z4tjNpn/IMG-2068.jpg', title: '', year: '' },
    { id: 'ex-4', imageUrl: 'https://i.ibb.co/G3pKTCgQ/IMG-2063.jpg', title: '', year: '' },
    { id: 'ex-5', imageUrl: 'https://i.ibb.co/fYTs7081/IMG-2048.jpg', title: '', year: '' },
    { id: 'ex-6', imageUrl: 'https://i.ibb.co/PzTsRtP2/IMG-2047.jpg', title: '', year: '' },
    { id: 'ex-7', imageUrl: 'https://i.ibb.co/HT2ncCcd/IMG-2046.jpg', title: '', year: '' },
    { id: 'ex-8', imageUrl: 'https://i.ibb.co/Wpsbz3nz/IMG-2045.jpg', title: '', year: '' },
    { id: 'ex-9', imageUrl: 'https://i.ibb.co/jPt8JLG0/IMG-2072.jpg', title: '', year: '' },
    { id: 'ex-10', imageUrl: 'https://i.ibb.co/1tsKQPL6/IMG-2043.jpg', title: '', year: '' },
    { id: 'ex-11', imageUrl: 'https://i.ibb.co/Xf93p5xH/IMG-2044.jpg', title: '', year: '' },
    { id: 'ex-12', imageUrl: 'https://i.ibb.co/nMYGjzSX/IMG-2086.jpg', title: '', year: '' },
    { id: 'ex-13', imageUrl: 'https://i.ibb.co/Ld2Nr3ss/IMG-2090.jpg', title: '', year: '' },
  ],
  writings: [],
};