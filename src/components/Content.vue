<template>
    <section class="mv-content" :class="{'full-height': section.fullHeight}" style="background-image:url('./static/background/intro.jpg')">
        <article class="mv-content--inner mv-container">
            <template v-if="section.data.length">
                <header class="mv-content--header">
                    <h2>{{ section.data[0].name }}</h2>
                </header>
                <p>{{ section.data[0].content.text }}</p>

                <div class="row">
                    <div class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                        <div class="box">Responsive</div>
                    </div>
                </div>

            </template>
        </article>
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
