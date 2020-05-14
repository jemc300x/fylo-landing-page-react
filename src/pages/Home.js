import React from 'react';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import illustration1 from '../assets/img/illustration-1.svg';
import illustration2 from '../assets/img/illustration-2.svg';

const Home = () => {
  return (
    <>
    <Header />
    <Section 
      imgUrl={illustration1}
      imgTextAlt='Illustration 1'
    >
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores your most important files in one secure location. Access them wherever your need, shere and collaborate with friends, family, and co-workers.</p>
      <form action="">
        <input type="text" name="email" id="email" placeholder="Enter your email..." />
        <button>Get Started</button>
      </form>
    </Section>
     
    </>
  );
}

export default Home;