import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from './ProjectDetails'
import { projectCategories, projects, type Project, type ProjectCategory } from '../data/projects'
import { Reveal } from './Reveal'

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section id="projects" className="page-section">
      <Reveal>
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">Featured projects</p>
            <h2 className="section-title">
              Hands-on work across cloud, AI, and full-stack engineering.
            </h2>
          </div>

          <div className="project-filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={[
                  'project-filter',
                  selectedCategory === category
                    ? 'is-selected'
                    : '',
                ].join(' ')}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </motion.div>

      </Reveal>
      <ProjectDetails project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
