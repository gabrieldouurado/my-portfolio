import axios from 'axios'
import { AVAILABLE_REPOS, USER_INFOS } from '../portfolio-config'

export interface RepositoryInfo {
  repositoryName: string
  projectName: string
  littleDescription: string
  fullDescription: string
  screenshots: string[]
}

export async function GetRepositories(): Promise<RepositoryInfo[]> {
  const { github } = USER_INFOS

  const repositoriesInfos = Promise.all(
    AVAILABLE_REPOS.map(async (repo) => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${github}/${repo}/master/.portfolio/infos.json`,
      )

      const { data } = response

      const repositoryInfo = {
        repositoryName: repo,
        projectName: data['project-name'],
        littleDescription: data['little-description'],
        fullDescription: data['full-description'],
        screenshots: data.screenshots,
      }

      return repositoryInfo
    }),
  )

  return repositoriesInfos
}
