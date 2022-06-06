import { api } from '$lib/api';
import type { RequestHandler, ResponseBody } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
    const tag = await api.tags.read({
        slug: params.slug
    });

    const posts = await api.posts.browse({
        limit: 'all',
        include: ["authors", "tags"],
        filter: [`tags:${tag.slug}`]
    })

    return { status: 200, body: {tag, posts} as unknown as ResponseBody };
}