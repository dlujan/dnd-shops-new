<template>
  <div>
    <ShopHeader shopName="General Store" />
    <ul class="item-list" v-for="section in general_store.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import Item from "../components/Item.vue";
import ShopHeader from "../components/ShopHeader.vue";
import { useShopsStore } from "../stores/ShopsStore";
const { general_store } = useShopsStore();
</script>
