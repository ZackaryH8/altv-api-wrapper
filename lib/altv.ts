import axios from 'axios';

export default class altAPI {
    /**
     * @ignore
     */
    static async sendRequest(uri: string, params: any, method: string) {
        const fetch = await axios.get(`https://api.altv.mp${uri}`, { headers: { Accept: 'application/json', 'cache-control': 'no-cache' } });
        return fetch.data;
    }
}
