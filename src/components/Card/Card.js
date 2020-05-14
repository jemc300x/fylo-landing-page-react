import React from 'react';
import './Card.css';
import iconQuotes from '../../assets/img/icon-quotes.svg';

const Card = (props) => (
  <div class="card">
    <div class="card-head">
      <img src={iconQuotes} alt="Quotes" />
    </div>
    <div class="card-body">
      <p>{props.content}</p>
    </div>
    <div class="card-footer">
      <img src={props.avatar} alt={props.userName} />
      <div>
        <h4>{props.userName}</h4>
        <p>{props.userDetails}</p>
      </div>
    </div>
  </div>
);

export default Card;