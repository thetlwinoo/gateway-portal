import { Route } from '@angular/router';

import { JhiTrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
    path: 'jhi-tracker',
    component: JhiTrackerComponent,
    data: {
        pageTitle: 'tracker.title',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Tracker',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
