import { BriefcaseBusiness, GitBranch } from 'lucide-react'
import { site } from '../config/site'
import { Reveal } from './Reveal'

export function Footer() {
  return (
    <footer className="page-footer">
      <Reveal>
        <div className="footer-panel">
          <div className="footer-identity">
            <span className="footer-name">{site.name}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="footer-socials">
            <a href={site.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
              <GitBranch size={16} />
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
              <BriefcaseBusiness size={16} />
            </a>
          </div>

          <div className="footer-note">
            Built with React & TypeScript
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
