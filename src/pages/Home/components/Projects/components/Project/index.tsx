import { USER_INFOS } from '../../../../../../portfolio-config'
import { ProjectContainer, ProjectTitle } from './styles'

interface ProjectProps {
  projectTitle: string
  repositoryName: string
  defaultBranch: string
  littleDescription: string
}

const { github } = USER_INFOS

export function Project({
  projectTitle,
  repositoryName,
  defaultBranch,
  littleDescription,
}: ProjectProps) {
  return (
    <ProjectContainer
      littleDescription={littleDescription}
      onClick={() => {
        window.open(`https://github.com/${github}/${repositoryName}`)
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/${github}/${repositoryName}/${defaultBranch}/.portfolio/assets/pagina-inicial.png`}
        alt=""
      />
      <ProjectTitle>{projectTitle}</ProjectTitle>
    </ProjectContainer>
  )
}
