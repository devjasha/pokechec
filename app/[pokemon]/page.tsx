import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import PokemonDetailStage from "@/components/components/modules/PokemonDetailStage";
import { use } from "react";
import { getPokemonDetails } from "@/components/utils/getPokemonDetails";

const page = ({ params: pokemon }: Params) => {
  let details = "";
  if (pokemon.pokemon !== "favicon.ico") {
    details = use(getPokemonDetails(pokemon.pokemon));
  }

  return <PokemonDetailStage pokemonDetails={details} />;
};

export default page;
