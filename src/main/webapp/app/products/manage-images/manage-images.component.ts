import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IProducts } from 'app/shared/model/products.model';
import { AccountService } from 'app/core';
import { ManageProductsService } from '../manage-products';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'jhi-manage-images',
    templateUrl: './manage-images.component.html',
    styleUrls: ['manage-images.scss']
})
export class ManageImagesComponent implements OnInit, OnDestroy {
    products: IProducts[];
    currentAccount: any;
    eventSubscriber: Subscription;
    mangeImageTabs: MenuItem[];
    activeManageTab: MenuItem;
    uploadProgress = 0;
    cols: any[];

    brands: any[];

    colors: any[];

    yearFilter: number;

    yearTimeout: any;

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
                    console.log(res);
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });

        this.mangeImageTabs = [
            {
                id: '0',
                label: 'All Images',
                icon: 'fa fa-fw fa-book',
                command: event => {
                    console.log(event);
                }
            },
            {
                id: '1',
                label: 'Missing Images',
                icon: 'fa fa-fw fa-support',
                command: event => {
                    console.log(event);
                }
            }
        ];
        this.activeManageTab = this.mangeImageTabs[0];

        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.cols = [{ field: 'productName', header: 'Products', filterMatchMode: 'contains', width: '30%' }];

        this.registerChangeInProducts();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    // closeManageTab(event, index) {
    //     this.mangeImageTabs = this.mangeImageTabs.filter((item, i) => i !== index);
    //     event.preventDefault();
    // }

    trackId(index: number, item: IProducts) {
        return item.id;
    }

    registerChangeInProducts() {
        this.eventSubscriber = this.eventManager.subscribe('productsListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    public giveImage(event) {
        console.log(event);
    }
}
