import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IOrderLines } from 'app/shared/model/order-lines.model';
import { AccountService } from 'app/core';
import { OrderLinesService } from './order-lines.service';

@Component({
    selector: 'jhi-order-lines',
    templateUrl: './order-lines.component.html'
})
export class OrderLinesComponent implements OnInit, OnDestroy {
    orderLines: IOrderLines[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected orderLinesService: OrderLinesService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.orderLinesService
            .query()
            .pipe(
                filter((res: HttpResponse<IOrderLines[]>) => res.ok),
                map((res: HttpResponse<IOrderLines[]>) => res.body)
            )
            .subscribe(
                (res: IOrderLines[]) => {
                    this.orderLines = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrderLines();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IOrderLines) {
        return item.id;
    }

    registerChangeInOrderLines() {
        this.eventSubscriber = this.eventManager.subscribe('orderLinesListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
