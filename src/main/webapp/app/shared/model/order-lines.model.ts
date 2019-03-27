import { Moment } from 'moment';

export interface IOrderLines {
    id?: number;
    description?: string;
    quantity?: number;
    unitPrice?: number;
    taxRate?: number;
    pickedQuantity?: number;
    pickingCompletedWhen?: Moment;
    orderId?: number;
    packageTypeId?: number;
    stockItemStockItemName?: string;
    stockItemId?: number;
}

export class OrderLines implements IOrderLines {
    constructor(
        public id?: number,
        public description?: string,
        public quantity?: number,
        public unitPrice?: number,
        public taxRate?: number,
        public pickedQuantity?: number,
        public pickingCompletedWhen?: Moment,
        public orderId?: number,
        public packageTypeId?: number,
        public stockItemStockItemName?: string,
        public stockItemId?: number
    ) {}
}
