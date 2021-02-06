import altAPI from "./altv";
import * as IAltAPI from './interfaces'

export default class MasterList extends altAPI {
    async getCombinedStats(): Promise<IAltAPI.CombinedStats> {
        return await this.sendRequest('/servers', {}, 'GET');
    }

    async getServerList(): Promise<IAltAPI.ServerList> {
        return await this.sendRequest('/servers/list', {}, 'GET');
    }

    async getServerByID(id: string): Promise<IAltAPI.SpecificServer.RootObject> {
        return await this.sendRequest(`/server/${id}`, {}, 'GET');
    }

    async getServerByHost(host: string): Promise<IAltAPI.SpecificServer.RootObject> {
        const serverList = await this.sendRequest(`/servers/list`, {}, 'GET')
        return serverList.find((server: IAltAPI.ServerList) => server.host === host);
    }

    async getServerAverageByID(id: string, time: string): Promise<IAltAPI.AvgMax> {
        return await this.sendRequest(`/avg/${id}/${time}`, {}, 'GET');
    }

    async getServerMaxByID(id: string, time: string): Promise<IAltAPI.AvgMax> {
        return await this.sendRequest(`/max/${id}/${time}`, {}, 'GET');
    }
}
