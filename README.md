# 🔍 GitHub Random Repository Finder

A beginner-friendly React project that allows users to discover random open-source GitHub repositories by programming language. This project introduces working with external APIs, asynchronous requests, UI states, and basic component testing.

## ✨ Features

- 🔧 Select a programming language from a dropdown
- 🔁 Fetch a **random** repository using the GitHub Search API
- 📊 View repo name, description, stars, forks, and open issues
- 🌘 Supports **dark mode** with Tailwind CSS
- ♻️ "Refresh" button to get a different random repository
- ❌ Graceful handling of loading, error, and empty states

---

## 🚀 Live Demo

📍 **[View it here](https://nurf21.github.io/github-random-repository/)**

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nurf21/github-random-repository.git
cd github-random-repository
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🧪 Run Tests

```bash
npm run test
```

The project uses [`vitest-browser-react`](https://www.npmjs.com/package/vitest-browser-react) for testing in real browser environments.

---

## 🛠️ Built With

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Repository Search API](https://docs.github.com/en/rest/reference/search#search-repositories)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)

---

## 🧑‍💻 Credits

- Language list sourced from [kamranahmedse/githunt](https://github.com/kamranahmedse/githunt)
- Project template and inspiration from [roadmap.sh](https://roadmap.sh/projects/github-random-repo/)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
