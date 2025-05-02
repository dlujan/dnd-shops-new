<template>
  <div class="header">
    <div>
      <h2>{{ props.shopName }}</h2>
      <em>"{{ shopkeeperQuote }}"</em>
    </div>
    <select
      @change="navigateTo($event)"
      class="shop-dropdown"
      :value="currentPath"
    >
      <option value="/">General Store</option>
      <option value="/blacksmith">Blacksmith</option>
      <option value="/leatherworker">Leatherworker</option>
      <option value="/fletcher">Fletcher</option>
      <option value="/tailor">Tailor</option>
      <option value="/tavern">Tavern</option>
      <option value="/arcane">Arcane</option>
      <option value="/potions">Potions</option>
      <option value="/temple">Temple</option>
      <option value="/jeweler">Jeweler</option>
      <option value="/mounts-and-vehicles">Mounts and Vehicles</option>
      <option value="/specialty-items">Specialty Items</option>
    </select>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

const props = defineProps({
  shopName: String,
});

const router = useRouter();
const route = useRoute();
const currentPath = ref(route.path);

// Quotes for each shop
const shopkeeperQuotes = {
  "General Store": [
    "Check out our stock!",
    "Everything you need for your next quest!",
    "Quality goods at fair prices!",
  ],
  Blacksmith: [
    "Only the finest blades and armor here!",
    "Looking to protect yourself, or deal some damage?",
    "Strong as dragon’s steel!",
  ],
  Leatherworker: [
    "Leather goods that'll last a lifetime!",
    "Crafted from the finest hides.",
    "You won't find softer boots anywhere.",
  ],
  Fletcher: [
    "Arrows, bolts, and everything pointy!",
    "Sharpen your aim, traveler.",
    "Feathers straight from the Roc Mountains!",
  ],
  Tailor: [
    "Robes, capes, and finery for adventurers!",
    "Dress for success... or at least survival.",
    "The latest fashions from the capital!",
  ],
  Tavern: [
    "Come in, have a pint!",
    "Stories and rumors for sale... along with ale!",
    "Take a load off, traveler.",
  ],
  Arcane: [
    "Mystic artifacts await!",
    "Spells and scrolls, no refunds!",
    "Power has a price, my friend.",
  ],
  Potions: [
    "One sip could save your life!",
    "Brews for every ailment and adventure.",
    "Careful! That one bites back.",
  ],
  Temple: [
    "Blessings upon your journey.",
    "Holy relics and divine charms.",
    "May the gods guide your steps.",
  ],
  Jeweler: [
    "Sparkles enough to blind a dragon!",
    "Rare gems and precious trinkets.",
    "Nothing but the finest craftsmanship.",
  ],
  "Mounts & Vehicles": [
    "Need a ride? You've come to the right place!",
    "Strong legs and sturdy wheels for hire.",
    "From horses to flying carpets, we have it all!",
  ],
  "Specialty Items": [
    "Artifacts with stories no bard dares tell.",
    "Strange. Powerful. Not for the faint of heart.",
    "Every item here has a secret — some still whisper.",
  ],
};

// Function to pick a random quote based on shop name
const shopkeeperQuote = computed(() => {
  const quotes =
    shopkeeperQuotes[props.shopName] || shopkeeperQuotes["General"];
  return quotes[Math.floor(Math.random() * quotes.length)];
});

// Update `currentPath` if route changes externally
watch(route, () => {
  currentPath.value = route.path;
});
const navigateTo = (event) => {
  const path = event.target.value;
  router.push(path);
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
h2,
em {
  color: #c9c9c9;
}
h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.shop-dropdown {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border-radius: 2px;
}
@media screen and (max-width: 1024px) {
  .header {
    flex-direction: column;
    gap: 0;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  .header > div {
    margin-bottom: 1rem;
  }
}
</style>
