<script lang="ts" setup>
import type { Post } from "~/server/api/posts";
const { data, status, error } = await useAsyncData<Post[]>(
    "posts",
    async () => await $fetch("/api/posts")
);
</script>

<template>
    <h1>List Posts</h1>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-if="error">Error loading posts: {{ error.message }}</div>
    <table v-if="data">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in data" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
            </tr>
        </tbody>
    </table>
</template>
