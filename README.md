<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# TechWeb Backend

Ce dépôt contient le **backend** de TechWeb, construit avec [NestJS](https://nestjs.com/).  
Il sert d’API pour le frontend et gère les données produits, utilisateurs, panier, etc.

---
## Installation rapide
1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Asnah0111/TechWeb-backend.git
   cd TechWeb-backend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur en mode développement**
   ```bash
   npm run dev:start
   ```
   Le backend NestJS sera accessible sur [http://localhost:3001](http://localhost:3001) (ou le port configuré).

---
## Détails de développement
- **Framework** : [NestJS](https://nestjs.com/) (Node.js, TypeScript)
- **API REST** : routes pour les produits, le panier, les utilisateurs, etc.
- **Données** :  
  - Par défaut, les produits sont stockés en mémoire ou dans un fichier (ou une base de données si configurée).
- **Principaux modules** :  
  - `products` : gestion des produits
  - `cart` : gestion du panier
  - (ajoute tes autres modules ici)
- **Structure du projet** :
  - Le code source est dans `/src`
  - Les modules NestJS (contrôleurs, services…) sont organisés par dossier

- **CORS activé** : pour permettre les appels API depuis le frontend.

- **Configuration** :
  - Les ports, chemins ou autres paramètres sont dans le fichier `.env` ou dans `main.ts`

---
## Scripts utiles
- `npm run dev:start` : Démarre le serveur NestJS en mode développement (watch)
- `npm run start` : Démarre le serveur en mode production
- `npm run build` : Compile le projet TypeScript
- `npm run test` : Lance les tests unitaires (si existants)

---
## Notes de développement
- Ce backend est fait pour fonctionner avec le frontend [TechWeb-front-next](https://github.com/Asnah0111/TechWeb-front-next).
- Pour ajouter des routes ou des fonctionnalités, crée un module NestJS (`nest generate module <nom>`).
- Pour la prod, pense à valider et sécuriser les endpoints (authentification, validation…).

---
## Contribuer
1. Fork le repo et clone-le sur ta machine.
2. Crée une branche (`git checkout -b ma-fonctionnalite`)
3. Commits tes changements (`git commit -am 'Ma fonctionnalité'`)
4. Push la branche (`git push origin ma-fonctionnalite`)
5. Ouvre une Pull Request sur GitHub.
