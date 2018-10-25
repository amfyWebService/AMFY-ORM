export interface BaseAdapter {
    findAll();
    findById(id: number);
    find(where: any);
    create(data: any);
    update(id: number, data: any);
    delete(id: number);
}