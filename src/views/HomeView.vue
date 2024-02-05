<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped></style>

<template>
  <Navbar />

  <main>


   


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
