import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    TransactionTypesComponent,
    TransactionTypesDetailComponent,
    TransactionTypesUpdateComponent,
    TransactionTypesDeletePopupComponent,
    TransactionTypesDeleteDialogComponent,
    transactionTypesRoute,
    transactionTypesPopupRoute
} from './';

const ENTITY_STATES = [...transactionTypesRoute, ...transactionTypesPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TransactionTypesComponent,
        TransactionTypesDetailComponent,
        TransactionTypesUpdateComponent,
        TransactionTypesDeleteDialogComponent,
        TransactionTypesDeletePopupComponent
    ],
    entryComponents: [
        TransactionTypesComponent,
        TransactionTypesUpdateComponent,
        TransactionTypesDeleteDialogComponent,
        TransactionTypesDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalTransactionTypesModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
