<template>

    <article class="mv-offcanvas" :class="{'active': active}">

        <header class="mv-offcanvas--header">
            <slot name="header"></slot>
        </header>

        <div class="mv-offcanvas--content">
            <slot></slot>
        </div>

        <footer class="mv-offcanvas--footer">
            <slot name="footer"></slot>
        </footer>

    </article>

</template>

<script>

    export default {

        props: {
            active: {
                type: Boolean,
                default: false
            }
        }

    }

</script>
