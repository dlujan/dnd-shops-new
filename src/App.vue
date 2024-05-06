<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <SearchItems />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import SearchItems from "./components/SearchItems.vue";
import { useShopsStore } from "./stores/ShopsStore";
const { all_items } = useShopsStore();
</script>

<style>
.app-container {
  display: flex;
}
.main-content {
  margin-left: 220px; /* Adjust based on the width of the sidebar */
  padding: 20px;
  width: 100%;
}

.item-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
