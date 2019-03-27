import { Moment } from 'moment';

export interface IStockItemTransactions {
    id?: number;
    transactionOccurredWhen?: Moment;
    quantity?: number;
    customerCustomerName?: string;
    customerId?: number;
    invoiceId?: number;
    purchaseOrderId?: number;
    stockItemStockItemName?: string;
    stockItemId?: number;
    supplierSupplierName?: string;
    supplierId?: number;
    transactionTypeTransactionTypeName?: string;
    transactionTypeId?: number;
}

export class StockItemTransactions implements IStockItemTransactions {
    constructor(
        public id?: number,
        public transactionOccurredWhen?: Moment,
        public quantity?: number,
        public customerCustomerName?: string,
        public customerId?: number,
        public invoiceId?: number,
        public purchaseOrderId?: number,
        public stockItemStockItemName?: string,
        public stockItemId?: number,
        public supplierSupplierName?: string,
        public supplierId?: number,
        public transactionTypeTransactionTypeName?: string,
        public transactionTypeId?: number
    ) {}
}
