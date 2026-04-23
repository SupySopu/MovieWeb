export const apiToken = {
    bearer: import.meta.env.VITE_BEARER_TOKEN as string
}

export const URL = {
    base: import.meta.env.VITE_BASE_URL_API as string,
    local: import.meta.env.VITE_BASE_URL_LOCAL as string
}