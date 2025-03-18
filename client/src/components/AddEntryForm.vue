<script setup>
import { AppState } from "@/AppState.js";
import { entriesService } from "@/services/EntriesService.js";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.js";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const account = computed(() => AppState.account)
const myNotebooks = computed(() => AppState.notebooks)
const previewImg = ref('')
// const router = useRouter()

const editableEntryData = ref({
  description: '',
  img: '',
  notebookId: ''
})

watch(account, () => {
  if (AppState.account != null) {
    getAllMyNotebooks()
  }
})

// onMounted(() => {
//   // if (AppState.account != null) {
//   // }
//   getAllMyNotebooks()
// })

async function getAllMyNotebooks() {
  try {
    await notesbooksService.getAllMyNotebooks()
  } catch (error) {
    logger.error(error)
  }
}

async function createEntry() {
  try {
    await entriesService.createEntry(editableEntryData.value)
    editableEntryData.value = {
      description: '',
      img: '',
      notebookId: ''
    }
    Modal.getInstance('#addEntryFormModal').hide()
    // router.push({ name: 'Notebook Details', params: { notebookId: myNotebooks.value.id } })
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div class="modal fade" id="addEntryFormModal" tabindex="-1" aria-labelledby="addEntryFormModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-light">
        <div class="text-end mx-2 mt-1">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="createEntry()">
          <div class="modal-header" id="addEntryFormModalLabel">
            <div>
              <img :src="previewImg" alt="" class="w-100">
              <p>Image preview</p>
            </div>
            <div>
              <textarea v-model="editableEntryData.description" class="form-control" id="description" rows="7"
                placeholder="Write something about a person, place, or thing" maxlength="2000" style="width: 200%;"
                required></textarea>
            </div>
          </div>
          <div class="modal-body d-flex justify-content-between">
            <div class="mb-1">
              <input v-model="editableEntryData.img" type="url" class="form-control" name="img" id="img"
                placeholder="Image Url">
            </div>
            <div class="mb-1">
              <select v-model="editableEntryData.notebookId" class="form-select" role="button"
                aria-label="Select notebook">
                <option selected value="" disabled>Select a notebook</option>
                <option v-for="notebook in myNotebooks" :key="notebook.id" :value="notebook.id" class="text-capitalize"
                  role="button">{{ notebook.title }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-outline-success">Save</button>
          </div>
        </form>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-header {
  border-bottom: none;
}
</style>