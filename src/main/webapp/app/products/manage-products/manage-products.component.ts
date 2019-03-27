import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IProducts } from 'app/shared/model/products.model';
import { AccountService } from 'app/core';
import { ManageProductsService } from './manage-products.service';

@Component({
    selector: 'jhi-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['manage-products.scss']
})
export class ManageProductsComponent implements OnInit, OnDestroy {
    products: IProducts[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected productsService: ManageProductsService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.productsService
            .query()
            .pipe(
                filter((res: HttpResponse<IProducts[]>) => res.ok),
                map((res: HttpResponse<IProducts[]>) => res.body)
            )
            .subscribe(
                (res: IProducts[]) => {
                    this.products = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInProducts();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IProducts) {
        return item.id;
    }

    registerChangeInProducts() {
        this.eventSubscriber = this.eventManager.subscribe('productsListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
