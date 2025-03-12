<script setup>

</script>


<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-img">
            <img
              src="https://images.unsplash.com/photo-1559906727-76b9259eb4e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="" class="notebook-img">
          </div>
          <div class="card-body bg-dark text-light">
            <div class="d-flex align-items-baseline justify-content-between">
              <p>Created by shellcat</p>
              <h4>Skyrim and her people</h4>
            </div>
            <div class="flex-container">
              <div class="">
                <p>Created 08/23/22</p>
                <p>last updated 08/30/22</p>
              </div>
              <div class="text-end">
                <p>13 Entries</p>
                <button class="btn btn-outline-light px-5 text-light me-2">Edit</button>
                <button class="btn btn-outline-light px-5 text-light me-2">Delete</button>
                <button class="btn btn-primary px-5 text-light"><i
                    class="mdi mdi-plus-box-outline me-1"></i>New</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
</style>