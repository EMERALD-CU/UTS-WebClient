import React from "react";
import "./PokemonDetail.css";

const PokemonDetail = ({ pokemon, onBack }) => {
  return (
    <div className="pokemon-detail-container">
      <button onClick={onBack} className="back-button">← Back</button>

      <div className="pokemon-detail-card">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="pokemon-main-img"
        />
        <h2 className="pokemon-name">#{pokemon.id} {pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt="mini"
          className="pokemon-mini-img"
        />

        <div className="pokemon-stats">
          <div className="stat-title">Health</div>
          <div className="health-bar">
            <div
              className="health-fill"
              style={{ width: `${(pokemon.stats[0].base_stat / 1000) * 100}%` }}
            />
          </div>
          <div className="stat-value">
            {pokemon.stats[0].base_stat} from 1000
          </div>
          <div className="stat-line">
            <div>
              <div className="label">Attack</div>
              <div className="value">{pokemon.stats[1].base_stat}</div>
            </div>
            <div>
              <div className="label">Defense</div>
              <div className="value">{pokemon.stats[2].base_stat}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
