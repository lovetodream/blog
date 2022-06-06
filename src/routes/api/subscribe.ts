import { variables } from '$lib/variables';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }: RequestEvent) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const redirect = formData.get('redirect');
    
    try {
        const response = await fetch(`${variables.serviceUrl()}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-service-authorization': variables.serviceKey(),
            },
            body: JSON.stringify({
                email,
            }),
        })

        if (!response.ok) {
            const { error } = await response.json();
            if (error) {
                return { status: 301, headers: { Location: `${redirect}?newsletter=failed&reason=${encodeURIComponent(error)}` } };
            }
            throw new Error('Unknown error');
        }
    } catch(error) {
        return { status: 301, headers: { Location: `${redirect}?newsletter=failed&reason=${encodeURIComponent('An unknown error occured, please try again later')}` } };
    }

    return { status: 301, headers: { Location: `${redirect}?newsletter=success` } };
}