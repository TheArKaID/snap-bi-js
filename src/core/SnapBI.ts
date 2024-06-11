import { Config } from "./Config";
import type { SnapBIInterface } from "../interfaces/SnapBIInterface";
import { Http } from "../utils/Http";
import { Signature } from "../utils/Signature";
import type { ConfigInterface } from "../interfaces/ConfigInterface";

/**
 * Represents the SnapBI class.
 * @template T - The type of the SnapBI instance.
 */
export class SnapBI<T extends SnapBI<T>> implements SnapBIInterface {
    /**
     * Creates an instance of SnapBI.
     */
    constructor(config?: ConfigInterface) {
        this.config = new Config(config);
        this.http = new Http();
        this.signature = new Signature({ config: this.config });
        this.services = this.defaultService();
    }

    /**
     * The configuration object.
     */
    config: ConfigInterface;

    /**
     * The HTTP object.
     */
    http: Http;

    /**
     * The signature object.
     */
    signature: Signature;

    /**
     * The services object.
     */
    services: Record<string, string> = {};

    /**
     * The headers object.
     */
    headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': '',
        'X-SIGNATURE': '',
        'X-PARTNER-ID': '',
        'X-EXTERNAL-ID': '',
        'X-TIMESTAMP': '',
        'CHANNEL-ID': '',
        'X-CLIENT-KEY': '',
    };

    /**
     * The body object.
     */
    body: Record<string, any> = {};

    /**
     * Sets the configuration.
     * @param config - The configuration object.
     * @returns The SnapBI instance.
     */
    setConfig(config: ConfigInterface): this {
        this.config = new Config(config);
        this.signature = new Signature({ config: this.config });
        return this;
    }

    /**
     * Sets additional headers.
     * @param headers - The headers object.
     * @returns The SnapBI instance.
     */
    withHeaders(headers: Record<string, string>): this {
        // Append headers to the existing headers
        this.headers = { ...this.headers, ...headers };
        this.http = new Http({ headers: this.headers, body: this.body });
        return this;
    }

    /**
     * Sets the request body.
     * @param body - The body object.
     * @returns The SnapBI instance.
     */
    withBody(body: Record<string, any>): this {
        // Append body to the existing headers
        this.body = { ...this.body, ...body };
        this.http = new Http({ headers: this.headers, body: this.body });
        return this;
    }

    /**
     * Sets the asymmetric signature.
     * @returns The SnapBI instance.
     */
    withAsymmetricSignature(): this {
        const { signature, timestamp } = this.signature.createAsymmetricSignature();

        this.headers['X-SIGNATURE'] = signature;
        this.headers['X-TIMESTAMP'] = timestamp;

        return this;
    }

    /**
     * Sets the symmetric signature.
     * @param httpMethod - The HTTP method.
     * @param relativeUrl - The relative URL.
     * @param accessToken - The access token.
     * @param requestBody - The request body.
     * @param timestamp - The timestamp.
     * @returns The SnapBI instance.
     */
    withSymmetricSignature({
        httpMethod,
        relativeUrl,
        accessToken,
        requestBody,
        timestamp
    }: {
        httpMethod: string,
        relativeUrl: string,
        accessToken?: string,
        requestBody?: object,
        timestamp?: string
    }): this {
        const { signature, timestamp: usedTs } = this.signature.createSymmetricSignature({
            httpMethod,
            path: relativeUrl,
            accessToken: accessToken ?? this.headers['Authorization'], // split first!
            body: requestBody ?? this.body,
            timestamp
        });
        this.headers['X-SIGNATURE'] = signature;
        this.headers['X-TIMESTAMP'] = usedTs;

        return this;
    }

    /**
     * Returns the default service object.
     * @returns The default service object.
     */
    defaultService(): { [key: string]: string } {
        return {
            'emoney.account-inquiry': '/v1.0/emoney/account-inquiry',
            'emoney.topup': '/v1.0/emoney/topup',
            'emoney.topup-status': '/v1.0/emoney/topup-status',
            'access-token.b2b': '/v1.0/access-token/b2b'
        };
    }

    /**
     * Registers a service.
     * @param service - The service object.
     * @returns The SnapBI instance.
     */
    registerService(service: Record<string, string>): this {
        this.services = {
            ...this.services,
            ...service
        };
        return this;
    }
}