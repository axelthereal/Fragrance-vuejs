<style scoped>
#navbar {
    transition: 0.4s;
    top: 0;
    z-index: 99 !important;
    padding: 30px 15px;
    border: 1px solid transparent;
}

#logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
}

.navbar .nav-item a:not(.active) {
    color: #8c9d9a;
}

.navbar .nav-item a:not(.active):hover {
    color: #ffffff;
}
</style>

<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" aria-label="Third navbar example" id="navbar">
        <div class="container col-lg-10 col-md-11 col-sm-12">
            <a class="navbar-brand" href="/home">
                <span id="logo">Fragrance </span>
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
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Collection</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
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
    data() {
        return {}
    },
    methods: {
        toggleNavbarShrink() {
            let pageOffset = window.scrollY;

            if (pageOffset > 1) {
                document.getElementById("navbar").style.padding = "8px 0px";
                document.getElementById("logo").style.fontSize = "25px";
                document.getElementById("navbar").style.backgroundColor = "#040404";
                document.getElementById("navbar").style.borderBottom = "1px solid #181717";
            } else {
                document.getElementById("navbar").style.padding = "30px 15px";
                document.getElementById("logo").style.fontSize = "35px";
                document.getElementById("navbar").style.backgroundColor = "transparent";
                document.getElementById("navbar").style.borderBottom = "1px solid transparent";
            }
        }
    },
    mounted() {
        // When user scrolls down toggle navbar shrink tmp 
        window.onscroll = () => { this.toggleNavbarShrink(); };

    }
}
</script>