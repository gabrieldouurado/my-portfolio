import styled from 'styled-components'

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  background: ${(props) => props.theme['gray-500']};

  h1 {
    padding-bottom: 2rem;
  }
`

export const ExperiencesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  gap: 2rem;
  width: 50rem;

  flex-wrap: wrap;
`
