// Translation system for the entire application
export type Language = 'en' | 'pt';

export interface Translations {
  // Navigation
  returnToBase: string;
  backToHome: string;
  nextOrbit: string;
  solarSystem: string;

  // Planet names
  skills: string;
  hobbies: string;
  tools: string;
  dreams: string;

  // Common
  selectTrack: string;
  readyToPlay: string;
  tracks: string;

  // Hobbies page specific
  lifeInMotion: string;
  lifeInMotionSubtitle: string;
  shareTheExperience: string;
  shareTheExperienceSubtitle: string;
  letsConnect: string;
  seeMyCreations: string;

  // Categories
  creativeFlow: string;
  creativeFlowDesc: string;
  creativeFlowVibe: string;
  urbanAdventures: string;
  urbanAdventuresDesc: string;
  urbanAdventuresVibe: string;
  digitalRealms: string;
  digitalRealmsDesc: string;
  digitalRealmsVibe: string;

  // Creative Soul Tags
  creativeSoul: string;
  streetExplorer: string;
  digitalWanderer: string;

  // Music
  guitarMusic: string;
  musicalExpression: string;
  guitarExperience: string;
  guitarDescription: string;
  guitarStory: string;
  guitarFavorite: string;
  heavyMetalRiffs: string;
  acousticFingerpicking: string;
  originalCompositions: string;
  jamSessions: string;
  energeticExpressive: string;
  myMusicalJourney: string;
  musicalCuriosities: string;

  // Guitar curiosities
  guitarCuriosity1: string;
  guitarCuriosity2: string;
  guitarCuriosity3: string;
  guitarCuriosity4: string;
  guitarCuriosity5: string;

  // Art
  digitalArt: string;
  visualStorytelling: string;
  lifetimeCompanion: string;
  artDescription: string;
  artStory: string;
  artFavorite: string;
  characterDesign: string;
  digitalIllustration: string;
  conceptArt: string;
  storytellingThroughArt: string;
  imaginativeDreamy: string;
  creativePortfolio: string;
  artStoriesCreativeProcess: string;

  // Art curiosities
  artCuriosity1: string;
  artCuriosity2: string;
  artCuriosity3: string;
  artCuriosity4: string;
  artCuriosity5: string;

  // Art categories
  characterDesignDesc: string;
  digitalIllustrationDesc: string;
  conceptArtDesc: string;
  storytellingArtDesc: string;
  digitalPainting: string;
  conceptSketching: string;
  colorTheory: string;
  photoshopMastery: string;
  layerManagement: string;
  lightingEffects: string;
  environmentDesign: string;
  moodBoarding: string;
  perspectiveDrawing: string;
  narrativeComposition: string;
  sequentialArt: string;
  emotionCapture: string;
  projects: string;

  // Skateboarding
  skateboarding: string;
  streetCulture: string;
  skateExperience: string;
  skateDescription: string;
  skateStory: string;
  skateFavorite: string;
  streetSkating: string;
  technicalTricks: string;
  urbanExploration: string;
  skateCulture: string;
  rebelliousDetermined: string;
  favoriteSpots: string;
  skateStoriesFacts: string;
  streetCred: string;
  spots: string;
  years: string;

  // Skate spots
  downtownPlaza: string;
  techStreet: string;
  urbanPark: string;
  hiddenGem: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  expert: string;
  active: string;
  crowded: string;
  secret: string;
  ledges: string;
  rails: string;
  stairs: string;
  manualPads: string;
  gaps: string;
  banks: string;
  bowl: string;
  quarters: string;
  spine: string;
  vertWall: string;
  hip: string;
  pool: string;

  // Skate curiosities
  skateCuriosity1: string;
  skateCuriosity2: string;
  skateCuriosity3: string;
  skateCuriosity4: string;
  skateCuriosity5: string;

  // Gaming
  gamingUniverse: string;
  interactiveEntertainment: string;
  lifetimeExplorer: string;
  gamingDescription: string;
  gamingStory: string;
  gamingFavorite: string;
  eldenRingMastery: string;
  soulslikeChallenges: string;
  openWorldExploration: string;
  strategicGaming: string;
  focusedAdventurous: string;
  trophyCollection: string;
  gamingStoriesFacts: string;
  skillLevel: string;
  games: string;
  hours: string;
  passion: string;

  // Game statuses
  mastered: string;
  completed: string;
  playing: string;

  // Game achievements
  eldenLord: string;
  allBosses: string;
  platinumTrophy: string;
  soulOfCinder: string;
  allEndings: string;
  goodHunter: string;
  oldHunters: string;
  chaliceDungeons: string;
  dragonsReturn: string;
  allSkills: string;
  bossRush: string;

  // Gaming curiosities
  gamingCuriosity1: string;
  gamingCuriosity2: string;
  gamingCuriosity3: string;
  gamingCuriosity4: string;
  gamingCuriosity5: string;

  // Track genres
  metal: string;
  acoustic: string;
  original: string;
  collaborative: string;

  // Track artists
  myCompositions: string;
  soloSessions: string;
  creativeFlowArtist: string;
  withFriends: string;

  // Stats
  creativity: string;
  pieces: string;
  ideas: string;

  // Skills page
  skillsUniverse: string;
  technicalExpertise: string;
  frontendDevelopment: string;
  frontendDesc: string;
  backendDevelopment: string;
  backendDesc: string;
  fullStackTools: string;
  fullStackDesc: string;
  react: string;
  nextjs: string;
  typescript: string;
  javascript: string;
  html5: string;
  css3: string;
  tailwindcss: string;
  nodejs: string;
  python: string;
  postgresql: string;
  mongodb: string;
  git: string;
  docker: string;
  vscode: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  technologiesMastered: string;
  level: string;

  // Home page
  welcome: string;
  heroTitle: string;
  heroSubtitle: string;
  exploreMyWork: string;
  getInTouch: string;
  aboutMe: string;
  aboutTitle: string;
  aboutDescription: string;
  myStory: string;
  currentFocus: string;
  passionForCode: string;
  projectsDescription: string;
  viewProject: string;
  viewAllProjects: string;
  contact: string;
  contactTitle: string;
  contactDescription: string;
  sendMessage: string;
  name: string;
  email: string;
  message: string;
  send: string;

