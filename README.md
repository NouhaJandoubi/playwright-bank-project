# playwright-bank-project
Playwright Bank Project

Ce projet simule une application bancaire afin de démontrer des compétences avancées en automatisation de tests avec Playwright.

Il permet de tester des fonctionnalités critiques telles que :

🔐 Authentification utilisateur
💸 Réalisation de virements
✅ Validation des réponses backend


🧰 Stack technique
- Playwright (TypeScript)
- Node.js
- Mock API (Playwright route)
- CI/CD avec GitHub Actions

🏗️ Architecture du projet
.
├── tests/
│   ├── e2e/          # Tests End-to-End UI
│   └── api/          # Tests API
│
├── pages/            # Page Object Model (POM)
├── utils/            # Mock API & helpers
├── config/           # Variables d’environnement
├── public/           # UI simulée (HTML)

🧪 Scénarios testés
🔹 Tests End-to-End (UI)
Connexion utilisateur
Accès au dashboard
Création d’un virement
Vérification du message de succès
🔹 Tests API
Simulation de création de virement
Validation des réponses backend mockées

🔐 Authentification

Le projet simule une authentification basée sur un token :

Appel API de login
Récupération du token
Utilisation dans les appels sécurisés

🔁 Mock API (Point clé)

Le backend est entièrement mocké avec Playwright :

🚫 Aucune dépendance à un serveur réel
⚡ Tests rapides et stables
🎯 Simulation réaliste des réponses API

▶️ Lancer le projet
1. Installer les dépendances
npm install
npx playwright install
2. Lancer le serveur local
npx serve public
3. Exécuter les tests
npx playwright test
4. Mode debug (recommandé)
npx playwright test --headed

📊 Reporting Allure
npx allure generate ./allure-results --clean
npx allure open
🤖 CI/CD

Les tests sont exécutés automatiquement via GitHub Actions à chaque push.

💡 Bonnes pratiques utilisées
✔️ Page Object Model (POM)
✔️ Séparation UI / API
✔️ Tests indépendants
✔️ Mock API
✔️ Locators Playwright (getByRole)
✔️ Exécution parallèle

🚀 Points forts du projet
 🏗️ Architecture professionnelle
 ⚡ Tests rapides et stables
 🏦 Simulation réaliste d’un environnement bancaire
 🧠 Approche orientée qualité et maintenabilité