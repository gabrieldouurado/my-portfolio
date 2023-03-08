import { USER_INFOS } from '../../../../portfolio-config'
import { AboutContent, AboutMeContainer, MyAvatar } from './styles'

export function AboutMe() {
  const { name, title, description, github } = USER_INFOS
  return (
    <AboutMeContainer>
      <MyAvatar>
        <img src={`https://github.com/${github}.png`} alt="" />
      </MyAvatar>
      <AboutContent>
        <h4>Olá, meu nome é</h4>
        <h1>{name}</h1>
        <h6>{title}</h6>
        <section>{description}</section>
      </AboutContent>
    </AboutMeContainer>
  )
}
