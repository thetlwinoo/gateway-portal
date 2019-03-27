export interface ISystemParameters {
    id?: number;
    deliveryAddressLine1?: string;
    deliveryAddressLine2?: string;
    deliveryPostalCode?: string;
    deliveryLocation?: string;
    postalAddressLine1?: string;
    postalAddressLine2?: string;
    postalPostalCode?: string;
    applicationSettings?: string;
    deliveryCityCityName?: string;
    deliveryCityId?: number;
    postalCityCityName?: string;
    postalCityId?: number;
}

export class SystemParameters implements ISystemParameters {
    constructor(
        public id?: number,
        public deliveryAddressLine1?: string,
        public deliveryAddressLine2?: string,
        public deliveryPostalCode?: string,
        public deliveryLocation?: string,
        public postalAddressLine1?: string,
        public postalAddressLine2?: string,
        public postalPostalCode?: string,
        public applicationSettings?: string,
        public deliveryCityCityName?: string,
        public deliveryCityId?: number,
        public postalCityCityName?: string,
        public postalCityId?: number
    ) {}
}
