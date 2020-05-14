import React from 'react';
import './Container.css';

const Container = ({children, color}) => (
  <div className='container' style={{ backgroundColor: `var(${color})` }}>
    {children}
  </div>
);

export default Container;