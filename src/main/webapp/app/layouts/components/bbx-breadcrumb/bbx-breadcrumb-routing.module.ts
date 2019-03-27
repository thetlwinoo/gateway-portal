import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { BbxBreadcrumbComponent } from './bbx-breadcrumb.component';

const routes: Routes = [
    {
        path: '',
        component: BbxBreadcrumbComponent,
        outlet: 'breadcrumb'
        // canActivate: [UserRouteAccessService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BbxBreadcrumbRoutingModule {}
