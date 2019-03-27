import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';

@Component({
    selector: 'jhi-product-product-photo-detail',
    templateUrl: './product-product-photo-detail.component.html'
})
export class ProductProductPhotoDetailComponent implements OnInit {
    productProductPhoto: IProductProductPhoto;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ productProductPhoto }) => {
            this.productProductPhoto = productProductPhoto;
        });
    }

    previousState() {
        window.history.back();
    }
}
