# 🚀 Template Vue 3 + UnoCSS + Supabase + Docker

Ce projet est un **template sain** pour démarrer rapidement une application web moderne. Il combine l'écosystème Vue.js avec la puissance de Supabase pour le backend, UnoCSS pour le styling et Docker pour l'infrastructure locale.

## ✨ Fonctionnalités incluses

- **Frontend** : Vue 3 (Composition API) + Vite (Build ultra-rapide)
- **Styling** : UnoCSS (Atomic CSS avec presets — Tailwind-like mais plus léger)
- **State Management** : Pinia (Recommandé par l'équipe Vue)
- **Routing** : Vue Router 4
- **Backend/Auth** : Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Infrastructure** : Docker Compose (Supabase local prêt à l'emploi)
- **Tests** : Vitest + Vue Test Utils
- **Linting/Format** : ESLint + Prettier
- **CI/CD** : GitHub Actions (lint, build, test)
- **IA Assistante** : Configuration intégrée pour **OpenCode** (Multi-providers IA)

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (v20+ recommandé)
- [npm](https://www.npmjs.com/) (v10+) ou [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)
- Un compte [Supabase](https://supabase.com/) (pour le cloud) ou utilisation du mode local

## ⚡ Installation rapide

### 1. Cloner le projet

```bash
git clone <url-de-ton-template> mon-nouveau-projet
cd mon-nouveau-projet
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

Copiez le fichier d'exemple et remplissez-le :

```bash
cp .env.example .env
```

**Contenu de `.env` :**

```env
# Supabase Cloud (Remplacez par vos propres clés depuis https://supabase.com/dashboard)
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anon-key

# Supabase Local (Docker) — changez les secrets en production !
POSTGRES_PASSWORD=mon_super_mot_de_passe
GOTRUE_JWT_SECRET=mon_jwt_secret_securise
ANON_KEY=eyJhbGc...
API_EXTERNAL_URL=http://localhost:9999
GOTRUE_SITE_URL=http://localhost:5173
```

> ⚠️ **Sécurité** : Ne jamais commiter `.env`. Seul `.env.example` est tracked dans Git.

### 4. Lancer le Backend (Supabase Local)

```bash
docker-compose up -d
```

> 💡 **Note** : Cela lancera PostgreSQL, GoTrue (Auth), et Storage en local.
> - PostgreSQL : `localhost:5432`
> - Auth API : `localhost:9999`
> - Storage API : `localhost:5000`

### 5. Lancer le Frontend

```bash
npm run dev
```

L'application est maintenant accessible sur `http://localhost:5173`.

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer le serveur de développement (Vite) |
| `npm run build` | Build de production |
| `npm run preview` | Preview du build local |
| `npm run lint` | Linter le code (ESLint) |
| `npm run format` | Formatter le code (Prettier) |
| `npm run test` | Lancer les tests (Vitest) |
| `npm run test:ui` | Tests avec interface UI |

---

## 🎨 UnoCSS

Ce template utilise **UnoCSS** au lieu de Tailwind CSS. Avantages :

- **Plus léger** : Atomic CSS généré à la volée (zéro CSS non-utilisé)
- **Plus rapide** : Build instantané
- **Compatible** : Presets Tailwind, Icons, Typography, Web Fonts

### Utilisation

```html
<!-- Classes utilitaires directement en HTML -->
<div class="flex-center min-h-screen bg-gray-100">
  <h1 class="text-4xl font-bold text-blue-600">Bonjour !</h1>
</div>

<!-- Attribut mode -->
<div _flex _center _min-h-screen>
  <h1 _text-4xl _font-bold _text-blue-600>Bonjour !</h1>
</div>

<!-- Icons intégrés -->
<span class="i-heroicons-heart"></span>
<span class="i-ph-github-logo"></span>
```

### Presets inclus

- `presetUno()` — Tailwind-like (base)
- `presetAttributify()` — Mode attribut (`_flex _center`)
- `presetIcons()` — Icônes (Heroicons, Phosphor, FontAwesome, etc.)
- `presetTypography()` — Styles de contenu typographique
- `presetWebFonts()` — Polices web (Inter, Playfair Display, Fira Code)

### Customisation

Modifiez `unocss.config.js` pour :

- Ajouter des **couleurs personnalisées**
- Créer des **shortcuts** (raccouris)
- Ajouter des **presets**

---

## 🤖 Configuration OpenCode (IA)

Ce projet inclut une configuration prête pour **OpenCode**, l'assistant IA.

### Fichiers de configuration

- **`.opencode/opencode.json`** : Configuration des providers IA
- **`.agents/skills/`** : Compétences IA (Vue, Supabase, Docker, etc.)

### Providers configurés

- **OpenAI** (GPT-4o, GPT-5)
- **Anthropic** (Claude Sonnet/Opus)
- **Google Vertex** (Gemini)
- **LM Studio** (modèles locaux — à configurer)

### Comment personnaliser ?

Modifiez `.opencode/opencode.json` :

```json
{
  "provider": {
    "lmstudio": {
      "options": {
        "baseURL": "http://VOTRE_IP_LOCAL:1234/v1"
      }
    }
  }
}
```

---

## 📁 Structure du projet

```
template-projet/
├── .agents/skills/     # Compétences OpenCode
├── .github/workflows/  # CI/CD (lint, build, test)
├── .opencode/          # Config OpenCode
├── .vscode/            # Config VS Code
├── src/
│   ├── assets/         # Images, polices, etc.
│   ├── components/     # Composants réutilisables
│   ├── composables/    # Fonctions logiques réutilisables
│   ├── router/         # Configuration Vue Router
│   ├── stores/         # Stores Pinia
│   ├── utils/          # Utilitaires
│   ├── views/          # Pages de l'application
│   ├── App.vue         # Composant racine
│   ├── main.js         # Point d'entrée
│   └── supabaseClient.js # Client Supabase
├── .dockerignore
├── .editorconfig
├── .env.example
├── .gitignore
├── .prettierrc
├── docker-compose.yml
├── index.html
├── LICENSE
├── package.json
├── unocss.config.js    # Config UnoCSS
├── vite.config.js      # Config Vite
├── vitest.config.js    # Config Vitest
└── README.md
```

---

## 🔒 Sécurité

- ✅ `.env` est ignoré par Git
- ✅ `.env.example` fourni avec des valeurs placeholder
- ✅ `POSTGRES_PASSWORD` et `GOTRUE_JWT_SECRET` à changer en production
- ✅ Pas de secrets dans le code
- ✅ `.dockerignore` optimisé (pas de node_modules, .env, etc.)

---

## 🚀 Déploiement

### Production

```bash
npm run build
```

Le build est dans `dist/`. Déployez-le sur :

- **Vercel** / **Netlify** / **Cloudflare Pages** (frontend statique)
- **Railway** / **Render** / **Fly.io** (avec Supabase cloud)

### Supabase Cloud

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Remplacez les valeurs dans `.env` avec vos clés cloud
3. Le docker-compose local n'est plus nécessaire

---

## 📝 Licence

[MIT](LICENSE) — Utilisez ce template pour vos projets personnels et commerciaux.

---

## 🤝 Contribuer

Ce template est conçu pour être forké et personnalisé. N'hésitez pas à :

- Changer les presets UnoCSS
- Ajouter vos propres Skills OpenCode
- Modifier le workflow CI/CD
- Ajouter des middlewares Docker

---

**Bon développement ! 🎉**
