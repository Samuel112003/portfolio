# Ce qui reste à faire

## Fait

- Champ `semester: number` ajouté au modèle `Project`
- Tous les projets S7 ont `semester: 7`
- Navigation par onglets dans `ProjectsComponent` (onglets dynamiques depuis les données)
- 3 projets S8 créés (UF 8.1, 8.2, 8.3)
- Suppression de tous les emojis et tirets longs (— et –) dans le contenu des projets

---

## Priorité moyenne — Contenu existant a enrichir

- **Bleez** : pas de case study. Ajouter si possible (`hasDetails: true`, `detailedSections`)
- **REST API** et **Angular App** : pas de case study. Enrichir si pertinent
- **Page About** : contenu incomplet. A revoir et enrichir avec les vraies infos de Samuel
- **Modele `Experience`** : defini dans `experience.model.ts` mais jamais utilise. Soit l'utiliser pour une section "Experiences", soit le supprimer

---

## Priorite basse — Qualite technique

- **Test casse** : `app.spec.ts` - le test "should render title" echoue car il cherche "Hello, portfolio" alors que le template affiche "Computer Engineering Student". A corriger ou supprimer.
- **Responsive** : la grille 4 colonnes de la home n'a pas de media queries. A tester sur mobile et ajuster.
- **Base href deploiement** : verifier que le base href `/` dans `index.html` est correct pour le nom du repo GitHub Pages.
- **Variables SCSS partagees** : aucune variable centralisee pour les couleurs. Si le design evolue, le refactoring sera fastidieux.

---

## Fonctionnalites potentielles (non demandees, a valider)

- Section "Experiences professionnelles" (utiliserait le modele `Experience` deja defini)
- Filtres par technologie sur la page projets
- Theme sombre
- Animations de transition entre routes
- Formulaire de contact ou lien mailto
- Metadonnees SEO (Open Graph, description)
- PDF telechargeable (CV)
- Internationalisation (FR/EN)

---

## Conventions a respecter

### Nommage des IDs de projets
Slugs en kebab-case sans caracteres speciaux :
- OK : `genourob`, `stm32-musical-instrument`, `linux-architecture-migration`
- NON : `Genourob`, `stm32 musical instrument`, `linuxArchMigration`

### Nommage des titres de projets S8
Format : `"Theme UF - Description specifique"`
Les titres des projets S8 doivent refleter l'intitule de leur UF :
- UF 8.1 Conduite de projet -> "Project Management - ..."
- UF 8.2 Securite du SI -> "System Security - ..."
- UF 8.3 Ergonomie -> "Interface Ergonomics - ..."

### Contenu des projets
- Pas d'emojis (ni dans les titres, ni dans les sections, ni dans les icones)
- Pas de tirets longs (— ou –) : utiliser `-` dans les titres, `;` ou `,` dans les phrases
