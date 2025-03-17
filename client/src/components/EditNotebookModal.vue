<script setup>
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.js";
import { ref } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const previewCoverImg = ref('')

const editableNotebookData = ref({
  title: '',
  icon: '',
  color: '',
  coverImg: ''
})

async function editNotebook() {
  try {
    const notebookId = route.params.notebookId
    await notesbooksService.editNotebook(editableNotebookData.value, notebookId)
    Modal.getInstance('#EditNotebookModal').hide()
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <div class="modal fade" id="EditNotebookModal" tabindex="-1" aria-labelledby="EditNotebookModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="EditNotebookModalLabel"><em><b>Edit Notebook</b></em></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editNotebook()">
            <div v-if="previewCoverImg">
              <img :src="previewCoverImg" alt="">
              <p>Image Preview</p>
            </div>
            <div class="d-flex gap-2">
              <div class="mb-3">
                <label class="form-label"><em><b>Notebook Title</b></em></label>
                <input v-model="editableNotebookData.title" type="text" class="form-control" id="title" minlength="3"
                  maxlength="25">
              </div>
              <div class="mb-3">
                <label class="form-label"><em><b>Icon</b></em></label>
                <input v-model="editableNotebookData.icon" type="text" class="form-control" id="icon">
              </div>
              <div class="mb-3">
                <label class="form-label"><em><b>Color</b></em></label>
                <input v-model="editableNotebookData.color" type="color" class="form-control h-50" id="color">
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><em><b>Cover Image</b></em></label>
              <input v-model="editableNotebookData.coverImg" type="url" class="form-control" id="coverImg"
                maxlength="500">
            </div>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-outline-success">Save changes</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>