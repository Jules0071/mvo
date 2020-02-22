<template>
    <observer @intersect="intersect">
        <section class="mv-section" ref="section">
            <h1 :class="{'active': active}">{{ item.id }} as</h1>
        </section>
    </observer>
</template>

<script>

    import Observer from "./Observer";

    export default {
        name: 'Section',
        components: {Observer},
        props: {
            item: {
                type: Object
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            intersect() {
                this.$emit("intersect", this.item.id);
            }
        },
        mounted() {
            setTimeout(() => {
                this.active = true;
            }, 100);

        }
    }
</script>

<style lang="scss">

    h1 {
        opacity: 0;
        transition: opacity 0.5s ease, transform 1s ease;
        transform: translateX(-300px);

        &.active {
            opacity: 1;
            transform: translateX(0px);
        }
    }

</style>
