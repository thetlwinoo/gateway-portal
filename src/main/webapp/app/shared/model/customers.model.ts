import { Moment } from 'moment';

export interface ICustomers {
    id?: number;
    customerName?: string;
    creditLimit?: number;
    accountOpenedDate?: Moment;
    standardDiscountPercentage?: number;
    isStatementSent?: boolean;
    isOnCreditHold?: boolean;
    paymentDays?: number;
    phoneNumber?: string;
    faxNumber?: string;
    deliveryRun?: string;
    runPosition?: string;
    websiteURL?: string;
    deliveryAddressLine1?: string;
    deliveryAddressLine2?: string;
    deliveryPostalCode?: string;
    deliveryLocation?: string;
    postalAddressLine1?: string;
    postalAddressLine2?: string;
    postalPostalCode?: string;
    validFrom?: Moment;
    validTo?: Moment;
    primaryContactPersonFullName?: string;
    primaryContactPersonId?: number;
    alternateContactPersonFullName?: string;
    alternateContactPersonId?: number;
    customerCategoryCustomerCategoryName?: string;
    customerCategoryId?: number;
    buyingGroupBuyingGroupName?: string;
    buyingGroupId?: number;
    billToCustomerCustomerName?: string;
    billToCustomerId?: number;
    deliveryCityCityName?: string;
    deliveryCityId?: number;
    postalCityCityName?: string;
    postalCityId?: number;
    deliveryMethodDeliveryMethodName?: string;
    deliveryMethodId?: number;
}

export class Customers implements ICustomers {
    constructor(
        public id?: number,
        public customerName?: string,
        public creditLimit?: number,
        public accountOpenedDate?: Moment,
        public standardDiscountPercentage?: number,
        public isStatementSent?: boolean,
        public isOnCreditHold?: boolean,
        public paymentDays?: number,
        public phoneNumber?: string,
        public faxNumber?: string,
        public deliveryRun?: string,
        public runPosition?: string,
        public websiteURL?: string,
        public deliveryAddressLine1?: string,
        public deliveryAddressLine2?: string,
        public deliveryPostalCode?: string,
        public deliveryLocation?: string,
        public postalAddressLine1?: string,
        public postalAddressLine2?: string,
        public postalPostalCode?: string,
        public validFrom?: Moment,
        public validTo?: Moment,
        public primaryContactPersonFullName?: string,
        public primaryContactPersonId?: number,
        public alternateContactPersonFullName?: string,
        public alternateContactPersonId?: number,
        public customerCategoryCustomerCategoryName?: string,
        public customerCategoryId?: number,
        public buyingGroupBuyingGroupName?: string,
        public buyingGroupId?: number,
        public billToCustomerCustomerName?: string,
        public billToCustomerId?: number,
        public deliveryCityCityName?: string,
        public deliveryCityId?: number,
        public postalCityCityName?: string,
        public postalCityId?: number,
        public deliveryMethodDeliveryMethodName?: string,
        public deliveryMethodId?: number
    ) {
        this.isStatementSent = this.isStatementSent || false;
        this.isOnCreditHold = this.isOnCreditHold || false;
    }
}
