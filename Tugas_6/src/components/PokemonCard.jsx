// src/components/PokemonCard.jsx
import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name, type, image, id, onClick }) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={image} alt={name} className="pokemon-image" />
      <div className="pokemon-name">{name}</div>
    </div>
  );
};

export default PokemonCard;
