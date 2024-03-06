import { useRouteError } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import svg from '../assets/react.svg'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={svg} alt="not found image" />
          <h3>Ohh!</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to={'/'}>Back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
