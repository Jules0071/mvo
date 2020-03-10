<template>

    <header class="mv-header">

        <div class="mv-header--inner mv-container">

            <div class="mv-logo" :style="backgroundImage"></div>

            <slot name="menu"></slot>


            <slot name="burger"></slot>

        </div>

    </header>

</template>

<script>


    export default {
        data() {
            return {}
        },
        computed: {
            backgroundImage() {
                return `background-image: url('./static/logo-mvo.png')`;
            }
        },
    }


</script>
