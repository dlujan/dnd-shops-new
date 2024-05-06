<template>
  <div class="search-container">
    <input v-model="searchQuery" type="text" placeholder="Search items..." />

    <div class="item-list">
      <div v-for="(item, i) in filteredItems" :key="'item-' + i" class="item">
        <h3>{{ item.name }}</h3>
        <p>Category: {{ item.category }}</p>
        <p>Cost: {{ item.cost.quantity }} {{ item.cost.unit }}</p>
        <p v-if="item.weight">Weight: {{ item.weight }} lbs</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useShopsStore } from "../stores/ShopsStore";

const { all_items } = useShopsStore();
const searchQuery = ref("");

const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return [];
  }
  return all_items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.search-container {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.item-list {
  max-height: 400px;
  overflow-y: auto;
}

.item {
  padding-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}

h3 {
  margin: 0 0 5px 0;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Fixes padding and border issue */
}
</style>
