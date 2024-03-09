"use client";

import { FC, useEffect, useState } from "react";
import styles from "./SearchItem.module.scss";
import { getPokemonDetails } from "@/components/utils/getPokemonDetails";
import Link from "next/link";
import Types from "../Types";

type SearchItemProps = {
  pokemonUrl: string;
};

const SearchItem: FC<SearchItemProps> = ({ pokemonUrl }) => {
  const [data, setData] = useState<any>();
  const getData = async () => {
    const result = await getPokemonDetails(pokemonUrl);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Link href={`${data?.name}`} className={styles.link}>
      <div className={styles.Content}>
        <div className={styles.nameImage}>
          <img
            src={data?.sprites.front_default}
            height={50}
            width={50}
            alt={data?.id}
            className={styles.asset}
          />
          <p className={styles.name}>{data?.name}</p>
        </div>
        <Types types={data?.types} />
      </div>
    </Link>
  );
};

export default SearchItem;
