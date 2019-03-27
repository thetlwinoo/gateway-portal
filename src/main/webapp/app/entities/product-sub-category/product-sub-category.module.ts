import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    ProductSubCategoryComponent,
    ProductSubCategoryDetailComponent,
    ProductSubCategoryUpdateComponent,
    ProductSubCategoryDeletePopupComponent,
    ProductSubCategoryDeleteDialogComponent,
    productSubCategoryRoute,
    productSubCategoryPopupRoute
} from './';

const ENTITY_STATES = [...productSubCategoryRoute, ...productSubCategoryPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductSubCategoryComponent,
        ProductSubCategoryDetailComponent,
        ProductSubCategoryUpdateComponent,
        ProductSubCategoryDeleteDialogComponent,
        ProductSubCategoryDeletePopupComponent
    ],
    entryComponents: [
        ProductSubCategoryComponent,
        ProductSubCategoryUpdateComponent,
        ProductSubCategoryDeleteDialogComponent,
        ProductSubCategoryDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalProductSubCategoryModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
