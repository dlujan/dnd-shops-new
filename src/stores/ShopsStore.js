import { defineStore } from "pinia";
import shops from "../data/shops.json";

export const useShopsStore = defineStore("ShopsStore", {
  state: () => {
    return {
      shops,
      all_items: shops.flatMap((shop) =>
        shop.sections.flatMap((section) => section.items || [])
      ),
      general_store: shops[0],
      blacksmith: shops[1],
      leatherworker: shops[2],
      fletcher: shops[3],
      tailor: shops[4],
      tavern: shops[5],
      arcane: shops[6],
      potions: shops[7],
      temple: shops[8],
      jeweler: shops[9],
      mounts_and_vehicles: shops[10],
    };
  },

  // getters

  // actions
});
