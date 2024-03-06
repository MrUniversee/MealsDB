import axios from 'axios'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'
export const action = async ({ request }) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response = await axios.post(newsletterUrl, data)
    console.log(response)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}
const NewsLetter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  console.log(navigation, isSubmitting)
  return (
    <Form method="POST" className="form">
      <h4
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontWeight: '400',
          letterSpacing: '1px',
        }}
      >
        Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue={'test@test.com'}
          required
        />
      </div>
      <button className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  )
}
export default NewsLetter
