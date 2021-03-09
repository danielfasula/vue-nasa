<template>
  <div class="apod">
    <h1>{{ state.apod.date }}</h1>
    <img :src="state.apod.hdurl" alt="" />
    <p>{{ state.apod.explanation }}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'apod',
  props: [],
  setup() {
    const state = reactive({
      apod: computed(() => AppState.apod)
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
