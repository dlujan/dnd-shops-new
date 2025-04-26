<template>
  <div class="featured-banner">
    <img
      class="featured-image"
      src="../assets/theechoblade.png"
      alt="Featured Image"
    />
    <div class="featured-content">
      <h3>✨ Featured Item ✨</h3>
      <p class="item-name">The Echoblade</p>
      <p>
        <em
          >“It’s not the first cut that kills you. It’s the one that
          echoes.”</em
        >
        -Unknown swordsman, last recorded words
      </p>

      <transition name="fade-expand">
        <div v-if="showDetails">
          <ul>
            <li>Type: Weapon (Longsword)</li>
            <li>Rarity: Rare</li>
            <li>
              Requires Attunement by a creature that has spoken at least one lie
              in the last 24 hours
            </li>
          </ul>
          <small>
            Forged in a forgotten hall where sound never dies, the Echoblade
            hums faintly with whispers of the past. Every swing seems to carry a
            delay — not in movement, but in consequence. The sword reacts not
            just to the moment of impact, but to the memory of it.
          </small>
          <ul>
            <li>
              <small
                ><strong>Echo Strike:</strong> When you hit a creature with this
                sword, a delayed phantom slash echoes the attack at the start of
                your next turn, dealing an additional 1d6 force damage to the
                same target (or the space they last occupied, if they
                moved).</small
              >
            </li>
            <li>
              <small
                ><strong>Truth Has No Power Here:</strong> While attuned, you
                have advantage on Deception checks. However, you cannot speak
                the absolute truth three times in a row — the blade lightly
                shocks you (1 psychic damage) if you do.</small
              >
            </li>
            <li>
              <small
                ><strong>Whispers of the Wielder:</strong> Once per day, you can
                ask the blade a yes/no question aloud. It answers in your own
                voice, but with an ominous echo. The blade is not bound to truth
                or accuracy.</small
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
