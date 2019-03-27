import { Route } from '@angular/router';

import { JhiGatewayComponent } from './gateway.component';

export const gatewayRoute: Route = {
    path: 'gateway',
    component: JhiGatewayComponent,
    data: {
        pageTitle: 'gateway.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Gateway',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
