<template>
  <li class="item">
    <h3 v-if="item.name">{{ item.name }}</h3>
    <p v-if="item.category">Category: {{ item.category }}</p>
    <p v-if="item.cost.quantity && item.cost.unit">
      Cost: {{ item.cost.quantity }} {{ item.cost.unit }}
    </p>
    <p v-if="item.weight">Weight: {{ item.weight }} lbs</p>
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
  border-radius: 2px;
  padding: 16px;
  margin-top: 8px;
  background-color: #f9f9f9;
}
h2 {
  margin: 0;
  color: #333;
}
</style>
