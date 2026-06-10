# Inventaire du contenu actuel

## Pages du site

| Route | Composant | Fichier | Description |
|-------|-----------|---------|-------------|
| `/` | `HomeComponent` | `src/app/features/home/home.component.ts` | Page d'accueil avec présentation et 4 cards de domaines |
| `/about` | `AboutComponent` | `src/app/features/about/about.component.ts` | Biographie, valeurs, ambitions |
| `/projects` | `ProjectsComponent` | `src/app/features/projects/projects.component.ts` | Liste de tous les projets |
| `/projects/:id` | `ProjectDetailsComponent` | `src/app/features/projects/project-details.component.ts` | Détail d'un projet (case study) |

---

## Page d'accueil (`/`)

- **Titre** : "Samuel Praconté" + "Computer Engineering Student"
- **Sous-titre** : présentation courte des domaines
- **Boutons CTA** : "View Projects" → `/projects` et "About Me" → `/about`
- **4 highlights cards** :
  - Software Engineering (clean architecture, APIs, scalable code)
  - Game Development (Flutter & Flame, interactive systems)
  - Embedded Systems (low-level programming, sensors, microcontrollers STM32)
  - Software Quality (testing, code reviews, best practices)

---

## Page About (`/about`)

Contenu en prose, sans liste à puces structurée :
- Introduction : étudiant en ingénierie informatique en France, ~2 ans d'expérience professionnelle
- Background : dev logiciel, jeux vidéo, systèmes embarqués, qualité
- Section "How I Work" : 4 bullet points (clean code SOLID, revues de code, travail d'équipe, focus UX)
- Section "Looking Forward" : intérêt pour l'international et les environnements variés

---

## Navigation par semestre

La page `/projects` affiche des onglets générés dynamiquement. Chaque semestre distinct présent dans `PROJECTS` crée un onglet. Le signal `activeSemester` contrôle l'onglet actif, et `visibleProjects` (computed) filtre la liste en conséquence. Aucun code à modifier pour ajouter un semestre : il suffit d'ajouter des projets avec le nouveau numéro dans `projects.data.ts`.

---

## Projets — fichier de données

**Fichier source** : `src/app/features/projects/projects.data.ts`

**Convention de nommage des titres** : `"Theme UF - Description specifique"` (ex: `"Project Management - Therapeutic Game Development"`). Pas de tirets longs, pas d'emojis.

---

### Semestre 7

#### 1. Software & Game Development - Genourob
- **ID** : `genourob`
- **Semestre** : 7 | **Contexte** : professional
- **Technologies** : Flutter, Flame, SOLID, Design Patterns
- **Case study** : Oui - Context / Identified Problem / Engineering Decisions / Results & Impact / Leadership & Collaboration
- **URL entreprise** : https://www.genourob.com

#### 2. Automated Functional Testing - Bleez
- **ID** : `bleez`
- **Semestre** : 7 | **Contexte** : professional
- **Technologies** : Robot Framework, Python, Jira
- **Case study** : Non

#### 3. Embedded Musical Instrument - STM32
- **ID** : `stm32-musical-instrument`
- **Semestre** : 7 | **Contexte** : academic
- **Technologies** : C, STM32, Embedded Systems, Accelerometer, Gyroscope
- **Case study** : Oui - Context / Project Overview / System Design & Logic / Embedded Engineering Challenges / Audio Output / Outcome

#### 4. REST API Development
- **ID** : `rest-api`
- **Semestre** : 7 | **Contexte** : academic
- **Technologies** : JavaScript, REST, SQL
- **Lien GitHub** : https://github.com/Samuel112003/Rum_recipe_API

#### 5. Angular Web Application
- **ID** : `angular-app`
- **Semestre** : 7 | **Contexte** : academic
- **Technologies** : Angular, TypeScript
- **Lien GitHub** : https://github.com/Samuel112003/Mini_unicorn_platform

---

### Semestre 8

Les trois projets S8 correspondent chacun à une UF. Leurs titres reflètent volontairement l'intitulé de l'UF.

#### 6. Project Management - Therapeutic Game Development (UF 8.1)
- **ID** : `genourob-health-game-design`
- **Semestre** : 8 | **Contexte** : professional
- **Technologies** : Flutter, Flame, Project Management, Design Patterns
- **Case study** : Oui - Context / Medical & Safety Constraints / Impact on Game Design / Impact on Art Direction / Team Leadership & Organisation / Outcomes
- **Sujet** : direction d'un produit de jeux vidéo thérapeutiques avec contraintes médicales (muscles érecteurs du rachis, pas de surcontraction, nécessité d'échauffement). Impact sur la conception des jeux ET sur la direction artistique (les visuels du graphiste devaient répondre à des exigences techniques de santé).
- **URL entreprise** : https://www.genourob.com

#### 7. System Security - Linux Architecture Design (UF 8.2)
- **ID** : `linux-architecture-migration`
- **Semestre** : 8 | **Contexte** : professional
- **Technologies** : Linux, Bash, System Administration, Access Control
- **Case study** : Oui - Context / Security Objectives / File System & Sensitive Data Placement / Permission Management / Outcomes
- **Sujet** : migration des logiciels de l'entreprise de Windows vers Linux. Conception d'une architecture Linux de référence clonée sur tous les appareils. Sécurisation par placement des fichiers sensibles aux bons endroits et principe du moindre privilège sur les droits.

#### 8. Interface Ergonomics - Video Game UI Design (UF 8.3)
- **ID** : `game-ui-ergonomics`
- **Semestre** : 8 | **Contexte** : professional
- **Technologies** : Figma, UI/UX Design, Usability Testing, Flutter, Flame
- **Case study** : Oui - Context / Interface Layer Model / Mockup Design & Validation / Usability Testing / Iterative Design
- **Sujet** : conception des interfaces de jeux vidéo en 5 couches (ATH, curseur/avatar, éléments interactifs, effets/feedbacks, environnement). Maquettage Figma, validation product owner, guidage du graphiste. Tests d'utilisabilité avec utilisateurs cibles, puis corrections itératives.
- **URL entreprise** : https://www.genourob.com

---

## Modèles de données

### `Project` (utilisé)

```typescript
interface Project {
  id: any | string;
  title: string;
  semester: number;          // numero de semestre (ex: 7, 8) - obligatoire
  context: 'professional' | 'academic' | 'personal';
  description: string;
  technologies: string[];
  highlights: string[];
  hasDetails?: boolean;
  detailedSections?: { title: string; icon?: string; content: string[] }[];
  companyUrl?: string;
  gitRepoUrl?: string;
}
```

### `Experience` (défini, non utilisé)

```typescript
interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  technologies?: string[];
}
```

Ce modèle est présent dans `src/app/core/models/experience.model.ts` mais n'est référencé nulle part dans l'application. Il est probablement prévu pour une future section "Expériences".

---

## Assets

- `public/favicon.ico` — icône de l'onglet navigateur (seul asset statique actuellement)
- Aucune image, aucune police externe, aucun fichier JSON de données

---

## Localisation

Le site est intégralement en **anglais**. Pas de système i18n configuré.
