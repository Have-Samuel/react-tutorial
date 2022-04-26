import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SingleDisplay from './SingleDisplay';

const About = () => (
  <div className="about__content">
    <ul className="about__list">
      <li>
        <NavLink to="about-app">About App</NavLink>
      </li>
      <li>
        <NavLink to="about-author">About Author</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path=":slug" element={<SingleDisplay />} />
    </Routes>
  </div>
);
export default About;
