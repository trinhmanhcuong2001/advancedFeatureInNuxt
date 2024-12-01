export default defineEventHandler((event) => {
    return $fetch("https://jsonplaceholder.typicode.com/posts");
});
