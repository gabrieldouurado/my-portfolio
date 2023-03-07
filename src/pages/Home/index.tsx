// import { Header } from '../../components/Header'
import { AboutMe } from './components/AboutMe'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import { SkillsOverflow } from './components/SkillsOverflow'
import { HomeContainer, ScrollDiv } from './styles'

export function Home() {
  return (
    <HomeContainer>
      {/* <Header /> */}
      <ScrollDiv>
        <AboutMe />
        <SkillsOverflow />
        <Education />
        <Experiences />
        <Projects />
      </ScrollDiv>
    </HomeContainer>
  )
}
