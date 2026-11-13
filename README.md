# [GeoFocus](https://geofocus.vercel.app/) 🌐

GeoFocus est une application web interactive développée avec Vue.js permettant d'explorer, de rechercher et d'en apprendre davantage sur les pays du monde grâce à l'API Rest Countries v5.

## Fonctionnalités

- **Exploration complète :** Liste l'ensemble des pays du monde triés par ordre alphabétique, avec filtrage instantané en français.
- **Détails par pays :** Accès à des informations approfondies pour chaque pays via son code ISO (`alpha_3`).
- **Carrousel de découverte :** Mise en avant rapide de sélections de pays via un composant de type slider.
- **Gestion des favoris :** Sauvegarde locale des pays favoris pour un accès rapide.
- **Section Quiz & Progression :** Module de quiz interactif pour tester ses connaissances géographiques.
- **Profil utilisateur & Personnalisation :** Gestion du nom d'utilisateur, avatar dynamique et personnalisation de la couleur principale de l'interface en temps réel.
- **Suivi visuel animé (GSAP) :** Animation d'un marqueur de progression le long d'un parcours SVG (`MotionPathPlugin`) en fonction du score au quiz.
- **Interface responsive :** Navigation fluide pensée pour le mobile et le desktop.

## Stack Technique

- **Front-end :** Vue.js 3
- **Animations :** GSAP (`MotionPathPlugin`)
- **Build Tool :** Vite
- **Requêtes HTTP :** Axios
- **Icônes & UI :** FontAwesome, Swiper.js, `vue-profile-avatar`
- **API Externe :** Rest Countries API v5 (avec CDN pour les drapeaux)
- **Hébergement & Déploiement :** Vercel
