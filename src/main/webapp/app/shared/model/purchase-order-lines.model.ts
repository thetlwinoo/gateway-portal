import { Moment } from 'moment';

export interface IPurchaseOrderLines {
    id?: number;
    orderedOuters?: number;
    description?: string;
    receivedOuters?: number;
    expectedUnitPricePerOuter?: number;
    lastReceiptDate?: Moment;
    isOrderLineFinalized?: boolean;
    stockItemStockItemName?: string;
    stockItemId?: number;
    packageTypePackageTypeName?: string;
    packageTypeId?: number;
    purchaseOrderId?: number;
}

export class PurchaseOrderLines implements IPurchaseOrderLines {
    constructor(
        public id?: number,
        public orderedOuters?: number,
        public description?: string,
        public receivedOuters?: number,
        public expectedUnitPricePerOuter?: number,
        public lastReceiptDate?: Moment,
        public isOrderLineFinalized?: boolean,
        public stockItemStockItemName?: string,
        public stockItemId?: number,
        public packageTypePackageTypeName?: string,
        public packageTypeId?: number,
        public purchaseOrderId?: number
    ) {
        this.isOrderLineFinalized = this.isOrderLineFinalized || false;
    }
}
