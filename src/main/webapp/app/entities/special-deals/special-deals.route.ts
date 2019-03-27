import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SpecialDeals } from 'app/shared/model/special-deals.model';
import { SpecialDealsService } from './special-deals.service';
import { SpecialDealsComponent } from './special-deals.component';
import { SpecialDealsDetailComponent } from './special-deals-detail.component';
import { SpecialDealsUpdateComponent } from './special-deals-update.component';
import { SpecialDealsDeletePopupComponent } from './special-deals-delete-dialog.component';
import { ISpecialDeals } from 'app/shared/model/special-deals.model';

@Injectable({ providedIn: 'root' })
export class SpecialDealsResolve implements Resolve<ISpecialDeals> {
    constructor(private service: SpecialDealsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISpecialDeals> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<SpecialDeals>) => response.ok),
                map((specialDeals: HttpResponse<SpecialDeals>) => specialDeals.body)
            );
        }
        return of(new SpecialDeals());
    }
}

export const specialDealsRoute: Routes = [
    {
        path: '',
        component: SpecialDealsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.specialDeals.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: SpecialDealsDetailComponent,
        resolve: {
            specialDeals: SpecialDealsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.specialDeals.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: SpecialDealsUpdateComponent,
        resolve: {
            specialDeals: SpecialDealsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.specialDeals.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: SpecialDealsUpdateComponent,
        resolve: {
            specialDeals: SpecialDealsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.specialDeals.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const specialDealsPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: SpecialDealsDeletePopupComponent,
        resolve: {
            specialDeals: SpecialDealsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.specialDeals.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
