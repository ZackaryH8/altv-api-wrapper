export interface CombinedStats {
    serversCount: number;
    playersCount: number;
}

export interface ServerList {
    id: string;
    maxPlayers: number;
    players: number;
    name: string;
    locked: boolean;
    host: string;
    port: number;
    gameMode: string;
    website: string;
    language: string;
    description: string;
    verified: boolean;
    promoted: boolean;
    useEarlyAuth: boolean;
    earlyAuthUrl: string;
    useCdn: boolean;
    cdnUrl: string;
    useVoiceChat: boolean;
    tags: string[];
    bannerUrl: string;
    branch: string;
    build: number;
    version: string;
    lastUpdate: any;
}

export declare module SpecificServer {
    export interface Info {
        id: string;
        maxPlayers: number;
        players: number;
        name: string;
        locked: boolean;
        host: string;
        port: number;
        gameMode: string;
        website: string;
        language: string;
        description: string;
        verified: boolean;
        promoted: boolean;
        useEarlyAuth: boolean;
        earlyAuthUrl: string;
        useCdn: boolean;
        cdnUrl: string;
        useVoiceChat: boolean;
        tags: string[];
        bannerUrl?: any;
        branch: string;
        build: number;
        lastUpdate: number;
    }

    export interface RootObject {
        active: boolean;
        info: Info;
    }
}

export interface AvgMax {
    t: number;
    c: number;
}
