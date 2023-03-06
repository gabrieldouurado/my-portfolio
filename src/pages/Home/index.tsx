import { Header } from '../../components/Header'
import { AboutMe } from './components/AboutMe'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import { SkillsOverflow } from './components/SkillsOverflow'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <AboutMe />
      <SkillsOverflow />
      <Education />
      <Experiences />
      <Projects />
    </HomeContainer>
  )
}