  // Navigation
  home: string;
  about: string;
  work: string;

  // About page specific
  hello: string;
  imEdu: string;
  iDevelop: string;
  systems: string;
  aboutIntroDescription: string;
  seePlanets: string;
  discover: string;
  findMeOnline: string;
  readyToStartProject: string;
  startConversation: string;
  scheduleCall: string;
  footerText: string;
  projectInquiry: string;
  discussIdeas: string;

  // Projects
  projectsTitle: string;
  seeMoreOnGithub: string;

  // Skills page
  technicalSkills: string;
  skillsPageDescription: string;
  codeGraviton: string;
  eventHorizonExplorer: string;
  quantumDeveloper: string;
  frontendDevelopmentTitle: string;
  frontendDevelopmentDescription: string;
  backendDevelopmentTitle: string;
  backendDevelopmentDescription: string;
  fullStackToolsTitle: string;
  fullStackToolsDescription: string;
  planetExperience: string;
  completedProjects: string;

  // Skills Stats
  gravitationalStatistics: string;
  dataCollectedDescription: string;
  skillsTechnologies: string;
  skillsProjects: string;
  skillsYears: string;
  skillsLearning: string;
  quantumTools: string;
  stellarObjects: string;
  lightYears: string;
  infiniteMass: string;

  // Tools page
  toolsTitle: string;
  digitalToolkit: string;
  toolsPageDescription: string;
  developmentSuite: string;
  designStudio: string;
  deploymentEngine: string;
  productivityHub: string;
  codingTools: string;
  designTools: string;
  productivityTools: string;

  // Tools Stats
  toolkitAnalytics: string;
  toolsComprehensiveMetrics: string;
  toolsCategories: string;
  professionalTools: string;
  availability: string;
  activeDevelopment: string;
  developmentReady: string;
  toolsMastery: string;
  activeTools: string;
  coreCategories: string;
  avgProficiency: string;
  professionalArsenal: string;
  domainCoverage: string;
  skillMastery: string;

  // Dreams page
  dreamsTitle: string;
  futureVisions: string;
  dreamsPageDescription: string;
  careerExcellence: string;
  creativeExpression: string;
  personalGrowth: string;
  globalImpact: string;
  myDreams: string;
  motivation: string;

  // Dreams Stats
  visionAnalytics: string;
  strategicGoalsDescription: string;
  activeDreams: string;
  lifeAreas: string;
  inProgress: string;
  yearHorizon: string;
  visionPipeline: string;
  holisticGrowth: string;
  activePursuit: string;
  strategicTimeline: string;

  // Hero typing phrases
  typingPhrases: string[];

  // About/Planets
  planetSkills: string;
  planetHobbies: string;
  planetTools: string;
  planetDreams: string;
  skillsDescription: string;
  hobbiesDescription: string;
  toolsDescription: string;
  dreamsDescription: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    returnToBase: 'Return to Base',
    backToHome: 'Return to Base',
    nextOrbit: 'Next Orbit',
    solarSystem: 'Solar System',

    // Planet names
    skills: 'Skills',
    hobbies: 'Hobbies',
    tools: 'Tools',
    dreams: 'Dreams',

    // Common
    selectTrack: 'Select a track',
    readyToPlay: 'Ready to play',
    tracks: 'tracks',

    // Hobbies page specific
    lifeInMotion: 'Life in Motion',
    lifeInMotionSubtitle:
      'Beyond the code and pixels, these are the passions that fuel my creativity and shape my perspective on life.',
    shareTheExperience: 'Share the Experience',
    shareTheExperienceSubtitle:
      'Whether you want to jam on guitar, explore the city on wheels, or dive into epic gaming sessions, I believe the best experiences are shared with others.',
    letsConnect: "Let's Connect",
    seeMyCreations: 'See My Creations',

    // Categories
    creativeFlow: 'Creative Flow',
    creativeFlowDesc: 'Where imagination meets expression',
    creativeFlowVibe: 'Artistic & Soulful',
    urbanAdventures: 'Urban Adventures',
    urbanAdventuresDesc: 'Street culture and city exploration',
    urbanAdventuresVibe: 'Raw & Authentic',
    digitalRealms: 'Digital Realms',
    digitalRealmsDesc: 'Virtual worlds and epic adventures',
    digitalRealmsVibe: 'Immersive & Strategic',

    // Creative Soul Tags
    creativeSoul: 'Creative Soul',
    streetExplorer: 'Street Explorer',
    digitalWanderer: 'Digital Wanderer',

    // Music
    guitarMusic: 'Guitar & Music',
    musicalExpression: 'Musical Expression',
    guitarExperience: '4+ years of passion',
    guitarDescription: 'Every chord tells a story, every riff captures an emotion. Music is my universal language.',
    guitarStory:
      "Started with a cheap acoustic guitar and fell in love with the way six strings could express what words couldn't. From metal riffs to gentle fingerpicking, each style opened a new dimension of creativity.",
    guitarFavorite: 'That magical moment when a new riff just flows naturally',
    heavyMetalRiffs: 'Heavy Metal Riffs',
    acousticFingerpicking: 'Acoustic Fingerpicking',
    originalCompositions: 'Original Compositions',
    jamSessions: 'Jam Sessions',
    energeticExpressive: 'Energetic & Expressive',
    myMusicalJourney: 'My Musical Journey',
    musicalCuriosities: 'Musical Curiosities & Fun Facts',

    // Guitar curiosities
    guitarCuriosity1: 'I can play with my eyes closed - muscle memory took over after countless hours of practice',
    guitarCuriosity2: 'My first song was learned by watching YouTube tutorials at 0.5x speed',
    guitarCuriosity3: "I've written over 20 original riffs, but only 3 complete songs",
    guitarCuriosity4: 'The sound of a perfectly tuned guitar gives me chills every time',
    guitarCuriosity5: 'I prefer playing late at night when the world is quiet',

