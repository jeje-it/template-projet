
***

# 🚀 Template Vue 3 + Vite + Supabase + Docker

Ce projet est un **template sain** pour démarrer rapidement une application web moderne. Il combine l'écosystème Vue.js avec la puissance de Supabase pour le backend et Docker pour l'infrastructure locale.

## ✨ Fonctionnalités incluses

- **Frontend** : Vue 3 (Composition API) + Vite (Build ultra-rapide)
- **State Management** : Pinia (Recommandé par l'équipe Vue)
- **Routing** : Vue Router 4
- **Backend/Auth** : Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Infrastructure** : Docker Compose (Supabase local prêt à l'emploi)
- **IA Assistante** : Configuration intégrée pour **OpenCode** (Multi-providers IA)

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (v18+ recommandé)
- [npm](https://www.npmjs.com/) (v9+) ou [pnpm](https://pnpm.io/)
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

Copiez le fichier d'exemple et remplissez-le avec vos clés API (ou laissez vide pour le mode local) :

```bash
cp .env.example .env.local
```

**Contenu de `.env.local` :**

```env
# Supabase Cloud (Remplacez par vos propres clés depuis https://supabase.com/dashboard)
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anon-key

# Pour le mode LOCAL (Docker), ces valeurs ne sont pas utilisées par le client Supabase JS
# mais peuvent servir pour d'autres services si besoin.
```

### 4. Lancer le Backend (Supabase Local)

Pour développer sans passer par le cloud, lancez l'infrastructure Supabase locale :

```bash
docker-compose up -d
```

> 💡 **Note** : Cela lancera PostgreSQL, GoTrue (Auth), et Storage en local.
> - URL locale : `http://localhost:5432`
> - Port Auth : `9999`

### 5. Lancer le Frontend

```bash
npm run dev
```

L'application est maintenant accessible sur `http://localhost:5173`.

---

## 🤖 Configuration OpenCode (IA)

Ce projet inclut une configuration prête pour **OpenCode**, l'assistant IA qui vous aidera à développer.

### Fichiers de configuration inclus

1. **`opencode.json`** (ou `.opencode.json`) : Configuration des providers IA.
2. **`SKILLS.md`** : Liste des compétences et contextes à donner à l'IA.

### Comment utiliser OpenCode ?

1. Assurez-vous d'avoir installé [OpenCode](https://github.com/opencode-ai/opencode).
2. Ouvrez le terminal à la racine du projet.
3. Lancez OpenCode :
   ```bash
   opencode
   ```
4. L'IA chargera automatiquement la configuration des modèles (Gemini, Claude, Ollama, etc.) définie dans le fichier de config.
5. Utilisez les **Skills** définis dans `SKILLS.md` pour orienter l'IA (ex: `@vue-best-practices`, `@supabase-schema`).

### Personnalisation des modèles IA

Éditez le fichier de configuration OpenCode pour ajouter vos propres clés API ou changer de modèle :

```json
{
  "providers": {
    "openai": {
      "api_key": "sk-votre-clé-openai"
    },
    "ollama": {
      "model": "llama3"
    }
  }
}
```

---

## 📁 Structure du projet

```text
├── public/             # Fichiers statiques (favicon, manifest...)
├── src/
│   ├── assets/         # CSS, images globales
│   ├── components/     # Composants réutilisables (Header, Footer...)
│   ├── composables/    # Logique réutilisable (useAuth, useApi...)
│   ├── router/         # Configuration Vue Router
│   ├── stores/         # Stores Pinia (State Management)
│   ├── utils/          # Helpers (formatage, validation...)
│   ├── views/          # Pages (Home, Login, Dashboard...)
│   ├── App.vue         # Composant racine
│   └── main.js         # Point d'entrée
├── .env.example        # Variables d'environnement (à copier)
├── docker-compose.yml  # Infrastructure Docker (Supabase local)
├── opencode.json       # Config IA OpenCode
├── SKILLS.md           # Compétences IA
├── package.json
└── vite.config.js
```

## 🚀 Scripts disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement Vite |
| `npm run build` | Compile le projet pour la production |
| `npm run preview` | Prévisualise la build de production |
| `npm run lint` | Vérifie le code avec ESLint |
| `docker-compose up -d` | Lance Supabase en local |
| `docker-compose down` | Arrête et supprime les containers Supabase |

## 📚 Documentation utile

- [Documentation Vue 3](https://vuejs.org/)
- [Documentation Supabase JS](https://supabase.com/docs/reference/javascript/introduction)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Docker](https://docs.docker.com/)

## 📝 Licence

MIT

---

*Template créé pour aller vite et proprement. Bon code ! 🚀*
