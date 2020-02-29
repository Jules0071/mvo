<template>
    <section class="mv-content">
        <template v-if="section.data.length">
            <h1>{{ section.data[0].name }}</h1>
            <p>{{ section.data[0].content.text }}</p>
        </template>
    </section>
</template>

<script>
    export default {
        props: {
            section: {
                type: Object,
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        }
    }
</script>
