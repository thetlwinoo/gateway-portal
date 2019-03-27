export interface IProductProductPhoto {
    id?: number;
    firstPriority?: boolean;
    secondPriority?: boolean;
    thirdPriority?: boolean;
    fourthPriority?: boolean;
    fixthPriority?: boolean;
    sixthPriority?: boolean;
    productPhotoId?: number;
    productProductName?: string;
    productId?: number;
}

export class ProductProductPhoto implements IProductProductPhoto {
    constructor(
        public id?: number,
        public firstPriority?: boolean,
        public secondPriority?: boolean,
        public thirdPriority?: boolean,
        public fourthPriority?: boolean,
        public fixthPriority?: boolean,
        public sixthPriority?: boolean,
        public productPhotoId?: number,
        public productProductName?: string,
        public productId?: number
    ) {
        this.firstPriority = this.firstPriority || false;
        this.secondPriority = this.secondPriority || false;
        this.thirdPriority = this.thirdPriority || false;
        this.fourthPriority = this.fourthPriority || false;
        this.fixthPriority = this.fixthPriority || false;
        this.sixthPriority = this.sixthPriority || false;
    }
}
