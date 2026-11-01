import { Menu, X, Download, Moon, Sun } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'
import { site } from '../config/site'

type NavbarProps = {
  theme: 'dark' | 'light'
  onThemeChange: (event: MouseEvent<HTMLButtonElement>) => void
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: '-20% 0px -40% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="site-brand" aria-label="Go to homepage">
          <span className="brand-mark">
            FK
          </span>
          <span className="site-brand-name">
            {site.name.split(' ')[0]}
          </span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
              className={[
                'nav-link',
                activeSection === item.href.replace('#', '')
                  ? 'is-active'
                  : '',
              ].join(' ')}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="desktop-nav-actions">
          <button
            type="button"
            onClick={onThemeChange}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={site.cvUrl}
            className="secondary-button desktop-cv-button"
            aria-label="Download CV"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="mobile-nav-actions">
          <button
            type="button"
            onClick={onThemeChange}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="theme-toggle mobile-menu-toggle"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                className={[
                  'nav-link nav-link-mobile',
                  activeSection === item.href.replace('#', '')
                    ? 'is-active'
                    : '',
                ].join(' ')}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-menu-actions">
              <button
                type="button"
                onClick={onThemeChange}
                className="secondary-button mobile-menu-button"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a
                href={site.cvUrl}
                className="secondary-button mobile-menu-button"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
