export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          Blog
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Coming soon! I'll be sharing insights about AI engineering, machine
          learning, and systems engineering.
        </p>
        <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Stay tuned for articles about:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-3">📝</span>
              <span>AI and machine learning best practices</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🚀</span>
              <span>Cloud infrastructure and DevOps workflows</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">💡</span>
              <span>Research insights and project deep-dives</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🎓</span>
              <span>Learning resources and career tips</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
