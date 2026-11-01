import { ArrowUpRight, GitBranch, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25 }}
      className="project-card"
    >
      <div className="project-card-meta">
        <span className="project-category" data-category={project.category}>{project.category}</span>
        <span className="status-badge">
          {project.status}
        </span>
      </div>

      <h3 className="project-card-title">{project.title}</h3>

      {project.videoUrl ? (
        <div className="project-video-frame">
          <div className="project-video-heading">
            <span className="project-video-label">
              <Play size={14} fill="currentColor" />
              Project walkthrough
            </span>
            <span className="project-video-type">
              Video demo
            </span>
          </div>
          <video
            className="project-video"
            src={project.videoUrl}
            controls
            playsInline
            preload="metadata"
            aria-label={`${project.title} project walkthrough`}
          >
            Your browser does not support embedded videos.
          </video>
        </div>
      ) : null}

      <p className="project-summary">{project.summary}</p>

      <div className="project-tags">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="project-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card-actions">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="project-case-study"
        >
          Read case study
          <ArrowUpRight size={16} />
        </button>

        <div>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-repository-link"
              aria-label={`Open repository for ${project.title}`}
            >
              <GitBranch size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
