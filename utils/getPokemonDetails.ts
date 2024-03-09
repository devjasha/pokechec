export async function getPokemonDetails(url: string) {
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}
