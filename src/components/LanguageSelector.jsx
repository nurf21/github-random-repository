export default function LanguageSelector({ languages, selected, onChange }) {
  return (
    <div className="relative">
      <select
        aria-label="Language Selector"
        className="w-full p-2 appearance-none border rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
        value={selected}
        onChange={onChange}
        disabled={languages.length === 0}
      >
        <option value="">Select a Language</option>
        {languages.map(
          (lang) =>
            lang.value !== "" && (
              <option key={lang.value} value={lang.value}>
                {lang.title}
              </option>
            )
        )}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        ▼
      </div>
    </div>
  );
}
