export interface IStockItemStockGroups {
    id?: number;
    stockGroupStockGroupName?: string;
    stockGroupId?: number;
    stockItemStockItemName?: string;
    stockItemId?: number;
}

export class StockItemStockGroups implements IStockItemStockGroups {
    constructor(
        public id?: number,
        public stockGroupStockGroupName?: string,
        public stockGroupId?: number,
        public stockItemStockItemName?: string,
        public stockItemId?: number
    ) {}
}
