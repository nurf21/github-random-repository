// App.jsx
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import RepositoryCard from "./components/RepositoryCard";
import "./index.css";

function App() {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [repository, setRepository] = useState(null);
  const [status, setStatus] = useState("empty");

  const hasFetchedLanguages = useRef(false);

  useEffect(() => {
    if (hasFetchedLanguages.current) return;
    hasFetchedLanguages.current = true;

    fetch(
      "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
    )
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch((err) => console.error(err));
  }, []);

  const fetchRepository = async (lang) => {
    setStatus("loading");
    setRepository(null);
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&per_page=50`
      );
      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      const items = data.items || [];
      if (items.length === 0) throw new Error("No repos found");

      const randomRepo = items[Math.floor(Math.random() * items.length)];
      setRepository(randomRepo);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleLanguageChange = (e) => {
    const selected = e.target.value;
    setLanguage(selected);
    if (selected) fetchRepository(selected);
  };

  const handleRetry = () => {
    if (language) fetchRepository(language);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">GitHub Repository Finder</h1>

        <LanguageSelector
          languages={languages}
          selected={language}
          onChange={handleLanguageChange}
        />

        {status === "empty" && (
          <div className="bg-gray-200 p-4 rounded text-center">
            Please select a language
          </div>
        )}

        {status === "loading" && (
          <div className="bg-gray-200 p-4 rounded text-center">
            Loading, please wait..
          </div>
        )}

        {status === "error" && (
          <div className="space-y-2">
            <div className="bg-red-200 p-4 rounded text-center">
              Error fetching repositories
            </div>
            <button
              className="w-full bg-red-500 text-white p-2 rounded"
              onClick={handleRetry}
            >
              Click to retry
            </button>
          </div>
        )}

        {status === "success" && repository && (
          <RepositoryCard
            repo={repository}
            onRefresh={() => fetchRepository(language)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
