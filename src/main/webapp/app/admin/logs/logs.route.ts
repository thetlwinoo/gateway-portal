import { Route } from '@angular/router';

import { LogsComponent } from './logs.component';

export const logsRoute: Route = {
    path: 'logs',
    component: LogsComponent,
    data: {
        pageTitle: 'logs.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Logs',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
