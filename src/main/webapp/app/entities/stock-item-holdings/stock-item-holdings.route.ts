import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StockItemHoldings } from 'app/shared/model/stock-item-holdings.model';
import { StockItemHoldingsService } from './stock-item-holdings.service';
import { StockItemHoldingsComponent } from './stock-item-holdings.component';
import { StockItemHoldingsDetailComponent } from './stock-item-holdings-detail.component';
import { StockItemHoldingsUpdateComponent } from './stock-item-holdings-update.component';
import { StockItemHoldingsDeletePopupComponent } from './stock-item-holdings-delete-dialog.component';
import { IStockItemHoldings } from 'app/shared/model/stock-item-holdings.model';

@Injectable({ providedIn: 'root' })
export class StockItemHoldingsResolve implements Resolve<IStockItemHoldings> {
    constructor(private service: StockItemHoldingsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IStockItemHoldings> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<StockItemHoldings>) => response.ok),
                map((stockItemHoldings: HttpResponse<StockItemHoldings>) => stockItemHoldings.body)
            );
        }
        return of(new StockItemHoldings());
    }
}

export const stockItemHoldingsRoute: Routes = [
    {
        path: '',
        component: StockItemHoldingsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemHoldings.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: StockItemHoldingsDetailComponent,
        resolve: {
            stockItemHoldings: StockItemHoldingsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemHoldings.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: StockItemHoldingsUpdateComponent,
        resolve: {
            stockItemHoldings: StockItemHoldingsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemHoldings.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: StockItemHoldingsUpdateComponent,
        resolve: {
            stockItemHoldings: StockItemHoldingsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemHoldings.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const stockItemHoldingsPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: StockItemHoldingsDeletePopupComponent,
        resolve: {
            stockItemHoldings: StockItemHoldingsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.stockItemHoldings.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
