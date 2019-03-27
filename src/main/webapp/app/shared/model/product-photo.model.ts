export interface IProductPhoto {
    id?: number;
    thumbNailPhoto?: string;
    thumbNailPhotoFileName?: string;
    largePhoto?: string;
    largePhotoFileName?: string;
    priority?: number;
    productProductName?: string;
    productId?: number;
}

export class ProductPhoto implements IProductPhoto {
    constructor(
        public id?: number,
        public thumbNailPhoto?: string,
        public thumbNailPhotoFileName?: string,
        public largePhoto?: string,
        public largePhotoFileName?: string,
        public priority?: number,
        public productProductName?: string,
        public productId?: number
    ) {}
}
