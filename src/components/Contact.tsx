import { BriefcaseBusiness, Check, Download, GitBranch, Mail } from 'lucide-react'
import { useState } from 'react'
import { site } from '../config/site'
import { Reveal } from './Reveal'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [cvState, setCvState] = useState<'idle' | 'missing' | 'success'>('idle')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      console.warn('Clipboard access failed.')
    }
  }

  const handleCvDownload = async () => {
    try {
      const response = await fetch(site.cvUrl, { method: 'HEAD' })
      if (!response.ok) {
        setCvState('missing')
        window.setTimeout(() => setCvState('idle'), 2200)
        return
      }

      const link = document.createElement('a')
      link.href = site.cvUrl
      link.download = 'Faten-Kerrou-CV.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      setCvState('success')
      window.setTimeout(() => setCvState('idle'), 2200)
    } catch {
      setCvState('missing')
      window.setTimeout(() => setCvState('idle'), 2200)
    }
  }

  return (
    <section id="contact" className="page-section">
      <Reveal>
        <div className="contact-panel">
          <div className="contact-panel-content">
            <div className="contact-layout">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="contact-title">
                  Have an interesting engineering challenge?
                </h2>
                <p className="contact-description">
                  I&apos;m open to final-year internship opportunities in Cloud Engineering, DevOps, and AI engineering.
                </p>
              </div>

              <div className="contact-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact-action contact-email"
                >
                  {copied ? <Check size={16} /> : <Mail size={16} />}
                  {copied ? 'Email copied' : site.email}
                </button>

                <div className="contact-socials">
                  <a
                    href={site.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-action"
                  >
                    <BriefcaseBusiness size={16} />
                    LinkedIn
                  </a>
                  <a
                    href={site.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-action"
                  >
                    <GitBranch size={16} />
                    GitHub
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCvDownload}
                  className="contact-action contact-cv"
                >
                  <Download size={16} />
                  {cvState === 'missing' ? 'CV not available yet' : cvState === 'success' ? 'CV downloaded' : 'Download CV'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
