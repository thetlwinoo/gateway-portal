import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, NavigationError } from '@angular/router';
import { JhiLanguageHelper } from 'app/core';
import { TreeNode, MenuItem, Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    styleUrls: ['main.scss']
})
export class JhiMainComponent implements OnInit {
    crumbs$: Observable<MenuItem[]>;
    home: MenuItem;
    msgs: Message[] = [];
    breadcrumb: MenuItem[] = [];

    constructor(private jhiLanguageHelper: JhiLanguageHelper, private router: Router, private breadcrumbService: BreadcrumbService) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'portalApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    private getBreadcrumb(routeSnapshot: ActivatedRouteSnapshot): MenuItem[] {
        let _breadcrumb: MenuItem[] = [];
        _breadcrumb = routeSnapshot.data && routeSnapshot.data['breadcrumb'] ? routeSnapshot.data['breadcrumb'] : [];
        if (routeSnapshot.firstChild) {
            // console.log('first child',routeSnapshot.firstChild);
            _breadcrumb = this.getBreadcrumb(routeSnapshot.firstChild) || _breadcrumb;
        }

        this.breadcrumb = _breadcrumb;
        return _breadcrumb;
    }

    ngOnInit() {
        this.crumbs$ = this.breadcrumbService.crumbs$;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
                this.updateBreadcrumb(this.getBreadcrumb(this.router.routerState.snapshot.root));
            }
            if (event instanceof NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });

        this.home = {
            label: 'Home',
            icon: 'pi pi-home',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Home' });
            },
            routerLink: '/'
        };
    }

    updateBreadcrumb(breadcrumbKey?: MenuItem[]) {
        this.breadcrumbService.setCrumbs(breadcrumbKey);
    }
}
