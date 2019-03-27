import { Moment } from 'moment';

export interface ISpecialDeals {
    id?: number;
    dealDescription?: string;
    startDate?: Moment;
    endDate?: Moment;
    discountAmount?: number;
    discountPercentage?: number;
    unitPrice?: number;
    buyingGroupBuyingGroupName?: string;
    buyingGroupId?: number;
    customerCategoryCustomerCategoryName?: string;
    customerCategoryId?: number;
    customerCustomerName?: string;
    customerId?: number;
    stockGroupStockGroupName?: string;
    stockGroupId?: number;
    stockItemStockItemName?: string;
    stockItemId?: number;
}

export class SpecialDeals implements ISpecialDeals {
    constructor(
        public id?: number,
        public dealDescription?: string,
        public startDate?: Moment,
        public endDate?: Moment,
        public discountAmount?: number,
        public discountPercentage?: number,
        public unitPrice?: number,
        public buyingGroupBuyingGroupName?: string,
        public buyingGroupId?: number,
        public customerCategoryCustomerCategoryName?: string,
        public customerCategoryId?: number,
        public customerCustomerName?: string,
        public customerId?: number,
        public stockGroupStockGroupName?: string,
        public stockGroupId?: number,
        public stockItemStockItemName?: string,
        public stockItemId?: number
    ) {}
}
