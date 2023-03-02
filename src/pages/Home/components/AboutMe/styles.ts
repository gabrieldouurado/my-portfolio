import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 0;

  gap: 2rem;
`

export const MyAvatar = styled.div`
  width: 16rem;
  height: 16rem;
  min-width: 16rem;
  max-height: 16rem;

  overflow: hidden;

  border-radius: 9999px;

  border: 2px solid ${(props) => props.theme['gray-500']};

  img {
    width: 100%;
    object-fit: cover;
  }
`
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h6 {
    color: ${(props) => props.theme['gray-300']};
  }

  section {
    max-width: 36rem;
    padding-top: 1rem;
    text-align: justify;
  }
`
