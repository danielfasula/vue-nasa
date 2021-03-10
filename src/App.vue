<template>
  <div class="app">
    <header class="container-fluid d-flex justify-content-around">
      <h1>NASA APOD</h1>
      <h1>MARS ROVER</h1>
    </header>

    <main class="container-fluid">
      <div class="row">
        <div class="col-6">
          <form @submit.prevent="searchApod">
            <input
              type="date"
              class="mx-1"
              placeholder="Search A Date"
              v-model="state.apodQuery"
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

        <div class="col-6">
          <form @submit.prevent="searchMars">
            <input
              type="date"
              class="mx-1"
              placeholder="Search A Date"
              v-model="state.marsQuery"
            />
            <button type="submit" class="btn btn-outline-success">
              Search
            </button>
          </form>
          <div class="row">
            <div class="col-12">
              <Mars />
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
import { marsService } from './services/MarsService'
import Apod from './components/Apod'
import Mars from './components/Mars'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      marsQuery: '',
      apodQuery: '',
      apod: computed(() => AppState.apod),
      mars: computed(() => AppState.mars)
    })
    return {
      state,
      async searchApod() {
        try {
          await apodService.searchApod(state.apodQuery)
        } catch (error) {
          console.error(error)
        }
      },
      async searchMars() {
        try {
          await marsService.searchMars(state.marsQuery)
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    Apod,
    Mars
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
