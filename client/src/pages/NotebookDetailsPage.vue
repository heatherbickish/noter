<script setup>
import { AppState } from "@/AppState.js";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const account = computed(() => AppState.account)
const notebook = computed(() => AppState.activeNotebook)

// watch(route, () => {
//   getNotebookById()
// })


onMounted(() => {
  getNotebookById()
})

async function getNotebookById() {
  try {
    const notebookId = route.params.notebookId
    await notesbooksService.getNotebookById(notebookId)
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div v-if="notebook">

    <!-- SECTION Notebook details -->
    <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow notebook-card">
            <div class="card-img">
              <img :src="notebook.coverImg" alt="" class="notebook-img">
            </div>
            <div class="card-body bg-dark text-light">
              <div class="d-flex align-items-baseline justify-content-between">
                <p>Created by {{ notebook.creator.name }}</p>
                <div class="title-icon-container">
                  <h1><i :class="'mdi ' + notebook.icon" :style="{ color: notebook.color }"></i></h1>
                  <div :style="{ backgroundColor: notebook.color }" class="px-5 py-2 rounded">
                    <h4>{{ notebook.title }}</h4>
                  </div>

                </div>
              </div>
              <div class="flex-container">
                <div>
                  <p>Created {{ notebook.createdAt.toLocaleDateString() }}</p>
                  <p>Last updated {{ notebook.updatedAt.toLocaleDateString() }}</p>
                </div>
                <div class="text-end">
                  <p>{{ notebook.entryCount }} Entries</p>
                  <div v-if="notebook.creatorId == account?.id">
                    <button class="btn btn-outline-light px-5 text-light me-2">Edit</button>
                    <button class="btn btn-outline-light px-5 text-light me-2">Delete</button>
                    <button class="btn btn-primary px-5 text-light">
                      <i class="mdi mdi-plus-box-outline me-1"></i>New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION Entries -->
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow entry-card mt-5 bg-light">
            <div class="d-flex">
              <div class="card-img p-2">
                <img
                  src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="entry-img">
              </div>
              <div class="card-body">
                <div class="border bg-white p-2">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ullam obcaecati accusantium,
                    optio
                    voluptatem laudantium non minus. Sunt illo dolore sit error, incidunt unde eum minus quisquam
                    dolores
                    quam hic.</p>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-baseline justify-content-center">
              <div class="me-5">
                <p>last updated Mon 12/14/22</p>
              </div>
              <div class="dot-button me-3 btn-group">
                <button class="btn btn-lg bg-white py-0 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <i class="mdi mdi-dots-horizontal"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><button class="dropdown-item" type="button">Edit</button></li>
                  <li><button class="dropdown-item" type="button">Delete</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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

.notebook-card {
  position: relative;
}

.title-icon-container {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  text-align: center;
}

.entry-img {
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.entry-card {
  position: relative;
}

.dot-button {
  position: absolute;
  right: 0;
}
</style>