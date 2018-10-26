import { BaseAdapter } from './BaseAdapter';
export abstract class Model {

    private static adapater: any;

    static findAll() {
        this.adapater.getInstance().findAll();
    }
    static findById(id: number) {
        this.adapater.getInstance().findById(id);
    }
    static find(where: any) {
        this.adapater.getInstance().find(where);
    }
    static create(data: any) {
        this.adapater.getInstance().create(data);
    }
    static update(id: number, data: any) {
        this.adapater.getInstance().update(id, data);
    }
    static delete(id: number) {
        this.adapater.getInstance().delete(id);
    }
}