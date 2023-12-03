import { validateDateTime } from "./model-validation";

console.log('starting server');

export default {
    port: 80,
    fetch(req: Request) {
        validateDateTime({});
        return new Response(null, { status: 200 });
    },
} satisfies Serve;