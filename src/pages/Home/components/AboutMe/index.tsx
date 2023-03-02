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
          Iniciei minha carreira no ramo da tecnologia em 2018 como
          desenvolvedor Full Stack com tecnologias JavaScript, desde então
          transitei entre algumas áreas da TI, desenvolvimento, QA e gestão. No
          momento estou em busca de novas oportunidades para realocação no
          mercado.
        </section>
      </AboutContent>
    </AboutMeContainer>
  )
}
