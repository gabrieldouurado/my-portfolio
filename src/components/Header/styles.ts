import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;

  padding: 0 1.5rem;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${(props) => props.theme['gray-500']};

  section {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  div {
    display: flex;
    gap: 1rem;

    color: ${(props) => props.theme['gray-200']};
  }
`

const CIRCLE_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface CircleProps {
  circleColor: keyof typeof CIRCLE_COLORS
}

export const Circle = styled.div<CircleProps>`
  width: 1rem;
  height: 1rem;

  border-radius: 100%;

  background: ${(props) => props.theme[CIRCLE_COLORS[props.circleColor]]};
`

export const HeaderNavegation = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 3rem;

  padding: 0.5rem 3rem;

  border-radius: 12px;
  /* border: 1px solid ${(props) => props.theme['gray-200']}; */

  nav {
    &:hover {
      font-weight: bold;
    }
  }
`
