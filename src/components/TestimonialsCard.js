import '../components/TestimonialsCard.css';

const TestimonialsCard = ({customer}) => {
    return(
        <article className='testimonial-card'>
            <img src={customer.image} alt={customer.fullName} />
            <h4>{customer.fullName}</h4>
            <span>
                {customer.rating}
            </span>
            <blockquote><p>"{customer.says}"</p></blockquote>
        </article>
    );
};

export default TestimonialsCard;