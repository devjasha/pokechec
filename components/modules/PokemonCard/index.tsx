"use client";

import { FC, use, useEffect, useState } from "react";
import { getPokemonDetails } from "@/components/utils/getPokemonDetails";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import styles from "./pokemonCard.module.scss";
import Types from "../../primitives/Types";

type PokemonCardProps = {
  name: string;
  id: number;
};

const PokemonCard: FC<PokemonCardProps> = ({ name, id }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const details = await getPokemonDetails(id);

      setPokemonDetails(details);
    };
    fetchData();
  });

  return (
    <div className={styles.pokemonCard}>
      <Link href={`${pokemonDetails?.id}`} className={styles.link}>
        <img
          src={pokemonDetails?.sprites.front_default as string}
          alt={name}
          className={styles.sprite}
        />
        <div className={styles.information}>
          <div className={styles.typesWrapper}>
            <Types types={pokemonDetails?.types} />
          </div>
          <p className={styles.name}>
            {pokemonDetails?.name}
            <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
