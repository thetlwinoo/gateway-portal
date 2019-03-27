import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IVehicleTemperatures } from 'app/shared/model/vehicle-temperatures.model';
import { AccountService } from 'app/core';
import { VehicleTemperaturesService } from './vehicle-temperatures.service';

@Component({
    selector: 'jhi-vehicle-temperatures',
    templateUrl: './vehicle-temperatures.component.html'
})
export class VehicleTemperaturesComponent implements OnInit, OnDestroy {
    vehicleTemperatures: IVehicleTemperatures[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected vehicleTemperaturesService: VehicleTemperaturesService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.vehicleTemperaturesService
            .query()
            .pipe(
                filter((res: HttpResponse<IVehicleTemperatures[]>) => res.ok),
                map((res: HttpResponse<IVehicleTemperatures[]>) => res.body)
            )
            .subscribe(
                (res: IVehicleTemperatures[]) => {
                    this.vehicleTemperatures = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInVehicleTemperatures();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IVehicleTemperatures) {
        return item.id;
    }

    registerChangeInVehicleTemperatures() {
        this.eventSubscriber = this.eventManager.subscribe('vehicleTemperaturesListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
