<script setup>
import Navbar from "@/components/headerComponents/Navbar.vue";
import MouseScroll from "@/components/animationsComponents/MouseScroll.vue";
</script>

<style scoped>
/* mainbanner */

.mainbanner {
  position: relative;
  width: 100%;
  height: 100%;
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
  font-size: 9.2vw;
  line-height: 6.5rem;
  letter-spacing: 0.9rem;
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  background-position: center;
  background-clip: border-box;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase !important;
}

.banner-txt {
  color: #ffffff86;
}

.mouse_scroll_item {
  position: absolute;
  bottom: 0;
}


/* Media query for smaller screens */
@media screen and (max-width: 800px) {
  .mainbanner .bannertitle {
    font-size: 8.2vw;
    /* Adjust the size for smaller screens */
  }
}


/* brands-banner */
.brands-banner {
  margin-top: 9.5rem;
}

.brands-banner .title-text {
  color: #8a8a8e;
}
</style>

<template>
  <Navbar />

  <main>


    <!-- Main-banner -->
    <div class="mainbanner cover-container d-flex w-100 mx-auto flex-column py-5">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5">
        <div class="bannercontent py-5 d-flex flex-column align-items-center mt-2">
          <h1 class="fw-bold bannertitle mt-5 pt-5">FRAGRANCE</h1>
          <p class="banner-txt lead fw-normal mt-lg-5 col-lg-5 px-lg-0 col-md-10 opacity-50 px-md-5" align="center">
            Elevates everyday moments to extraordinary and explore the essence of
            natural beauty.</p>
          <MouseScroll class="mouse_scroll_item" />
        </div>
      </div>
    </div>
    <!-- .../Main-banner -->

    <!-- Brands-banner -->
    <div class="brands-banner py-5">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5  my-4">
        <div class="header" align="center">
          <h5 class="fw-semibold min-title">AS SEEN IN</h5>
          <p class="title-text fs-5 col-lg-6 px-lg-0 col-md-10 opacity-75 mt-2 px-md-5">Meet some of the most prestigious
            brands that got enchanted by our
            unique and special qualities. </p>
        </div>
        <div class="brands-imgs">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <!-- .../Brands-banner -->



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
