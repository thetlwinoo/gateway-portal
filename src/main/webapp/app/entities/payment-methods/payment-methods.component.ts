import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPaymentMethods } from 'app/shared/model/payment-methods.model';
import { AccountService } from 'app/core';
import { PaymentMethodsService } from './payment-methods.service';

@Component({
    selector: 'jhi-payment-methods',
    templateUrl: './payment-methods.component.html'
})
export class PaymentMethodsComponent implements OnInit, OnDestroy {
    paymentMethods: IPaymentMethods[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected paymentMethodsService: PaymentMethodsService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.paymentMethodsService
            .query()
            .pipe(
                filter((res: HttpResponse<IPaymentMethods[]>) => res.ok),
                map((res: HttpResponse<IPaymentMethods[]>) => res.body)
            )
            .subscribe(
                (res: IPaymentMethods[]) => {
                    this.paymentMethods = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInPaymentMethods();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPaymentMethods) {
        return item.id;
    }

    registerChangeInPaymentMethods() {
        this.eventSubscriber = this.eventManager.subscribe('paymentMethodsListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
