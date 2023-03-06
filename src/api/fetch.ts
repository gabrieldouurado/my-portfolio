import axios from 'axios'
import { USER_INFOS } from '../portfolio-config'

export interface RepositoryInfo {
  repositoryName: string
  projectName: string
  defaultBranch: string
  littleDescription: string
  fullDescription: string
  screenshots: string[]
}

async function getAllRepositoriesInfos(githubUser: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${githubUser}/repos`,
    )

    const { data } = response

    const allRepos = data.map((repo: any) => {
      return {
        name: repo.name,
        defaultBranch: repo.default_branch,
      }
    })

    return allRepos
  } catch (error) {}
}

export async function GetRepositories(): Promise<RepositoryInfo[]> {
  const { github } = USER_INFOS

  const availableRepos = await getAllRepositoriesInfos(github)

  const repositoriesInfos = await Promise.all(
    availableRepos.map(async (repo: any) => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/${github}/${repo.name}/${repo.defaultBranch}/.portfolio/infos.json`,
        )

        const { data } = response

        const repositoryInfo = {
          repositoryName: repo.name,
          defaultBranch: repo.defaultBranch,
          projectName: data['project-name'],
          littleDescription: data['little-description'],
          fullDescription: data['full-description'],
          screenshots: data.screenshots,
        }

        return repositoryInfo
      } catch (error) {}
    }),
  )

  return repositoriesInfos.filter((repo) => repo)
}
