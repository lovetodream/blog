import { api } from '$lib/api';
import type { RequestHandler, ResponseBody } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
    const post = await api.posts.read({
        slug: params.slug
    }, {
        include: ["authors", "tags"]
    });

    return { status: 200, body: {post} as unknown as ResponseBody };
}