<template>
    <div class="mv-observer" ref="observer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['options'],
        data: () => ({
            observer: null,
        }),
        mounted() {
            const options = this.options || {};
            this.observer = new IntersectionObserver(([entry]) => {
                if (entry && entry.isIntersecting) {
                    this.$emit("intersect");
                    console.log('observer')
                }
            }, options);

            this.observer.observe(this.$refs.observer);
        },
        destroyed() {
            //this.observer.disconnect();
        },
    };
</script>
<style>

    .observer {

    }
</style>
