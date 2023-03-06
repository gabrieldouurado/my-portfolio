import { Experience } from './components/Experience'
import { ExperiencesContainer, ExperiencesList } from './styles'

const experiences = [
  {
    role: 'Analista de Testes',
    company: 'Autotrac Comércio e Telecomunicações',
    companyLogo:
      'https://media.licdn.com/dms/image/C4D0BAQEMbLx0kx5uMQ/company-logo_200_200/0/1677673952410?e=1686182400&v=beta&t=f2sG6jwWkCC_dWKR2Sr-3PdMvltB9nC5gDrWDkpX6Kc',
    startDate: 'Fevereiro 2021',
    endDate: 'Janeiro 2023',
    description:
      'Atuei como Analista de Testes com foco em testes automatizados. Durante meu período na empresa, desenvolvi emuladores de protocolos/equipamentos, ferramentas de automatização de testes e a plataforma de testes utilizada atualmente pela empresa. Também desenvolvi todo o processo de CI/CD que passou desde a build do software até a instalação no equipamento e realização dos testes.',
    activities: [
      'Controle da qualidade das features desenvolvidas em ambiente embarcado',
      'Realização de testes automatizados, semi-automatizados e manuais',
      'Desenvolvimento de interpretadores de protocolos usando Python',
      'Desenvolvimento de softwares para comunicação serial (RS232 e RS485) utilizando NodeJS',
      'Teste de Barramento Can usando CANAlyser',
      'Desenvolvimento de interface de testes para barramento CAN',
      'Desenvolvimento de uma ferramentas para execução de testes utilizando ElectronJS',
      'Desenvolvimento de emuladores de equipamentos (proprietários da empresa) utilizando NodeJS',
      'Automatização do processo de liberação criação da documentação da Release utilizando Python, NodeJS e LaTex',
      'Criação de todo o processo de CI/CD utilizando Azure DevOps',
      'Manutenção de testes automatizados (Codificados em C#)',
      'Desenvolvimento de instrumentação eletrônica (C, Arduino e ESP32) que interagia/simula as condições de funcionamento em que o produto da empresa e empregado',
      'Desenvolvimento de soluções para comunicação (ambiente On-Premise) entre diferentes equipamentos da produzidos pela empresa',
    ],
    stack: [
      'NodeJS',
      'ElectronJS',
      'MSTest',
      'Azure DevOps',
      'CANAlyser',
      'Python',
      'Linux',
    ],
  },
  {
    role: 'Estágio Obrigatório em Engenharia Automotiva',
    company: 'Autotrac Comércio e Telecomunicações',
    companyLogo:
      'https://media.licdn.com/dms/image/C4D0BAQEMbLx0kx5uMQ/company-logo_200_200/0/1677673952410?e=1686182400&v=beta&t=f2sG6jwWkCC_dWKR2Sr-3PdMvltB9nC5gDrWDkpX6Kc',
    startDate: 'Agosto 2019',
    endDate: 'Fevereiro 2021',
    description:
      'Atuei como estagiário desenvolvendo modelos e protótipos dos projetos metal-mecânicos existentes na empresa. Também desenvolvi instrumentações que possibilitaram a realização de testes de campo com monitoramento em tempo real. Essas instrumentações auxiliaram a identificar a causa de alguns problemas existentes em produtos da empresa, além de fornecer dados para melhorar performance e durabilidade.',
    activities: [
      'Modelagem 3D e Desenhos Técnicos utilizando Solidworks',
      'Desenvolvimento de instrumentação eletrônica utilizando Arduinos e outras placas de prototipagem',
      'Fabricação metal-mecânica (Corte, Dobra e solda)',
      'Desenvolvimento de soluções e otimização de produtos com base tem testes/informações realizados em campos',
      'Desenvolvimentos de instrumentações para realização de testes em produtos(Arduinos, Módulos GSM, Sensores de Temperatura)',
    ],
    stack: ['SolidWorks', 'Arduino', 'EasyEDA', 'ESP8266'],
  },
  {
    role: 'Líder Técnico',
    company: 'ProEpi',
    companyLogo:
      'https://media.licdn.com/dms/image/C4E0BAQEz3XZaibWRSA/company-logo_200_200/0/1615298502230?e=1686182400&v=beta&t=8-_19q_ZEAt0FeVgtL5uF2fZj-wDX0BodaQVXZ8sTHs',
    startDate: 'Maio 2020',
    endDate: 'Agosto 2021',
    description:
      'Durante esse período fui responsável por orquestrar a implementação do sistema na Universidade de Brasília, Universidade Federal de São Carlos, Instituto Federal do Norte de Minas e Instituto Federal de Brasília. Também fui responsável pela implementação do sistema na Iniciativa TILS, da ProEpi, que teve impacto em 15 países e mais de 800 municípios brasileiros.',
    activities: [
      'Documentação do projeto',
      'Gestão dos Repositórios (GitHub)',
      'Gestão e orientação da equipe de desenvolvedores (Scrum e Kanban)',
      'Gerenciamento dos servidores e containers (DigitalOcean/Docker)',
      'Reunião técnicas com possíveis parceiros',
    ],
    stack: ['Docker', 'Metabase', 'Scrum', 'kanban'],
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'ProEpi',
    companyLogo:
      'https://media.licdn.com/dms/image/C4E0BAQEz3XZaibWRSA/company-logo_200_200/0/1615298502230?e=1686182400&v=beta&t=8-_19q_ZEAt0FeVgtL5uF2fZj-wDX0BodaQVXZ8sTHs',
    startDate: 'Junho 2018',
    endDate: 'Maio 2020',
    description:
      'Desenvolvimento do Guardiões da Saúde, um projeto de código aberto que se compreende como um sistema de Vigilância Participativa que, durante a pandemia, funcionou como uma ferramenta para auxílio na tomada de decisão dentro da Universidade de Brasília. O sistema também foi implementado em outras universidades federais. Hoje ele conta com quase 40 mil usuários e mais de 6 milhões de registros de saúde.',
    activities: [
      'Desenvolvimento de um aplicativo utilizando o framework React-Native',
      'Desenvolvimento de uma API utilizando o framework Ruby on Rails',
      'Desenvolvimento de um painel de gerenciamento (ReactJS)',
      'Adequação do software Go.Data produzido pela World Health Organization (WHO) para gestão de surto e rastreamento de contato de casos de sarampo',
    ],
    stack: [
      'React',
      'React-Native',
      'Ruby on Rails',
      'Postgres',
      'Metabase',
      'Go.Data',
      'Docker',
    ],
  },
]

export function Experiences() {
  return (
    <ExperiencesContainer>
      <h1>Experiencias</h1>
      <ExperiencesList>
        {experiences.map((experience) => {
          return (
            <Experience
              key={experience.description}
              role={experience.role}
              companyLogo={experience.companyLogo}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              activities={experience.activities}
              stack={experience.stack}
            />
          )
        })}
      </ExperiencesList>
    </ExperiencesContainer>
  )
}
