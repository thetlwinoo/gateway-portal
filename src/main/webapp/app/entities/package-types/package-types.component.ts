import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPackageTypes } from 'app/shared/model/package-types.model';
import { AccountService } from 'app/core';
import { PackageTypesService } from './package-types.service';

@Component({
    selector: 'jhi-package-types',
    templateUrl: './package-types.component.html'
})
export class PackageTypesComponent implements OnInit, OnDestroy {
    packageTypes: IPackageTypes[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected packageTypesService: PackageTypesService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.packageTypesService
            .query()
            .pipe(
                filter((res: HttpResponse<IPackageTypes[]>) => res.ok),
                map((res: HttpResponse<IPackageTypes[]>) => res.body)
            )
            .subscribe(
                (res: IPackageTypes[]) => {
                    this.packageTypes = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInPackageTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPackageTypes) {
        return item.id;
    }

    registerChangeInPackageTypes() {
        this.eventSubscriber = this.eventManager.subscribe('packageTypesListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
