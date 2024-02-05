<style scoped>
#navbar {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    background-color: transparent !important;
    transition: 0.4s;
    top: 0;
    z-index: 99;
}

#logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
}
</style>

<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black" aria-label="Third navbar example" id="navbar">
        <div class="container col-lg-9 col-md-10 col-sm-12">
            <a class="navbar-brand" href="/home">
                <span id="logo">Fragrance</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse gap-1" id="navbarsExample03">
                <ul class="navbar-nav mx-auto mb-2 mb-sm-0 justify-content-center gap-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Collection</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-sm-0 d-flex justify-content-end gap-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="bi bi-search lead fw-normal"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="bi bi-handbag lead fw-normal"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        toggleNavbarShrink() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "30px 10px";
                document.getElementById("logo").style.fontSize = "25px";
            } else {
                document.getElementById("navbar").style.padding = "80px 10px";
                document.getElementById("logo").style.fontSize = "35px";
            }
        }
    },
    beforeMount() {
        // When user scrolls down toggle navbar shrink
        window.onscroll = function () { scrollFunction() };

    }
}
</script>