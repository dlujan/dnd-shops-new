<template>
  <div>
    <ShopHeader shopName="Potions" />
    <ul class="item-list" v-for="section in potions.sections">
      <Item v-for="item in section.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { potions } = useShopsStore();
import Item from "../components/Item.vue";
import ShopHeader from "../components/ShopHeader.vue";
</script>
