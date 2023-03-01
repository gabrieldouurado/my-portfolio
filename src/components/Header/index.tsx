import { LinkedinLogo, GithubLogo, WhatsappLogo } from 'phosphor-react'
import { Circle, HeaderContainer, HeaderNavegation } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <section>
        <Circle circleColor="red" />
        <Circle circleColor="yellow" />
        <Circle circleColor="green" />
      </section>
      <HeaderNavegation>
        <nav>Sobre mim</nav>
        <nav>Experiencias</nav>
        <nav>Projetos</nav>
      </HeaderNavegation>
      <div>
        <LinkedinLogo size={28} weight="light" />
        <GithubLogo size={28} weight="light" />
        <WhatsappLogo size={28} weight="light" />
      </div>
    </HeaderContainer>
  )
}
