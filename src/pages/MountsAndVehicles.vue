<template>
  <div>
    <h1>Mounts & Vehicles</h1>
    <ul class="item-list" v-for="section in mounts_and_vehicles.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { mounts_and_vehicles } = useShopsStore();
import Item from "../components/Item.vue";
</script>
