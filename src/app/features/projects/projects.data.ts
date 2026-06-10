import { Project } from '../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'genourob',
    title: 'Software & Game Development - Genourob',
    semester: 7,
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
    title: 'Automated Functional Testing - Bleez',
    semester: 7,
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
    title: 'Embedded Musical Instrument - STM32',
    semester: 7,
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
    semester: 7,
    context: 'academic',
    description: 'Design and implementation of a REST API in JavaScript.',
    technologies: ['JavaScript', 'REST', 'SQL'],
    highlights: [
      'API design',
      'Backend architecture',
      'Data handling'
    ],
    gitRepoUrl: 'https://github.com/Samuel112003/Rum_recipe_API'
  },
  {
    id: 'angular-app',
    title: 'Angular Web Application',
    semester: 7,
    context: 'academic',
    description: 'Frontend web application built with Angular.',
    technologies: ['Angular', 'TypeScript'],
    highlights: [
      'Component-based architecture',
      'Modern Angular practices',
      'Frontend fundamentals'
    ],
    gitRepoUrl: 'https://github.com/Samuel112003/Mini_unicorn_platform'
  },
  {
    id: 'genourob-health-game-design',
    title: 'Project Management - Therapeutic Game Development',
    semester: 8,
    context: 'professional',
    description:
      'Led the design and development of therapeutic video games for back muscle rehabilitation, integrating medical safety constraints into both game mechanics and art direction.',
    technologies: ['Flutter', 'Flame', 'Project Management', 'Design Patterns'],
    highlights: [
      'Medical safety constraints driving design decisions',
      'Art direction aligned with health requirements',
      'Cross-functional team leadership'
    ],
    hasDetails: true,
    companyUrl: 'https://www.genourob.com',
    detailedSections: [
      {
        title: 'Context',
        content: [
          'As part of my work-study programme at Genourob, I took on a product leadership role for a set of therapeutic video games designed for back muscle rehabilitation.',
          'The games specifically target the erector spinae muscles, which support the spine during daily activity. The end users are patients performing guided rehabilitation exercises through gameplay.'
        ]
      },
      {
        title: 'Medical & Safety Constraints',
        content: [
          'The medical context imposed strict constraints on how the games could be designed. The primary concern was preventing injury through misuse.',
          'Games could not demand too many muscle contractions within a short time window, as this risks fatigue-related injury.',
          'Games could not request a high-intensity contraction without prior warm-up, as cold muscle engagement increases the risk of strain.',
          'These rules were not optional guidelines; they were non-negotiable requirements that had to be embedded into the core gameplay loops from the outset.'
        ]
      },
      {
        title: 'Impact on Game Design',
        content: [
          'Every game mechanic had to be evaluated against the medical constraints before implementation.',
          'Contraction frequency and intensity were treated as first-class design parameters, not as side effects of gameplay.',
          'This led to deliberate pacing decisions: rest phases were built into game progression, and intensity ramp-up followed a warm-up logic rather than being driven purely by difficulty curves.',
          'Balancing medical compliance with engaging gameplay required iterative design and close collaboration with the medical context of the product.'
        ]
      },
      {
        title: 'Impact on Art Direction',
        content: [
          'The health constraints extended beyond mechanics into visual design. Visuals produced by the graphic designer could not be evaluated on aesthetic merit alone.',
          'Each visual element had to be technically reviewed: feedback indicators, posture cues, and in-game prompts needed to communicate exercise intent clearly and safely to users.',
          'This meant defining precise specifications for the graphic designer that went beyond style guides; they described functional requirements tied to patient safety.',
          'Managing this boundary between creative work and technical compliance was a key challenge of the project leadership role.'
        ]
      },
      {
        title: 'Team Leadership & Organisation',
        content: [
          'I was responsible for organising the project: defining deliverables, setting priorities, and coordinating work between development and design.',
          'Communication with the graphic designer required translating medical and technical constraints into actionable creative briefs.',
          'I participated in defining the scope of responsibilities across the team and ensured that health compliance was maintained across every deliverable.',
          'Corrective actions were engaged when designs or implementations did not meet the defined safety requirements.'
        ]
      },
      {
        title: 'Outcomes',
        content: [
          'The resulting games meet both the therapeutic objectives and the safety requirements defined for the product.',
          'The design process established a framework for evaluating future game content against health compliance criteria.',
          'This project demonstrated that technical and regulatory constraints, when integrated early, can shape rather than limit the creative direction of a product.'
        ]
      }
    ]
  },
  {
    id: 'linux-architecture-migration',
    title: 'System Security - Linux Architecture Design',
    semester: 8,
    context: 'professional',
    description:
      'Designed a secure Linux system architecture as part of a company-wide migration from Windows, intended to be cloned across all devices. The design focused on least-privilege access control and secure placement of sensitive files.',
    technologies: ['Linux', 'Bash', 'System Administration', 'Access Control'],
    highlights: [
      'Least-privilege permission model',
      'Secure file system layout for sensitive data',
      'Reproducible architecture cloned across all company devices'
    ],
    hasDetails: true,
    detailedSections: [
      {
        title: 'Context',
        content: [
          'The company decided to migrate its internal software ecosystem from Windows to Linux.',
          'The goal was to establish a single reference Linux architecture, combining the operating system and all company software, that could be cloned and deployed uniformly across every device in the organisation.',
          'I was responsible for designing this master architecture, which meant every decision made at this stage would be replicated at scale.'
        ]
      },
      {
        title: 'Security Objectives',
        content: [
          'The cloned nature of the deployment made security a critical concern: any vulnerability embedded in the master image would be present on every device.',
          'The two main security axes were: ensuring sensitive files were stored in appropriate, protected locations; and granting the minimum permissions necessary for the system to function without exposing unnecessary access vectors.',
          'The principle applied throughout was least privilege: no user, process or application should hold more rights than strictly required for its intended use.'
        ]
      },
      {
        title: 'File System & Sensitive Data Placement',
        content: [
          'Sensitive files, such as configuration files, credentials and application data, were placed in locations aligned with Linux filesystem conventions and access control best practices.',
          'Ownership and group memberships were defined to restrict read and write access to the processes and users that genuinely required them.',
          'System directories and application directories were clearly separated to avoid privilege escalation paths through misconfigured file ownership.'
        ]
      },
      {
        title: 'Permission Management',
        content: [
          'File and directory permissions were reviewed and set explicitly, avoiding permissive defaults that could be exploited.',
          'User accounts were configured with restricted shells and limited sudo rights where applicable, reducing the blast radius of any compromised session.',
          'The balance between security and usability was a central concern: restrictions had to be tight enough to be meaningful without breaking the intended workflows of end users.'
        ]
      },
      {
        title: 'Outcomes',
        content: [
          'The resulting architecture provides a consistent, secure baseline for all company devices.',
          'The least-privilege model reduces the attack surface exposed by each deployed instance.',
          'The design is reproducible and documented, allowing future devices to be provisioned from the same master image with predictable and auditable security properties.'
        ]
      }
    ]
  },
  {
    id: 'game-ui-ergonomics',
    title: 'Interface Ergonomics - Video Game UI Design',
    semester: 8,
    context: 'professional',
    description:
      'Designed and iterated on the user interface of therapeutic video games, applying interface layering principles, mockup validation, usability testing and iterative design to ensure the experience was intuitive for patients.',
    technologies: ['Figma', 'UI/UX Design', 'Usability Testing', 'Flutter', 'Flame'],
    highlights: [
      'Interface layer modelling specific to video games',
      'Mockup design and validation with the product owner',
      'Usability testing with target users and iterative corrections'
    ],
    hasDetails: true,
    companyUrl: 'https://www.genourob.com',
    detailedSections: [
      {
        title: 'Context',
        content: [
          'Unlike a standard web page, a video game updates its interface continuously to produce a dynamic experience. This makes its interface design a distinct discipline from classical UI work.',
          'At Genourob, designing the interface of therapeutic games required applying these specific principles while keeping the end users, patients performing rehabilitation exercises, at the centre of every decision.'
        ]
      },
      {
        title: 'Interface Layer Model',
        content: [
          'A video game interface can be broken down into five layers, each with a distinct role.',
          'The HUD (heads-up display) is the top 2D layer showing persistent information such as score and timers.',
          'The cursor or avatar layer translates player inputs into the virtual world: movement, jumps and other actions.',
          'Interactive elements cover everything that moves and reacts to physics or player actions: enemies, obstacles and collectibles.',
          'Visual effects and feedback animations make the game feel alive: screen shake, a character flashing red when hit, particle bursts.',
          'Finally, the environment layer provides the static geometry and background that frames the action.',
          'Organising the design around these layers makes it easier to reason about what the player sees at any moment and to identify where confusion can arise.'
        ]
      },
      {
        title: 'Mockup Design & Validation',
        content: [
          'Just as with a classical interface, a game interface needs to be modelled as a mockup before production begins.',
          'Mockups were created in Figma using placeholder visuals, giving a concrete structure to validate with the product owner before committing to full asset production.',
          'They also served as a precise brief for the graphic designer, defining the layout, scale and function of every element rather than leaving those decisions open during asset creation.',
          'This step reduced back-and-forth later in the process and ensured the final visuals served both the aesthetic and the functional requirements of each interface layer.'
        ]
      },
      {
        title: 'Usability Testing',
        content: [
          'Even a well-designed interface can fail if it does not implicitly guide the player. When the interface alone is not sufficient, tutorials, guides or help buttons become necessary; but the longer these instructions are, the weaker the interface.',
          'To evaluate whether the interface was self-explanatory, usability tests were conducted with target users who had never interacted with the game before.',
          'Observing a first-time user is the most direct way to identify where the interface falls short: moments of hesitation, wrong actions or misread visuals reveal design problems that cannot be detected by the team alone.'
        ]
      },
      {
        title: 'Iterative Design',
        content: [
          'After each test session, feedback was analysed to identify the specific moments where users stumbled or misinterpreted the interface.',
          'Corrections were made to the ergonomics, menus were simplified and visual cues were reworked until navigation became intuitive.',
          'This process of successive corrections, applied before the official release, is the foundation of iterative design. It ensures the final experience is shaped by real user behaviour rather than assumptions made during production.'
        ]
      }
    ]
  }
];
