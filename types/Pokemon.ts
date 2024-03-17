import { ability } from "./Ability";
import { form } from "./Form";
import { game_indices } from "./Game_indicies";
import { item } from "./Item";
import { move } from "./Move";

export type pokemon = {
  abilities: ability[];
  base_experience: string;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: form[];
  game_indices: game_indices[];
  height: number;
  held_items: {
    items: item[];
  };
  id: number;
  is_default: boolean;
  location_area_encounters: string;
};
