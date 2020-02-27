<template>
    <section class="mv-content">
        <h1>{{ name }}</h1>
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
        computed: {
            name() {
                if(this.section.data.length > 0) {
                    return this.section.data[0].name;
                }
            }
        },
        mounted() {
        }
    }
</script>
