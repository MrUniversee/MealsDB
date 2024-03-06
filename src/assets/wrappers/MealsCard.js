import styled from 'styled-components'

const Wrapper = styled.article`
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  .img {
    height: 15rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .card-body {
    padding: 1rem;
  }
  h2 {
    letter-spacing: 1px;
    color: var(--primary-color);
  }
  h3 {
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
  }
  p {
    color: gray;
    letter-spacing: 1px;
  }
`
export default Wrapper
