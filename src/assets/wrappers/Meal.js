import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;

  header {
    text-align: center;
    margin-bottom: 1rem;
    h2 {
    }
  }
  .highlight {
    background: var(--primary-color);
    color: white;
    font-size: 1rem;
    padding: 0.2rem;
    border-radius: 5px;
    margin-right: 0.5rem;
    font-weight: 500;
  }
  .meal-info {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  @media (min-width: 767px) {
    .meal {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      place-items: center;
    }
  }
`
