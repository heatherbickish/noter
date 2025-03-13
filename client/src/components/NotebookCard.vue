<script setup>
import { AppState } from "@/AppState.js";
import { Notebook } from "@/models/Notebook.js";
import { computed } from "vue";
import EditNotebookModal from "./EditNotebookModal.vue";


defineProps({
  notebook: { type: Notebook, required: true }
})

const account = computed(() => AppState.account)

</script>


<template>
  <div class="card-img">
    <img :src="notebook.coverImg" alt="" class="notebook-img">
  </div>
  <div class="card-body bg-dark text-light">
    <div class="d-flex align-items-baseline justify-content-between">
      <p>Created by {{ notebook.creator.name }}</p>
      <div class="title-icon-container">
        <div :style="{ backgroundColor: notebook.color }" class="px-5 py-2 rounded">
          <h4>{{ notebook.title }}</h4>
        </div>
      </div>
      <h1><i :class="'mdi ' + notebook.icon" :style="{ color: notebook.color }"></i></h1>
    </div>
    <div class="flex-container">
      <div>
        <p>Created {{ notebook.createdAt.toLocaleDateString() }}</p>
        <p>Last updated {{ notebook.updatedAt.toLocaleDateString() }}</p>
      </div>
      <div class="text-end">
        <p>{{ notebook.entryCount }} Entries</p>
        <div v-if="notebook.creatorId == account?.id">
          <button class="btn btn-outline-light px-5 text-light me-2" type="button" title="Edit Notebook"
            data-bs-toggle="modal" data-bs-target="#EditNotebookModal">
            Edit
          </button>
          <button class="btn btn-outline-light px-5 text-danger me-2" type="button" title="Delete Notebook">
            Delete
          </button>
          <button class="btn btn-primary px-5 text-light" type="button" title="New Notebook" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas" aria-controls="offcanvas">
            <i class="mdi mdi-plus-box-outline me-1"></i>New
          </button>
        </div>
      </div>
    </div>
  </div>
  <EditNotebookModal />
</template>


<style lang="scss" scoped>
.notebook-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.flex-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.title-icon-container {
  position: absolute;
  top: 55%;
  right: 0;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>