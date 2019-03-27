import { Route } from '@angular/router';

import { JhiConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'jhi-configuration',
    component: JhiConfigurationComponent,
    data: {
        pageTitle: 'configuration.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Configuration',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
