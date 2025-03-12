<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import OffCanvas from "./components/OffCanvas.vue";

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="position-relative">
    <div>
      <button class="btn bg-warning fw-bold text-light py-2" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas" aria-controls="offcanvas">
        <i class="mdi mdi-notebook-outline text-light fs-5"></i>
        Notebooks
      </button>
    </div>
    <RouterView />
    <OffCanvas />
  </main>
  <footer class=" text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by CodeWorks
  </footer>
</template>

<style lang="scss"></style>
