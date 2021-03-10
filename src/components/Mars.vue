<template>
  <div class="mars">
    <h1>{{ state.mars.earth_date }}</h1>
    <img :src="state.mars.img_src" alt="" />
    <h4>{{ state.mars.rover?.name }}</h4>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'mars',
  props: [],
  setup() {
    const state = reactive({
      mars: computed(() => AppState.mars)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style scoped>
img {
  width: 50%;
  height: 50%;
}
</style>
