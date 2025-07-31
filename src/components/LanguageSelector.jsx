export default function LanguageSelector({ languages, selected, onChange }) {
  return (
    <select
      className="w-full p-2 border rounded"
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
  );
}
