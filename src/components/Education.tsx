import { education } from '../data/education'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="education" className="page-section">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">
            Academic foundations in computer engineering and cloud computing.
          </h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal key={`${item.period}-${item.title}`} delay={index * 0.1}>
              <article className="education-card">
                <div className="education-card-layout">
                  <div className="education-logo-panel">
                    <img
                      src={item.logoUrl}
                      alt={`${item.institutionShortName} logo`}
                      className="education-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="education-details">
                    <span className="period-badge">
                      {item.period}
                    </span>
                    <h3 className="education-title">{item.title}</h3>
                    <p className="education-institution">{item.institutionShortName}</p>
                    {item.location ? <p className="education-location">{item.location}</p> : null}
                  </div>
                </div>
                <div className="education-card-accent" />
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
