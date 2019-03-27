import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IProductSubCategory } from 'app/shared/model/product-sub-category.model';
import { AccountService } from 'app/core';
import { ProductSubCategoryService } from './product-sub-category.service';

@Component({
    selector: 'jhi-product-sub-category',
    templateUrl: './product-sub-category.component.html'
})
export class ProductSubCategoryComponent implements OnInit, OnDestroy {
    productSubCategories: IProductSubCategory[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected productSubCategoryService: ProductSubCategoryService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.productSubCategoryService
            .query()
            .pipe(
                filter((res: HttpResponse<IProductSubCategory[]>) => res.ok),
                map((res: HttpResponse<IProductSubCategory[]>) => res.body)
            )
            .subscribe(
                (res: IProductSubCategory[]) => {
                    this.productSubCategories = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInProductSubCategories();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IProductSubCategory) {
        return item.id;
    }

    registerChangeInProductSubCategories() {
        this.eventSubscriber = this.eventManager.subscribe('productSubCategoryListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
