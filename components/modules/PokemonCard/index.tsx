"use client";

import { FC, use, useEffect, useState } from "react";
import { getPokemonDetails } from "@/components/utils/getPokemonDetails";
import Headline from "../../primitives/Headline";
import Image from "next/image";
import Link from "next/link";
import styles from "./pokemonCard.module.scss";
import Types from "../../primitives/Types";

type PokemonCardProps = {
  name: string;
  detailsUrl: any;
};

const PokemonCard: FC<PokemonCardProps> = ({ name, detailsUrl }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const details = await getPokemonDetails(detailsUrl);

      setPokemonDetails(details);
    };
    fetchData();
  });

  return (
    <div className={styles.pokemonCard}>
      <Link href={`${name}`} className={styles.link}>
        <img
          src={pokemonDetails?.sprites.front_default as string}
          alt={name}
          className={styles.sprite}
        />
        <div className={styles.information}>
          <div>
            <Types types={pokemonDetails?.types} />
          </div>
          <Headline content={name} tag="h3" />
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
