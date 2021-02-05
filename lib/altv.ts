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


    /**
     * @ignore
     */
    objectToQuery(params: any): string {
        const x = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        console.log(x);
        return x;
    }

    /**
     * @ignore
     */
    arrayToCSV(arr: Array<string | number>) {
        return arr.join(',');
    }

    /**
     * @ignore
     */
    convertDate(oldDate: Date | undefined): string {
        return oldDate?.toISOString().split('.')[0] + 'Z';
    }
}
