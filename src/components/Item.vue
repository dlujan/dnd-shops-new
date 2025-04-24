<template>
  <li class="item">
    <h3>{{ item.name }}</h3>
    <p>Category: {{ item.category }}</p>
    <p>Cost: {{ item.cost.quantity }} {{ item.cost.unit }}</p>
    <p>Weight: {{ item.weight }} lbs</p>
  </li>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      name: "Unknown",
      category: "Unknown",
      cost: {
        quantity: 0,
        unit: "gp",
      },
      weight: 0,
      speed: 0,
    }),
  },
});
</script>

<style scoped>
.item {
  border: 1px solid #ddd;
  padding: 16px;
  margin-top: 8px;
  background-color: #f9f9f9;
}
h2 {
  margin: 0;
  color: #333;
}
</style>
