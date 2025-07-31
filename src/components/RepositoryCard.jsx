export default function RepositoryCard({ repo, onRefresh }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 font-bold"
      >
        {repo.name} ↗
      </a>
      <p>{repo.description}</p>
      <div className="text-sm text-gray-500 dark:text-gray-400 flex space-x-4">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🐞 {repo.open_issues_count}</span>
      </div>
      <button
        className="w-full bg-black text-white p-2 rounded mt-2 dark:bg-white dark:text-black"
        onClick={onRefresh}
      >
        Refresh
      </button>
    </div>
  );
}
