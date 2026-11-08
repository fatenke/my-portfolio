import { achievements, type AchievementCategory } from '../data/education'
import { Reveal } from './Reveal'

const categories: AchievementCategory[] = ['Certification', 'Competition', 'Community']

const categoryDescriptions: Record<AchievementCategory, string> = {
  Certification: 'Professional certifications',
  Competition: 'Competitions and challenges',
  Community: 'Technical community involvement',
}

export function Achievements() {
  return (
    <section id="achievements" className="page-section">
      <Reveal>
        <div className="section-heading achievements-heading">
          <p className="eyebrow">Certifications & activities</p>
          <h2 className="section-title">
            Certifications, competitions, and community involvement.
          </h2>
        </div>

        <div className="achievement-categories">
          {categories.map((category, index) => {
            const categoryItems = achievements.filter((item) => item.category === category)

            return (
              <Reveal key={category} delay={index * 0.08}>
                <div className="achievement-category">
                  <h3 className="achievement-category-heading">
                    {categoryDescriptions[category]}
                  </h3>
                  <div className="achievement-list">
                    {categoryItems.map((item) => (
                      <article
                        key={`${item.period}-${item.title}`}
                        className="achievement-item"
                        data-category={category}
                      >
                        <div className="achievement-item-content">
                          {item.images && item.images.length > 0 && (
                              <div
                                className={`achievement-media has-${item.images.length}-images`}
                                role="group"
                                aria-label={`${item.title} images`}
                              >
                                {item.images.map((image, imageIndex) => (
                                  <div
                                    key={image.src}
                                    className="achievement-photo-card"
                                    data-image-index={imageIndex}
                                  >
                                    <img
                                      className={[
                                        'achievement-image',
                                        `achievement-image-${image.fit}`,
                                        image.focus ? `achievement-image-focus-${image.focus}` : '',
                                      ].filter(Boolean).join(' ')}
                                      src={image.src}
                                      alt={image.alt}
                                      loading="lazy"
                                    />
                                  </div>
                                ))}
                                {item.images.length > 1 && (
                                  <span className="achievement-media-count" aria-hidden="true">
                                    {item.images.length} photos
                                  </span>
                                )}
                              </div>
                          )}
                          <p className="eyebrow achievement-period">
                              {item.period}
                          </p>
                          <p className="achievement-title">{item.title}</p>
                          <p className="achievement-institution">{item.institution}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
