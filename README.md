# playwright-bank-project
## Playwright Bank Project

Ce projet simule une application bancaire afin de démontrer des compétences avancées en automatisation de tests avec Playwright.

Il permet de tester des fonctionnalités critiques telles que :

- Authentification utilisateur
- Réalisation de virements
- Validation des réponses backend


## Stack technique
- Playwright (TypeScript)
- Node.js
- Mock API (Playwright route)
- CI/CD avec GitHub 

## Scénarios testés
🔹 Tests End-to-End (UI)
- Connexion utilisateur
- Accès au dashboard
- Création d’un virement
- Vérification du message de succès

🔹 Tests API
- Simulation de création de virement
- Validation des réponses backend mockées

## Authentification

Le projet simule une authentification basée sur un token :

Appel API de login
Récupération du token
Utilisation dans les appels sécurisés

## Mock API (Point clé)

Le backend est entièrement mocké avec Playwright :

- Aucune dépendance à un serveur réel
- Tests rapides et stables
- Simulation réaliste des réponses API

## Lancer le projet
```bash
# Installer les dépendances
   npm install
   npx playwright install
# Lancer le serveur local
   npx serve public
# Exécuter les tests
   npx playwright test
# Mode debug (recommandé)
   npx playwright test --headed
# Lancer le serveur local et exécuter les tests en une seule commande 
   npm run e2e    
```

## CI/CD

Les tests sont exécutés automatiquement via GitHub Actions à chaque push.

## Bonnes pratiques utilisées
✔️ Page Object Model (POM)
✔️ Séparation UI / API
✔️ Tests indépendants
✔️ Mock API
✔️ Locators Playwright (getByRole)
✔️ Exécution parallèle

## Points forts du projet
- Architecture professionnelle
- Tests rapides et stables
- Simulation réaliste d’un environnement bancaire
- Approche orientée maintenabilité