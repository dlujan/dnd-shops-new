<template>
  <li class="item">
    <img :src="item.image" :alt="item.imageAlt" />
    <div class="info">
      <h3 v-if="item.name">{{ item.name }}</h3>
      <p v-if="item.quote.text && item.quote.author">
        <em>"{{ item.quote.text }}"</em>
        -{{ item.quote.author }}
      </p>
      <ul>
        <li v-if="item.type">Type: {{ item.type }}</li>
        <li v-if="item.rarity">Rarity: {{ item.rarity }}</li>
        <li v-if="item.requirements">
          {{ item.requirements }}
        </li>
      </ul>
      <small v-if="item.description">
        {{ item.description }}
      </small>
      <ul>
        <li v-for="ability in item.abilities" :key="ability.name">
          <small
            ><strong>{{ ability.name }}:</strong>
            {{ ability.description }}</small
          >
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      image: "",
      imageAlt: "",
      name: "Unknown",
      quote: {
        text: "",
        author: "",
      },
      type: "",
      rarity: "",
      requirements: "",
      description: "",
      abilities: [],
    }),
  },
});
</script>

<style scoped>
.item {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 16px;
  margin-top: 8px;
  background-color: #f9f9f9;
  display: flex;
  gap: 1rem;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
}
h2,
p,
small {
  margin: 0;
  color: #333;
}
ul {
  list-style: disc;
}
</style>
