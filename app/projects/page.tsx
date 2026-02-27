import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of AI and machine learning projects demonstrating
            practical applications and research work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-block px-3 py-1 ml-2 bg-gray-900 text-white rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
                <h2 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600">
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
