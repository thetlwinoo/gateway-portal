import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SupplierTransactions } from 'app/shared/model/supplier-transactions.model';
import { SupplierTransactionsService } from './supplier-transactions.service';
import { SupplierTransactionsComponent } from './supplier-transactions.component';
import { SupplierTransactionsDetailComponent } from './supplier-transactions-detail.component';
import { SupplierTransactionsUpdateComponent } from './supplier-transactions-update.component';
import { SupplierTransactionsDeletePopupComponent } from './supplier-transactions-delete-dialog.component';
import { ISupplierTransactions } from 'app/shared/model/supplier-transactions.model';

@Injectable({ providedIn: 'root' })
export class SupplierTransactionsResolve implements Resolve<ISupplierTransactions> {
    constructor(private service: SupplierTransactionsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISupplierTransactions> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<SupplierTransactions>) => response.ok),
                map((supplierTransactions: HttpResponse<SupplierTransactions>) => supplierTransactions.body)
            );
        }
        return of(new SupplierTransactions());
    }
}

export const supplierTransactionsRoute: Routes = [
    {
        path: '',
        component: SupplierTransactionsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.supplierTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: SupplierTransactionsDetailComponent,
        resolve: {
            supplierTransactions: SupplierTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.supplierTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: SupplierTransactionsUpdateComponent,
        resolve: {
            supplierTransactions: SupplierTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.supplierTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: SupplierTransactionsUpdateComponent,
        resolve: {
            supplierTransactions: SupplierTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.supplierTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const supplierTransactionsPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: SupplierTransactionsDeletePopupComponent,
        resolve: {
            supplierTransactions: SupplierTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.supplierTransactions.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
