# Documentation du Portfolio — Samuel Praconté

Ce répertoire contient la documentation complète du projet pour permettre à tout agent IA ou développeur humain de reprendre le projet sans contexte préalable.

## Index des fichiers

| Fichier | Contenu |
|--------|---------|
| [architecture.md](architecture.md) | Structure technique, stack, composants, routing, styles |
| [contexte.md](contexte.md) | Contexte personnel, objectif du portfolio, historique |
| [contenu.md](contenu.md) | Inventaire du contenu actuel (projets, pages, données) |
| [todo.md](todo.md) | Ce qui reste à faire, améliorations prévues |

## Lecture recommandée

1. Commencer par **contexte.md** pour comprendre qui est l'auteur et pourquoi ce portfolio existe.
2. Lire **contenu.md** pour savoir ce qui est déjà présenté.
3. Lire **architecture.md** pour comprendre comment le code est organisé.
4. Consulter **todo.md** pour savoir où en est le projet et ce qu'il reste à faire.

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm start         # → http://localhost:4200

# Builder pour la production
npm run build

# Déployer sur GitHub Pages
ng deploy
```

## Technologies principales

- Angular 20 (standalone components, signals)
- TypeScript 5.9 (mode strict)
- SCSS
- angular-cli-ghpages (déploiement GitHub Pages)
