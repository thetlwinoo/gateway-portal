import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/components/breadcrumb/breadcrumb';
import { BbxBreadcrumbRoutingModule } from './bbx-breadcrumb-routing.module';
import { BbxBreadcrumbComponent } from './bbx-breadcrumb.component';
// import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BbxBreadcrumbComponent],
    imports: [CommonModule, BbxBreadcrumbRoutingModule, BreadcrumbModule]
})
export class BbxBreadcrumbModule {}
