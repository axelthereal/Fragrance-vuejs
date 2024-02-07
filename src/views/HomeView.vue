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

.brands-banner .brandimages {
  max-width: 100% !important;
  width: 150px;
  height: auto;
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
    <div class="brands-banner py-5 mb-5">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5">
        <div class="header" align="center">
          <h5 class="fw-semibold min-title">AS SEEN IN</h5>
          <p class="title-text fs-5 col-lg-6 px-lg-0 col-md-10 opacity-75 mt-2 px-md-5">Meet some of the most prestigious
            brands that got enchanted by our
            unique and special qualities. </p>
        </div>
        <div class="mt-lg-1 mt-4 brands-imgs w-100 d-flex align-items-center justify-content-center flex-wrap">
          <img src="/assets/gallery/brand-01.png" class="brandimages mx-auto my-1" alt="">
          <img src="/assets/gallery/brand-02.png" class="brandimages mx-auto my-1" alt="">
          <img src="/assets/gallery/brand-03.png" class="brandimages mx-auto my-1" alt="">
          <img src="/assets/gallery/brand-04.png" class="brandimages mx-auto my-1" alt="">
          <img src="/assets/gallery/brand-05.png" class="brandimages mx-auto my-1" alt="">
        </div>
      </div>
    </div>
    <!-- .../Brands-banner -->

    <!-- page-banner -->
    <div class="page-banner">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
              height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
              popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- page-banner -->



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
