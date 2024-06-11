import { asymmetricSignature, symmetricSignature, verifyAsymmetricSignature, verifySymmetricSignature } from "snap-bi-signer";
import type { SignatureInterface } from "../interfaces/SignatureInterface";
import type { Config } from "../core/Config";

/**
 * Represents a Signature class.
 */
export class Signature implements SignatureInterface {
    /**
     * Creates an instance of the Signature class.
     * @param config - The configuration object.
     */
    constructor({ config }: { config: Config }) {
        this.config = config;
    }

    /**
     * The configuration object.
     */
    config: Config;

    /**
     * Creates an asymmetric signature.
     * @param timestamp - The timestamp string.
     * @returns The asymmetric signature.
     */
    createAsymmetricSignature(timestamp?: string) {
        return asymmetricSignature({
            clientID: this.config.clientId,
            privateKey: this.config.privateKey,
            timestamp,
            withMillisecond: this.config.withMilliseconds
        });
    }

    /**
     * Creates a symmetric signature.
     * @param httpMethod - The HTTP method.
     * @param path - The path string.
     * @param accessToken - The access token string.
     * @param body - The request body object.
     * @param timestamp - The timestamp string.
     * @returns The symmetric signature.
     */
    createSymmetricSignature({
        httpMethod,
        path,
        accessToken,
        body,
        timestamp
    }: {
        httpMethod: string,
        path: string,
        accessToken: string,
        body: Record<string, any>,
        timestamp?: string
    }) {
        return symmetricSignature({
            clientSecret: this.config.clientSecret,
            httpMethod,
            relativeUrl: path,
            accessToken,
            requestBody: body,
            timestamp,
            withMillisecond: this.config.withMilliseconds,
        });
    }

    /**
     * Verifies an asymmetric signature.
     * @param signature - The signature string.
     * @param timestamp - The timestamp string.
     * @returns A boolean indicating whether the signature is valid or not.
     */
    verifyAsymmetricSignature({ signature, timestamp }: { signature: string, timestamp: string }) {
        return verifyAsymmetricSignature({
            clientID: this.config.clientId,
            publicKey: this.config.publicKey,
            signature,
            timestamp
        });
    }

    /**
     * Verifies a symmetric signature.
     * @param signature - The signature string.
     * @param httpMethod - The HTTP method.
     * @param path - The path string.
     * @param accessToken - The access token string.
     * @param body - The request body object.
     * @param timestamp - The timestamp string.
     * @returns A boolean indicating whether the signature is valid or not.
     */
    verifySymmetricSignature({
        signature,
        httpMethod,
        path,
        accessToken,
        body,
        timestamp
    }: {
        signature: string,
        httpMethod: string,
        path: string,
        accessToken: string,
        body: Record<string, any>,
        timestamp: string
    }) {
        return verifySymmetricSignature({
            clientSecret: this.config.clientSecret,
            httpMethod,
            relativeUrl: path,
            accessToken,
            requestBody: body,
            timestamp,
            signature
        });
    }
}