    // Art
    digitalArt: 'Digital Art & Drawing',
    visualStorytelling: 'Visual Storytelling',
    lifetimeCompanion: 'Lifetime companion',
    artDescription: 'Bringing imagination to life through pixels and pencil strokes, one character at a time.',
    artStory:
      'Art has been my constant companion since childhood. What started as doodles in school notebooks evolved into digital masterpieces and character designs that tell their own stories.',
    artFavorite: 'Creating characters that feel alive and have their own personality',
    characterDesign: 'Character Design',
    digitalIllustration: 'Digital Illustration',
    conceptArt: 'Concept Art',
    storytellingThroughArt: 'Storytelling Through Art',
    imaginativeDreamy: 'Imaginative & Dreamy',
    creativePortfolio: 'Creative Portfolio',
    artStoriesCreativeProcess: 'Art Stories & Creative Process',

    // Art curiosities
    artCuriosity1: "I still have my first digital drawing saved from 2018 - it's terrible but precious",
    artCuriosity2: "My art style changes completely depending on my mood and the music I'm listening to",
    artCuriosity3: 'I can spend 6+ hours on a single character design and lose track of time completely',
    artCuriosity4: 'Each character I create has a full backstory, even if I never share it',
    artCuriosity5: 'I prefer drawing at night with dim lighting - it helps me focus on the screen',

    // Art categories
    characterDesignDesc: 'Creating unique personalities through visual storytelling',
    digitalIllustrationDesc: 'Bringing ideas to life with digital brushes and imagination',
    conceptArtDesc: "Visualizing worlds and environments that don't exist yet",
    storytellingArtDesc: 'Every piece tells a story, every story needs a visual voice',
    digitalPainting: 'Digital Painting',
    conceptSketching: 'Concept Sketching',
    colorTheory: 'Color Theory',
    photoshopMastery: 'Photoshop Mastery',
    layerManagement: 'Layer Management',
    lightingEffects: 'Lighting Effects',
    environmentDesign: 'Environment Design',
    moodBoarding: 'Mood Boarding',
    perspectiveDrawing: 'Perspective Drawing',
    narrativeComposition: 'Narrative Composition',
    sequentialArt: 'Sequential Art',
    emotionCapture: 'Emotion Capture',
    projects: 'projects',

    // Skateboarding
    skateboarding: 'Skateboarding',
    streetCulture: 'Street Culture',
    skateExperience: '8+ years of progression',
    skateDescription: 'Rolling through life with style, balance, and an endless pursuit of the perfect trick.',
    skateStory:
      'Started skateboarding as a way to explore the city differently. Every curb became a challenge, every staircase an opportunity. The skateboarding community taught me perseverance and creativity.',
    skateFavorite: "The pure satisfaction of finally landing a trick you've been working on for weeks",
    streetSkating: 'Street Skating',
    technicalTricks: 'Technical Tricks',
    urbanExploration: 'Urban Exploration',
    skateCulture: 'Skate Culture',
    rebelliousDetermined: 'Rebellious & Determined',
    favoriteSpots: 'Favorite Spots',
    skateStoriesFacts: 'Skate Stories & Facts',
    streetCred: 'Street Cred',
    spots: 'Spots',
    years: 'Years',

    // Skate spots
    downtownPlaza: 'Downtown Plaza',
    techStreet: 'Tech Street',
    urbanPark: 'Urban Park',
    hiddenGem: 'Hidden Gem',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',
    active: 'Active',
    crowded: 'Crowded',
    secret: 'Secret',
    ledges: 'Ledges',
    rails: 'Rails',
    stairs: 'Stairs',
    manualPads: 'Manual Pads',
    gaps: 'Gaps',
    banks: 'Banks',
    bowl: 'Bowl',
    quarters: 'Quarters',
    spine: 'Spine',
    vertWall: 'Vert Wall',
    hip: 'Hip',
    pool: 'Pool',

    // Skate curiosities
    skateCuriosity1: "I've gone through 12 skateboard decks over the years - each one tells a story of progression",
    skateCuriosity2: 'The worst slam I took was trying to kickflip down a 6-stair - still have the scar',
    skateCuriosity3: "I can identify a skater's style just by the sound their wheels make on concrete",
    skateCuriosity4: 'My favorite spots are always the ones that look impossible but have that perfect angle',
    skateCuriosity5: "I've skated in the rain more times than I should admit - grip tape becomes useless",

    // Gaming
    gamingUniverse: 'Gaming Universe',
    interactiveEntertainment: 'Interactive Entertainment',
    lifetimeExplorer: 'Lifetime explorer',
    gamingDescription: 'Conquering digital worlds, solving complex puzzles, and living a thousand different stories.',
    gamingStory:
      'Gaming opened doors to infinite worlds where I could be anyone and do anything. From the challenging lands of Elden Ring to strategic battles, each game teaches patience, problem-solving, and creativity.',
    gamingFavorite: 'Elden Ring - The perfect blend of challenge, exploration, and pure artistic beauty',
    eldenRingMastery: 'Elden Ring Mastery',
    soulslikeChallenges: 'Soulslike Challenges',
    openWorldExploration: 'Open World Exploration',
    strategicGaming: 'Strategic Gaming',
    focusedAdventurous: 'Focused & Adventurous',
    trophyCollection: 'Trophy Collection',
    gamingStoriesFacts: 'Gaming Stories & Facts',
    skillLevel: 'Skill Level',
    games: 'Games',
    hours: 'Hours',
    passion: 'Passion',

    // Game statuses
    mastered: 'Mastered',
    completed: 'Completed',
    playing: 'Playing',

    // Game achievements
    eldenLord: 'Elden Lord',
    allBosses: 'All Bosses',
    platinumTrophy: 'Platinum Trophy',
    soulOfCinder: 'Soul of Cinder',
    allEndings: 'All Endings',
    goodHunter: 'Good Hunter',
    oldHunters: 'Old Hunters',
    chaliceDungeons: 'Chalice Dungeons',
    dragonsReturn: "Dragon's Return",
    allSkills: 'All Skills',
    bossRush: 'Boss Rush',

