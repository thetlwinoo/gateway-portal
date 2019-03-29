import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { PortalSharedModule } from 'app/shared';
import { PortalCoreModule } from 'app/core';
import { PortalAppRoutingModule } from './app-routing.module';
import { PortalHomeModule } from './home/home.module';
import { PortalEntityModule } from './entities/entity.module';
import { PortalProductModule } from './products/products.module';
import * as moment from 'moment';
import { PortalprimengModule } from './primeng/primeng.module';
// import { ComponentsModule } from './layouts/components/components.module';
import { BreadcrumbModule } from 'primeng/components/breadcrumb/breadcrumb';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    BreadcrumbService
} from './layouts';
@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000,
            i18nEnabled: true,
            defaultI18nLang: 'en'
        }),
        PortalSharedModule.forRoot(),
        PortalCoreModule,
        PortalHomeModule,
        PortalprimengModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        PortalEntityModule,
        PortalProductModule,
        PortalAppRoutingModule,
        // ComponentsModule
        BreadcrumbModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        BreadcrumbService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class PortalAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
