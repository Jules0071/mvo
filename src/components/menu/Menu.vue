<template>
    <nav class="mv-menu">
        <ul>
            <li v-for="item of items" :key="item.name">
                <a :href="item.id">
                    <span>{{ item.name }}</span>
                </a>
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
