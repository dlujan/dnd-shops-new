<template>
  <div class="sidebar">
    <router-link class="router-link" to="/">General Store</router-link>
    <router-link class="router-link" to="/blacksmith">Blacksmith</router-link>
    <router-link class="router-link" to="/leatherworker"
      >Leatherworker</router-link
    >
    <router-link class="router-link" to="/fletcher">Fletcher</router-link>
    <router-link class="router-link" to="/tailor">Tailor</router-link>
    <router-link class="router-link" to="/tavern">Tavern</router-link>
    <router-link class="router-link" to="/arcane">Arcane</router-link>
    <router-link class="router-link" to="/potions">Potions</router-link>
    <router-link class="router-link" to="/temple">Temple</router-link>
    <router-link class="router-link" to="/jeweler">Jeweler</router-link>
    <router-link class="router-link" to="/mounts-and-vehicles"
      >Mounts and Vehicles</router-link
    >
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { shops } = useShopsStore();
</script>

<style scoped>
.sidebar {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #252525;
  border-right: 1px solid #f4f4f427;
  display: flex;
  flex-direction: column;
}
.router-link {
  display: block;
  color: #c9c9c9;
  text-decoration: none;
  padding: 10px;
  &:hover {
    background: #565656;
  }
}
.router-link-active {
  background: #c41e3a8b;
}
@media screen and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>
