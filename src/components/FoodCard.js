import '../components/FoodCard.css';
import {Link} from 'react-router-dom';

const FoodCard = ({meal}) => {
    return(
        <article className='promo-card'>
            <div className='promo-card-image'>
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className='promo-card-header'>
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className='promo-card-body-footer'>
                <p>{meal.description}</p>
                <Link to="/orderonline">
                    Order a delivery
                </Link>
            </div>
        </article>
    )
};

export default FoodCard;