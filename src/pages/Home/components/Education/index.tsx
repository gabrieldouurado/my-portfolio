import { Training } from './components/Training'
import { EducationContainer, TrainingList } from './styles'

const trainings = [
  {
    course: 'Engenharia Automotiva',
    institution: 'Universidade de Brasília',
    startDate: 'Agosto 2015',
    endDate: 'Julho 2022',
    institutionLogo:
      'https://media.licdn.com/dms/image/C4D0BAQExCz_Zuyq6Uw/company-logo_200_200/0/1519879315461?e=1685577600&v=beta&t=ZZV8-4DbTTKs6N6O0w0OFEQSrKb3koI-uwmQ7fYx_CI',
  },
  {
    course: 'Especialização Node | React | React-Native',
    institution: 'Rocketseat',
    startDate: 'Setembro 2022',
    institutionLogo:
      'https://media.licdn.com/dms/image/C560BAQFU-ZKLLdANXg/company-logo_200_200/0/1596796119888?e=1685577600&v=beta&t=aI1qsJwUEb0dH6N38uER1u5805R6pcEyBHuF3s3Jr78',
  },
  {
    course: 'Application Security Training (Web, API e Mobile)',
    institution: 'Conviso',
    startDate: 'Novembro 2022',
    institutionLogo:
      'https://media.licdn.com/dms/image/C4D0BAQH48Z81TwrICQ/company-logo_200_200/0/1643810127688?e=1685577600&v=beta&t=RYjsnI4Z65CQB5gpMsB4R8Fl4bd6P98uQfA7Qgu1syQ',
  },
  {
    course: 'Privacidade e Proteção de Dados (LGPD)',
    institution: 'SENAI',
    startDate: 'Março 2021',
    institutionLogo:
      'https://media.licdn.com/dms/image/C4D0BAQGUhXT3PmD-kA/company-logo_200_200/0/1661182130984?e=1685577600&v=beta&t=EJxVZIT6Fi-fPfIwin2NAmDQpE0TVlsYr5NUSSebCYo',
  },
  {
    course: 'Bootcamp Desenvolvedor Full Stack',
    institution: 'XP Educação',
    startDate: 'Setembro 2020',
    institutionLogo:
      'https://media.licdn.com/dms/image/C4D0BAQEz_nwBCDj3ow/company-logo_200_200/0/1656307400926?e=1685577600&v=beta&t=C6q6LZ6n_KYSPuSg0TJjH2gwFLH__VvYTN51bvEy20E',
  },
]

export function Education() {
  return (
    <EducationContainer>
      <h1>Formação</h1>
      <TrainingList>
        {trainings.map((training) => {
          return (
            <Training
              key={training.course}
              course={training.course}
              institution={training.institution}
              startDate={training.startDate}
              endDate={training.endDate}
              institutionLogo={training.institutionLogo}
            />
          )
        })}
      </TrainingList>
    </EducationContainer>
  )
}
