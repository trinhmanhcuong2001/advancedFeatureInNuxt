<script lang="ts" setup>
const { data } = await useFetch("/api/posts", {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
</script>
<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
    </div>
</template>
