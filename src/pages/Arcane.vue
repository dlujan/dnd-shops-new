<template>
  <div>
    <h1>Arcane</h1>
    <ul class="item-list" v-for="section in arcane.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import Item from "../components/Item.vue";
import { useShopsStore } from "../stores/ShopsStore";
const { arcane } = useShopsStore();
</script>
