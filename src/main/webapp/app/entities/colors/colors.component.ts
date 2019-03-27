import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IColors } from 'app/shared/model/colors.model';
import { AccountService } from 'app/core';
import { ColorsService } from './colors.service';

@Component({
    selector: 'jhi-colors',
    templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit, OnDestroy {
    colors: IColors[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected colorsService: ColorsService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.colorsService
            .query()
            .pipe(
                filter((res: HttpResponse<IColors[]>) => res.ok),
                map((res: HttpResponse<IColors[]>) => res.body)
            )
            .subscribe(
                (res: IColors[]) => {
                    this.colors = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInColors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IColors) {
        return item.id;
    }

    registerChangeInColors() {
        this.eventSubscriber = this.eventManager.subscribe('colorsListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
