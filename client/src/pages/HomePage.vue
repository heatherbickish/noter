<script setup>
import { AppState } from "@/AppState.js"
import { notesbooksService } from "@/services/NotebooksService.js"
import { logger } from "@/utils/Logger.js"
import { computed, watch } from "vue"


const account = computed(() => AppState.account)

watch(account, () => {
  if (AppState.account != null) {
    getAllMyNotebooks()
  }
}, { immediate: true })

async function getAllMyNotebooks() {
  try {
    await notesbooksService.getAllMyNotebooks()
  } catch (error) {
    logger.error(error)
  }
}

</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="img-container">
          <span class="bear-text text-light text-center p-4">
            Time to chew bubble gum
            <br> and take notes, and I'm
            <br> all out of bubblegum.
          </span>
          <img src="/public/img/bear.png" alt="" class="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.img-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 35rem;
}

.bear-text {
  margin-top: 12rem;
  margin-right: 18rem;
  text-align: right;
  border: 2px solid rgb(231, 225, 225);
  border-radius: 35px;
  border-bottom-right-radius: 0;
  text-shadow: 1px 1px rgb(10, 10, 10);
}

img {
  position: absolute;
  bottom: 0;
  right: 0;
}

button {
  border-radius: 13px;
}
</style>
