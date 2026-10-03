# M&T Clean — Site vitrine (exemple)

Site vitrine multi-pages pour une entreprise de nettoyage professionnel et résidentiel en Belgique. HTML/CSS/JS pur, sans build ni dépendance — ouvrez simplement `index.html` dans un navigateur, ou servez le dossier avec un serveur local.

Structure de classes inspirée de Client-First (Finsweet) : `page-wrapper`, `padding-global`, `container-large/medium/small`, `padding-section-large/medium/small`, composants suffixés (`navbar_`, `hero_`, `card_`, `footer_`...) et utilitaires (`text-size-*`, `text-color-*`, `margin-bottom-*`...).

## Pages

- `index.html` — Accueil
- `services.html` — Détail des 6 services (bureaux, vitres, copropriétés, fin de chantier, industriel, particuliers)
- `realisations.html` — Exemples d'interventions (visuels placeholders à remplacer par de vraies photos)
- `a-propos.html` — Histoire, valeurs, équipe
- `contact.html` — Coordonnées, formulaire de contact, FAQ

## Structure

```
assets/css/style.css   styles partagés (couleurs, composants, responsive)
assets/js/main.js      menu mobile, navigation active, animations, formulaire
```

## À personnaliser

Tout le contenu (adresse, téléphone, email, horaires, témoignages, équipe, TVA) est un exemple à adapter. Les couleurs se changent dans les variables `:root` en haut de `assets/css/style.css`. Le formulaire de contact est front-end uniquement (aucun email n'est réellement envoyé) — il faudra le relier à un service d'envoi (Formspree, backend, etc.) pour le rendre fonctionnel.

Dites-moi ce que vous souhaitez modifier (nom de l'entreprise, couleurs, textes, coordonnées...) et j'ajusterai le site.
