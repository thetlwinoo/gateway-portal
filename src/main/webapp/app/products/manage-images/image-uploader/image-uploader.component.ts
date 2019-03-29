import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ProductPhotoService } from 'app/entities/product-photo';
import { filter, map } from 'rxjs/operators';
import { IProductPhoto, ProductPhoto } from 'app/shared/model/product-photo.model';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { AccountService } from 'app/core';
import { forEach } from '@angular/router/src/utils/collection';
const NO_OF_SELECTOR = 8;

@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.scss']
})
export class ImageUploaderComponent implements OnInit, OnDestroy {
    @Input() product;
    @Input() noOfSelector;

    productPhotos: IProductPhoto[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private http: HttpClient,
        protected productPhotoService: ProductPhotoService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    ngOnInit() {
        this.loadProductImages();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInProducts();
    }

    ngOnDestroy() {
        if (this.eventSubscriber) {
            this.eventManager.destroy(this.eventSubscriber);
        }
    }

    get counter() {
        return new Array(this.noOfSelector);
    }

    loadProductImages() {
        if (this.product) {
            this.productPhotoService
                .query({
                    productId: this.product.id
                })
                .pipe(
                    filter((res: HttpResponse<IProductPhoto[]>) => res.ok),
                    map((res: HttpResponse<IProductPhoto[]>) => res.body)
                )
                .subscribe(
                    (res: IProductPhoto[]) => {
                        this.productPhotos = res;
                        console.log('res', res);
                    },
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
        }
    }

    registerChangeInProducts() {
        this.eventSubscriber = this.eventManager.subscribe('productPhotosListModification', response => this.loadProductImages());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    public onCreateCompleted(event) {
        console.log('on create completed', event);
        this.loadProductImages();
    }
}
