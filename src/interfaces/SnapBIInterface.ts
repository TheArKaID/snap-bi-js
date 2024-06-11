import type { Config } from "../core/Config";

/**
 * Represents the SnapBIInterface.
 */
export interface SnapBIInterface {
    config: Config;

    headers: Record<string, string>;
    body: Record<string, any>;

    /**
     * Sets the headers for the SnapBIInterface.
     * @param headers - The headers to be set.
     * @returns The updated SnapBIInterface.
     */
    withHeaders: (headers: Record<string, string>) => SnapBIInterface;

    /**
     * Sets the body for the SnapBIInterface.
     * @param body - The body to be set.
     * @returns The updated SnapBIInterface.
     */
    withBody: (body: Record<string, any>) => SnapBIInterface;
}