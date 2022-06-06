import { api } from '$lib/api';
import type { RequestHandler, ResponseBody } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
    const posts = await api.posts.browse({
            limit: 'all',
            include: ["authors", "tags"]
        });

    return { status: 200, body: {posts} as unknown as ResponseBody };
}
