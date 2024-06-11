export class Http {
    constructor({ headers = {}, body = {} }: { headers?: Record<string, string>, body?: Record<string, any> } = {}) {
        this.headers = headers;
        this.body = body;
    }

    headers: Record<string, string>;
    body: Record<string, any>;

    async post({ url, headers, body }: { url: string; headers?: Record<string, string>; body?: Record<string, any> }) {
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...this.headers,
                ...headers,
            },
            body: JSON.stringify({
                ...this.body,
                ...body,
            }),
        });
    }
}