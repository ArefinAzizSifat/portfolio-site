import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { aiSkills } from "@/data/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800 hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mb-4 tracking-wide uppercase">
            {personalInfo.title}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-slate-100">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-light">
            {personalInfo.tagline}
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 font-medium"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all duration-300 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Education</h3>
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {edu.period} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Languages</h3>
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="mb-3">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{lang.language}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-slate-900 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 mb-4">
                      {project.category}
                    </span>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSkills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to AI engineering and IT infrastructure roles.
            Feel free to reach out for opportunities or collaborations.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.email}</p>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.phone}</p>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 rounded-full hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
