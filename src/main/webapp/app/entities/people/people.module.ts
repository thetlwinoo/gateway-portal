import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    PeopleComponent,
    PeopleDetailComponent,
    PeopleUpdateComponent,
    PeopleDeletePopupComponent,
    PeopleDeleteDialogComponent,
    peopleRoute,
    peoplePopupRoute
} from './';

const ENTITY_STATES = [...peopleRoute, ...peoplePopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PeopleComponent, PeopleDetailComponent, PeopleUpdateComponent, PeopleDeleteDialogComponent, PeopleDeletePopupComponent],
    entryComponents: [PeopleComponent, PeopleUpdateComponent, PeopleDeleteDialogComponent, PeopleDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalPeopleModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
