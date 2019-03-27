import { Moment } from 'moment';

export interface IOrders {
    id?: number;
    orderDate?: Moment;
    expectedDeliveryDate?: Moment;
    customerPurchaseOrderNumber?: string;
    isUndersupplyBackordered?: boolean;
    comments?: string;
    deliveryInstructions?: string;
    internalComments?: string;
    pickingCompletedWhen?: Moment;
    pickedByPersonFullName?: string;
    pickedByPersonId?: number;
    contactPersonFullName?: string;
    contactPersonId?: number;
    salespersonPersonFullName?: string;
    salespersonPersonId?: number;
    customerCustomerName?: string;
    customerId?: number;
    backorderOrderId?: number;
}

export class Orders implements IOrders {
    constructor(
        public id?: number,
        public orderDate?: Moment,
        public expectedDeliveryDate?: Moment,
        public customerPurchaseOrderNumber?: string,
        public isUndersupplyBackordered?: boolean,
        public comments?: string,
        public deliveryInstructions?: string,
        public internalComments?: string,
        public pickingCompletedWhen?: Moment,
        public pickedByPersonFullName?: string,
        public pickedByPersonId?: number,
        public contactPersonFullName?: string,
        public contactPersonId?: number,
        public salespersonPersonFullName?: string,
        public salespersonPersonId?: number,
        public customerCustomerName?: string,
        public customerId?: number,
        public backorderOrderId?: number
    ) {
        this.isUndersupplyBackordered = this.isUndersupplyBackordered || false;
    }
}
