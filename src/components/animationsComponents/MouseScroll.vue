<style scoped>
.mouse-bx .mouse {
    width: 33px;
    height: 55px;
    border-radius: 50px !important;
    border: 2px solid #ffffff8f;
    display: block;
    cursor: pointer !important;
    transition: 0.4s;
}

.mouse-bx .mouse:hover {
    border: 2px solid #ffffff;
}
</style>

<template>
    <div class="mouse-bx d-block">
        <span class="mouse">
            <span class="mouse-indicator"></span>
        </span>
    </div>
</template>

