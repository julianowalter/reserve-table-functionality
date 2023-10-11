import '../components/RestaurantStory.css';
import restaurantImage1 from '../assets/restaurant1.jpg'
import restaurantImage2 from '../assets/restaurant2.jpg'

const RestaurantStory = () => {
    return (
        <section className='container grid story'>
            <div className='story-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum atque placeat impedit itaque corrupti dolores corporis quos, id nisi et voluptatum veniam voluptas, repellat accusantium, culpa harum dolor doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptate, repellat nisi officia quibusdam at delectus distinctio recusandae totam quam, pariatur ea quasi ipsa vitae voluptatibus. Repellendus necessitatibus facilis minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestiae cum aut amet, neque ad soluta dolore aspernatur consectetur corporis sint, magnam praesentium nam et dolores consequuntur, eum dignissimos facilis.
                </p>
            </div>
            <div className='story-chefs'>
                <img src={restaurantImage1} alt="Our Restaurant" />
                <img src={restaurantImage2} alt="Our Restaurant" />
            </div>

        </section>
    )
};

export default RestaurantStory;