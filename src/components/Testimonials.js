import '../components/Testimonials.css';
import customerImg1 from '../assets/customer1.jpg';
import customerImg2 from '../assets/customer2.jpg';
import customerImg3 from '../assets/customer3.jpg';
import customerImg4 from '../assets/customer4.jpg';
import TestimonialsCard from '../components/TestimonialsCard';

const customers = [
    {
        fullName: 'Maria Sanchez',
        image: customerImg1,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Antony Clifton',
        image: customerImg2,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Tamika Jackson',
        image: customerImg3,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Brandon Ming',
        image: customerImg4,
        rating: [1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='container grid'>
                <h2>What people say about us!</h2>
                {customers.map((customer, index) =>
                    <TestimonialsCard key={index} customer={customer} />
                )}
            </div>
        </section>
    );
};

export default Testimonials;