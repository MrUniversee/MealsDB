import Wrapper from '../assets/wrappers/MealsList'
import MealsCard from './MealsCard'
const MealsList = ({ meals }) => {
  if (!meals) {
    return <h4>could not find such meal</h4>
  }
  const formattedMeals = meals.map((item) => {
    const {
      idMeal: id,
      strMeal: title,
      strMealThumb: img,
      strCategory: category,
      strArea: area,
    } = item
    return { id, title, img, category, area }
  })

  return (
    <Wrapper>
      {formattedMeals.map((item) => (
        <MealsCard key={item.id} {...item} />
      ))}
    </Wrapper>
  )
}
export default MealsList
