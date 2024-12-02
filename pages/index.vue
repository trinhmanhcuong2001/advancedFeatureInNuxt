<script lang="ts" setup>
const ListPost = defineAsyncComponent(
    () => import("~/components/ListPost.vue")
);
</script>

<template>
    <div class="">
        <Suspense>
            <component :is="ListPost" />
        </Suspense>
    </div>
</template>

<style lang="scss" scoped></style>
