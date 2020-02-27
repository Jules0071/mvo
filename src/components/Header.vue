<template>

    <header class="mv-header">
        <slot></slot>
        <mv-burger></mv-burger>
    </header>

</template>

<script>

    import Burger from './menu/Burger'

    export default {
        components: {
            'mv-burger': Burger
        },
    }

</script>
