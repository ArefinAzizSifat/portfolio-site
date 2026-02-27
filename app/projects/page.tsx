import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            All Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A collection of AI and machine learning projects demonstrating
            practical applications and research work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-block px-3 py-1 ml-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
                <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
