<template>
  <div>
    <h1>Leatherworker</h1>
    <ul class="item-list" v-for="section in leatherworker.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { leatherworker } = useShopsStore();
import Item from "../components/Item.vue";
</script>
