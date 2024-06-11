import { SnapBI } from "../../core/SnapBI";

/**
 * Represents the APISecurity class.
 * This class extends the SnapBI class.
 */
export class APISecurity extends SnapBI<APISecurity> {
    constructor() {
        super();
    }

    /**
     * Retrieves the access token for B2B authentication.
     * @param url - Optional URL to override the default URL.
     * @returns A promise that resolves to the HTTP response.
     */
    async accessTokenB2B(url?: string) {
        const name = 'access-token.b2b';

        this.withHeaders({
            'X-CLIENT-KEY': this.config.clientId
        });

        this.withBody({
            grantType: 'client_credentials'
        });

        return await this.http.post({
            url: this.config.baseUrl + (url ?? this.services[name]),
            headers: this.headers,
            body: this.body
        });
    }
}