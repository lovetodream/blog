export const variables = {
    ghostUrl: import.meta.env.VITE_GHOST_URL ?? process.env['VITE_GHOST_URL'] as string,
    ghostKey: import.meta.env.VITE_GHOST_KEY ?? process.env['VITE_GHOST_KEY'] as string,
    serviceUrl: import.meta.env.VITE_SERVICE_URL ?? process.env['VITE_SERVICE_URL'] as string,
    serviceKey: import.meta.env.VITE_SERVICE_KEY ?? process.env['VITE_SERVICE_KEY'] as string,
    baseUrl: import.meta.env.VITE_BASE_URL ?? process.env['VITE_BASE_URL'] as string,
}