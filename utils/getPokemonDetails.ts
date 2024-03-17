export async function getPokemonDetails(id: any) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}
