import { BrainCircuit, Cloud, Code2, Workflow } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'

const groupIcons = [Cloud, Workflow, BrainCircuit, Code2]

export function Skills() {
  return (
    <section id="skills" className="page-section skills-section">
      <Reveal>
        <div className="skills-heading">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2 className="section-title skills-title">
              Skills built through hands-on work.
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index]

            return (
              <article
                key={group.title}
                className="skills-card"
                tabIndex={0}
                aria-label={`${group.title} skills; focus or hover to view details`}
              >
                <div className="skills-card-inner">
                  <div className="skills-card-face skills-card-front">
                    <span className="skills-card-icon" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.6} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skills-card-face skills-card-back">
                    <div className="skills-card-back-heading">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                      <h3>Technologies</h3>
                    </div>
                    <ul className="skills-card-items">
                      {group.items.map((item) => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
