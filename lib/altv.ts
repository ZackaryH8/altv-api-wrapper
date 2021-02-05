import fetch from 'node-fetch';

export default class altAPI {
    private readonly host: string = 'api.altv.mp';
    private readonly port: number = 443;

    /**
     * @ignore
     */
    async sendRequest(uri: string, params: any, method: string) {
        let FullURL = `https://${this.host}:${this.port}${uri}`;
        const options = {
            method,
            headers: {
                Accept: 'application/json',
                'cache-control': 'no-cache',
            },
        };

        const fetchReq = await fetch(FullURL, options);
        return await fetchReq.json();
    }
}
