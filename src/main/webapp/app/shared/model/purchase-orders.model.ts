import { Moment } from 'moment';

export interface IPurchaseOrders {
    id?: number;
    orderDate?: Moment;
    expectedDeliveryDate?: Moment;
    supplierReference?: string;
    isOrderFinalized?: number;
    comments?: string;
    internalComments?: string;
    contactPersonFullName?: string;
    contactPersonId?: number;
    supplierSupplierName?: string;
    supplierId?: number;
    deliveryMethodDeliveryMethodName?: string;
    deliveryMethodId?: number;
}

export class PurchaseOrders implements IPurchaseOrders {
    constructor(
        public id?: number,
        public orderDate?: Moment,
        public expectedDeliveryDate?: Moment,
        public supplierReference?: string,
        public isOrderFinalized?: number,
        public comments?: string,
        public internalComments?: string,
        public contactPersonFullName?: string,
        public contactPersonId?: number,
        public supplierSupplierName?: string,
        public supplierId?: number,
        public deliveryMethodDeliveryMethodName?: string,
        public deliveryMethodId?: number
    ) {}
}
