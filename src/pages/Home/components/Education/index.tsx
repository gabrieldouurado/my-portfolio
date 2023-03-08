import { Training } from './components/Training'
import { EducationContainer, TrainingList } from './styles'
import { TRAININGS } from '../../../../portfolio-config'

export function Education() {
  return (
    <EducationContainer>
      <h1>Formação</h1>
      <TrainingList>
        {TRAININGS.map((training) => {
          return (
            <Training
              key={training.course}
              course={training.course}
              institution={training.institution}
              startDate={training.startDate}
              endDate={training.endDate}
              institutionLogo={training.institutionLogo}
            />
          )
        })}
      </TrainingList>
    </EducationContainer>
  )
}
