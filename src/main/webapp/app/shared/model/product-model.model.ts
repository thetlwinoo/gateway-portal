export interface IProductModel {
    id?: number;
    productModelName?: string;
    calalogDescription?: string;
    instructions?: string;
}

export class ProductModel implements IProductModel {
    constructor(public id?: number, public productModelName?: string, public calalogDescription?: string, public instructions?: string) {}
}
