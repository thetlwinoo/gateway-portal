import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    ProductProductPhotoComponent,
    ProductProductPhotoDetailComponent,
    ProductProductPhotoUpdateComponent,
    ProductProductPhotoDeletePopupComponent,
    ProductProductPhotoDeleteDialogComponent,
    productProductPhotoRoute,
    productProductPhotoPopupRoute
} from './';

const ENTITY_STATES = [...productProductPhotoRoute, ...productProductPhotoPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductProductPhotoComponent,
        ProductProductPhotoDetailComponent,
        ProductProductPhotoUpdateComponent,
        ProductProductPhotoDeleteDialogComponent,
        ProductProductPhotoDeletePopupComponent
    ],
    entryComponents: [
        ProductProductPhotoComponent,
        ProductProductPhotoUpdateComponent,
        ProductProductPhotoDeleteDialogComponent,
        ProductProductPhotoDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalProductProductPhotoModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
