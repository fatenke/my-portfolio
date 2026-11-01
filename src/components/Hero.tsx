import { ArrowRight, BrainCircuit, Cloud } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site } from '../config/site'

const heroTextVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
}

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="home" className="hero-intro">
      <div className="hero-atmosphere" aria-hidden="true">
        <svg className="hero-neural-network" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice">
          <path className="neural-line" d="M92 235 220 310 338 250 442 330M1060 230 1170 300 1305 220 1390 280M1010 610 1130 540 1250 620 1365 560M70 650 205 570 330 640" />
          <path className="neural-line neural-line-accent" d="M220 310 205 570M1170 300 1130 540M338 250 442 330 515 445M1010 390 1060 230M905 500 1010 610" />
          <g className="neural-nodes">
            <circle cx="92" cy="235" r="4" /><circle cx="220" cy="310" r="5" /><circle cx="338" cy="250" r="4" />
            <circle cx="442" cy="330" r="4" /><circle cx="205" cy="570" r="4" /><circle cx="70" cy="650" r="4" />
            <circle cx="1060" cy="230" r="4" /><circle cx="1170" cy="300" r="5" /><circle cx="1305" cy="220" r="4" />
            <circle cx="1390" cy="280" r="4" /><circle cx="1130" cy="540" r="4" /><circle cx="1250" cy="620" r="4" />
            <circle cx="1365" cy="560" r="4" /><circle cx="1010" cy="610" r="4" /><circle cx="905" cy="500" r="5" />
          </g>
        </svg>
        <Cloud className="atmosphere-cloud atmosphere-cloud-left" strokeWidth={1.1} />
        <Cloud className="atmosphere-cloud atmosphere-cloud-right" strokeWidth={1.1} />
        <BrainCircuit className="atmosphere-brain" strokeWidth={1} />
        <span className="ai-orbit ai-orbit-one" />
        <span className="ai-orbit ai-orbit-two" />
      </div>
      <motion.div
        className="hero-layout"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
        >
          <span className="hero-profile-halo" aria-hidden="true" />
          <div className="hero-profile-ring" />
          <img
            src="/photo.png"
            alt={`${site.name} portrait`}
            className="hero-portrait"
            fetchPriority="high"
          />
        </motion.div>

        <motion.div
          className="hero-copy"
          variants={heroTextVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.h1
            className="hero-title"
            variants={heroItemVariants}
          >
            Engineering the cloud. <span className="hero-accent-name">Exploring what&apos;s next.</span>
          </motion.h1>
          <motion.p
            className="hero-intro-copy"
            variants={heroItemVariants}
          >
            I&apos;m {site.name}, a final-year Computer Engineering student specializing in Cloud Computing. I build and experiment with cloud infrastructure, automation, and AI-powered applications, with a strong interest in reliable, scalable, and intelligent systems.
          </motion.p>

          <motion.ul
            className="hero-specialties"
            variants={heroItemVariants}
          >
            {['Cloud & Infrastructure', 'DevOps & Automation', 'AI Engineering'].map((specialty) => (
              <li
                key={specialty}
                className="hero-specialty"
              >
                {specialty}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="hero-actions"
            variants={heroItemVariants}
          >
            <a
              href="#projects"
              className="primary-button hero-cta"
            >
              Explore my work
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
