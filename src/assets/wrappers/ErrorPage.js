import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`
