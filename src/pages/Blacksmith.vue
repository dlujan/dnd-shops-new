<template>
  <div>
    <h1>Blacksmith</h1>
    <ul class="item-list" v-for="section in blacksmith.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { blacksmith } = useShopsStore();
import Item from "../components/Item.vue";
</script>
