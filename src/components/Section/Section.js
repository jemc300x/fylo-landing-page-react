import React from 'react';
import './Section.css';

const Section = (props) => (
  <section className='section'>
    <div className='section-illustration'>
      <img src={props.imgUrl} alt={props.imgTextAlt}/>
    </div>
    <div className='section-details'>
      {props.children}
    </div>
  </section>
);

export default Section;