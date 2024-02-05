<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped></style>

<template>
  <Navbar />

  <main>
    <div class="container">
      <br><br><br><br> <br>
      <h1>Title...</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, quas rem inventore fugiat ipsum soluta
        dolorem,
        beatae, sunt nemo quod ipsa aperiam! Obcaecati quam amet fuga fugit accusantium cumque autem.</p>

      <div v-for="item in 10">
        <br>
        <h3><b>Title Second</b></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, quas rem inventore fugiat ipsum soluta
          dolorem,
          beatae, sunt nemo quod ipsa aperiam! Obcaecati quam amet fuga fugit accusantium cumque autem.</p>
      </div>
    </div>
  </main>
</template>


<script>
// Homeview.vue
export default {
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title || "Fragrance";
    next()
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title || "Fragrance";
    next()
  }
}
</script>
