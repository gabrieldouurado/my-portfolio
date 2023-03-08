import { Experience } from './components/Experience'
import { ExperiencesContainer, ExperiencesList } from './styles'
import { EXPERIENCES } from '../../../../portfolio-config'

export function Experiences() {
  return (
    <ExperiencesContainer>
      <h1>Experiencias</h1>
      <ExperiencesList>
        {EXPERIENCES.map((experience) => {
          return (
            <Experience
              key={experience.description}
              role={experience.role}
              companyLogo={experience.companyLogo}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              activities={experience.activities}
              stack={experience.stack}
            />
          )
        })}
      </ExperiencesList>
    </ExperiencesContainer>
  )
}
