import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;

  gap: 1rem;

  section {
    border-left: 1px solid ${(props) => props.theme['gray-100']};
    padding-left: 0.5rem;
  }

  span {
    font-size: 0.875rem;
  }
`
export const CompanyLogo = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  min-width: 4.5rem;
  max-height: 4.5rem;

  overflow: hidden;

  border-radius: 6px;

  img {
    width: 100%;
    object-fit: cover;
  }
`
export const ExperienceDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0.5rem 0.875rem;

  gap: 0.5rem;

  text-align: justify;
`
export const ExperienceItem = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  padding-top: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    max-height: 0.5rem;
    margin-top: 0.375rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-100']};
  }
`

export const ButtonView = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: ${(props) => props.theme['gray-300']};
    border: transparent;
    background: transparent;

    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`
