# playwright-bank-project
Ce projet simule une application bancaire afin de démontrer des compétences avancées en automatisation de tests avec Playwright.

Il permet de tester des fonctionnalités critiques comme :

l’authentification utilisateur
la réalisation de virements
la validation des réponses backend
🧰 Stack technique
Playwright (TypeScript)
Node.js
Mock API (Playwright route)
CI/CD avec GitHub Actions
Allure Report
🏗️ Architecture du projet
.
├── tests/
│   ├── e2e/
│   ├── api/
│
├── pages/            # Page Object Model
├── utils/            # Mock API, helpers
├── config/           # variables environnement
├── public/           # UI simulée (HTML)
🧪 Scénarios testés
🔹 Tests End-to-End (UI)
Login utilisateur
Accès au dashboard
Création d’un virement
Vérification du message de succès
🔹 Tests API
Simulation de création de virement
Validation des réponses backend mockées
🔐 Authentification

Le projet simule une authentification via token :

appel API de login
récupération d’un token
utilisation dans les appels sécurisés
🔁 Mock API (point clé)

Le backend est entièrement mocké avec Playwright :

aucune dépendance à un serveur réel
tests rapides et stables
simulation réaliste des réponses API
▶️ Lancer le projet
1. Installer les dépendances
npm install
npx playwright install
2. Lancer le serveur local
npx serve public
3. Lancer les tests
npx playwright test
4. Mode debug (recommandé)
npx playwright test --headed
📊 Reporting Allure
npx allure generate ./allure-results --clean
npx allure open
🤖 CI/CD

Les tests sont exécutés automatiquement via GitHub Actions à chaque push.

💡 Bonnes pratiques utilisées
Page Object Model
Séparation UI / API
Tests indépendants
Mock API
Locators Playwright (getByRole)
Exécution parallèle
🚀 Points forts du projet
Architecture professionnelle
Tests stables et rapides
Simulation d’un environnement bancaire réel
Approche orientée qualité et maintenabilité
