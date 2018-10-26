export abstract class BaseAdapter {
    abstract findAll(): string;
    abstract findById(id: number);
    abstract find(where: any);
    abstract create(data: any);
    abstract update(id: number, data: any);
    abstract delete(id: number);

    private static _instance: BaseAdapter;

    public static getInstance(): BaseAdapter {
        if(!this._instance) {
            this._instance = new (this as any)();
        }

        return this._instance;
    }
}