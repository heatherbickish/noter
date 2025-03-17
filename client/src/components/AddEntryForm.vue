<script setup>
import { AppState } from "@/AppState.js";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted, ref } from "vue";


const myNotebooks = computed(() => AppState.notebooks)
const previewImg = ref('')

const editableEntryData = ref({
  description: '',
  img: '',
  notebookId: ''
})

onMounted(() => {
  getAllMyNotebooks()
})

async function getAllMyNotebooks() {
  try {
    await notesbooksService.getAllMyNotebooks()
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div class="modal fade" id="addEntryFormModal" tabindex="-1" aria-labelledby="addEntryFormModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <form>
          <div class="modal-header ">
            <div v-if="previewImg" class="mb-3">
              <img :src="previewImg" alt="" class="w-100">
              <p>Image preview</p>
            </div>
            <div class="mb-3">
              <textarea v-model="editableEntryData.description" class="form-control" id="description" rows="7"
                placeholder="Write something about a person, place, or thing" maxlength="2000" required></textarea>
            </div>
            <!-- <h1 class="modal-title fs-5" id="addEntryFormModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div class="modal-body d-flex justify-content-between">
            <div class="mb-3">
              <input v-model="editableEntryData.img" type="url" class="form-control" name="img" id="img"
                placeholder="Image Url">
            </div>
            <div class="mb-3">
              <select v-model="editableEntryData.notebookId" class="form-select" role="button"
                aria-label="Select notebook">
                <option selected value="" disabled>Select a notebook</option>
                <option v-for="notebook in myNotebooks" :key="notebook.id" :value="notebook.id" class="text-capitalize"
                  role="button">{{ notebook.title }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-outline-success">Save changes</button>
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-header {
  border-bottom: none;
}
</style>