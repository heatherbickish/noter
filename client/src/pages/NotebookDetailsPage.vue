<script setup>
import { AppState } from "@/AppState.js";
import EntryCard from "@/components/EntryCard.vue";
import NotebookCard from "@/components/NotebookCard.vue";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const account = computed(() => AppState.account)
const notebook = computed(() => AppState.activeNotebook)
const entries = computed(() => AppState.entries)

// watch(route, () => {
//   getNotebookById()
// })


onMounted(() => {
  getNotebookById()
  getEntriesByNotebookId()
})

async function getNotebookById() {
  try {
    const notebookId = route.params.notebookId
    await notesbooksService.getNotebookById(notebookId)
  } catch (error) {
    logger.error(error)
  }
}

async function getEntriesByNotebookId() {
  try {
    const notebookId = route.params.notebookId
    await notesbooksService.getEntriesByNotebookId(notebookId)
  }
  catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div v-if="notebook">

    <!-- SECTION Notebook details -->
    <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="card shadow notebook-card">
            <NotebookCard :notebook="notebook" />
          </div>
        </div>
      </div>

      <!-- SECTION Entries -->
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div v-for="entry in entries" :key="entry.id" class="card shadow entry-card mt-5 bg-light border border-dark">
            <EntryCard :entry="entry" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.notebook-card {
  position: relative;
}
</style>