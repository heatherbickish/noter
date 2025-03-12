<script setup>

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
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.offcanvas {
  opacity: 0.7;
}
</style>