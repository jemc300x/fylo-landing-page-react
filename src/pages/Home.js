import React from 'react';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import illustration1 from '../assets/img/illustration-1.svg';
import illustration2 from '../assets/img/illustration-2.svg';
import avatar from '../assets/img/avatar-testimonial.jpg';
import iconArrow from '../assets/img/icon-arrow.svg';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import Newsletter from '../components/Newsletter/Newsletter';
import Curve from '../components/Curve/Curve';
import Footer from '../components/Footer/Footer';

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

    <Curve />
    <Container color='--Light-Grayish-Blue'>
      <Section 
        imgUrl={illustration2}
        imgTextAlt='Illustration 2'
      >
        <h2>Stay productive, wherever your are</h2>
        <p className='text-aling-start'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='text-aling-start'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
        <div className="section-details-call-to-action">
          <a href="/">See how Fylo works <span><img src={iconArrow} alt="Icon Arrow" /></span></a>
        </div>

        <Card 
          avatar={avatar}
          userName='Kely Burton'
          userDetails='Founder & CEO, Huddle'
          content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.'
        />
        
      </Section>
    </Container>
     
    <Container color='--Desaturated-Blue'>
      <Newsletter></Newsletter>
    </Container>

    <Footer />

    </>
  );
}

export default Home;