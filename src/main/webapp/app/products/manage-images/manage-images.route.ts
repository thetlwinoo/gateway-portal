import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Products } from 'app/shared/model/products.model';
import { ManageImagesService } from './manage-images.service';
import { ManageImagesComponent } from './manage-images.component';
import { IProducts } from 'app/shared/model/products.model';

@Injectable({ providedIn: 'root' })
export class ImagesResolve implements Resolve<IProducts> {
    constructor(private service: ManageImagesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Products>) => response.ok),
                map((products: HttpResponse<Products>) => products.body)
            );
        }
        return of(new Products());
    }
}

export const manageImagesRoute: Routes = [
    {
        path: '',
        component: ManageImagesComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'portalApp.products.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];
