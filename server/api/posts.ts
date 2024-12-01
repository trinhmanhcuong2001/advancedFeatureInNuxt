export default defineEventHandler(async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
});