    // Gaming curiosities
    gamingCuriosity1: "I've died over 2000 times in Elden Ring and loved every single death",
    gamingCuriosity2: 'My longest gaming session was 14 hours straight trying to beat Malenia',
    gamingCuriosity3: 'I read item descriptions and lore more than most people read books',
    gamingCuriosity4: 'I always play games on the hardest difficulty - easy mode feels like cheating',
    gamingCuriosity5: 'My Steam library has 200+ games but I keep coming back to the same 5 favorites',

    // Track genres
    metal: 'Metal',
    acoustic: 'Acoustic',
    original: 'Original',
    collaborative: 'Collaborative',

    // Track artists
    myCompositions: 'My Compositions',
    soloSessions: 'Solo Sessions',
    creativeFlowArtist: 'Creative Flow',
    withFriends: 'With Friends',

    // Stats
    creativity: 'Creativity',
    pieces: 'Pieces',
    ideas: 'Ideas',

    // Skills page
    skillsUniverse: 'Skills Universe',
    technicalExpertise: 'Technical Expertise',
    frontendDevelopment: 'Frontend Development',
    frontendDesc: 'User interface and experience technologies',
    backendDevelopment: 'Backend Development',
    backendDesc: 'Server-side logic and database management',
    fullStackTools: 'Full Stack Tools',
    fullStackDesc: 'Development environment and productivity tools',
    react: 'React',
    nextjs: 'Next.js',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    html5: 'HTML5',
    css3: 'CSS3',
    tailwindcss: 'Tailwind CSS',
    nodejs: 'Node.js',
    python: 'Python',
    postgresql: 'PostgreSQL',
    mongodb: 'MongoDB',
    git: 'Git',
    docker: 'Docker',
    vscode: 'VS Code',
    yearsOfExperience: 'Years of Experience',
    projectsCompleted: 'Projects Completed',
    technologiesMastered: 'Technologies Mastered',
    level: 'Level',

    // Home page
    welcome: 'Welcome',
    heroTitle: 'Full Stack Developer',
    heroSubtitle: 'Creating digital experiences with passion, precision, and cutting-edge technology.',
    exploreMyWork: 'Explore My Work',
    getInTouch: 'Get In Touch',
    aboutMe: 'About Me',
    aboutTitle: 'Passionate Developer & Creative Thinker',
    aboutDescription:
      "I'm a full-stack developer with a love for creating beautiful, functional applications that solve real-world problems.",
    myStory: 'My Story',
    currentFocus: 'Current Focus',
    passionForCode: 'Passion for Code',
    projectsDescription: 'A showcase of my recent work and creative projects.',
    viewProject: 'View Project',
    viewAllProjects: 'View All Projects',
    contact: 'Contact',
    contactTitle: "Let's Work Together",
    contactDescription: "Have a project in mind? I'd love to hear from you.",
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',

    // Navigation
    home: 'Home',
    about: 'About',
    work: 'Work',

    // Hero typing phrases
    typingPhrases: [
      'Front-end Developer & Space UI Explorer',
      'Full Stack Astronaut',
      'Advocate of Clean Code',
      'Cosmic Interface Designer',
      'React Nebula Navigator',
      'Galactic UX Enthusiast',
      'TypeScript Star Mapper',
    ],

    // About/Planets
    planetSkills: 'Planet Skills',
    planetHobbies: 'Planet Hobbies',
    planetTools: 'Planet Tools',
    planetDreams: 'Planet Dreams',
    skillsDescription:
      'Explore my universe of skills: interfaces with React & TypeScript, APIs with Node.js, and beautiful UIs with CSS & Tailwind. Always learning, always evolving!',
    hobbiesDescription:
      'My passions orbit around music, games, travel, photography, and cooking. Always searching for new adventures and creative inspiration!',
    toolsDescription:
      'My toolkit: coding in VS Code, collaborating on GitHub, designing in Figma, organizing with Notion, and animating with Framer Motion.',
    dreamsDescription:
      "Building the future with innovative ideas, creating meaningful impact, and pushing the boundaries of what's possible in tech.",

    // About page specific
    hello: 'Hello',
    imEdu: "I'm Edu",
    iDevelop: 'I develop',
    systems: 'systems',
    aboutIntroDescription:
      'I create digital solutions with design and code. My focus is on building modern, fast and secure systems that solve real problems and deliver great experiences. Want to know more? See the planets below and explore each theme.',
    seePlanets: 'See planets',
    discover: 'Discover',
    findMeOnline: 'Find me online',
    readyToStartProject: 'Ready to start your project?',
    startConversation: 'Start a Conversation',
    scheduleCall: 'Schedule a Call',
    footerText: '© 2024 Eduardo Silva. Built with Next.js and hosted on GitHub Pages.',

    // Projects
    projectsTitle: 'Projects',
    seeMoreOnGithub: 'See more on GitHub',
    projectInquiry:
      "Let's discuss your ideas and see how we can bring them to life. I'm available for freelance projects and full-time opportunities.",
    discussIdeas: 'Ready to start your project?',

    // Skills page
    technicalSkills: 'Technical Skills',
    skillsPageDescription:
      'Navigating through the event horizon of technology, where knowledge bends spacetime and innovation transcends boundaries.',
    codeGraviton: 'Code Graviton',
    eventHorizonExplorer: 'Event Horizon Explorer',
    quantumDeveloper: 'Quantum Developer',
    frontendDevelopmentTitle: 'Frontend Development',
    frontendDevelopmentDescription: 'User interface and experience technologies',
    backendDevelopmentTitle: 'Backend Development',
    backendDevelopmentDescription: 'Server-side technologies and databases',
    fullStackToolsTitle: 'Full Stack Tools',
    fullStackToolsDescription: 'Development and deployment technologies',
    planetExperience: 'Experience',
    completedProjects: 'Completed Projects',

