export default defineEventHandler((event) => {
    const { method, url, headers } = event.node.req;

    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    console.log(headers);
});
