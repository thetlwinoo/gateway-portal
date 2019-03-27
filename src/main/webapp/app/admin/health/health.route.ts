import { Route } from '@angular/router';

import { JhiHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'jhi-health',
    component: JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Health',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
