<script lang="ts" setup>
const { data } = await useFetch("/api/posts");
</script>

<template>
    <div class="">
        <h1>List Posts From Server API</h1>
        <ul>
            <li v-for="post in data">{{ post.id }} - {{ post.title }}</li>
        </ul>
    </div>
</template>
