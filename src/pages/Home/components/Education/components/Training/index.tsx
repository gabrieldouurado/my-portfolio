import { InstitutionLogo, TrainingContainer } from './styles'

interface TrainingProps {
  course: string
  institution: string
  startDate: string
  endDate?: string
  institutionLogo: string
}

export function Training({
  course,
  institution,
  startDate,
  endDate,
  institutionLogo,
}: TrainingProps) {
  return (
    <TrainingContainer>
      <InstitutionLogo>
        <img src={institutionLogo} alt="" />
      </InstitutionLogo>
      <section>
        <h3>{course}</h3>
        <p>{institution}</p>
        <p>
          {startDate} {endDate ? `a ${endDate}` : ''}
        </p>
      </section>
    </TrainingContainer>
  )
}
