<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped></style>

<template>
  <Navbar />

  <main>
    <div class="container  col-lg-10 col-md-11 col-sm-12">

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
