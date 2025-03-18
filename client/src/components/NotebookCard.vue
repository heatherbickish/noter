<script setup>
import { AppState } from "@/AppState.js";
import { Notebook } from "@/models/Notebook.js";
import { computed } from "vue";
import EditNotebookModal from "./EditNotebookModal.vue";
import { useRoute, useRouter } from "vue-router";
import { Pop } from "@/utils/Pop.js";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import AddEntryForm from "./AddEntryForm.vue";


const props = defineProps({
  notebook: { type: Notebook, required: true }
})

const account = computed(() => AppState.account)
const route = useRoute()
const router = useRouter()

async function deleteNotebook() {
  try {
    const yes = await Pop.confirm(`Are you sure you want to delete the ${props.notebook.title} notebook?`)
    if (!yes) return
    const notebookId = route.params.notebookId
    await notesbooksService.deleteNotebook(notebookId)
    router.push({ name: 'Account' })
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div class="card-img">
    <img :src="notebook.coverImg" alt="" class="notebook-img">
  </div>
  <div class="card-body bg-dark text-light">
    <div class="d-flex align-items-baseline justify-content-between">
      <p>Created by {{ notebook.creator.name }}</p>
      <div class="title-icon-container">
        <router-link :to="{ name: 'Notebook Details', params: { notebookId: notebook.id } }">
          <div :style="{ backgroundColor: notebook.color }" class="px-5 py-2 rounded">
            <h4 class="text-white">{{ notebook.title }}</h4>
          </div>
        </router-link>
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
          <button @click="deleteNotebook()" class="btn btn-outline-light px-5 text-danger me-2" type="button"
            title="Delete Notebook">
            Delete
          </button>
          <button class="btn btn-primary px-5 text-light" type="button" title="New Entry" data-bs-toggle="modal"
            data-bs-target="#addEntryFormModal">
            <i class="mdi mdi-plus-box-outline me-1"></i>New
          </button>
        </div>
      </div>
    </div>
  </div>
  <AddEntryForm />
  <EditNotebookModal />
</template>


<style lang="scss" scoped>
a {
  text-decoration: none;
}

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