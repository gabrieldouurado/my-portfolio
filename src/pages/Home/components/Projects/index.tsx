import { useCallback, useEffect, useState } from 'react'
import { GetRepositories, RepositoryInfo } from '../../../../api/fetch'
import { Project } from './components/Project'
import { ProjectsContainer, ProjectsList } from './styles'

export function Projects() {
  const [availableRepos, setAvailableRepos] = useState<RepositoryInfo[]>([])

  const fetchRepositories = useCallback(async () => {
    const repos = await GetRepositories()

    setAvailableRepos(repos)
  }, [])

  useEffect(() => {
    fetchRepositories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProjectsContainer>
      <h1>Projetos</h1>
      <ProjectsList>
        {availableRepos.map((repo) => {
          return (
            <Project
              key={repo.repositoryName}
              projectTitle={repo.projectName}
              repositoryName={repo.repositoryName}
              defaultBranch={repo.defaultBranch}
              littleDescription={repo.littleDescription}
            />
          )
        })}
      </ProjectsList>
    </ProjectsContainer>
  )
}
