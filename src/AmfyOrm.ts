import { BaseAdapter } from './BaseAdapter';
export class AmfyOrm {
    private static instance: AmfyOrm;

    private config: AmfyOrmConfig;

    static getInstance(){
        if(!AmfyOrm.instance){
            throw new Error('Instance not initialized');
        }

        return AmfyOrm.instance;
    }

    constructor(config: AmfyOrmConfig){
        this.config = {...config};
    }
}

export interface AmfyOrmConfig {
    adapter: BaseAdapter;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}