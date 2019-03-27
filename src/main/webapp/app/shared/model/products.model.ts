import { Moment } from 'moment';

export interface IProducts {
    id?: number;
    productName?: string;
    makeFlag?: boolean;
    finishedGoodsFlag?: boolean;
    color?: string;
    safetyStockLevel?: number;
    reorderPoint?: number;
    standardCost?: number;
    listPrice?: number;
    size?: string;
    weight?: number;
    daysToManufacture?: number;
    productLine?: string;
    classType?: string;
    style?: string;
    sellStartDate?: Moment;
    sellEndDate?: Moment;
    discontinuedDate?: Moment;
    productSubCategoryId?: number;
    sizeUnitMeasureCodeUnitMeasureCode?: string;
    sizeUnitMeasureCodeId?: number;
    weightUnitMeasureCodeUnitMeasureCode?: string;
    weightUnitMeasureCodeId?: number;
    productModelProductModelName?: string;
    productModelId?: number;
    stockItemId?: number;
}

export class Products implements IProducts {
    constructor(
        public id?: number,
        public productName?: string,
        public makeFlag?: boolean,
        public finishedGoodsFlag?: boolean,
        public color?: string,
        public safetyStockLevel?: number,
        public reorderPoint?: number,
        public standardCost?: number,
        public listPrice?: number,
        public size?: string,
        public weight?: number,
        public daysToManufacture?: number,
        public productLine?: string,
        public classType?: string,
        public style?: string,
        public sellStartDate?: Moment,
        public sellEndDate?: Moment,
        public discontinuedDate?: Moment,
        public productSubCategoryId?: number,
        public sizeUnitMeasureCodeUnitMeasureCode?: string,
        public sizeUnitMeasureCodeId?: number,
        public weightUnitMeasureCodeUnitMeasureCode?: string,
        public weightUnitMeasureCodeId?: number,
        public productModelProductModelName?: string,
        public productModelId?: number,
        public stockItemId?: number
    ) {
        this.makeFlag = this.makeFlag || false;
        this.finishedGoodsFlag = this.finishedGoodsFlag || false;
    }
}
