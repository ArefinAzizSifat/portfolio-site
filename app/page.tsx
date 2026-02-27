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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-gray-100 hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.JPG"
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-4 tracking-wide uppercase">
            {personalInfo.title}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            {personalInfo.tagline}
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      {edu.period} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Languages</h3>
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="mb-3">
                    <p className="font-semibold">{lang.language}</p>
                    <p className="text-gray-600 text-sm">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200"
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
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 bg-gray-100">
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
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4">
                      {project.category}
                    </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-medium text-gray-900 hover:underline"
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSkills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700"
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm currently open to AI engineering and IT infrastructure roles.
            Feel free to reach out for opportunities or collaborations.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">{personalInfo.email}</p>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">{personalInfo.phone}</p>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
