import { Moment } from 'moment';

export interface IPaymentMethods {
    id?: number;
    paymentMethodName?: string;
    validFrom?: Moment;
    validTo?: Moment;
}

export class PaymentMethods implements IPaymentMethods {
    constructor(public id?: number, public paymentMethodName?: string, public validFrom?: Moment, public validTo?: Moment) {}
}
