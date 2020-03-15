<template>

    <span class="mv-burger" :class="{'active': active}">
        <span></span>
        <span></span>
        <span></span>
    </span>

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
