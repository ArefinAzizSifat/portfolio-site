export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Blog
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Coming soon! I'll be sharing insights about AI engineering, machine
          learning, and systems engineering.
        </p>
        <div className="bg-gray-50 p-12 rounded-2xl border border-gray-200">
          <p className="text-gray-600 mb-6">
            Stay tuned for articles about:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3">
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
