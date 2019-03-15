import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { PortalSharedLibsModule, PortalSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [PortalSharedLibsModule, PortalSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [PortalSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalSharedModule {
    static forRoot() {
        return {
            ngModule: PortalSharedModule
        };
    }
}
