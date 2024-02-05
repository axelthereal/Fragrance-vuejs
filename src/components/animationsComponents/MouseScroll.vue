<style scoped>
.mouse-bx .mouse {
    width: 25px;
    height: 45px;
    border-radius: 50px !important;
    border: 2px solid #ffffff8f;
    display: block;
    cursor: pointer !important;
    transition: 0.4s;
    position: relative;
}

.mouse-bx .mouse:hover {
    border: 2px solid #ffffff;
}

.mouse-bx .mouse:hover .mouse-indicator {
    background-color: #ffffff;
}

.mouse-indicator {
    display: block;
    top: 8px;
    left: 0%;
    right: 0%;
    position: absolute;
    background-color: #ffffff8f;
    width: 4px;
    height: 10px;
    border-radius: 50px !important;
    animation: indicatorSlide 1.8s linear 0.0s infinite normal;
}

@keyframes indicatorSlide {
    0% {
        top: 8px;
    }

    65% {
        top: 23px;
    }

    100% {
        top: 8px;
    }
}
</style>

<template>
    <div class="mouse-bx d-block">
        <span class="mouse" align="center">
            <span class="mouse-indicator mx-auto"></span>
        </span>
    </div>
</template>

