import { AboutContent, AboutMeContainer, MyAvatar } from './styles'

export function AboutMe() {
  return (
    <AboutMeContainer>
      <MyAvatar>
        <img src="https://github.com/gabrieldouurado.png" alt="" />
      </MyAvatar>
      <AboutContent>
        <h4>Olá, meu nome é</h4>
        <h1>João Gabriel Dourado</h1>
        <h6>Desenvolvedor de Software | Engenheiro Automotivo</h6>
        <section>
          {'>'} Sou desenvolvedor há mais 4 anos, tenho foco no desenvolvimento
          de soluções com base em conhecimentos adquiridos em diversas áreas da
          tecnologia da informação e engenharia.
        </section>
      </AboutContent>
    </AboutMeContainer>
  )
}
