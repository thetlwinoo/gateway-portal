import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    ProductModelComponent,
    ProductModelDetailComponent,
    ProductModelUpdateComponent,
    ProductModelDeletePopupComponent,
    ProductModelDeleteDialogComponent,
    productModelRoute,
    productModelPopupRoute
} from './';

const ENTITY_STATES = [...productModelRoute, ...productModelPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductModelComponent,
        ProductModelDetailComponent,
        ProductModelUpdateComponent,
        ProductModelDeleteDialogComponent,
        ProductModelDeletePopupComponent
    ],
    entryComponents: [
        ProductModelComponent,
        ProductModelUpdateComponent,
        ProductModelDeleteDialogComponent,
        ProductModelDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalProductModelModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
