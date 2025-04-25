<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <div class="header">
        <div>
          <h1>D&D Shops - Free Item Library</h1>
          <small>
            Requests and feedback are welcome! Just send an email to
            daniel.lujan96@gmail.com.
          </small>
        </div>
        <div class="beholder-wrapper">
          <div
            class="beholder"
            @click="showQuote"
            :class="{ disabled: isShowing }"
          >
            <img src="/favicon.svg" />
          </div>
          <div class="quote-box" v-if="isShowing">"{{ currentQuote }}"</div>
        </div>
      </div>

      <FeaturedItem />

      <SearchItems />
      <router-view />
      <br />
      <small
        >Thanks for using D&D Shops! ❤️ If you find this site useful you can buy
        me a coffee
        <a href="https://buymeacoffee.com/dlujan" target="_blank">here</a>!
        ☕️</small
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import SearchItems from "./components/SearchItems.vue";
import FeaturedItem from "./components/FeaturedItem.vue";

const isShowing = ref(false);
const currentQuote = ref("");

const quotes = [
  "Beholder used Death Ray!",
  "You dare approach me?",
  "I see all...",
  "Roll for initiative!",
  "Don't look into its eye!",
  "Your will is weak, adventurer.",
  "Another eye opens...",
  "The dungeon trembles before me.",
  "Foolish mortal, this is my lair!",
  "You've triggered my trap card—wait, wrong game.",
];

function showQuote() {
  if (isShowing.value) return;

  currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
  isShowing.value = true;

  setTimeout(() => {
    isShowing.value = false;
    currentQuote.value = "";
  }, 2000);
}
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
  display: flex;
  justify-content: space-between;
}
h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
.beholder-wrapper {
  position: relative;
}
.beholder {
  cursor: pointer;
  transition: transform 0.2s;
}
.beholder.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.quote-box {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-80%);
  background: #444;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  z-index: 10;
  font-size: 0.9rem;
}
@media screen and (max-width: 1024px) {
  .main-content {
    margin-left: 0;
  }
  .header {
    margin-bottom: 1rem;
  }
}
</style>
