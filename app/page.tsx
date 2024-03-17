import styles from "./page.module.scss";
import { LoadMore } from "../components/modules/LoadMore";
import PokemonList from "../components/modules/PokemonList";
import { use } from "react";
import { getAllPokemon } from "../utils/getAllPokemon";

const Home = () => {
  const pokemon = use(getAllPokemon(20, 0));
  return (
    <div className={styles.grid}>
      <PokemonList pokemon={pokemon.results} />
      <LoadMore />
    </div>
  );
};

export default Home;
