import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';
import { ProductProductPhotoService } from './product-product-photo.service';
import { IProductPhoto } from 'app/shared/model/product-photo.model';
import { ProductPhotoService } from 'app/entities/product-photo';
import { IProducts } from 'app/shared/model/products.model';
import { ProductsService } from 'app/entities/products';

@Component({
    selector: 'jhi-product-product-photo-update',
    templateUrl: './product-product-photo-update.component.html'
})
export class ProductProductPhotoUpdateComponent implements OnInit {
    productProductPhoto: IProductProductPhoto;
    isSaving: boolean;

    productphotos: IProductPhoto[];

    products: IProducts[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected productProductPhotoService: ProductProductPhotoService,
        protected productPhotoService: ProductPhotoService,
        protected productsService: ProductsService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ productProductPhoto }) => {
            this.productProductPhoto = productProductPhoto;
        });
        this.productPhotoService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IProductPhoto[]>) => mayBeOk.ok),
                map((response: HttpResponse<IProductPhoto[]>) => response.body)
            )
            .subscribe((res: IProductPhoto[]) => (this.productphotos = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.productsService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IProducts[]>) => mayBeOk.ok),
                map((response: HttpResponse<IProducts[]>) => response.body)
            )
            .subscribe((res: IProducts[]) => (this.products = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.productProductPhoto.id !== undefined) {
            this.subscribeToSaveResponse(this.productProductPhotoService.update(this.productProductPhoto));
        } else {
            this.subscribeToSaveResponse(this.productProductPhotoService.create(this.productProductPhoto));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IProductProductPhoto>>) {
        result.subscribe((res: HttpResponse<IProductProductPhoto>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackProductPhotoById(index: number, item: IProductPhoto) {
        return item.id;
    }

    trackProductsById(index: number, item: IProducts) {
        return item.id;
    }
}
