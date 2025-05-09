// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import HeaderBar from "../components/HeaderBar";
import FilterBar from "../components/FilterBar";
import PokemonCard from "../components/PokemonCard";
import PokemonDetail from "../components/PokemonDetail";

import "./Home.css";

const Home = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]); //belum jadi
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("id");
  const [gridView, setGridView] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=");
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemonList(detailedData);
    }

    fetchData();
  }, []);

  const filteredPokemon = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPokemon = [...pokemonList].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "type") {
      return a.types[0].type.name.localeCompare(b.types[0].type.name);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <main className="home">
      <HeaderBar onSearch={setSearch} />
      
      {!selectedPokemon ? (
        <>
          <FilterBar
            sortOption={sortOption}
            setSortOption={setSortOption}
            gridView={gridView}
            setGridView={setGridView}
          />
          <div className={`pokemon-grid ${gridView ? "grid-view" : "list-view"}`}>
            {filteredPokemon.map((poke) => (
              <PokemonCard
                key={poke.id}
                name={poke.name}
                image={poke.sprites.front_default}
                type={poke.types[0].type.name}
                id={poke.id}
                onClick={() => setSelectedPokemon(poke)} // klik gambar
              />
            ))}
          </div>
        </>
      ) : (
        <PokemonDetail pokemon={selectedPokemon} onBack={() => setSelectedPokemon(null)} />
      )}
    </main>
  );
};

export default Home;
