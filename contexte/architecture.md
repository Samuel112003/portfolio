# Architecture technique

## Stack technologique

| Technologie | Version | Rôle |
|-------------|---------|------|
| Angular | 20.3.0 | Framework frontend |
| TypeScript | 5.9.2 | Langage (mode strict activé) |
| SCSS | — | Styles (global + scoped par composant) |
| Angular CLI | 20.3.8 | Build, serve, deploy |
| angular-cli-ghpages | 3.0.2 | Déploiement GitHub Pages |
| Karma + Jasmine | 6.4 / 5.9 | Tests unitaires |
| rxjs | 7.8.0 | Programmation réactive (dépendance Angular) |
| Zone.js | 0.15.0 | Change detection (event coalescing activé) |

**Pas de** framework CSS externe (pas de Bootstrap, Tailwind, etc.), **pas de** bibliothèque de composants, **pas de** gestion d'état externe (NgRx, etc.).

---

## Structure des fichiers

```
portfolio/
├── contexte/                   ← Documentation du projet (ce répertoire)
├── src/
│   ├── main.ts                 ← Point d'entrée (bootstrapApplication)
│   ├── index.html              ← Shell HTML (lang="en", <app-root>)
│   ├── styles.scss             ← Styles globaux (reset, body, typographie)
│   └── app/
│       ├── app.ts              ← Composant racine (navbar + router-outlet)
│       ├── app.html            ← Template racine
│       ├── app.scss            ← Styles du header/nav
│       ├── app.routes.ts       ← Définition des routes
│       ├── app.config.ts       ← Configuration (providers)
│       ├── app.spec.ts         ← Test unitaire du composant racine
│       ├── core/
│       │   └── models/
│       │       ├── project.model.ts     ← Interface Project
│       │       └── experience.model.ts  ← Interface Experience (non utilisée)
│       └── features/
│           ├── home/
│           │   └── home.component.ts    ← Page d'accueil (inline template/styles)
│           ├── about/
│           │   └── about.component.ts   ← Page About (inline template/styles)
│           └── projects/
│               ├── projects.component.ts        ← Liste des projets
│               ├── project-card.component.ts    ← Card d'un projet
│               ├── project-details.component.ts ← Page de détail d'un projet
│               └── projects.data.ts             ← Données statiques (tableau PROJECTS)
├── public/
│   └── favicon.ico
├── angular.json                ← Config Angular CLI
├── package.json
├── tsconfig.json               ← Config TypeScript de base
├── tsconfig.app.json
└── tsconfig.spec.json
```

---

## Architecture applicative

### Paradigme

Le projet utilise les **Standalone Components** d'Angular (pas de NgModules). C'est l'approche recommandée depuis Angular 17+.

### Routing

```
/                   → HomeComponent
/about              → AboutComponent
/projects           → ProjectsComponent
/projects/:id       → ProjectDetailsComponent
/**                 → redirect vers /
```

Pas de lazy loading — tous les composants sont chargés à l'initialisation. Acceptable pour un portfolio de petite taille.

### Gestion d'état

- **`signal()`** : utilisé dans `ProjectsComponent` pour stocker le semestre actif (`activeSemester`)
- **`computed()`** : utilisé dans `ProjectsComponent` pour filtrer les projets du semestre actif (`visibleProjects`), et dans `ProjectDetailsComponent` pour dériver le projet courant depuis le paramètre de route
- Pas de service de state partagé - les données sont statiques et importées directement

### Données

Les projets sont définis dans un **tableau statique TypeScript** (`projects.data.ts`). Il n'y a pas de backend, pas d'API, pas de base de données. Toute modification de contenu passe par l'édition de ce fichier.

### Composants

| Composant | Type | Template | Styles |
|-----------|------|----------|--------|
| `App` | Racine | Fichier externe `.html` | Fichier externe `.scss` |
| `HomeComponent` | Feature | Inline | Inline |
| `AboutComponent` | Feature | Inline | Inline |
| `ProjectsComponent` | Feature | Inline | Inline |
| `ProjectCardComponent` | Partagé (feature) | Inline | Inline |
| `ProjectDetailsComponent` | Feature | Inline | Inline |

---

## Styles

### Organisation

- **`src/styles.scss`** : reset global, font stack système, couleurs de base
- **Styles scoped** : chaque composant définit ses propres styles (inline ou fichier `.scss` pour les composants racine et app)
- Pas de variables SCSS partagées, pas de design tokens centralisés

### Palette de couleurs

| Usage | Valeur |
|-------|--------|
| Background global | `#fafafa` |
| Texte principal | `#222` |
| Texte secondaire | `#555` |
| Bordures | `#e0e0e0` |
| Bouton primaire | `#111` (fond) / blanc (texte) |
| Lien | `#007bff` |
| Tag "professional" | bordure gauche `#1f2937` (gris foncé) |
| Tag "academic" | bordure gauche `#2563eb` (bleu) |
| Background section | `#e5e7eb` (tags), `#fafafa` (cards) |

### Responsive

- Max-width des sections : 900px à 1100px selon les pages
- Le grid des highlights (home) est en 4 colonnes — pas de media queries déclarées (peut poser problème sur mobile)

---

## Configuration TypeScript

Mode strict complet :
- `strict: true`
- `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`
- `strictTemplates`, `strictInjectionParameters`, `strictInputAccessModifiers`
- Target : ES2022

---

## Tests

Infrastructure en place mais couverture quasi nulle :
- 1 fichier de test : `app.spec.ts`
- 2 tests : "should create the app" (passe) et "should render title" (**échoue** — attend "Hello, portfolio" mais le template affiche "Computer Engineering Student")
- Aucun test pour les composants features

---

## Déploiement

**Commande** : `ng deploy`

**Configuation** (`angular.json`) :
```json
"deploy": {
  "builder": "angular-cli-ghpages:deploy"
}
```

Le build de production est placé dans `dist/portfolio/browser/` avant d'être poussé sur la branche `gh-pages` du repo GitHub.

**Base href** : `/` dans `index.html` — à vérifier selon le nom du repo GitHub Pages (si le repo ne s'appelle pas exactement le domaine racine, il faut ajuster le base href).

---

## Décisions techniques notables

1. **Pas de NgModules** : choix moderne et recommandé, allège la configuration
2. **Signals au lieu de RxJS** : simplifie la gestion d'état pour un projet sans flux asynchrones complexes
3. **Données statiques en TypeScript** : simple et efficace pour un portfolio personnel, évite d'avoir besoin d'un backend
4. **Pas de framework CSS** : contrôle total du design, moins de dépendances, mais plus de CSS à maintenir manuellement
5. **Font système** : pas de requête réseau pour les polices, performances maximales
6. **Onglets de semestre dynamiques** : les semestres affichés sont déduits des données (`[...new Set(PROJECTS.map(p => p.semester))]`). Ajouter un projet avec un nouveau numéro de semestre crée automatiquement l'onglet correspondant, sans modifier le composant.
