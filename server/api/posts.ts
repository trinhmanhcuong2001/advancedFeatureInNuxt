export default defineEventHandler(() => {
    return $fetch("https://jsonplaceholder.typicode.com/posts");
});
