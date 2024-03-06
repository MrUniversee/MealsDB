import { Form, useNavigation } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/SearchForm'

const Searchform = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          className="form-input"
          type="search"
          name="search"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </Form>
    </Wrapper>
  )
}
export default Searchform
