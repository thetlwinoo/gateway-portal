import { Route } from '@angular/router';

import { JhiDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: JhiDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs',
        breadcrumb: [
            {
                label: 'Admin',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            },
            {
                label: 'Docs',
                command: event => {
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: event.item.label });
                }
            }
        ]
    }
};
