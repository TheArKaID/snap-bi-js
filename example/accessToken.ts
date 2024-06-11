/**
 * Example of how to get an access token for B2B (and B2B2C)
 */
import { SnapBI } from "../src/core/SnapBI";
import { APISecurity } from "../src/services/requestor/APISecurity"

/**
 * This is a valid Private and Public Key pair for testing purposes.
 */
const config = {
    baseUrl: 'http://localhost:3000',
    clientId: 'c58bab96-9a67-41ba-aeda-61a99e59a26c',
    clientSecret: '0e896ade-591c-4e21-bcd3-cf2d0ebf316a',
    privateKey: 'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRRFl6MjY4eXhQTnRudWEKWUlMekhnZDQxdnA4eDM1Q0R4UUIwYVR0akxvV1NzMEdSbjdKdkswQ2FRRHUya0RJSkZDVC9ldWIydkFHcDhqNApzQVIxdTEwWEtsVnpLZWlPRm9Ua085WXM5eFJhOEs3NmszbkpyOFYva3pTcm1PSEJRTnczVVFFSmx6UGl2YllFCmV2WW85U0FhTWxjaXVYOUx6ZGx0MFBJWC9XaXQwU3RhMS9NMU1YdWs5ZEhadDZUV29MeXFlekpva1VOd0YrSm0KWkdqQzlRL3ZSaGxQQW5qUXJjQTdiczF0K3VsdkZIZHBoOHRIZWlyQUpsSERiOXU1b1J3THdtRFNjYzNIV2JvZgpyeWNBaEdRNWY4RFI1dkp6b3JzWjgwM1BWblVrUmlwWWRvWU82RkE5eDQ5TzJOL3l0dTNjSHFVNlI5aE1TVUVPClFqeUJLdGFGQWdNQkFBRUNnZ0VBTFljUmwrK0ZEeE9jelFRck8yWTQ1M1V0VUhxTDFzOVh3aklGMGlSVkIwMVoKMUZHRldsT1dlUVVYdnhCeHZoVnlIa0daOGpaOVpNaGkrV1hzNmRRWWJqN2poclZzTWpva1dkRCszcDViMWVUbwp1Wkd5WjFuVHZVQnFOUVo3a1p0UEl3YU5remYvRzBQL0x0MnJSMXFDRFQ0NDhmL0Y3V01pbjE3YkY1S05Jc0tBCmlwalJybTgyb3Fhbm1BSEZUNWVTUDNFTi95VjNCbTNnVWpoUVFnZ1MvN3pnTFJwOFVlK3R6dHVvL2pZYm54N3YKOGtqQTFzSHdMQUJMVmRxR3Y4ajIxb0d0ZFhEUnFDZGZUMW1hbEVZNVBNbHJ5QVRKWXlDeFVScjN4MTU0M2xBeQpaYXJ6OUhvSXAvakhmc1ZVVkd2emZ4c2EvcmFnOGNsYUVGM2NWUHo2bVFLQmdRRDhvV2Q3Y3lWdnhva1M2eGVsCmRHUU1ZYjZjTG5ReTRML2Z1YUVTY2I0ZDNPUGdWYTZuRGhCZU1DMG5jN01VWktvVkdVdVhvTHF4cnMwSjNXWnQKZ2ovS3FYNTNFT1lLMTV5ditJN2JkUUo0UGpneWZyU0FyaDFET3l3eGdSZHJ1akdldzQ5aFMzUnVndStLU0ZjYwp3QUFpanQ5RkVrbHFUcXRCSDVEWFBycnZpd0tCZ1FEYnM3akplTDBkODlTS1JyeFNpOW9RWm5BM3ViSVpyVWF5CldaQTF5MnhaNlZBYkdYOFpKWW82VE50WEpSNTI3ZDZwM3ZrMnY1WHZvMEQyTzdoUW1LTHZHZHRlN1hEOXoranoKUWs0aHNWMjdRMHRFQ2dzckRHNDFJVlNMRjdOZWNxZVAwMDVSS0lrdHN6by9jYU9GN1l2NVZ5dDRPd01XSlFLMgpwVjJQNnFZVUx3S0JnUURQNno4eCtSak1uOGZkRENQUUJyVDVBOUZPMVdUSkl2U0grMDAzMHVrM3hyNjl1WWNlCjhwSkNFc0IzQWVCWFhtb2xKMFp4cXRVOHU3TUE5WGtCay90UW5xTDQ5NjE5S3V0SVlQZWlZdkQvYWFYeTJSbFIKOXZzYWhDN2hKMi9STjlMeTZkeXRwTjVVdmVyTUVyR3ZkYzRtb3hQYTB5d2RGRllhS1JLYU5JVEI5UUtCZ0ZndApMb24xNG5rbUJuU2s1U3FBSkxvV1V3MmFndWVaU3RtRDVzUWdhOUUrT2I5V29WTTNaTjMzUU1VZUNiY1R5eDBFCmQ2TklpMlhOY09JaW45d0JGc3U5NWZTWWVaUDBvUHNZN29ESlRlUTlvdlNnejFDc3dZS2phT29XVGhBbkZpYzgKV0o5c0ZIcDZCM08xS1RzMFZzeHc5dXBmVE9MVFlkNXFTajNib0dKVEFvR0JBTEZTSUJYVWIxSDYxTUVBcnBzRgoxbFlBcWIxTnZuS21SejVuaThhN1UxMUlPZTU3M2UwL0Qyd0NqODNyNEpwdnZucmVQZFQxNFR1TkgzamlWSGJaCmFVK1RiMlFPczlKQzlzSkhQNmhzL3FQa1U4L0FPL1FrWXVDSkNOSXRqUGJnYklHTTlNMnBtK2dWcHljeFdMSDIKRGJuVXZST25RWTJKL3h4VFUvRDc2b3U1Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0K',
    publicKey: 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUEyTTl1dk1zVHpiWjdtbUNDOHg0SAplTmI2Zk1kK1FnOFVBZEdrN1l5NkZrck5Ca1oreWJ5dEFta0E3dHBBeUNSUWsvM3JtOXJ3QnFmSStMQUVkYnRkCkZ5cFZjeW5vamhhRTVEdldMUGNVV3ZDdStwTjV5YS9GZjVNMHE1amh3VURjTjFFQkNaY3o0cjIyQkhyMktQVWcKR2pKWElybC9TODNaYmREeUYvMW9yZEVyV3Rmek5URjdwUFhSMmJlazFxQzhxbnN5YUpGRGNCZmlabVJvd3ZVUAo3MFlaVHdKNDBLM0FPMjdOYmZycGJ4UjNhWWZMUjNvcXdDWlJ3Mi9idWFFY0M4SmcwbkhOeDFtNkg2OG5BSVJrCk9YL0EwZWJ5YzZLN0dmTk56MVoxSkVZcVdIYUdEdWhRUGNlUFR0amY4cmJ0M0I2bE9rZllURWxCRGtJOGdTclcKaFFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==',
    partnerServiceId: '123',
    withMilliseconds: false
}

/**
 * Using pre-configured APISecurity service to get the access token for B2B.
 */
const apiSecurity = new APISecurity()
apiSecurity.setConfig(config)

/**
 * Retrieves the access token for B2B authentication.
 * @returns {Promise<any>} A promise that resolves with the access token.
 */
function b2b(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await apiSecurity.withAsymmetricSignature().accessTokenB2B()
            return resolve(await request.json())
        } catch (error) {
            return reject(error)
        }
    });
}

/**
 * B2B2C is not implemented yet, so we need to use the SnapBI service.
 */
const snapBI = new SnapBI(config)

snapBI.registerService({
    'access-token.b2b2c': '/v1.0/access-token/b2b2c'
})

/**
 * Retrieves the access token for the b2b2c service.
 * @returns {Promise<any>} A promise that resolves with the access token.
 */
function b2b2c(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await snapBI.withHeaders({
                'X-CLIENT-KEY': snapBI.config.clientId
            }).http.post({
                url: snapBI.config.baseUrl + snapBI.services['access-token.b2b2c']
            })
            return resolve(await request.json())
        } catch (error) {
            return reject(error)
        }
    });
}

b2b().then(console.log).catch(console.error)
b2b2c().then(console.log).catch(console.error)