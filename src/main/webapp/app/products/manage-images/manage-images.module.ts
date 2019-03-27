import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { ImageUploaderComponent } from 'app/products/manage-images/image-uploader/image-uploader.component';
import { ImageSelectorComponent } from 'app/products/manage-images/image-selector/image-selector.component';
import { PortalSharedModule } from 'app/shared';
import { ManageImagesComponent, manageImagesRoute } from './';

import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
const ENTITY_STATES = [...manageImagesRoute];

@NgModule({
    imports: [
        PortalSharedModule,
        FileUploadModule,
        CheckboxModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        TabMenuModule,
        TableModule,
        ProgressBarModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [ManageImagesComponent, ImageUploaderComponent, ImageSelectorComponent],
    entryComponents: [ManageImagesComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalImagesModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
