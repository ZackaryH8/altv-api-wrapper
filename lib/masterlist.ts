import altAPI from './altv';
import * as IAltAPI from './interfaces';

export default class MasterList extends altAPI {
    static async getCombinedStats(): Promise<IAltAPI.CombinedStats> {
        return await this.sendRequest('/servers', {}, 'GET');
    }

    static async getServerList(): Promise<IAltAPI.ServerList> {
        return await this.sendRequest('/servers/list', {}, 'GET');
    }

    static async getServerByID(id: string): Promise<IAltAPI.SpecificServer.RootObject> {
        return await this.sendRequest(`/server/${id}`, {}, 'GET');
    }

    static async getServerByHost(host: string): Promise<IAltAPI.SpecificServer.RootObject> {
        const serverList = await this.sendRequest(`/servers/list`, {}, 'GET');
        return serverList.find((server: IAltAPI.ServerList) => server.host === host);
    }

    static async getServerAverageByID(id: string, time: string): Promise<IAltAPI.AvgMax> {
        return await this.sendRequest(`/avg/${id}/${time}`, {}, 'GET');
    }

    static async getServerMaxByID(id: string, time: string): Promise<IAltAPI.AvgMax> {
        return await this.sendRequest(`/max/${id}/${time}`, {}, 'GET');
    }
}
