<template>
  <div class="app">
    <header class="container-fluid">
      <h1>NASA APOD</h1>
    </header>

    <main class="container-fluid">
      <div class="row">
        <div class="col-6">
          <form @submit.prevent="search">
            <input
              type="date"
              class="mx-1"
              placeholder="Search A Date"
              v-model="state.query"
            />
            <button type="submit" class="btn btn-outline-success">
              Search
            </button>
          </form>
          <div class="row">
            <div class="col-12">
              <Apod />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from './AppState'
import { apodService } from './services/ApodService'
import Apod from './components/Apod'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      apod: computed(() => AppState.apod)
    })
    return {
      state,
      async search() {
        try {
          await apodService.searchApod(state.query)
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    Apod
  }
}
</script>

<style>
header {
  min-height: 10vh;
}
#app {
  font-family: "Akaya Telivigala", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  text-align: center;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
