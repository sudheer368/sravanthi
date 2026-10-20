/**
 * Central portfolio data — generated from Sravanthi's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Bandla Sravanthi',
  displayName: 'Sravanthi Bandla',
  firstName: 'SRAVANTHI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: ' BANDLA ORIGINAL',
  role: 'Interior Designer',
  tagline: ['Interior Designer', 'AutoCAD', 'SketchUp', 'V-Ray'],
  intro:
    'An interior designer shaping considered residential and commercial spaces — from concept, mood boards and space planning through to detailed AutoCAD drawings, SketchUp 3D models and photorealistic V-Ray visualisations.',
  location: 'Telangana',
  email: 'bandlasravanthi564@gmail.com',
  links: {
    linkedin: '',
    github: '',
  },
  resumePdf: '/assets/Sravanthi_Bandla_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sravanthi Bandla',
  },
  interests: ['Space Planning', 'Materials & Lighting', 'Photorealistic Rendering'],
};

export const education = [
  {
    school: 'Kodad Institute of Technology Science for Women ',
    place: 'Telangana',
    degree: 'Bachelor of Technology in Civil Engineering',
    period: '2021 – 2025',
    score: '70%',
  },
  {
    school: 'Telangana Social Welfare Residential Junior College',
    place: 'Telangana',
    degree: 'Intermediate — MPC',
    period: '2019 – 2021',
    score: 'GPA 608',
  },
];

export const experience = [
  {
    company: 'Kiran Interiors',
    role: '2D & 3D Designer',
    place: 'Telangana',
    period: '2025 – 2026 (Present)',
    points: [
      'Worked as a 2D & 3D Designer with 1 year of experience creating interior design layouts, detailed drawings, and realistic 3D visualizations.',
      'Developed space planning concepts and prepared technical drawings using AutoCAD.',
      'Created 3D models and renderings using SketchUp, V-Ray, and 3DS Max.',
      'Coordinated with clients and project teams to deliver functional and aesthetically appealing interior design solutions.',
    ],
  },
  {
    company: 'Sugadi Construction and Consultancy',
    role: 'Intern',
    place: 'Telangana',
    period: '2025',
    points: [
      'Completed a 6-month internship gaining experience in drafting, design, and construction project support.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'residential-interiors',
    title: 'Residential Interior Design',
    year: '2025',
    genre: 'Residential • Space Planning • Interiors',
    logline: 'Complete interior design layouts for residential spaces — from concept to detailed drawings and 3D visualisations.',
    stack: ['AutoCAD', 'SketchUp', 'V-Ray'],
    build: [
      'Designed residential interior layouts with space planning concepts, detailed technical drawings and realistic 3D visualisations.',
      'Developed functional and aesthetically appealing interior solutions, coordinating with clients and project teams to deliver complete residential designs.',
    ],
    features: [
      'Space planning concepts',
      'Detailed AutoCAD drawings',
      '3D models using SketchUp',
      'Photorealistic V-Ray renderings',
      'Client coordination',
    ],
    metrics: [
      { value: '1 Year', label: 'design experience' },
      { value: '3+', label: 'design tools' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'commercial-interiors',
    title: 'Commercial Interior Design',
    year: '2025',
    genre: 'Commercial • Layouts • Interiors',
    logline: 'Interior design layouts and visualisations for commercial spaces.',
    stack: ['AutoCAD', 'SketchUp', '3DS Max', 'V-Ray'],
    build: [
      'Created interior design layouts for commercial spaces, preparing technical drawings and 3D visualisations.',
      'Coordinated with clients and project teams to deliver functional and aesthetically appealing commercial interiors.',
    ],
    features: [
      'Commercial space planning',
      'Technical drawings in AutoCAD',
      '3D modelling in SketchUp & 3DS Max',
      'V-Ray rendering',
    ],
    metrics: [
      { value: '2025', label: 'project year' },
      { value: '4', label: 'design tools' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: '3d-visualization',
    title: '3D Visualization & Rendering',
    year: '2025',
    genre: '3D • Rendering • Visualization',
    logline: 'Photorealistic 3D renderings of interior spaces for client presentations.',
    stack: ['SketchUp', 'V-Ray', '3DS Max'],
    build: [
      'Produced photorealistic 3D visualisations of interior spaces using SketchUp, V-Ray and 3DS Max.',
      'Created 3D models and renderings for client presentations and design approval.',
    ],
    features: [
      '3D modelling in SketchUp',
      'Realistic rendering with V-Ray',
      '3DS Max visualisations',
      'Client-ready presentations',
    ],
    metrics: [
      { value: '3', label: 'rendering tools' },
      { value: '2025', label: 'project year' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'professional-training',
    title: 'Professional Training',
    org: 'AutoCAD • STAAD.Pro • ETABS • SketchUp • V-Ray • 3DS Max',
    detail: 'Completed professional training in AutoCAD, STAAD.Pro, ETABS, SketchUp, V-Ray, and 3DS Max.',
    laurel: 'Design Software',
  },
  {
    id: 'nptel',
    title: 'NPTEL Certification',
    org: 'National Programme on Technology Enhanced Learning',
    detail: 'Completed NPTEL course in Building Material Composition.',
    laurel: 'Building Materials',
  },
  {
    id: 'internship',
    title: '6-Month Internship',
    org: 'Sugadi Construction and Consultancy',
    detail: 'Gained hands-on experience in drafting, design, and construction project support.',
    laurel: 'Construction Experience',
  },
  {
    id: 'btech-civil',
    title: 'B.Tech Civil Engineering',
    org: 'Kodad Institute of Technology Science for Women',
    detail: 'Completed Bachelor of Technology in Civil Engineering with 70%.',
    laurel: 'Engineering Degree',
  },
  {
    id: 'kiran-interiors',
    title: '1 Year at Kiran Interiors',
    org: 'Kiran Interiors',
    detail: 'Worked as a 2D & 3D Designer creating interior layouts, technical drawings, and realistic 3D visualisations.',
    laurel: 'Professional Experience',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Professional Training', name: 'AutoCAD', link: '' },
  { issuer: 'Professional Training', name: 'STAAD.Pro', link: '' },
  { issuer: 'Professional Training', name: 'ETABS', link: '' },
  { issuer: 'Professional Training', name: 'SketchUp', link: '' },
  { issuer: 'Professional Training', name: 'V-Ray', link: '' },
  { issuer: 'Professional Training', name: '3DS Max', link: '' },
  { issuer: 'NPTEL', name: 'Building Material Composition', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'drafting',
    title: 'Drafting & Design',
    subtitle: 'The core toolkit',
    skills: [
      { name: 'AutoCAD', mono: 'Ac', note: 'Primary' },
    ],
  },
  {
    id: 'structural',
    title: 'Structural Analysis',
    subtitle: 'Engineering foundations',
    skills: [
      { name: 'STAAD.Pro', mono: 'St' },
      { name: 'ETABS', mono: 'Et' },
    ],
  },
  {
    id: 'visualization',
    title: '3D & Visualization',
    subtitle: 'Bringing spaces to life',
    skills: [
      { name: 'SketchUp', mono: 'Sk' },
      { name: 'V-Ray', mono: 'Vr' },
      { name: '3DS Max', mono: '3D' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Communication',
    skills: [
      { name: 'Telugu', mono: 'Te' },
      { name: 'English', mono: 'En' },
      { name: 'Hindi', mono: 'Hi' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  AutoCAD: ['Residential Interior Design', 'Commercial Interior Design', 'Professional Training'],
  'STAAD.Pro': ['Professional Training'],
  ETABS: ['Professional Training'],
  SketchUp: ['Residential Interior Design', 'Commercial Interior Design', '3D Visualization', 'Professional Training'],
  'V-Ray': ['Residential Interior Design', 'Commercial Interior Design', '3D Visualization', 'Professional Training'],
  '3DS Max': ['Commercial Interior Design', '3D Visualization', 'Professional Training'],
  Telugu: ['Languages'],
  English: ['Languages'],
  Hindi: ['Languages'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2021',
    synopsis: 'Intermediate years at Telangana Social Welfare Residential Junior College — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Intermediate (MPC) at Telangana Social Welfare Residential Junior College — finishing with a GPA of 608.',
        tags: ['MPC', 'Intermediate'],
        runtime: '2019 – 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Civil Engineering',
    period: '2021 – 2025',
    synopsis: 'B.Tech in Civil Engineering at Kodad Institute of Technology Science for Women.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Civil Engineering — 70%.',
        tags: ['B.Tech', 'Civil Engineering', '70%'],
        runtime: '2021 – 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Design',
    period: '2025 – 2026',
    synopsis: 'Working as a 2D & 3D Designer at Kiran Interiors.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Designer',
        description: 'Creating interior design layouts, detailed drawings, and realistic 3D visualizations at Kiran Interiors.',
        tags: ['Interiors', '2D & 3D Design', 'AutoCAD'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Visualizer',
        description: '3D models and renderings using SketchUp, V-Ray, and 3DS Max.',
        tags: ['SketchUp', 'V-Ray', '3DS Max'],
        runtime: 'Kiran Interiors',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Coordinator',
        description: 'Coordinated with clients and project teams to deliver functional and aesthetically appealing interior design solutions.',
        tags: ['Client Coordination', 'Project Delivery'],
        runtime: 'Kiran Interiors',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Experience',
    period: '2025',
    synopsis: 'Six-month internship at Sugadi Construction and Consultancy, plus professional training and NPTEL certification.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Intern',
        description: 'Completed a 6-month internship gaining experience in drafting, design, and construction project support.',
        tags: ['Drafting', 'Design', 'Construction Support'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Trained Designer',
        description: 'Professional training in AutoCAD, STAAD.Pro, ETABS, SketchUp, V-Ray, and 3DS Max.',
        tags: ['AutoCAD', 'STAAD.Pro', 'ETABS', 'SketchUp', 'V-Ray', '3DS Max'],
        runtime: 'Professional Training',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Scholar',
        description: 'NPTEL certification in Building Material Composition.',
        tags: ['NPTEL', 'Building Materials'],
        runtime: 'NPTEL',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc of the story — continued growth in interior design.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Continuing to explore space planning, materials, lighting, and photorealistic rendering.',
        tags: ['Space Planning', 'Materials', 'Lighting', 'Rendering'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary tool', title: 'AutoCAD', detail: 'Listed as primary on the resume • Professional training', palette: amber },
  { label: 'The Design Original', title: 'Residential Interiors', detail: 'Space planning • 3D visualisation', palette: crimson },
  { label: 'Biggest stage', title: 'Kiran Interiors', detail: '1 Year of experience', palette: ocean },
  { label: 'Academic foundation', title: 'B.Tech Civil', detail: '70% • Kodad Institute', palette: violet },
  { label: 'Academic start', title: 'Intermediate MPC', detail: 'GPA 608', palette: jade },
  { label: 'Structural credential', title: 'STAAD.Pro', detail: 'Professional training', palette: amber },
  { label: 'Analysis credential', title: 'ETABS', detail: 'Professional training', palette: crimson },
  { label: 'The visualisation arc', title: '3D & V-Ray', detail: 'SketchUp • V-Ray • 3DS Max', palette: ocean },
  { label: 'Construction credential', title: 'Sugadi', detail: '6-month internship', palette: jade },
  { label: 'Current focus', title: 'Interior Design', detail: 'Space Planning • Materials & Lighting • Rendering', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Civil Engineering',
    lines: ['Kodad Institute of Technology Science for Women', '2021 – 2025'],
    chips: ['70%'],
  },
  {
    kicker: 'Skills',
    title: 'AutoCAD first.',
    lines: ['STAAD.Pro, ETABS · SketchUp, V-Ray, 3DS Max'],
    chips: ['AutoCAD', 'STAAD.Pro', 'ETABS', 'SketchUp', 'V-Ray', '3DS Max'],
  },
  {
    kicker: 'Experience',
    title: 'The Design Arc',
    lines: ['2D & 3D Designer · Kiran Interiors · 2025 – 2026', 'Intern · Sugadi Construction · 2025', 'Interior layouts · Technical drawings · 3D visualisations'],
  },
  {
    kicker: 'Projects',
    title: 'Three Design Areas',
    lines: ['Residential Interior Design — space planning & layouts', 'Commercial Interior Design — technical drawings & 3D models', '3D Visualization — photorealistic V-Ray renderings'],
  },
  {
    kicker: 'Certifications',
    title: 'Professional Training',
    lines: ['AutoCAD · STAAD.Pro · ETABS', 'SketchUp · V-Ray · 3DS Max', 'NPTEL — Building Material Composition'],
  },
  {
    kicker: 'Languages',
    title: 'Three Languages',
    lines: ['Telugu · English · Hindi'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Space Planning · Materials & Lighting · Photorealistic Rendering'],
  },
];

export type ProfileId = 'sravanthi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sravanthi',
    name: 'sravanthi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & tools first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Designer • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};