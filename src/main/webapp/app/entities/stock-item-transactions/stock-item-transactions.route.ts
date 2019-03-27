import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StockItemTransactions } from 'app/shared/model/stock-item-transactions.model';
import { StockItemTransactionsService } from './stock-item-transactions.service';
import { StockItemTransactionsComponent } from './stock-item-transactions.component';
import { StockItemTransactionsDetailComponent } from './stock-item-transactions-detail.component';
import { StockItemTransactionsUpdateComponent } from './stock-item-transactions-update.component';
import { StockItemTransactionsDeletePopupComponent } from './stock-item-transactions-delete-dialog.component';
import { IStockItemTransactions } from 'app/shared/model/stock-item-transactions.model';

@Injectable({ providedIn: 'root' })
export class StockItemTransactionsResolve implements Resolve<IStockItemTransactions> {
    constructor(private service: StockItemTransactionsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IStockItemTransactions> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<StockItemTransactions>) => response.ok),
                map((stockItemTransactions: HttpResponse<StockItemTransactions>) => stockItemTransactions.body)
            );
        }
        return of(new StockItemTransactions());
    }
}

export const stockItemTransactionsRoute: Routes = [
    {
        path: '',
        component: StockItemTransactionsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: StockItemTransactionsDetailComponent,
        resolve: {
            stockItemTransactions: StockItemTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: StockItemTransactionsUpdateComponent,
        resolve: {
            stockItemTransactions: StockItemTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: StockItemTransactionsUpdateComponent,
        resolve: {
            stockItemTransactions: StockItemTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemTransactions.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const stockItemTransactionsPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: StockItemTransactionsDeletePopupComponent,
        resolve: {
            stockItemTransactions: StockItemTransactionsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemTransactions.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
