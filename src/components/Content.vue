<template>
    <section class="mv-content">
        <h1 :class="{'active': active}">{{ item.id }} as</h1>
    </section>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
            active: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
