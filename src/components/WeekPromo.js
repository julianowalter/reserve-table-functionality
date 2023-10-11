import { Link } from 'react-router-dom';
import bruschettaImg from '../assets/bruschetta.jpg';
import greekSaladImg from '../assets/greek-salad.jpg';
import lemonDessertImg from '../assets/lemon-dessert.jpg';
import './WeekPromo.css';
import FoodCard from './FoodCard';

const meals = [
    {
        name: 'Greek Salad',
        image: greekSaladImg,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
        name: 'Bruschetta',
        image: bruschettaImg,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: lemonDessertImg,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const WeekPromo = () => {
    return (
        <section className='container grid week-promo'>
            <div className='week-promo-header'>
                <h2>This week Promos!</h2>
                <Link className='button-primary' to="/menu">
                    Online Menu
                </Link>
            </div>
            {meals.map((meal, index) =>
                <FoodCard key={index} meal={meal} />
            )}
        </section>
    )
}

export default WeekPromo;