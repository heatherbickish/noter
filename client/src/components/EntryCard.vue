<script setup>
import { AppState } from "@/AppState.js";
import { Entry } from "@/models/Entry.js";
import { computed } from "vue";


defineProps({
  entry: { type: Entry, required: true }
})

const account = computed(() => AppState.account)

</script>


<template>
  <div class="d-flex">
    <div class="card-img p-2 mt-2 ms-2">
      <img :src="entry.img" alt="" class="entry-img border border-dark rounded">
    </div>
    <div class="card-body" style="width: 100%;">
      <div class="border bg-white rounded p-2">
        <p>{{ entry.description }}</p>
      </div>
      <div class="mt-2 text-end">
        <button class="btn btn-outline-success">Save Changes</button>
      </div>
    </div>
  </div>
  <div class="d-flex align-items-baseline justify-content-between">
    <div class="ms-3">
      <input type="url" id="img" placeholder="Image URl..." class="form-control ">
    </div>
    <div class="me-2">
      <p>last updated {{ entry.updatedAt.toLocaleDateString() }}</p>
    </div>
    <div v-if="entry.creatorId == account?.id" class="dot-button me-3 btn-group">
      <button class="btn btn-lg bg-white py-0 dropdown-toggle" type="button" data-bs-toggle="dropdown">
        <i class="mdi mdi-dots-horizontal"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><button class="dropdown-item" type="button">Edit</button></li>
        <li><button class="dropdown-item" type="button">Delete</button></li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.entry-img {
  height: 300px;
  width: 250px;
  object-fit: cover;
  object-position: center;
}
</style>