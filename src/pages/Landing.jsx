import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import MealsList from '../components/MealsList'
import Searchform from '../components/Searchform'
import { useQuery } from '@tanstack/react-query'
const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchMealQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios(`${mealsUrl}${searchTerm}`)
      return response.data.meals
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData(searchMealQuery(searchTerm))
    return { searchTerm }
  }
const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: meals } = useQuery(searchMealQuery(searchTerm))

  return (
    <>
      <Searchform searchTerm={searchTerm} />
      <MealsList meals={meals} />
    </>
  )
}
export default Landing
