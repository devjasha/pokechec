export async function getAllPokemon(limit: number, offset: number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();

  return data;
}