    // Skills Stats
    gravitationalStatistics: 'Gravitational Statistics',
    dataCollectedDescription: 'Data collected from beyond the event horizon of my technological journey',
    skillsTechnologies: 'Technologies',
    skillsProjects: 'Projects',
    skillsYears: 'Years',
    skillsLearning: 'Learning',
    quantumTools: 'Quantum Tools',
    stellarObjects: 'Stellar Objects',
    lightYears: 'Light Years',
    infiniteMass: 'Infinite Mass',

    // Tools page
    toolsTitle: 'Tools Universe',
    digitalToolkit: 'Digital Toolkit',
    toolsPageDescription:
      'Professional tools and platforms that power modern development workflows and creative processes. Each tool has been carefully selected and mastered to deliver exceptional results.',
    developmentSuite: 'Development Suite',
    designStudio: 'Design Studio',
    deploymentEngine: 'Deployment Engine',
    productivityHub: 'Productivity Hub',
    codingTools: 'Coding Tools',
    designTools: 'Design Tools',
    productivityTools: 'Productivity Tools',

    // Tools Stats
    toolkitAnalytics: 'Toolkit Analytics',
    toolsComprehensiveMetrics:
      'Comprehensive metrics showcasing proficiency levels and practical experience across essential development and design tools.',
    toolsCategories: 'Categories',
    professionalTools: 'Professional Tools',
    availability: 'Availability',
    activeDevelopment: 'Active Development',
    developmentReady: 'Development Ready',
    toolsMastery: 'Tools Mastery',
    activeTools: 'Active Tools',
    coreCategories: 'Core Categories',
    avgProficiency: 'Avg Proficiency',
    professionalArsenal: 'Professional Arsenal',
    domainCoverage: 'Domain Coverage',
    skillMastery: 'Skill Mastery',

    // Dreams page
    dreamsTitle: 'Dreams Universe',
    futureVisions: 'Future Visions',
    dreamsPageDescription:
      'Ambitious goals and aspirations that drive my journey forward. Each dream represents a commitment to growth, impact, and the pursuit of meaningful achievements that extend beyond personal success.',
    careerExcellence: 'Career Excellence',
    creativeExpression: 'Creative Expression',
    personalGrowth: 'Personal Growth',
    globalImpact: 'Global Impact',
    myDreams: 'My Dreams',
    motivation: 'Motivation',

