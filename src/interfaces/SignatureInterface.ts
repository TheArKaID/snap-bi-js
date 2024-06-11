import type { Config } from "../core/Config";

/**
 * Represents the SignatureInterface.
 */
export interface SignatureInterface {
    config: Config;

    /**
     * Creates an asymmetric signature.
     * @param timestamp - The timestamp for the signature. Optional.
     * @returns A record containing the signature and timestamp.
     */
    createAsymmetricSignature: (timestamp?: string) => Record<string, string>;

    /**
     * Creates a symmetric signature.
     * @param httpMethod - The HTTP method for the signature.
     * @param path - The path for the signature.
     * @param accessToken - The access token for the signature.
     * @param body - The request body for the signature.
     * @param timestamp - The timestamp for the signature.
     * @returns A record containing the signature and timestamp.
     */
    createSymmetricSignature: ({httpMethod, path, accessToken, body, timestamp}: {httpMethod: string, path: string, accessToken: string, body: Record<string, any>, timestamp: string}) => Record<string, string>;

    /**
     * Verifies an asymmetric signature.
     * @param signature - The signature to verify.
     * @param timestamp - The timestamp for the signature.
     * @returns A boolean indicating whether the signature is valid or not.
     */
    verifyAsymmetricSignature: ({signature, timestamp}: {signature: string, timestamp: string}) => boolean;

    /**
     * Verifies a symmetric signature.
     * @param signature - The signature to verify.
     * @param httpMethod - The HTTP method for the signature.
     * @param path - The path for the signature.
     * @param accessToken - The access token for the signature.
     * @param body - The request body for the signature.
     * @param timestamp - The timestamp for the signature.
     * @returns A boolean indicating whether the signature is valid or not.
     */
    verifySymmetricSignature: ({signature,httpMethod,path,accessToken,body,timestamp}: {signature: string,httpMethod: string,path: string,accessToken: string,body: Record<string, any>,timestamp: string}) => boolean;
}