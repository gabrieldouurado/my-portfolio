import { Project } from './components/Project'
import { ProjectsContainer, ProjectsList } from './styles'

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>Projetos</h1>
      <ProjectsList>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectsList>
    </ProjectsContainer>
  )
}
