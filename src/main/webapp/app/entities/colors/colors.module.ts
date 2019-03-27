import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    ColorsComponent,
    ColorsDetailComponent,
    ColorsUpdateComponent,
    ColorsDeletePopupComponent,
    ColorsDeleteDialogComponent,
    colorsRoute,
    colorsPopupRoute
} from './';

const ENTITY_STATES = [...colorsRoute, ...colorsPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [ColorsComponent, ColorsDetailComponent, ColorsUpdateComponent, ColorsDeleteDialogComponent, ColorsDeletePopupComponent],
    entryComponents: [ColorsComponent, ColorsUpdateComponent, ColorsDeleteDialogComponent, ColorsDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalColorsModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
