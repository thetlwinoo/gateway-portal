import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    PurchaseOrdersComponent,
    PurchaseOrdersDetailComponent,
    PurchaseOrdersUpdateComponent,
    PurchaseOrdersDeletePopupComponent,
    PurchaseOrdersDeleteDialogComponent,
    purchaseOrdersRoute,
    purchaseOrdersPopupRoute
} from './';

const ENTITY_STATES = [...purchaseOrdersRoute, ...purchaseOrdersPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PurchaseOrdersComponent,
        PurchaseOrdersDetailComponent,
        PurchaseOrdersUpdateComponent,
        PurchaseOrdersDeleteDialogComponent,
        PurchaseOrdersDeletePopupComponent
    ],
    entryComponents: [
        PurchaseOrdersComponent,
        PurchaseOrdersUpdateComponent,
        PurchaseOrdersDeleteDialogComponent,
        PurchaseOrdersDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalPurchaseOrdersModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
