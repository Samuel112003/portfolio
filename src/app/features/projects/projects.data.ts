import { Project } from '../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'genourob',
    title: 'Software & Game Development – Genourob',
    context: 'professional',
    description: 'Development of software and 2D games in a medical gaming context.',
    technologies: ['Flutter', 'Flame', 'SOLID', 'Design Patterns'],
    highlights: [
      'Game development',
      'Code architecture refactoring',
      'Team collaboration'
    ],
    hasDetails: true,
    companyUrl: 'https://www.genourob.com',
    detailedSections: [
      {
        title: 'Context',
        content: [
          'Joined the company as a software development intern.',
          'Initially responsible for developing new 2D games.'
        ]
      },
      {
        title: 'Identified Problem',
        content: [
          'Monolithic and hard-to-maintain codebase.',
          'Low reusability and poor separation of responsibilities.'
        ]
      },
      {
        title: 'Engineering Decisions',
        content: [
          'Refactored the architecture.',
          'Applied SOLID principles and design patterns.',
          'Improved modularity and flexibility.'
        ]
      },
      {
        title: 'Results & Impact',
        content: [
          'Faster integration of new games.',
          'Improved maintainability and future scalability.'
        ]
      },
      {
        title: 'Leadership & Collaboration',
        content: [
          'Intern recruitment and mentoring.',
          'Graphic designer recruitment and coordination.',
          'Participation in strategic and business discussions.'
        ]
      }
    ]
  },
  {
    id: 'bleez',
    title: 'Automated Functional Testing – Bleez',
    context: 'professional',
    description: 'Automated functional testing for a web application.',
    technologies: ['Robot Framework', 'Python', 'Jira'],
    highlights: [
      'Test maintenance and bug fixing',
      'Agile environment',
      'Quality-focused mindset'
    ]
  },
  {
    id: 'stm32-musical-instrument',
    title: 'Embedded Musical Instrument – STM32',
    context: 'academic',
    description:
        'Design and implementation of an interactive musical instrument using an STM32 Discovery board.',
    technologies: [
        'C',
        'STM32',
        'Embedded Systems',
        'Accelerometer',
        'Gyroscope'
    ],
    highlights: [
        'Interactive embedded system',
        'Real-time sensor processing',
        'Hardware / software interaction'
    ],
    hasDetails: true,
    detailedSections: [
        {
        title: 'Context',
        content: [
            'The project was carried out as part of an embedded systems course.',
            'An STM32 Discovery board was provided, with full freedom to design a project of our choice.',
            'Merging my interest in music with hardware, I decided to design an interactive musical instrument based entirely on embedded hardware inputs.'
        ]
        },
        {
        title: 'Project Overview',
        content: [
            'The objective was to build a playable musical instrument using only the STM32 board and external peripherals.',
            'The system combines physical buttons, inertial sensors and an external speaker to generate sound in real time.'
        ]
        },
        {
        title: 'System Design & Logic',
        content: [
            'Each of the five physical buttons is mapped to a musical note (Do, Re, Mi, Fa, Sol).',
            'The orientation of the board determines the octave played: tilted upward, neutral position or tilted downward.',
            'Accelerometer and gyroscope data are continuously processed to determine the current orientation of the board.'
        ]
        },
        {
        title: 'Embedded Engineering Challenges',
        content: [
            'Reading and debouncing physical button inputs.',
            'Processing inertial sensor data in real time.',
            'Defining reliable thresholds to interpret board inclination.',
            'Synchronizing input handling with audio playback.'
        ]
        },
        {
        title: 'Audio Output',
        content: [
            'An existing audio library compatible with the STM32 platform was integrated to generate sound.',
            'The library was adapted to fit the constraints of the project and ensure stable audio playback.'
        ]
        },
        {
        title: 'Outcome',
        content: [
            'The final system behaves as a fully functional embedded musical instrument.',
            'The instrument is responsive to physical interaction and allows dynamic octave switching.',
            'This project demonstrates the design of an interactive embedded system combining hardware inputs, real-time processing and low-level programming.'
        ]
        }
    ]
  },
  {
    id: 'rest-api',
    title: 'REST API Development',
    context: 'academic',
    description: 'Design and implementation of a REST API in JavaScript.',
    technologies: ['JavaScript', 'REST', 'SQL'],
    highlights: [
      'API design',
      'Backend architecture',
      'Data handling'
    ],
    gitRepoUrl: 'https://github.com/Samuel112003/TP-Rhum'
  },
  {
    id: 'angular-app',
    title: 'Angular Web Application',
    context: 'academic',
    description: 'Frontend web application built with Angular.',
    technologies: ['Angular', 'TypeScript'],
    highlights: [
      'Component-based architecture',
      'Modern Angular practices',
      'Frontend fundamentals'
    ],
    gitRepoUrl: 'https://github.com/Samuel112003/2025-ensim-tp-spr'
  }
];