<template>
    <div class="observer" ref="observer">
<!--
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
-->
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
