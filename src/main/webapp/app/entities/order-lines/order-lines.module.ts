import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    OrderLinesComponent,
    OrderLinesDetailComponent,
    OrderLinesUpdateComponent,
    OrderLinesDeletePopupComponent,
    OrderLinesDeleteDialogComponent,
    orderLinesRoute,
    orderLinesPopupRoute
} from './';

const ENTITY_STATES = [...orderLinesRoute, ...orderLinesPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrderLinesComponent,
        OrderLinesDetailComponent,
        OrderLinesUpdateComponent,
        OrderLinesDeleteDialogComponent,
        OrderLinesDeletePopupComponent
    ],
    entryComponents: [OrderLinesComponent, OrderLinesUpdateComponent, OrderLinesDeleteDialogComponent, OrderLinesDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalOrderLinesModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
