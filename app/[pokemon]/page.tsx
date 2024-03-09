import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const page = ({ params: pokemon }: Params) => {
  return <h1>{pokemon.pokemon}</h1>;
};

export default page;
