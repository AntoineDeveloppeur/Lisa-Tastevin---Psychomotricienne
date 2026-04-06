# ✨ Lisa Tastevin - Psychomotricienne ✨

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

Une professionnelle de santé m'a confié la création de son site vitrine. 🌟 Le
défi ? Concevoir un design qui reflète douceur et sécurité, tout en intégrant
des animations subtiles pour capter l'attention des visiteurs. 🎨

Nous avons trouvé ensemble un équilibre entre esthétique et expérience
utilisateur. ✨

🔗
[lisa-tastevin-psychomotricienne.fr](https://lisa-tastevin-psychomotricienne.fr)

<br>

## 🛠️ Technologies utilisées

- **Frontend** : HTML, SCSS, JavaScript
- **Backend** : Node.js, Express
- **APIs** :
  [![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)](https://www.twilio.com/)
  [![Google ReCaptcha](https://img.shields.io/badge/Google_ReCaptcha-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://www.google.com/recaptcha/)
  [![Mailjet](https://img.shields.io/badge/Mailjet-1A82E2?style=for-the-badge&logo=mailjet&logoColor=white)](https://www.mailjet.com/)

<br>

## ✨ Fonctionnalités

- 📬 **Formulaire de contact** : Lorsqu'un utilisateur rempli le formulaire de
  contact un sms et un email sont envoyé respectivement via Les API Twilio et
  Mailjet à Lisa
- 🔒 **Google ReCaptcha** pour protéger son adresse email et numéro de téléphone

<br>

## 🚀 Installation et démarrage en local

### 📋 Prérequis

- Un IDE avec la possibilité d'ouvrir un 'live server'

### 🏁 Démarrage du projet en local

- Vérifier dans frontend/scripts/index.js que api_url soit celui en local
- Seule la partie frontend vous sera accessible : clique droit sur index.html
  puis 'Ouvrir avec live server'
- La partie backend ne fonctionne qu'avec les clés de connexion aux différents
  services
- cd backend | nodemon server.js

## Déploiement pour l'admin

- Vérifier dans frontend/scripts/index.js que api_url soit celui de production
- Push les changement sur la branch main
- Se connecter sur le vps et pull la branch main dans le dossier contenant la
  codebase de Lisa.
- Redémarrer le serveur si changement sur le backend

```
pm2 list
pm2 restart <numéro-du-backend-de-Lisa>
```
