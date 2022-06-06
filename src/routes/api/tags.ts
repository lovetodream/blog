import { api } from '$lib/api';
import type { RequestHandler, ResponseBody } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
    const tags = await api.tags.browse();

    return { status: 200, body: tags as unknown as ResponseBody };
}