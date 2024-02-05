<script setup>
</script>

<style scoped></style>

<template>
  <main>
    <h1>Hello Home</h1>
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
