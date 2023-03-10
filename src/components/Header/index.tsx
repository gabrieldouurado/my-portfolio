import { LinkedinLogo, GithubLogo, WhatsappLogo } from 'phosphor-react'
import { Tab } from './components/Tab'
import { Circle, HeaderBar, HeaderContainer, TabsContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBar>
        <section>
          <Circle circleColor="red" />
          <Circle circleColor="yellow" />
          <Circle circleColor="green" />
        </section>
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
      </HeaderBar>
      <TabsContainer>
        <Tab>Sobre Mim</Tab>
        <Tab activeTab>Experiencias</Tab>
        <Tab>Projetos</Tab>
      </TabsContainer>
    </HeaderContainer>
  )
}
