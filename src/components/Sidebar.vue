<template>
  <div class="sidebar">
    <router-link to="/">General Store</router-link>
    <router-link to="/blacksmith">Blacksmith</router-link>
    <router-link to="/leatherworker">Leatherworker</router-link>
    <router-link to="/fletcher">Fletcher</router-link>
    <router-link to="/tailor">Tailor</router-link>
    <router-link to="/tavern">Tavern</router-link>
    <router-link to="/arcane">Arcane</router-link>
    <router-link to="/potions">Potions</router-link>
    <router-link to="/temple">Temple</router-link>
    <router-link to="/jeweler">Jeweler</router-link>
    <router-link to="/mounts-and-vehicles">Mounts and Vehicles</router-link>
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
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.router-link {
  display: block;
  margin: 10px 0;
  color: #333;
  text-decoration: none;
}
.router-link-active {
  color: #000;
  font-weight: bold;
}
</style>
