import { AnimatePresence, motion } from 'framer-motion'
import { GitBranch, X } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectDetailsProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="project-details-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="modal-surface"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
          >
            <div className="project-modal-heading">
              <div>
                <p className="eyebrow project-modal-category">
                  {project.category}
                </p>
                <h3 id="project-details-title" className="project-modal-title">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="project-modal-close"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="project-modal-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="project-modal-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-modal-content">
              <div className="project-modal-main">
                <div>
                  <p className="project-modal-subheading">Overview</p>
                  <p className="project-modal-description">{project.description}</p>
                </div>

                {project.architecture && (
                  <div>
                    <p className="project-modal-subheading">Architecture</p>
                    <div className="project-architecture">
                      {project.architecture.map((step) => (
                        <div key={step} className="project-architecture-step">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-learnings">
                <p className="project-modal-subheading">Key learnings</p>
                <ul className="project-learning-list">
                  {project.learnings?.map((item) => (
                    <li key={item}>
                      <span className="learning-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-modal-actions">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-modal-repository"
                    >
                      <GitBranch size={16} />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
