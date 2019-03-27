import { Moment } from 'moment';

export interface IStockItems {
    id?: number;
    stockItemName?: string;
    brand?: string;
    size?: string;
    leadTimeDays?: number;
    quantityPerOuter?: number;
    isChillerStock?: boolean;
    barcode?: string;
    taxRate?: number;
    unitPrice?: number;
    recommendedRetailPrice?: number;
    typicalWeightPerUnit?: number;
    marketingComments?: string;
    internalComments?: string;
    photo?: string;
    customFields?: string;
    tags?: string;
    searchDetails?: string;
    validFrom?: Moment;
    validTo?: Moment;
    productId?: number;
    unitPackagePackageTypeName?: string;
    unitPackageId?: number;
    outerPackagePackageTypeName?: string;
    outerPackageId?: number;
    supplierSupplierName?: string;
    supplierId?: number;
    colorColorName?: string;
    colorId?: number;
}

export class StockItems implements IStockItems {
    constructor(
        public id?: number,
        public stockItemName?: string,
        public brand?: string,
        public size?: string,
        public leadTimeDays?: number,
        public quantityPerOuter?: number,
        public isChillerStock?: boolean,
        public barcode?: string,
        public taxRate?: number,
        public unitPrice?: number,
        public recommendedRetailPrice?: number,
        public typicalWeightPerUnit?: number,
        public marketingComments?: string,
        public internalComments?: string,
        public photo?: string,
        public customFields?: string,
        public tags?: string,
        public searchDetails?: string,
        public validFrom?: Moment,
        public validTo?: Moment,
        public productId?: number,
        public unitPackagePackageTypeName?: string,
        public unitPackageId?: number,
        public outerPackagePackageTypeName?: string,
        public outerPackageId?: number,
        public supplierSupplierName?: string,
        public supplierId?: number,
        public colorColorName?: string,
        public colorId?: number
    ) {
        this.isChillerStock = this.isChillerStock || false;
    }
}
