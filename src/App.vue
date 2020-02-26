<template>
    <div id="app">
        <mv-header></mv-header>
        <mv-section v-for="section in sections" :item="section" :key="section.id" @intersect="log"></mv-section>
       <!-- <ul>n
            <li class="list-item" v-for="item in items" :key="item.id">{{item.name}}</li>
        </ul>-->
    </div>
</template>

<script>

    import Section from './components/Section';
    import Observer from './components/Observer';
    import Header from './components/Header';

    export default {
        name: 'App',
        components: {
            'mv-section': Section,
            'mv-observer': Observer,
            'mv-header': Header,
        },
        data: () => ({
            page: 1,
            items: [],
            sections: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                },
                {
                    id: 7
                }
            ],
        }),
        methods: {
            async getInitialSections() {
                const sections = await fetch('https://raw.githubusercontent.com/Jules0071/mvo/base-settup/sections.json');
                console.log(sections);
            },

            async intersected() {
                const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${
                    this.page
                    }&_limit=1`);

                this.page++;
                const items = await res.json();
                this.items = [...this.items, ...items];
            },
            log(e) {
                //console.log(e)
            }
        },
        mounted() {
            const myJSON = JSON.stringify(this.sections);
          //  console.log(myJSON);
            this.getInitialSections();
        }
    }
</script>

<style lang="scss">

    @import "scss/app";

</style>
