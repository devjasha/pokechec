"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getAllPokemon } from "@/components/utils/getAllPokemon";
import PokemonList from "../PokemonList";
import Spinner from "../Spinner";

export function LoadMore() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [offset, setOffset] = useState(18);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePokemon = async () => {
    await delay(1000);
    const page = offset;
    const newPokemon = (await getAllPokemon(18, page)) ?? [];
    setPokemon((prevPokemon: any[]) => [...prevPokemon, ...newPokemon.results]);
    setOffset(page + 18);

    console.log("limit:", offset);
  };

  useEffect(() => {
    if (inView) {
      console.log("hello world");
      loadMorePokemon();
    }
  }, [inView]);

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <div ref={ref}>
        <Spinner />
      </div>
    </div>
  );
}
