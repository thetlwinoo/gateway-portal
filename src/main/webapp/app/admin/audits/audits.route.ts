import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AuditsComponent } from './audits.component';

export const auditsRoute: Route = {
    path: 'audits',
    component: AuditsComponent,
    resolve: {
        pagingParams: JhiResolvePagingParams
    },
    data: {
        pageTitle: 'audits.title',
        defaultSort: 'auditEventDate,desc',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Audits',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
