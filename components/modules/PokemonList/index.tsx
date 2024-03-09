"use client";

import PokemonCard from "../PokemonCard";
import { FC } from "react";
import styles from "./PokemonList.module.scss";

type PokemonListProps = {
  pokemon: any;
};

type PokemonResult = {
  name: string;
  url: string;
};

const PokemonList: FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className={styles.grid}>
      {pokemon.map((pokemon: PokemonResult, index: number) => {
        return (
          <PokemonCard
            key={index}
            name={pokemon.name}
            detailsUrl={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
