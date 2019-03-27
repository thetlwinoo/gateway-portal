import { Moment } from 'moment';

export interface ICustomerTransactions {
    id?: number;
    transactionDate?: Moment;
    amountExcludingTax?: number;
    taxAmount?: number;
    transactionAmount?: number;
    outstandingBalance?: number;
    finalizationDate?: Moment;
    isFinalized?: boolean;
    customerCustomerName?: string;
    customerId?: number;
    paymentMethodPaymentMethodName?: string;
    paymentMethodId?: number;
    transactionTypeId?: number;
    invoiceId?: number;
}

export class CustomerTransactions implements ICustomerTransactions {
    constructor(
        public id?: number,
        public transactionDate?: Moment,
        public amountExcludingTax?: number,
        public taxAmount?: number,
        public transactionAmount?: number,
        public outstandingBalance?: number,
        public finalizationDate?: Moment,
        public isFinalized?: boolean,
        public customerCustomerName?: string,
        public customerId?: number,
        public paymentMethodPaymentMethodName?: string,
        public paymentMethodId?: number,
        public transactionTypeId?: number,
        public invoiceId?: number
    ) {
        this.isFinalized = this.isFinalized || false;
    }
}
