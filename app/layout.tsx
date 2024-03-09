import type { Metadata } from "next";
import { use } from "react";
import { Inter } from "next/font/google";
import CommandK from "../components/modules/CommandK";
import { getAllPokemon } from "../utils/getAllPokemon";
import "@/styles/_main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokechec",
  description: "A place where you find all informations about Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = use(getAllPokemon(10000, 0));

  const formattedPokemonData = Object.entries(data.results).map(
    (entry: any) => ({
      pokemon_name: entry[1].name,
      pokemon_url: entry[1].url,
    })
  );

  return (
    <html lang="en">
      <CommandK apiData={formattedPokemonData} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
