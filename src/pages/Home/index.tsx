import { Header } from '../../components/Header'
import { AboutMe } from './components/AboutMe'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <AboutMe />
    </HomeContainer>
  )
}
