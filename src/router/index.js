import { createRouter, createWebHistory } from 'vue-router'
import GeneralStore from '../pages/GeneralStore.vue'
import Blacksmith from '../pages/Blacksmith.vue'
import Leatherworker from '../pages/Leatherworker.vue'
import Fletcher from '../pages/Fletcher.vue'
import Tailor from '../pages/Tailor.vue'
import Tavern from '../pages/Tavern.vue'
import Arcane from '../pages/Arcane.vue'
import Potions from '../pages/Potions.vue'
import Temple from '../pages/Temple.vue'
import Jeweler from '../pages/Jeweler.vue'
import MountsAndVehicles from '../pages/MountsAndVehicles.vue'

const routes = [
  { path: '/', component: GeneralStore },
  { path: '/blacksmith', component: Blacksmith },
  { path: '/leatherworker', component: Leatherworker },
  { path: '/fletcher', component: Fletcher },
  { path: '/tailor', component: Tailor },
  { path: '/tavern', component: Tavern },
  { path: '/arcane', component: Arcane },
  { path: '/potions', component: Potions },
  { path: '/temple', component: Temple },
  { path: '/jeweler', component: Jeweler },
  { path: '/mounts-and-vehicles', component: MountsAndVehicles },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
