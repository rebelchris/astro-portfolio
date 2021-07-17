import React from 'react'
import './testimonials.scss'; // include global CSS

const TestimonialItem = ({item, active}) => {
  return (
    <div className={active ? 'testimonial-item active' : 'testimonial-item'}>
        <div className="testimonial-item--inner">
            <img width="64" height="64" src={item.image} alt={item.name} />
            <div className="testimonial-item--content">
                <strong>{item.name} <i>{item.title}</i></strong>
                <br />
                <p>{item.quote}</p>
            </div>
        </div>
    </div>
  );
}
export default TestimonialItem;