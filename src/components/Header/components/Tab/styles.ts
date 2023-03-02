import styled from 'styled-components'

export const BaseTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${(props) => props.theme['gray-500']};
  border-bottom: 1px solid ${(props) => props.theme.black};

  height: 2.5rem;
`
export const ActiveTab = styled(BaseTabContainer)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['gray-500']};
`
export const InactiveTab = styled(BaseTabContainer)`
  border-top: 1px solid ${(props) => props.theme.black};

  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-800']};
`
