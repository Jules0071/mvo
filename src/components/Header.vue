<template>

    <header class="mv-header">
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
