export default defineEventHandler(async (event) => {
    const { method, url, headers } = event.node.req;

    const timestamp = new Date().toISOString();

    const contentType = getHeader(event, "content-type");
    const accept = getHeader(event, "accept");

    console.log(`[${timestamp}] ${method} ${url}`);

    console.log("Content-Type:", contentType);
    console.log("Accept:", accept);
});
