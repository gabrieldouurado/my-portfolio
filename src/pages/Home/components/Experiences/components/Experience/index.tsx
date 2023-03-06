import { useState } from 'react'
import { sliceTextAccordinglyLength } from '../../../../../../utils/formatters'
import {
  ButtonView,
  CompanyLogo,
  ExperienceContainer,
  ExperienceDescription,
  ExperienceItem,
} from './styles'

interface ExperienceProps {
  role: string
  company: string
  companyLogo: string
  startDate: string
  endDate: string
  description: string
  activities: string[]
  stack: string[]
}

export function Experience({
  role,
  company,
  companyLogo,
  startDate,
  endDate,
  description,
  activities,
  stack,
}: ExperienceProps) {
  const [fullDescription, setFullDescription] = useState(false)
  const [buttonText, setButtonText] = useState('ver mais')

  function changeVisualization() {
    if (fullDescription) {
      setFullDescription(false)
      setButtonText('ver mais')
    } else {
      setFullDescription(true)
      setButtonText('ver menos')
    }
  }

  return (
    <ExperienceContainer>
      <CompanyLogo>
        <img src={companyLogo} alt="" />
      </CompanyLogo>
      <section>
        <h3>{role}</h3>
        <p>{company}</p>
        <span>
          {startDate} {endDate ? `a ${endDate}` : ''}
        </span>
        {fullDescription ? (
          <ExperienceDescription>
            {description}
            <div>
              Atividades:
              {activities.map((activity) => {
                return (
                  <ExperienceItem key={activity}>{activity}</ExperienceItem>
                )
              })}
            </div>
            <strong>Stack:</strong>{' '}
            {stack.map((tech, index) => {
              return index === stack.length - 1 ? tech : `${tech}, `
            })}
          </ExperienceDescription>
        ) : (
          <ExperienceDescription>
            {sliceTextAccordinglyLength(description, 300)}
          </ExperienceDescription>
        )}
        <ButtonView>
          <button onClick={changeVisualization}>{buttonText}</button>
        </ButtonView>
      </section>
    </ExperienceContainer>
  )
}
