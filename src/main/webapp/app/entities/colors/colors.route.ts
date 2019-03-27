import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Colors } from 'app/shared/model/colors.model';
import { ColorsService } from './colors.service';
import { ColorsComponent } from './colors.component';
import { ColorsDetailComponent } from './colors-detail.component';
import { ColorsUpdateComponent } from './colors-update.component';
import { ColorsDeletePopupComponent } from './colors-delete-dialog.component';
import { IColors } from 'app/shared/model/colors.model';

@Injectable({ providedIn: 'root' })
export class ColorsResolve implements Resolve<IColors> {
    constructor(private service: ColorsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IColors> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Colors>) => response.ok),
                map((colors: HttpResponse<Colors>) => colors.body)
            );
        }
        return of(new Colors());
    }
}

export const colorsRoute: Routes = [
    {
        path: '',
        component: ColorsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.colors.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ColorsDetailComponent,
        resolve: {
            colors: ColorsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.colors.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: ColorsUpdateComponent,
        resolve: {
            colors: ColorsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.colors.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: ColorsUpdateComponent,
        resolve: {
            colors: ColorsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.colors.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const colorsPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: ColorsDeletePopupComponent,
        resolve: {
            colors: ColorsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.colors.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
