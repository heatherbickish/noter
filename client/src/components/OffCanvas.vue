<script setup>
import { AppState } from "@/AppState.js";
import { notesbooksService } from "@/services/NotebooksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted, watch } from "vue";


const account = computed(() => AppState.account)

watch(account, () => {
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
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvas">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvas"><em><b>Manage Notebooks</b></em></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <form>
          <div class="d-flex gap-2">
            <div class="mb-3">
              <label class="form-label"><em><b>Notebook Title</b></em></label>
              <input type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
              <label class="form-label"><em><b>Icon</b></em></label>
              <input type="text" class="form-control" id="icon">
            </div>
            <div class="mb-3">
              <label class="form-label"><em><b>Color</b></em></label>
              <input type="color" class="form-control h-50" id="color">
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label"><em><b>Cover Image</b></em></label>
            <input type="url" class="form-control" id="coverImg">
          </div>
          <div class="text-end">
            <button class="btn btn-danger"><em><b>Create Notebook</b></em></button>
          </div>
        </form>
        <div class="mt-5 d-flex align-items-baseline justify-content-between notebook-line">
          <h5><i class="mdi mdi-apple"></i>CSS Tricks</h5>
          <p><span>4</span> Entries <i class="mdi mdi-apple"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.offcanvas {
  opacity: 0.7;
}

.notebook-line {
  border-bottom: 1.6px solid rgb(116, 112, 112);

}
</style>