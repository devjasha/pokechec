"use client";

import { useState, useEffect, FC } from "react";
import { Command } from "cmdk";
import styles from "./CommandK.module.scss";
import Fuse from "fuse.js";
import SearchItem from "../../primitives/SearchItem";

type CommandKProps = {
  apiData: any;
};

const CommandK: FC<CommandKProps> = ({ apiData }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const options = {
    keys: ["pokemon_name"],
    includeScore: true,
  };

  const fuse = new Fuse(apiData, options);
  const results = fuse.search(query);
  const pokemonResult = query ? results.map((result) => result.item) : apiData;

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: any) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className={styles.wrapper}
    >
      <div className={styles.badge}>Pokemon</div>
      <Command.Input
        value={query}
        onValueChange={setQuery}
        className={styles.input}
        placeholder="Search for Pokemon..."
      />
      <Command.List title="Results" className={styles.list}>
        {pokemonResult?.slice(0, 20).map((item: any) => (
          <SearchItem pokemonUrl={item.pokemon_url} key={item.pokemon_name} />
        ))}
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandK;
