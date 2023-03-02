import { Check } from 'phosphor-react'
import { ReactNode } from 'react'
import { SkillContainer, SkillItem, SkillSymbol } from './styles'

interface SkillsProps {
  children: ReactNode
  skillArea: string
  skills: string[]
}

export function Skill({ children, skillArea, skills }: SkillsProps) {
  return (
    <SkillContainer>
      <SkillSymbol>{children}</SkillSymbol>
      <h3>{skillArea}</h3>
      <section>
        {skills.map((skill) => {
          return (
            <SkillItem key={skill}>
              <Check size={22} weight="light" /> {skill}
            </SkillItem>
          )
        })}
      </section>
    </SkillContainer>
  )
}
