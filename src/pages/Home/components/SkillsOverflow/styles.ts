import styled from 'styled-components'

export const SkillsOverflowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  background: ${(props) => props.theme['gray-500']};

  section {
    padding-top: 1rem;
    max-width: 50rem;
    text-align: center;
  }
`
export const SkillsList = styled.div`
  display: flex;
  padding-top: 6.5rem;
  gap: 3.5rem;
`
