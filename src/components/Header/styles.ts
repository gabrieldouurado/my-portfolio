import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;

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
    gap: 1.5rem;

    color: ${(props) => props.theme['gray-300']};

    svg {
      transition: color 100ms;
      &:hover {
        size: 45px;
        color: ${(props) => props.theme.white};
      }
    }
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

export const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
