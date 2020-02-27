<template>
    <nav>
        <ul>
            <li v-for="item of items" :key="item.name">
                <a href="#">
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
