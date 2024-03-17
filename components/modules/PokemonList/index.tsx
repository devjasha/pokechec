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
    <section className={styles.grid}>
      {pokemon.map((pokemon: PokemonResult, index: number) => {
        const id: any = pokemon.url.split("/");
        return <PokemonCard key={index} name={pokemon.name} id={id[6]} />;
      })}
    </section>
  );
};

export default PokemonList;
