<template>
  <div class="sidebar">
    <router-link class="router-link" to="/"
      ><i className="ra ra-bell ra-2x"></i>
      <span>General Store</span></router-link
    >
    <router-link class="router-link" to="/blacksmith"
      ><i className="ra ra-large-hammer ra-2x"></i
      ><span>Blacksmith</span></router-link
    >
    <router-link class="router-link" to="/leatherworker"
      ><i className="ra ra-vest ra-2x"></i
      ><span>Leatherworker</span></router-link
    >
    <router-link class="router-link" to="/fletcher"
      ><i className="ra ra-target-arrows ra-2x"></i
      ><span>Fletcher</span></router-link
    >
    <router-link class="router-link" to="/tailor"
      ><i className="ra ra-slash-ring ra-2x"></i
      ><span>Tailor</span></router-link
    >
    <router-link class="router-link" to="/tavern"
      ><i className="ra ra-knife-fork ra-2x"></i
      ><span>Tavern</span></router-link
    >
    <router-link class="router-link" to="/arcane"
      ><i className="ra ra-crystal-ball ra-2x"></i
      ><span>Arcane</span></router-link
    >
    <router-link class="router-link" to="/potions"
      ><i className="ra ra-fizzing-flask ra-2x"></i
      ><span>Potions</span></router-link
    >
    <router-link class="router-link" to="/temple"
      ><i className="ra ra-sunbeams ra-2x"></i><span>Temple</span></router-link
    >
    <router-link class="router-link" to="/jeweler"
      ><i className="ra ra-diamond ra-2x"></i><span>Jeweler</span></router-link
    >
    <router-link class="router-link" to="/mounts-and-vehicles"
      ><i className="ra ra-pawprint ra-2x"></i
      ><span>Mounts and Vehicles</span></router-link
    >
    <router-link class="router-link" to="/specialty-items"
      ><i className="ra ra-pawprint ra-2x"></i
      ><span>Specialty Items</span></router-link
    >
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
import "rpg-awesome/css/rpg-awesome.min.css";
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
  display: flex;
  align-items: center;
  gap: 10px;
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