    // Dreams Stats
    visionAnalytics: 'Vision Analytics',
    strategicGoalsDescription:
      'Strategic goals mapped across different life dimensions, each with clear timelines and actionable steps toward realization.',
    activeDreams: 'Active Dreams',
    lifeAreas: 'Life Areas',
    inProgress: 'In Progress',
    yearHorizon: 'Year Horizon',
    visionPipeline: 'Vision Pipeline',
    holisticGrowth: 'Holistic Growth',
    activePursuit: 'Active Pursuit',
    strategicTimeline: 'Strategic Timeline',
  },
  pt: {
    // Navigation
    returnToBase: 'Voltar à Base',
    backToHome: 'Voltar à Base',
    nextOrbit: 'Próxima Órbita',
    solarSystem: 'Sistema Solar',

    // Planet names
    skills: 'Habilidades',
    hobbies: 'Hobbies',
    tools: 'Ferramentas',
    dreams: 'Sonhos',

    // Common
    selectTrack: 'Selecione uma faixa',
    readyToPlay: 'Pronto para tocar',
    tracks: 'faixas',

    // Hobbies page specific
    lifeInMotion: 'Vida em Movimento',
    lifeInMotionSubtitle:
      'Além do código e pixels, essas são as paixões que alimentam minha criatividade e moldam minha perspectiva de vida.',
    shareTheExperience: 'Compartilhe a Experiência',
    shareTheExperienceSubtitle:
      'Se você quer tocar guitarra, explorar a cidade sobre rodas, ou mergulhar em sessões épicas de jogos, acredito que as melhores experiências são compartilhadas com outros.',
    letsConnect: 'Vamos Nos Conectar',
    seeMyCreations: 'Veja Minhas Criações',

    // Categories
    creativeFlow: 'Fluxo Criativo',
    creativeFlowDesc: 'Onde a imaginação encontra a expressão',
    creativeFlowVibe: 'Artístico & Sensível',
    urbanAdventures: 'Aventuras Urbanas',
    urbanAdventuresDesc: 'Cultura de rua e exploração da cidade',
    urbanAdventuresVibe: 'Cru & Autêntico',
    digitalRealms: 'Reinos Digitais',
    digitalRealmsDesc: 'Mundos virtuais e aventuras épicas',
    digitalRealmsVibe: 'Imersivo & Estratégico',

    // Creative Soul Tags
    creativeSoul: 'Alma Criativa',
    streetExplorer: 'Explorador Urbano',
    digitalWanderer: 'Andarilho Digital',

    // Music
    guitarMusic: 'Guitarra & Música',
    musicalExpression: 'Expressão Musical',
    guitarExperience: '4+ anos de paixão',
    guitarDescription:
      'Cada acorde conta uma história, cada riff captura uma emoção. A música é minha linguagem universal.',
    guitarStory:
      'Comecei com uma guitarra acústica barata e me apaixonei pela forma como seis cordas podiam expressar o que as palavras não conseguiam. Dos riffs de metal ao fingerpicking suave, cada estilo abriu uma nova dimensão de criatividade.',
    guitarFavorite: 'Aquele momento mágico quando um novo riff flui naturalmente',
    heavyMetalRiffs: 'Riffs de Heavy Metal',
    acousticFingerpicking: 'Fingerpicking Acústico',
    originalCompositions: 'Composições Originais',
    jamSessions: 'Sessões de Jam',
    energeticExpressive: 'Energético & Expressivo',
    myMusicalJourney: 'Minha Jornada Musical',
    musicalCuriosities: 'Curiosidades Musicais & Fatos Divertidos',

    // Guitar curiosities
    guitarCuriosity1: 'Posso tocar de olhos fechados - a memória muscular tomou conta após inúmeras horas de prática',
    guitarCuriosity2: 'Minha primeira música foi aprendida assistindo tutoriais do YouTube em 0.5x de velocidade',
    guitarCuriosity3: 'Escrevi mais de 20 riffs originais, mas apenas 3 músicas completas',
    guitarCuriosity4: 'O som de uma guitarra perfeitamente afinada me dá arrepios toda vez',
    guitarCuriosity5: 'Prefiro tocar tarde da noite quando o mundo está silencioso',

    // Art
    digitalArt: 'Arte Digital & Desenho',
    visualStorytelling: 'Narrativa Visual',
    lifetimeCompanion: 'Companheira vitalícia',
    artDescription: 'Dando vida à imaginação através de pixels e traços de lápis, um personagem por vez.',
    artStory:
      'A arte tem sido minha companheira constante desde a infância. O que começou como rabiscos em cadernos da escola evoluiu para obras-primas digitais e designs de personagens que contam suas próprias histórias.',
    artFavorite: 'Criar personagens que parecem vivos e têm sua própria personalidade',
    characterDesign: 'Design de Personagens',
    digitalIllustration: 'Ilustração Digital',
    conceptArt: 'Arte Conceitual',
    storytellingThroughArt: 'Narrativa Através da Arte',
    imaginativeDreamy: 'Imaginativo & Sonhador',
    creativePortfolio: 'Portfólio Criativo',
    artStoriesCreativeProcess: 'Histórias de Arte & Processo Criativo',

    // Art curiosities
    artCuriosity1: 'Ainda tenho meu primeiro desenho digital salvo de 2018 - é terrível, mas precioso',
    artCuriosity2: 'Meu estilo de arte muda completamente dependendo do meu humor e da música que estou ouvindo',
    artCuriosity3: 'Posso gastar 6+ horas em um único design de personagem e perder completamente a noção do tempo',
    artCuriosity4: 'Cada personagem que crio tem uma história completa, mesmo que eu nunca a compartilhe',
    artCuriosity5: 'Prefiro desenhar à noite com pouca luz - me ajuda a focar na tela',

    // Art categories
    characterDesignDesc: 'Criando personalidades únicas através da narrativa visual',
    digitalIllustrationDesc: 'Dando vida às ideias com pincéis digitais e imaginação',
    conceptArtDesc: 'Visualizando mundos e ambientes que ainda não existem',
    storytellingArtDesc: 'Cada peça conta uma história, cada história precisa de uma voz visual',
    digitalPainting: 'Pintura Digital',
    conceptSketching: 'Esboços Conceituais',
    colorTheory: 'Teoria das Cores',
    photoshopMastery: 'Domínio do Photoshop',
    layerManagement: 'Gerenciamento de Camadas',
    lightingEffects: 'Efeitos de Iluminação',
    environmentDesign: 'Design de Ambientes',
    moodBoarding: 'Painel de Humor',
    perspectiveDrawing: 'Desenho em Perspectiva',
    narrativeComposition: 'Composição Narrativa',
    sequentialArt: 'Arte Sequencial',
    emotionCapture: 'Captura de Emoção',
    projects: 'projetos',

    // Skateboarding
    skateboarding: 'Skate',
    streetCulture: 'Cultura de Rua',
    skateExperience: '8+ anos de progressão',
    skateDescription: 'Rolando pela vida com estilo, equilíbrio e uma busca infinita pela manobra perfeita.',
    skateStory:
      'Comecei a andar de skate como uma forma de explorar a cidade de forma diferente. Cada meio-fio se tornou um desafio, cada escadaria uma oportunidade. A comunidade do skate me ensinou perseverança e criatividade.',
    skateFavorite: 'A pura satisfação de finalmente conseguir uma manobra em que você vem trabalhando há semanas',
    streetSkating: 'Street Skate',
    technicalTricks: 'Manobras Técnicas',
    urbanExploration: 'Exploração Urbana',
    skateCulture: 'Cultura do Skate',
    rebelliousDetermined: 'Rebelde & Determinado',
    favoriteSpots: 'Spots Favoritos',
    skateStoriesFacts: 'Histórias & Fatos do Skate',
    streetCred: 'Credibilidade',
    spots: 'Spots',
    years: 'Anos',

    // Skate spots
    downtownPlaza: 'Praça do Centro',
    techStreet: 'Rua Técnica',
    urbanPark: 'Parque Urbano',
    hiddenGem: 'Joia Escondida',
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
    expert: 'Expert',
    active: 'Ativo',
    crowded: 'Lotado',
    secret: 'Secreto',
    ledges: 'Bordas',
    rails: 'Corrimãos',
    stairs: 'Escadas',
    manualPads: 'Manual Pads',
    gaps: 'Gaps',
    banks: 'Banks',
    bowl: 'Bowl',
    quarters: 'Quarters',
    spine: 'Spine',
    vertWall: 'Parede Vert',
    hip: 'Hip',
    pool: 'Piscina',

    // Skate curiosities
    skateCuriosity1: 'Passei por 12 shapes de skate ao longo dos anos - cada um conta uma história de progressão',
    skateCuriosity2:
      'A pior queda que levei foi tentando um kickflip numa escada de 6 degraus - ainda tenho a cicatriz',
    skateCuriosity3: 'Consigo identificar o estilo de um skatista apenas pelo som que as rodas fazem no concreto',
    skateCuriosity4: 'Meus spots favoritos são sempre aqueles que parecem impossíveis, mas têm aquele ângulo perfeito',
    skateCuriosity5: 'Andei de skate na chuva mais vezes do que deveria admitir - o lixa fica inútil',

    // Gaming
    gamingUniverse: 'Universo Gamer',
    interactiveEntertainment: 'Entretenimento Interativo',
    lifetimeExplorer: 'Explorador vitalício',
    gamingDescription:
      'Conquistando mundos digitais, resolvendo quebra-cabeças complexos e vivendo mil histórias diferentes.',
    gamingStory:
      'Os jogos abriram portas para mundos infinitos onde eu podia ser qualquer um e fazer qualquer coisa. Das terras desafiadoras de Elden Ring às batalhas estratégicas, cada jogo ensina paciência, resolução de problemas e criatividade.',
    gamingFavorite: 'Elden Ring - A combinação perfeita de desafio, exploração e pura beleza artística',
    eldenRingMastery: 'Maestria em Elden Ring',
    soulslikeChallenges: 'Desafios Soulslike',
    openWorldExploration: 'Exploração de Mundo Aberto',
    strategicGaming: 'Jogos Estratégicos',
    focusedAdventurous: 'Focado & Aventureiro',
    trophyCollection: 'Coleção de Troféus',
    gamingStoriesFacts: 'Histórias & Fatos dos Games',
    skillLevel: 'Nível de Habilidade',
    games: 'Jogos',
    hours: 'Horas',
    passion: 'Paixão',

    // Game statuses
    mastered: 'Dominado',
    completed: 'Completado',
    playing: 'Jogando',

    // Game achievements
    eldenLord: 'Lorde Elden',
    allBosses: 'Todos os Bosses',
    platinumTrophy: 'Troféu de Platina',
    soulOfCinder: 'Alma de Cinza',
    allEndings: 'Todos os Finais',
    goodHunter: 'Bom Caçador',
    oldHunters: 'Caçadores Antigos',
    chaliceDungeons: 'Masmorras do Cálice',
    dragonsReturn: 'Retorno do Dragão',
    allSkills: 'Todas as Habilidades',
    bossRush: 'Corrida de Bosses',

    // Gaming curiosities
    gamingCuriosity1: 'Morri mais de 2000 vezes em Elden Ring e amei cada morte',
    gamingCuriosity2: 'Minha sessão de jogo mais longa foi 14 horas direto tentando vencer a Malenia',
    gamingCuriosity3: 'Eu leio descrições de itens e lore mais do que a maioria das pessoas lê livros',
    gamingCuriosity4: 'Sempre jogo na dificuldade mais alta - modo fácil parece trapaça',
    gamingCuriosity5: 'Minha biblioteca Steam tem 200+ jogos, mas sempre volto para os mesmos 5 favoritos',

    // Track genres
    metal: 'Metal',
    acoustic: 'Acústico',
    original: 'Original',
    collaborative: 'Colaborativo',

    // Track artists
    myCompositions: 'Minhas Composições',
    soloSessions: 'Sessões Solo',
    creativeFlowArtist: 'Fluxo Criativo',
    withFriends: 'Com Amigos',

    // Stats
    creativity: 'Criatividade',
    pieces: 'Peças',
    ideas: 'Ideias',

    // Skills page
    skillsUniverse: 'Universo de Habilidades',
    technicalExpertise: 'Expertise Técnica',
    frontendDevelopment: 'Desenvolvimento Frontend',
    frontendDesc: 'Tecnologias de interface e experiência do usuário',
    backendDevelopment: 'Desenvolvimento Backend',
    backendDesc: 'Lógica server-side e gerenciamento de banco de dados',
    fullStackTools: 'Ferramentas Full Stack',
    fullStackDesc: 'Ambiente de desenvolvimento e ferramentas de produtividade',
    react: 'React',
    nextjs: 'Next.js',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    html5: 'HTML5',
    css3: 'CSS3',
    tailwindcss: 'Tailwind CSS',
    nodejs: 'Node.js',
    python: 'Python',
    postgresql: 'PostgreSQL',
    mongodb: 'MongoDB',
    git: 'Git',
    docker: 'Docker',
    vscode: 'VS Code',
    yearsOfExperience: 'Anos de Experiência',
    projectsCompleted: 'Projetos Completados',
    technologiesMastered: 'Tecnologias Dominadas',
    level: 'Nível',

    // Home page
    welcome: 'Bem-vindo',
    heroTitle: 'Desenvolvedor Full Stack',
    heroSubtitle: 'Criando experiências digitais com paixão, precisão e tecnologia de ponta.',
    exploreMyWork: 'Explore Meu Trabalho',
    getInTouch: 'Entre em Contato',
    aboutMe: 'Sobre Mim',
    aboutTitle: 'Desenvolvedor Apaixonado & Pensador Criativo',
    aboutDescription:
      'Sou um desenvolvedor full-stack com amor por criar aplicações bonitas e funcionais que resolvem problemas do mundo real.',
    myStory: 'Minha História',
    currentFocus: 'Foco Atual',
    passionForCode: 'Paixão por Código',
    projectsDescription: 'Uma vitrine do meu trabalho recente e projetos criativos.',
    viewProject: 'Ver Projeto',
    viewAllProjects: 'Ver Todos os Projetos',
    contact: 'Contato',
    contactTitle: 'Vamos Trabalhar Juntos',
    contactDescription: 'Tem um projeto em mente? Adoraria ouvir de você.',
    sendMessage: 'Enviar Mensagem',
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    send: 'Enviar',

    // Navigation
    home: 'Início',
    about: 'Sobre',
    work: 'Trabalhos',

    // Hero typing phrases
    typingPhrases: [
      'Desenvolvedor Front-end & Explorador de UI Espacial',
      'Astronauta Full Stack',
      'Defensor de Código Limpo',
      'Designer de Interface Cósmica',
      'Navegador da Nebulosa React',
      'Entusiasta de UX Galático',
      'Mapeador de Estrelas TypeScript',
    ],

    // About/Planets
    planetSkills: 'Planeta Habilidades',
    planetHobbies: 'Planeta Hobbies',
    planetTools: 'Planeta Ferramentas',
    planetDreams: 'Planeta Sonhos',
    skillsDescription:
      'Explore meu universo de habilidades: interfaces com React & TypeScript, APIs com Node.js, e UIs lindas com CSS & Tailwind. Sempre aprendendo, sempre evoluindo!',
    hobbiesDescription:
      'Minhas paixões orbitam em torno de música, jogos, viagem, fotografia e culinária. Sempre buscando novas aventuras e inspiração criativa!',
    toolsDescription:
      'Meu kit de ferramentas: codificando no VS Code, colaborando no GitHub, projetando no Figma, organizando com Notion e animando com Framer Motion.',
    dreamsDescription:
      'Construindo o futuro com ideias inovadoras, criando impacto significativo e empurrando os limites do que é possível na tecnologia.',

    // About page specific
    hello: 'Olá',
    imEdu: 'Eu sou o Edu',
    iDevelop: 'Eu desenvolvo',
    systems: 'sistemas',
    aboutIntroDescription:
      'Eu crio soluções digitais com design e código. Meu foco é construir sistemas modernos, rápidos e seguros que resolvem problemas reais e entregam ótimas experiências. Quer saber mais? Veja os planetas abaixo e explore cada tema.',
    seePlanets: 'Ver planetas',
    discover: 'Descobrir',
    findMeOnline: 'Me encontre online',
    readyToStartProject: 'Pronto para começar seu projeto?',
    startConversation: 'Iniciar uma Conversa',
    scheduleCall: 'Agendar uma Chamada',
    footerText: '© 2024 Eduardo Silva. Construído com Next.js e hospedado no GitHub Pages.',

    // Projects
    projectsTitle: 'Projetos',
    seeMoreOnGithub: 'Ver mais no GitHub',
    projectInquiry:
      'Vamos discutir suas ideias e ver como podemos trazê-las à vida. Estou disponível para projetos freelance e oportunidades de tempo integral.',
    discussIdeas: 'Pronto para começar seu projeto?',

    // Skills page
    technicalSkills: 'Habilidades Técnicas',
    skillsPageDescription:
      'Navegando através do horizonte de eventos da tecnologia, onde o conhecimento dobra o espaço-tempo e a inovação transcende fronteiras.',
    codeGraviton: 'Gravíton do Código',
    eventHorizonExplorer: 'Explorador do Horizonte de Eventos',
    quantumDeveloper: 'Desenvolvedor Quântico',
    frontendDevelopmentTitle: 'Desenvolvimento Frontend',
    frontendDevelopmentDescription: 'Tecnologias de interface e experiência do usuário',
    backendDevelopmentTitle: 'Desenvolvimento Backend',
    backendDevelopmentDescription: 'Tecnologias server-side e bancos de dados',
    fullStackToolsTitle: 'Ferramentas Full Stack',
    fullStackToolsDescription: 'Tecnologias de desenvolvimento e deploy',
    planetExperience: 'Experiência',
    completedProjects: 'Projetos Completados',

    // Skills Stats
    gravitationalStatistics: 'Estatísticas Gravitacionais',
    dataCollectedDescription: 'Dados coletados além do horizonte de eventos da minha jornada tecnológica',
    skillsTechnologies: 'Tecnologias',
    skillsProjects: 'Projetos',
    skillsYears: 'Anos',
    skillsLearning: 'Aprendizado',
    quantumTools: 'Ferramentas Quânticas',
    stellarObjects: 'Objetos Estelares',
    lightYears: 'Anos-luz',
    infiniteMass: 'Massa Infinita',

    // Tools page
    toolsTitle: 'Universo de Ferramentas',
    digitalToolkit: 'Kit de Ferramentas Digitais',
    toolsPageDescription:
      'Ferramentas e plataformas profissionais que potencializam workflows de desenvolvimento modernos e processos criativos. Cada ferramenta foi cuidadosamente selecionada e dominada para entregar resultados excepcionais.',
    developmentSuite: 'Suíte de Desenvolvimento',
    designStudio: 'Estúdio de Design',
    deploymentEngine: 'Motor de Deploy',
    productivityHub: 'Hub de Produtividade',
    codingTools: 'Ferramentas de Código',
    designTools: 'Ferramentas de Design',
    productivityTools: 'Ferramentas de Produtividade',

    // Tools Stats
    toolkitAnalytics: 'Análise do Kit de Ferramentas',
    toolsComprehensiveMetrics:
      'Métricas abrangentes mostrando níveis de proficiência e experiência prática em ferramentas essenciais de desenvolvimento e design.',
    toolsCategories: 'Categorias',
    professionalTools: 'Ferramentas Profissionais',
    availability: 'Disponibilidade',
    activeDevelopment: 'Desenvolvimento Ativo',
    developmentReady: 'Pronto para Desenvolvimento',
    toolsMastery: 'Domínio de Ferramentas',
    activeTools: 'Ferramentas Ativas',
    coreCategories: 'Categorias Principais',
    avgProficiency: 'Proficiência Média',
    professionalArsenal: 'Arsenal Profissional',
    domainCoverage: 'Cobertura de Domínio',
    skillMastery: 'Domínio de Habilidades',

    // Dreams page
    dreamsTitle: 'Universo dos Sonhos',
    futureVisions: 'Visões do Futuro',
    dreamsPageDescription:
      'Objetivos ambiciosos e aspirações que impulsionam minha jornada. Cada sonho representa um compromisso com o crescimento, impacto e a busca por conquistas significativas que vão além do sucesso pessoal.',
    careerExcellence: 'Excelência na Carreira',
    creativeExpression: 'Expressão Criativa',
    personalGrowth: 'Crescimento Pessoal',
    globalImpact: 'Impacto Global',
    myDreams: 'Meus Sonhos',
    motivation: 'Motivação',

    // Dreams Stats
    visionAnalytics: 'Análise de Visão',
    strategicGoalsDescription:
      'Objetivos estratégicos mapeados em diferentes dimensões da vida, cada um com cronogramas claros e passos acionáveis para realização.',
    activeDreams: 'Sonhos Ativos',
    lifeAreas: 'Áreas da Vida',
    inProgress: 'Em Progresso',
    yearHorizon: 'Horizonte de Anos',
    visionPipeline: 'Pipeline de Visão',
    holisticGrowth: 'Crescimento Holístico',
    activePursuit: 'Busca Ativa',
    strategicTimeline: 'Cronograma Estratégico',
  },
};

// Language context
export const useTranslation = (language: Language = 'en') => {
  return translations[language];
};