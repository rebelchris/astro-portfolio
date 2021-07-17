import React, { useState, useEffect } from 'react'
import site from "../../data/site.json";
const {nav} = site;
import './header.scss'; // include global CSS

const Header = () => {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      return setColorchange(true);
    } 
    return setColorchange(false);
  }

  return (
    <header id="header" className={colorChange ? 'active' : ''}>
        <ul>
          {nav.map((item, i) => (
            <li key={i}>
                <a href={item.link} target={item.target} rel="noopener noreferrer">{item.name}</a>
            </li>
          ))}
        </ul>
    </header>
  )
}
export default Header;