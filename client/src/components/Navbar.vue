<script setup>

import Login from './Login.vue';



</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="ms-2">
      <button class="btn bg-warning fw-bold text-light" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas" aria-controls="offcanvas">
        <i class="mdi mdi-notebook-outline text-light fs-5"></i>
        Notebooks
      </button>
    </div>
    <div class="container-fluid d-flex  justify-content-center">
      <router-link :to="{ name: 'Home' }" class="text-dark">
        <div class="d-flex align-items-center">
          <b class="fs-3">Noter</b>
          <span><i class="mdi mdi-fountain-pen-tip fs-1"></i></span>
        </div>
      </router-link>
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
</style>
