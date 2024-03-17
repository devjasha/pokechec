export async function getPokemonSpecies(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}
