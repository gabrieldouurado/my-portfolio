import { AppWindow, Database, DotsThreeOutline } from 'phosphor-react'
import { Skill } from './components/Skill'
import { SkillsList, SkillsOverflowContainer } from './styles'

export function SkillsOverflow() {
  return (
    <SkillsOverflowContainer>
      <h1>Habilidades</h1>
      <section>
        Sou desenvolvedor há mais 4 anos, tenho foco no desenvolvimento de
        soluções com base em conhecimentos adquiridos em diversas áreas da
        tecnologia da informação e engenharia.
      </section>
      <SkillsList>
        <Skill
          skillArea="Front-end"
          skills={['ReactJs', 'React-Native', 'NextJs', 'HTML5', 'CSS3']}
        >
          <AppWindow size={58} weight="light" />
        </Skill>
        <Skill
          skillArea="Back-end"
          skills={['Node', 'Ruby on Rails', 'Python']}
        >
          <Database size={58} weight="light" />
        </Skill>
        <Skill
          skillArea="Outros"
          skills={['Azure DevOps', 'PostgreSQL', 'Jest', 'CI/CD']}
        >
          <DotsThreeOutline size={58} weight="light" />
        </Skill>
      </SkillsList>
    </SkillsOverflowContainer>
  )
}
