import { Moment } from 'moment';

export interface ISuppliers {
    id?: number;
    supplierName?: string;
    supplierReference?: string;
    bankAccountName?: string;
    bankAccountBranch?: string;
    bankAccountCode?: string;
    bankAccountNumber?: string;
    bankInternationalCode?: string;
    paymentDays?: number;
    internalComments?: string;
    phoneNumber?: string;
    faxNumber?: string;
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
    supplierCategorySupplierCategoryName?: string;
    supplierCategoryId?: number;
    deliveryMethodDeliveryMethodName?: string;
    deliveryMethodId?: number;
    deliveryCityCityName?: string;
    deliveryCityId?: number;
    postalCityCityName?: string;
    postalCityId?: number;
}

export class Suppliers implements ISuppliers {
    constructor(
        public id?: number,
        public supplierName?: string,
        public supplierReference?: string,
        public bankAccountName?: string,
        public bankAccountBranch?: string,
        public bankAccountCode?: string,
        public bankAccountNumber?: string,
        public bankInternationalCode?: string,
        public paymentDays?: number,
        public internalComments?: string,
        public phoneNumber?: string,
        public faxNumber?: string,
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
        public supplierCategorySupplierCategoryName?: string,
        public supplierCategoryId?: number,
        public deliveryMethodDeliveryMethodName?: string,
        public deliveryMethodId?: number,
        public deliveryCityCityName?: string,
        public deliveryCityId?: number,
        public postalCityCityName?: string,
        public postalCityId?: number
    ) {}
}
