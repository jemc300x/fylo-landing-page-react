import React from 'react';
import './Newsletter.css';

const Newsletter = () => (
  <section className='newsletter'>
    <div>
      <h2>Get early access today</h2>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
    </div>
    <form action="">
      <input type="text" placeholder="email@example.com" />
      <button>Get Started For Free</button>
    </form>
  </section>
);

export default Newsletter;