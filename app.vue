<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
    </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/posts", {
    headers: {
        Accept: "application/json",
    },
});
</script>
