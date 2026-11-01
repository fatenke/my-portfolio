import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Reveal } from './Reveal'

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const introItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function About() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="page-section about-section">
      <Reveal>
        <div className="about-mindset-card">
          <motion.div
            className="about-mindset-content"
            variants={introContainerVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p
              className="eyebrow about-label"
              variants={introItemVariants}
            >
              Engineering mindset
            </motion.p>
            <motion.h2
              className="about-title"
              variants={introItemVariants}
            >
              Beyond writing code. Understanding the systems behind it.
            </motion.h2>
            <div className="about-copy">
              <motion.p variants={introItemVariants}>
                I’m interested in what makes technology work as a whole — from the infrastructure that powers applications to the automation that keeps them running and the intelligence that makes them more useful.
              </motion.p>
              <motion.p variants={introItemVariants}>
                My approach is hands-on and curiosity-driven. I learn by building, experimenting, troubleshooting, and connecting concepts across different areas of engineering.
              </motion.p>
              <motion.p variants={introItemVariants}>
                I’m particularly drawn to the intersection of Cloud Computing, Security, DevOps, and Artificial Intelligence — exploring how reliable infrastructure and intelligent software can work together.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}
