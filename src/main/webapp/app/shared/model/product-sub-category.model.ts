export interface IProductSubCategory {
    id?: number;
    productSubCategoryName?: string;
    productCategoryId?: number;
}

export class ProductSubCategory implements IProductSubCategory {
    constructor(public id?: number, public productSubCategoryName?: string, public productCategoryId?: number) {}
}
