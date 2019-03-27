import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { PortalSharedModule } from 'app/shared';
import {
    CitiesComponent,
    CitiesDetailComponent,
    CitiesUpdateComponent,
    CitiesDeletePopupComponent,
    CitiesDeleteDialogComponent,
    citiesRoute,
    citiesPopupRoute
} from './';

const ENTITY_STATES = [...citiesRoute, ...citiesPopupRoute];

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CitiesComponent, CitiesDetailComponent, CitiesUpdateComponent, CitiesDeleteDialogComponent, CitiesDeletePopupComponent],
    entryComponents: [CitiesComponent, CitiesUpdateComponent, CitiesDeleteDialogComponent, CitiesDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalCitiesModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
