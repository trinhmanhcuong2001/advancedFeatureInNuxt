export interface Post {
    id: number;
    title: string;
    body: string;
}

export default defineEventHandler(async() => {
    return await $fetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
});
