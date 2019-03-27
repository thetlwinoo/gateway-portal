import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { ICustomers } from 'app/shared/model/customers.model';
import { CustomersService } from './customers.service';
import { IPeople } from 'app/shared/model/people.model';
import { PeopleService } from 'app/entities/people';
import { ICustomerCategories } from 'app/shared/model/customer-categories.model';
import { CustomerCategoriesService } from 'app/entities/customer-categories';
import { IBuyingGroups } from 'app/shared/model/buying-groups.model';
import { BuyingGroupsService } from 'app/entities/buying-groups';
import { ICities } from 'app/shared/model/cities.model';
import { CitiesService } from 'app/entities/cities';
import { IDeliveryMethods } from 'app/shared/model/delivery-methods.model';
import { DeliveryMethodsService } from 'app/entities/delivery-methods';

@Component({
    selector: 'jhi-customers-update',
    templateUrl: './customers-update.component.html'
})
export class CustomersUpdateComponent implements OnInit {
    customers: ICustomers;
    isSaving: boolean;

    people: IPeople[];

    customercategories: ICustomerCategories[];

    buyinggroups: IBuyingGroups[];

    customersCollection: ICustomers[];

    cities: ICities[];

    deliverymethods: IDeliveryMethods[];
    accountOpenedDateDp: any;
    validFromDp: any;
    validToDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected customersService: CustomersService,
        protected peopleService: PeopleService,
        protected customerCategoriesService: CustomerCategoriesService,
        protected buyingGroupsService: BuyingGroupsService,
        protected citiesService: CitiesService,
        protected deliveryMethodsService: DeliveryMethodsService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ customers }) => {
            this.customers = customers;
        });
        this.peopleService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IPeople[]>) => mayBeOk.ok),
                map((response: HttpResponse<IPeople[]>) => response.body)
            )
            .subscribe((res: IPeople[]) => (this.people = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.customerCategoriesService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICustomerCategories[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICustomerCategories[]>) => response.body)
            )
            .subscribe(
                (res: ICustomerCategories[]) => (this.customercategories = res),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.buyingGroupsService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IBuyingGroups[]>) => mayBeOk.ok),
                map((response: HttpResponse<IBuyingGroups[]>) => response.body)
            )
            .subscribe((res: IBuyingGroups[]) => (this.buyinggroups = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.customersService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICustomers[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICustomers[]>) => response.body)
            )
            .subscribe((res: ICustomers[]) => (this.customersCollection = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.citiesService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICities[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICities[]>) => response.body)
            )
            .subscribe((res: ICities[]) => (this.cities = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.deliveryMethodsService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IDeliveryMethods[]>) => mayBeOk.ok),
                map((response: HttpResponse<IDeliveryMethods[]>) => response.body)
            )
            .subscribe((res: IDeliveryMethods[]) => (this.deliverymethods = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.customers.id !== undefined) {
            this.subscribeToSaveResponse(this.customersService.update(this.customers));
        } else {
            this.subscribeToSaveResponse(this.customersService.create(this.customers));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICustomers>>) {
        result.subscribe((res: HttpResponse<ICustomers>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackPeopleById(index: number, item: IPeople) {
        return item.id;
    }

    trackCustomerCategoriesById(index: number, item: ICustomerCategories) {
        return item.id;
    }

    trackBuyingGroupsById(index: number, item: IBuyingGroups) {
        return item.id;
    }

    trackCustomersById(index: number, item: ICustomers) {
        return item.id;
    }

    trackCitiesById(index: number, item: ICities) {
        return item.id;
    }

    trackDeliveryMethodsById(index: number, item: IDeliveryMethods) {
        return item.id;
    }
}
