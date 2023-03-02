import styled from 'styled-components'

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  height: 15rem;

  border-radius: 8px;

  color: ${(props) => props.theme['gray-850']};
  background: ${(props) => props.theme.white};

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 0 0.5rem;
    padding-top: 0.5rem;

    width: 100%;
  }
`
export const SkillSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6rem;
  height: 6rem;

  margin-top: -3rem;
  margin-bottom: 0.5rem;

  color: ${(props) => props.theme.white};

  border-radius: 9999px;
  background: ${(props) => props.theme['gray-850']};
`
export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['green-500']};
  }
`
