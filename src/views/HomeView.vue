<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped>
/* mainbanner */
.mainbanner {
  position: relative;
  background: url("/assets/gallery/bg-forest-cover.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.mainbanner .bannertitle {
  font-size: 6.5rem;
  line-height: 6.5rem;
  letter-spacing: 0.8rem;
}

.mainbanner .cover-banner {
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>

<template>
  <Navbar />

  <main>


    <!-- Main-banner -->
    <div class="mainbanner cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column py-5">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5">
        <div class="bannercontent py-5 d-flex flex-column align-items-center mt-3">
          <h1 class="fw-semibold bannertitle mt-5">FRAGRANCE</h1>
        </div>
      </div>
      <div class="cover-banner"></div>
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
