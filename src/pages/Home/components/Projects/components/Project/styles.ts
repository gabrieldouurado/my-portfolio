import styled from 'styled-components'

interface ProjectContainerProps {
  littleDescription: string
}

export const ProjectContainer = styled.div<ProjectContainerProps>`
  display: flex;
  flex-direction: column;
  width: 14rem;
  min-width: 14rem;
  height: 9rem;

  border-radius: 8px;

  overflow: hidden;

  border: 1px solid ${(props) => props.theme['gray-300']};

  img {
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-900']};

    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0 0.5rem;
      height: 14rem;
      margin-top: -14rem;

      &::after {
        content: '${(props) => props.littleDescription}';
        text-align: center;
        padding-top: 0.5rem;
        font-size: 0.875rem;
        margin-bottom: -3.75rem;
      }
    }
  }
`
export const ProjectTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 3rem;
  margin-top: -3rem;

  padding-top: 0.5rem;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  transition: height 500ms;

  background: linear-gradient(
    rgba(0, 0, 0, 0.55),
    ${(props) => props.theme.black}
  );
`
