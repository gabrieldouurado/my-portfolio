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
        <LinkedinLogo
          size={28}
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/joao-gabriel-dourado-452429108/',
            )
          }}
        />
        <GithubLogo
          size={28}
          onClick={() => {
            window.open('https://github.com/gabrieldourado')
          }}
        />
        <WhatsappLogo
          size={28}
          onClick={() => {
            window.open(
              'https://wa.me/5561982634247?text=Ol%C3%A1%2C+estou+entrando+em+contato+por+meio+da+sua+p%C3%A1gina%21',
            )
          }}
        />
      </div>
    </HeaderContainer>
  )
}
