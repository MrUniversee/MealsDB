import axios from 'axios'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/Meal'
import { useQuery } from '@tanstack/react-query'
const mealUrlLookup = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SinglePageQuery = (id) => {
  return {
    queryKey: ['meal', id || ''],
    queryFn: async () => {
      const response = await axios(`${mealUrlLookup}${id}`)
      return response.data.meals
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(SinglePageQuery(id))
    return { id }
  }
const Meal = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(SinglePageQuery(id))
  if (!data) <Navigate to={'/'} />
  const singleMeal = data[0]
  const {
    strMeal: food,
    strCategory: category,
    strArea: area,

    strMealThumb: img,
    strTags: tag,
  } = singleMeal
  const ingredients = Object.keys(singleMeal)
    .filter(
      (item) => item.startsWith('strIngredient') && singleMeal[item] !== ''
    )
    .map((item) => {
      return singleMeal[item]
    })

  return (
    <Wrapper>
      <header>
        <Link to={'/'} className="btn">
          Back to Home
        </Link>
        <h2>{food}</h2>
      </header>
      <div className="meal">
        <div className="meal-img">
          <img src={img} alt={food} className="img" />
        </div>
        <div className="card-body">
          <div className="meal-info">
            <span className="highlight">Category: </span>
            {category}
          </div>
          <div className="meal-info">
            <span className="highlight">Area: </span>
            {area}
          </div>

          <div className="meal-info">
            <span className="highlight">Ingredients: </span>
            {ingredients.map((item, index) => {
              return (
                <span key={index}>
                  {item}
                  {index < ingredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Meal
