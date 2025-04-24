<template>
  <div>
    <ShopHeader name="Fletcher" />
    <ul class="item-list" v-for="section in fletcher.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { fletcher } = useShopsStore();
import Item from "../components/Item.vue";
import ShopHeader from "../components/ShopHeader.vue";
</script>
