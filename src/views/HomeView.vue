<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped>
/* mainbanner */
.mainbanner {
  background: url("@/assets/gallery/bg-forest-cover.png");
}
</style>

<template>
  <Navbar />

  <main>


    <!-- Main-banner -->
    <div class="mainbanner">
      <div class="container col-lg-10 col-md-11 col-sm-12">
        <div class="bannercontent">
          <h1 class="display-2 fw-bold bannertitle w-100 d-flex justify-content-center">FRAGRANCE</h1>
        </div>
      </div>
    </div>
    <!-- .../Main-banner -->




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
