import styled from 'styled-components'

const Wrapper = styled.nav`
  background: white;
  .nav-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }
  .logo {
    color: var(--primary-color);
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight: 500;
    letter-spacing: 1px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: 1px;
    color: black;
  }
  .nav-link:hover {
    color: var(--primary-color);
  }
  .active {
    color: var(--primary-color);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      gap: 1rem;
      margin-top: 0;
    }
  }
`
export default Wrapper
