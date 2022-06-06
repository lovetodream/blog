export const variables = {
    ghostUrl: () => process.env['VITE_GHOST_URL'] as string,
    ghostKey: () => process.env['VITE_GHOST_KEY'] as string,
    serviceUrl: () => process.env['VITE_SERVICE_URL'] as string,
    serviceKey: () => process.env['VITE_SERVICE_KEY'] as string,
    baseUrl: import.meta.env.VITE_BASE_URL as string,
}