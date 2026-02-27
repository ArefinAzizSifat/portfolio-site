import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { use } from "react";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-gray-600 hover:text-gray-900 font-medium mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-medium">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-700 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                >
                  <p className="text-gray-700">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                View Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                View on GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
