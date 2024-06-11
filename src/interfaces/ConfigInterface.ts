/**
 * Represents the configuration interface for the application.
 */
export interface ConfigInterface {
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
     * The private key for encryption.
     */
    privateKey: string;

    /**
     * The public key for encryption.
     */
    publicKey: string;

    /**
     * Indicates whether to include milliseconds in timestamps.
     */
    withMilliseconds: boolean;

    /**
     * The partner service ID.
     */
    partnerServiceId: string;
}