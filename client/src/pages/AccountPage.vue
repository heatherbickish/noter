<script setup>
import { computed, watch } from 'vue';
import { AppState } from '../AppState.js';
import NotebookCard from "@/components/NotebookCard.vue";
import { logger } from "@/utils/Logger.js";
import { notesbooksService } from "@/services/NotebooksService.js";

const account = computed(() => AppState.account)
const notebooks = computed(() => AppState.notebooks)

watch(account, () => {
  if (AppState.account != null) {
    getMyNotebooks()
  }
}, { immediate: true })

async function getMyNotebooks() {
  try {
    await notesbooksService.getAllMyNotebooks()
  } catch (error) {
    logger.error(error)
  }
}

</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <div v-for="notebook in notebooks" :key="notebook.id" class="card shadow mt-5">
          <NotebookCard :notebook="notebook" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
