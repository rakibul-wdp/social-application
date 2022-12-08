import React from 'react';
import Card from './Card';
import SearchContent from "./SearchContent";

const Cards = () => {
  return (
    <div className="card-main">
        <div className="card-division">
          <Card/>
        </div>
        <SearchContent/>
      </div>
  );
};

export default Cards;