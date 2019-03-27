import { Route } from '@angular/router';

import { JhiMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'jhi-metrics',
    component: JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Metrics',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
