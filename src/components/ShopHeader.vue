<template>
  <div class="header">
    <h2>{{ name }}</h2>
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
    </select>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

defineProps({
  name: String,
});

const router = useRouter();
const route = useRoute();
const currentPath = ref(route.path);

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
h2 {
  font-family: fantasy;
  color: #c9c9c9;
}
.shop-dropdown {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}
</style>
