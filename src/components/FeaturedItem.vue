<template>
  <div class="featured-banner">
    <img
      class="featured-image"
      :src="featured_item.image"
      :alt="featured_item.imageAlt"
    />
    <div class="featured-content">
      <h3>✨ Featured Item ✨</h3>
      <p class="item-name">{{ featured_item.name }}</p>
      <p>
        <em>"{{ featured_item.quote.text }}"</em>
        -{{ featured_item.quote.author }}
      </p>

      <transition name="fade-expand">
        <div v-if="showDetails">
          <ul>
            <li>Type: {{ featured_item.type }}</li>
            <li>Rarity: {{ featured_item.rarity }}</li>
            <li>
              {{ featured_item.requirements }}
            </li>
          </ul>
          <small>
            {{ featured_item.description }}
          </small>
          <ul>
            <li v-for="ability in featured_item.abilities" :key="ability.name">
              <small
                ><strong>{{ ability.name }}:</strong>
                {{ ability.description }}</small
              >
            </li>
          </ul>
        </div>
      </transition>

      <span @click="toggleDetails" class="read-more-button">
        {{ showDetails ? "show less" : "read more" }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useShopsStore } from "../stores/ShopsStore";
const { specialty_items } = useShopsStore();
const featured_item = specialty_items.sections[0].items[0];

const showDetails = ref(false);

function toggleDetails() {
  showDetails.value = !showDetails.value;
}
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

.featured-banner {
  background: linear-gradient(90deg, #3a2a59, #593a80);
  color: #f0e6ff;
  padding: 20px;
  border-radius: 8px;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.featured-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: rgb(247, 247, 247);
  padding: 6px;
  animation: float 3s ease-in-out infinite;
}

.featured-content {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.5rem;
  margin-top: 0;
}
.item-name {
  color: #ffdf6b;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 0.5rem;
}
ul {
  list-style: none;
}
li {
  margin-bottom: 0.5rem;
}
.read-more-button {
  cursor: pointer;
  text-decoration: underline;
}
.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
}

.fade-expand-enter-from,
.fade-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-expand-enter-to,
.fade-expand-leave-from {
  max-height: 1000px; /* Large enough to fit your content */
  opacity: 1;
}
@media screen and (max-width: 1024px) {
  .featured-banner {
    flex-direction: column-reverse;
  }
}
</style>
