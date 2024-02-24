export const fetcher = (uri: RequestInfo | URL, init?: RequestInit | undefined) => fetch(uri, init).then(res => res.json())

