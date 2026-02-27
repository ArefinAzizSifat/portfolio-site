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
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-xs font-medium">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-12 dark:prose-invert">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">About This Project</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Key Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <p className="text-slate-700 dark:text-slate-300">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-medium"
              >
                View Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 rounded-full hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-colors font-medium"
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
