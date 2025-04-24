<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <div class="header">
        <h1>D&D Shops - Free Item Library</h1>
        <small>
          Requests and feedback are welcome! If you find this site useful you
          can buy me a coffee
          <a href="https://buymeacoffee.com/dlujan" target="_blank">here</a>!
          ☕️
        </small>
      </div>
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
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.app-container {
  display: flex;
  position: relative;
  background: #252525;
}
.header {
  margin-bottom: 1rem;
}
h1 {
  font-family: fantasy;
  color: #c9c9c9;
  margin-bottom: 0;
}
small {
  color: #c9c9c9;
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
@media screen and (max-width: 1024px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
