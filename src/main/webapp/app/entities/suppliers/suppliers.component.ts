import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISuppliers } from 'app/shared/model/suppliers.model';
import { AccountService } from 'app/core';
import { SuppliersService } from './suppliers.service';

@Component({
    selector: 'jhi-suppliers',
    templateUrl: './suppliers.component.html'
})
export class SuppliersComponent implements OnInit, OnDestroy {
    suppliers: ISuppliers[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected suppliersService: SuppliersService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.suppliersService
            .query()
            .pipe(
                filter((res: HttpResponse<ISuppliers[]>) => res.ok),
                map((res: HttpResponse<ISuppliers[]>) => res.body)
            )
            .subscribe(
                (res: ISuppliers[]) => {
                    this.suppliers = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSuppliers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ISuppliers) {
        return item.id;
    }

    registerChangeInSuppliers() {
        this.eventSubscriber = this.eventManager.subscribe('suppliersListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
