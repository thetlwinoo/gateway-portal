import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BbxBreadcrumbModule } from './bbx-breadcrumb/bbx-breadcrumb.module';

@NgModule({
    imports: [BbxBreadcrumbModule],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
