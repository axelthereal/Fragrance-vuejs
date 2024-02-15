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

/* Media query for medium screens */
@media screen and (min-width:994px) and (max-width: 1200px) {
  .page-banner .banner-min-txt {
    width: 90% !important;
    padding-left: 0px !important;
  }
}

@media screen and (max-width:993px) {
  .page-banner .container .row .col-12 {
    width: 100% !important;
  }

  .page-banner .banner-min-txt {
    width: 100% !important;
    padding-left: 0px !important;
  }

  .page-banner .img-col {
    position: relative !important;
  }

  .floating-img-bx {
    float: none;
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    background-color: rgba(0, 0, 0, 0.4);
    width: 80%;
    height: 100%;
    border-radius: 8px;
  }

  .page-banner img.main-img {
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px !important;
    position: unset !important;
    object-fit: contain !important;
    display: flex !important;
    z-index: 1 !important;
  }

  .floating-img-bx img:not(.main-img) {
    width: 100% !important;
    height: auto;
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



/* page-banner */
.page-banner {
  position: relative;
  overflow: hidden;
}

.page-banner .banner-min-txt {
  color: #b2b2b9;
}

.floating-img-bx {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.floating-img-bx img {
  width: 33vw;
  height: auto;
}

.page-banner .cover {
  position: relative;
  display: block;
  border: 1px solid yellow;
}

.page-banner .main-img {
  top: 0;
  right: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: fill;
  display: block;
  border-radius: 8px;
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
    <div class="page-banner w-100">
      <div class="container col-lg-10 col-md-11 col-sm-12 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="img-col col-12 col-sm-11 col-lg-6">
            <div class="col-12 col-sm-11 col-lg-4 p-5 floating-img-bx mx-auto">
              <img src="/assets/gallery/perfum-body-spray-1.png" alt="">
            </div>
            <img src="/assets/gallery/profile_girl.jpg" class="main-img mx-auto w-100 h-auto" alt="">
          </div>

          <div
            class="col-12 col-sm-11 col-lg-6 pe-5 d-flex vh-100 flex-column justify-content-around align-items-start gap-4">
            <h1 class="display-5 fw-semibold lh-1 mb-3 min-title text-uppercase">Responsive left-aligned hero with image
            </h1>
            <p class="lead banner-min-txt fw-normal w-75 pe-2">Quickly design and customize responsive mobile-first sites
              with
              Bootstrap, the
              world’s
              most
              popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 rounded rounded-5">Primary</button>
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
