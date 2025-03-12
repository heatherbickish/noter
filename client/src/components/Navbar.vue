<script setup>
// import { onMounted, ref, watch } from 'vue';
// import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

// const theme = ref(loadState('theme') || 'light')

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
// }

// watch(theme, () => {
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
//   saveState('theme', theme.value)
// }, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid d-flex  justify-content-center">
      <router-link :to="{ name: 'Home' }" class="text-dark">
        <div class="d-flex align-items-center">
          <b class="fs-3">Noter</b>
          <span><i class="mdi mdi-fountain-pen-tip fs-1"></i></span>
        </div>
      </router-link>
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button> -->
      <!-- <div class="collapse navbar-collapse " id="navbar-links">
        <ul class="navbar-nav">
          <li>
            <router-link :to="{ name: 'About' }" class="btn text-green selectable">
              About
            </router-link>
          </li>
        </ul>
        <div class="ms-auto">
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
        </div>
      </div> -->
    </div>
    <Login />
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

b {
  border-bottom: 4px solid black;
}

.nav-link {
  text-transform: uppercase;
}

// nav {
//   border-bottom: 3px solid rgb(117, 103, 103);
// }

// .navbar-nav .router-link-exact-active {
//   border-bottom: 2px solid var(--bs-success);
//   border-bottom-left-radius: 0;
//   border-bottom-right-radius: 0;
// }</style>
