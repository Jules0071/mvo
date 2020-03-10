<template>
    <div id="app">
        <mv-offcanvas :active="menu">
            <mv-burger slot="header" @click.native="closeMenu"></mv-burger>
        </mv-offcanvas>
        <mv-header>
            <mv-menu slot="menu" :items="sections"></mv-menu>
            <mv-burger slot="burger" @click.native="openMenu"></mv-burger>
        </mv-header>
        <mv-section v-for="section in sections[0].children" :section="section" :key="section.id" @intersect="intersected"></mv-section>
    </div>
</template>

<script>

    import Section from './components/Section';
    import Observer from './components/Observer';
    import Header from './components/Header';
    import Offcanvas from './components/menu/Offcanvas';
    import Menu from './components/menu/Menu';
    import Burger from './components/menu/Burger'

    export default {
        name: 'App',
        components: {
            'mv-section': Section,
            'mv-observer': Observer,
            'mv-header': Header,
            'mv-menu': Menu,
            'mv-burger': Burger,
            'mv-offcanvas': Offcanvas,
        },
        data: () => ({
            page: 1,
            sections: [],
            menu: false
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
                console.log(this.page-2);
                this.sections[0].children[this.page-2].data.push(content);
                //console.log(this.sections[0].children[this.page-2])
            },
            log(e) {
                //console.log(e)
            },
            openMenu() {
                this.menu = true;
            },
            closeMenu() {
                this.menu = false;
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
