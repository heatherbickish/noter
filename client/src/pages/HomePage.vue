<script setup>
import Example from '@/components/Example.vue';


</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="img-container">
          <span class="bear-text text-light text-center p-4">Time to chew bubble gum <br> and take notes,
            and I'm
            <br> all out
            of
            bubble
            gum.</span>
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
  border-radius: 30px;
  border-bottom-right-radius: 0;
  text-shadow: 1px 1px rgb(10, 10, 10);
}

img {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
