import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';
import { AccountService } from 'app/core';
import { ProductProductPhotoService } from './product-product-photo.service';

@Component({
    selector: 'jhi-product-product-photo',
    templateUrl: './product-product-photo.component.html'
})
export class ProductProductPhotoComponent implements OnInit, OnDestroy {
    productProductPhotos: IProductProductPhoto[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected productProductPhotoService: ProductProductPhotoService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.productProductPhotoService
            .query()
            .pipe(
                filter((res: HttpResponse<IProductProductPhoto[]>) => res.ok),
                map((res: HttpResponse<IProductProductPhoto[]>) => res.body)
            )
            .subscribe(
                (res: IProductProductPhoto[]) => {
                    this.productProductPhotos = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInProductProductPhotos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IProductProductPhoto) {
        return item.id;
    }

    registerChangeInProductProductPhotos() {
        this.eventSubscriber = this.eventManager.subscribe('productProductPhotoListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
