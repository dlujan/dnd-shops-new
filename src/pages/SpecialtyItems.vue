<template>
  <div>
    <ShopHeader shopName="Specialty Items" />
    <ul class="item-list" v-for="section in specialty_items.sections">
      <SpecialtyItem
        v-for="item in section.items"
        :key="item.name"
        :item="item"
      />
    </ul>
  </div>
</template>

<script setup>
import { useShopsStore } from "../stores/ShopsStore";
const { specialty_items } = useShopsStore();
import ShopHeader from "../components/ShopHeader.vue";
import SpecialtyItem from "../components/SpecialtyItem.vue";
</script>
