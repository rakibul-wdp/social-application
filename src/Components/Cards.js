import React from 'react';
import "../css/Card.css";
import Card from './Card';
import CardFour from './CardFour';
import CardThree from './CardThree';
import CardTwo from './CardTwo';
import SearchContent from "./SearchContent";

const Cards = () => {
  return (
    <div className="card-main">
      <div className="card-division">
        <Card/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
      </div>
        <SearchContent/>
    </div>
  );
};

export default Cards;