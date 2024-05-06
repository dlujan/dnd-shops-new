<template>
  <div>
    <h1>Jeweler</h1>
    <ul class="item-list" v-for="section in jeweler.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { jeweler } = useShopsStore();
import Item from "../components/Item.vue";
</script>
