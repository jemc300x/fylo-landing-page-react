import React from 'react';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import illustration1 from '../assets/img/illustration-1.svg';

const Home = () => {
  return (
    <>
    <Header />
    <Section 
      imgUrl={illustration1}
      imgTextAlt='Illustration 1'
    >
      <h1>Section 1</h1>  
    </Section> 
    </>
  );
}

export default Home;