import type { Config } from "../Config";

export interface SnapBIInterface {
    config: Config;

    headers: Record<string, string>;
    body: Record<string, any>;

    withHeaders: (headers: Record<string, string>) => SnapBIInterface;
    withBody: (body: Record<string, any>) => SnapBIInterface;

    createAsymmetricSignature: () => Promise<Record<string, string>>;
}