<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue"
</script>

<style scoped>
/* mainbanner */

.mainbanner {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url("/assets/gallery/bg-forest-cover.png");
  background-position-x: 0%, 0%;
  background-position-y: 0%, 0%;
  background-repeat: repeat, repeat;
  background-attachment: scroll, scroll;
  background-size: auto, auto;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

.mainbanner .bannertitle {
  font-size: 6.5rem;
  line-height: 6.5rem;
  letter-spacing: 0.9rem;
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  background-clip: border-box;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase !important;
}
</style>

<template>
  <Navbar />

  <main>


    <!-- Main-banner -->
    <div class="mainbanner cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column py-5">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5">
        <div class="bannercontent py-5 d-flex flex-column align-items-center mt-3">
          <h1 class="fw-bold bannertitle mt-5">FRAGRANCE</h1>
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
