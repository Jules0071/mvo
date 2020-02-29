<template>
    <nav class="mv-menu">
        <ul class="mv-menu--list">
            <li v-for="item of items" :key="item.name">
                <a :href="item.id">
                    <span>{{ item.name }}</span>
                </a>
                <ul class="mv-menu--dropdown" v-if="item.children">
                    <li v-for="i of item.children" :key="i.name">
                        <a :href="i.id">
                            <span>{{ i.name }}</span>
                        </a>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            items: Array
        }
    }
</script>
