<template>
    <div id="app">
        <mv-header>
            <mv-menu :items="sections"></mv-menu>
        </mv-header>
        <mv-section v-for="section in sections" :section="section" :key="section.id" @intersect="intersected"></mv-section>
        <!-- <ul>n
             <li class="list-item" v-for="item in items" :key="item.id">{{item.name}}</li>
         </ul>-->
    </div>
</template>

<script>

    import Section from './components/Section';
    import Observer from './components/Observer';
    import Header from './components/Header';
    import Menu from './components/menu/Menu';

    export default {
        name: 'App',
        components: {
            'mv-section': Section,
            'mv-observer': Observer,
            'mv-header': Header,
            'mv-menu': Menu
        },
        data: () => ({
            page: 1,
            sections: [],
        }),
        methods: {
            async getInitialSections() {
                const sections = await fetch('https://raw.githubusercontent.com/Jules0071/mvo/master/data/sections.json');
                this.sections = await sections.json();
             //   console.log(this.sections)
            },

            async intersected() {
                const res = await fetch(`https://raw.githubusercontent.com/Jules0071/mvo/master/data/content-${
                    this.page
                    }.json`);

                this.page++;
               // console.log('intersected', this.page);
                const content = await res.json();
                console.log(this.page-2)
                this.sections[this.page-2].data.push(content);
                console.log(this.sections)
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
