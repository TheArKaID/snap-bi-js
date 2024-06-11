import type { ConfigInterface } from "../interfaces/ConfigInterface";

/**
 * Represents the configuration options for the application.
 */
export class Config implements ConfigInterface {
    /**
     * Creates a new instance of the Config class.
     * @param options - The configuration options.
     */
    constructor({
        baseUrl,
        clientId,
        clientSecret,
        privateKey,
        publicKey,
        withMilliseconds,
        partnerServiceId
    }: {
        baseUrl?: string;
        clientId?: string;
        clientSecret?: string;
        privateKey?: string;
        publicKey?: string;
        withMilliseconds?: boolean;
        partnerServiceId?: string;
    } = {}) {
        /**
         * The base URL for the application.
         */
        this.baseUrl = baseUrl ?? process.env.BASE_URL ?? '';

        /**
         * The client ID for authentication.
         */
        this.clientId = clientId ?? process.env.CLIENT_ID ?? '';

        /**
         * The client secret for authentication.
         */
        this.clientSecret = clientSecret ?? process.env.CLIENT_SECRET ?? '';

        const privKey = privateKey
            ? Buffer.from(privateKey, 'base64').toString('ascii')
            : (process.env.PRIVATE_KEY
                ? Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('ascii')
                : ''
            );

        const pubKey = publicKey
            ? Buffer.from(publicKey, 'base64').toString('ascii')
            : (process.env.PUBLIC_KEY
                ? Buffer.from(process.env.PUBLIC_KEY, 'base64').toString('ascii')
                : ''
            );

        /**
         * The private key for authentication.
         */
        this.privateKey = privKey;

        /**
         * The public key for authentication.
         */
        this.publicKey = pubKey;

        /**
         * Indicates whether to include milliseconds in timestamps.
         */
        this.withMilliseconds = withMilliseconds ?? (process.env.WITH_MILLISECONDS != '');

        /**
         * The partner service ID.
         */
        this.partnerServiceId = partnerServiceId ?? process.env.PARTNER_SERVICE_ID ?? '';
    }

    /**
     * The base URL for the application.
     */
    baseUrl: string;

    /**
     * The client ID for authentication.
     */
    clientId: string;

    /**
     * The client secret for authentication.
     */
    clientSecret: string;

    /**
     * The private key for authentication.
     */
    privateKey: string;

    /**
     * The public key for authentication.
     */
    publicKey: string;

    /**
     * Indicates whether to include milliseconds in timestamps.
     */
    withMilliseconds = false;

    /**
     * The partner service ID.
     */
    partnerServiceId = '';
}