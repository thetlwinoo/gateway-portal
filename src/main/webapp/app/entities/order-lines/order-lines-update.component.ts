import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IOrderLines } from 'app/shared/model/order-lines.model';
import { OrderLinesService } from './order-lines.service';
import { IOrders } from 'app/shared/model/orders.model';
import { OrdersService } from 'app/entities/orders';
import { IPackageTypes } from 'app/shared/model/package-types.model';
import { PackageTypesService } from 'app/entities/package-types';
import { IStockItems } from 'app/shared/model/stock-items.model';
import { StockItemsService } from 'app/entities/stock-items';

@Component({
    selector: 'jhi-order-lines-update',
    templateUrl: './order-lines-update.component.html'
})
export class OrderLinesUpdateComponent implements OnInit {
    orderLines: IOrderLines;
    isSaving: boolean;

    orders: IOrders[];

    packagetypes: IPackageTypes[];

    stockitems: IStockItems[];
    pickingCompletedWhen: string;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected orderLinesService: OrderLinesService,
        protected ordersService: OrdersService,
        protected packageTypesService: PackageTypesService,
        protected stockItemsService: StockItemsService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ orderLines }) => {
            this.orderLines = orderLines;
            this.pickingCompletedWhen =
                this.orderLines.pickingCompletedWhen != null ? this.orderLines.pickingCompletedWhen.format(DATE_TIME_FORMAT) : null;
        });
        this.ordersService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IOrders[]>) => mayBeOk.ok),
                map((response: HttpResponse<IOrders[]>) => response.body)
            )
            .subscribe((res: IOrders[]) => (this.orders = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.packageTypesService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IPackageTypes[]>) => mayBeOk.ok),
                map((response: HttpResponse<IPackageTypes[]>) => response.body)
            )
            .subscribe((res: IPackageTypes[]) => (this.packagetypes = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.stockItemsService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IStockItems[]>) => mayBeOk.ok),
                map((response: HttpResponse<IStockItems[]>) => response.body)
            )
            .subscribe((res: IStockItems[]) => (this.stockitems = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.orderLines.pickingCompletedWhen =
            this.pickingCompletedWhen != null ? moment(this.pickingCompletedWhen, DATE_TIME_FORMAT) : null;
        if (this.orderLines.id !== undefined) {
            this.subscribeToSaveResponse(this.orderLinesService.update(this.orderLines));
        } else {
            this.subscribeToSaveResponse(this.orderLinesService.create(this.orderLines));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderLines>>) {
        result.subscribe((res: HttpResponse<IOrderLines>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackOrdersById(index: number, item: IOrders) {
        return item.id;
    }

    trackPackageTypesById(index: number, item: IPackageTypes) {
        return item.id;
    }

    trackStockItemsById(index: number, item: IStockItems) {
        return item.id;
    }
}
