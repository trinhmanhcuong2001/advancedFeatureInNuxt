<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const { data } = await useFetch("/api/posts", {
    headers: {
        Accept: "application/json",
    },
    transform(payload) {
        return { ...payload, fetchedAt: new Date() };
    },
    getCachedData(key) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];

        if (!data) {
            return;
        }
        const expiration = new Date(data.fetchedAt);
        expiration.setTime(expiration.getTime() + 10000);
        const isExpired = expiration.getTime() < Date.now();

        if (isExpired) {
            return;
        }
        return data;
    },
});
</script>

<template>
    <div class="">
        <h1>List Posts</h1>
        <ul>
            <li v-for="post in data" :key="post.id">
                {{ post.id }} - {{ post.title }}
            </li>
        </ul>
    </div>
</template>
