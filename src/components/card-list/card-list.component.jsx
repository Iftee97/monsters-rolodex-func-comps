import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
