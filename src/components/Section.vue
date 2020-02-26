<template>
    <mv-observer @intersect="intersect">
        <mv-content :item="item"></mv-content>
    </mv-observer>
</template>

<script>

    import Observer from "./Observer";
    import Content from "./Content";

    export default {
        name: 'Section',
        components: {
            'mv-observer' : Observer,
            'mv-content' : Content
        },
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
