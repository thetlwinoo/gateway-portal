import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductProductPhoto } from 'app/shared/model/product-product-photo.model';
import { ProductProductPhotoService } from './product-product-photo.service';
import { ProductProductPhotoComponent } from './product-product-photo.component';
import { ProductProductPhotoDetailComponent } from './product-product-photo-detail.component';
import { ProductProductPhotoUpdateComponent } from './product-product-photo-update.component';
import { ProductProductPhotoDeletePopupComponent } from './product-product-photo-delete-dialog.component';
import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';

@Injectable({ providedIn: 'root' })
export class ProductProductPhotoResolve implements Resolve<IProductProductPhoto> {
    constructor(private service: ProductProductPhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductProductPhoto> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<ProductProductPhoto>) => response.ok),
                map((productProductPhoto: HttpResponse<ProductProductPhoto>) => productProductPhoto.body)
            );
        }
        return of(new ProductProductPhoto());
    }
}

export const productProductPhotoRoute: Routes = [
    {
        path: '',
        component: ProductProductPhotoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.productProductPhoto.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ProductProductPhotoDetailComponent,
        resolve: {
            productProductPhoto: ProductProductPhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.productProductPhoto.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: ProductProductPhotoUpdateComponent,
        resolve: {
            productProductPhoto: ProductProductPhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.productProductPhoto.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: ProductProductPhotoUpdateComponent,
        resolve: {
            productProductPhoto: ProductProductPhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.productProductPhoto.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const productProductPhotoPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: ProductProductPhotoDeletePopupComponent,
        resolve: {
            productProductPhoto: ProductProductPhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.productProductPhoto.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
