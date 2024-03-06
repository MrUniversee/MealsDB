import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/MealsCard'

const MealsCard = ({ id, title, img, category, area }) => {
  return (
    <Wrapper>
      <div className="card-img">
        <img src={img} alt={title} className="img" />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{area}</p>
        <Link to={`/meal/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  )
}
export default MealsCard
