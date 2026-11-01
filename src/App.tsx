import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useLayoutEffect, useState, type MouseEvent } from 'react'
import { MotionConfig } from 'framer-motion'
import { flushSync } from 'react-dom'

type Theme = 'dark' | 'light'

type ThemeViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

function getSavedTheme(): Theme {
  try {
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#101C20' : '#F3EFE5',
    )
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      console.warn('Theme preference could not be saved.')
    }
  }, [theme])

  const handleThemeChange = (event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const transitionDocument = document as ThemeViewTransitionDocument

    if (prefersReducedMotion || !transitionDocument.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    const buttonBounds = event.currentTarget.getBoundingClientRect()
    document.documentElement.style.setProperty('--theme-origin-x', `${buttonBounds.left + buttonBounds.width / 2}px`)
    document.documentElement.style.setProperty('--theme-origin-y', `${buttonBounds.top + buttonBounds.height / 2}px`)

    transitionDocument.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme))
    })
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Navbar theme={theme} onThemeChange={handleThemeChange} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  )
}

export default App
