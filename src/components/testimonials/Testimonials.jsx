import React, { useState, useEffect } from 'react'
import TestimonialItem from './TestimonialItem.jsx';
import site from "../../data/site.json";
const title = `Don't take my word for it`;
const {testimonials} = site;
import './testimonials.scss'; // include global CSS

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newIndex = ((activeSlide+1) === testimonials.length ? 0 : activeSlide + 1);
      setActiveSlide(newIndex);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSlide]);

  return (
    <section id="testimonials">
        <h2>{title}</h2>
        <div className="testimonial-grid">
            {testimonials.map((testimonial, i) => (
                <TestimonialItem key={i} item={testimonial} active={activeSlide===i} />
            ))}
        </div>
    </section>
  );
}
export default Testimonials;