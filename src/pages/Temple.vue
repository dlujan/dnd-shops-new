<template>
  <div>
    <h1>Temple</h1>
    <ul class="item-list" v-for="section in temple.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { temple } = useShopsStore();
import Item from "../components/Item.vue";
</script>
