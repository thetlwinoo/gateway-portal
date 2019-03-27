import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IStockItems } from 'app/shared/model/stock-items.model';
import { StockItemsService } from './stock-items.service';
import { IProducts } from 'app/shared/model/products.model';
import { ProductsService } from 'app/entities/products';
import { IPackageTypes } from 'app/shared/model/package-types.model';
import { PackageTypesService } from 'app/entities/package-types';
import { ISuppliers } from 'app/shared/model/suppliers.model';
import { SuppliersService } from 'app/entities/suppliers';
import { IColors } from 'app/shared/model/colors.model';
import { ColorsService } from 'app/entities/colors';

@Component({
    selector: 'jhi-stock-items-update',
    templateUrl: './stock-items-update.component.html'
})
export class StockItemsUpdateComponent implements OnInit {
    stockItems: IStockItems;
    isSaving: boolean;

    products: IProducts[];

    packagetypes: IPackageTypes[];

    suppliers: ISuppliers[];

    colors: IColors[];
    validFromDp: any;
    validToDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected stockItemsService: StockItemsService,
        protected productsService: ProductsService,
        protected packageTypesService: PackageTypesService,
        protected suppliersService: SuppliersService,
        protected colorsService: ColorsService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ stockItems }) => {
            this.stockItems = stockItems;
        });
        this.productsService
            .query({ filter: 'stockitem-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IProducts[]>) => mayBeOk.ok),
                map((response: HttpResponse<IProducts[]>) => response.body)
            )
            .subscribe(
                (res: IProducts[]) => {
                    if (!this.stockItems.productId) {
                        this.products = res;
                    } else {
                        this.productsService
                            .find(this.stockItems.productId)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IProducts>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IProducts>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IProducts) => (this.products = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.packageTypesService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IPackageTypes[]>) => mayBeOk.ok),
                map((response: HttpResponse<IPackageTypes[]>) => response.body)
            )
            .subscribe((res: IPackageTypes[]) => (this.packagetypes = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.suppliersService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ISuppliers[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISuppliers[]>) => response.body)
            )
            .subscribe((res: ISuppliers[]) => (this.suppliers = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.colorsService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IColors[]>) => mayBeOk.ok),
                map((response: HttpResponse<IColors[]>) => response.body)
            )
            .subscribe((res: IColors[]) => (this.colors = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.stockItems.id !== undefined) {
            this.subscribeToSaveResponse(this.stockItemsService.update(this.stockItems));
        } else {
            this.subscribeToSaveResponse(this.stockItemsService.create(this.stockItems));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IStockItems>>) {
        result.subscribe((res: HttpResponse<IStockItems>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackProductsById(index: number, item: IProducts) {
        return item.id;
    }

    trackPackageTypesById(index: number, item: IPackageTypes) {
        return item.id;
    }

    trackSuppliersById(index: number, item: ISuppliers) {
        return item.id;
    }

    trackColorsById(index: number, item: IColors) {
        return item.id;
    }
}
