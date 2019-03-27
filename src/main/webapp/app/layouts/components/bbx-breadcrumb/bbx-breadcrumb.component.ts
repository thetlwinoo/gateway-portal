import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { AccountService } from 'app/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import 'rxjs/add/operator/filter';

interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
}

@Component({
    selector: 'jhi-bbx-breadcrumb',
    templateUrl: './bbx-breadcrumb.component.html',
    styles: []
})
export class BbxBreadcrumbComponent implements OnInit {
    public breadcrumbs: IBreadcrumb[];
    home: MenuItem;
    activeIndex = 0;
    msgs: Message[] = [];
    private items: MenuItem[];

    constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                let root: ActivatedRoute = this.activatedRoute.root;
                this.breadcrumbs = this.getBreadcrumbs(root);
            });

        this.items = [];
        this.items.push({
            label: 'Categories',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: event.item.label });
            }
        });
        this.items.push({
            label: 'Best Buy',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: event.item.label });
            }
        });
        this.items.push({
            label: 'TV & Video',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: event.item.label });
            }
        });
        this.items.push({
            label: 'TVs',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: event.item.label });
            }
        });
        this.items.push({
            label: 'Flat Panel TVs',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: event.item.label });
            }
        });
        this.items.push({ label: 'LED Flat-Panel', url: 'https://en.wikipedia.org/wiki/LED_display' });

        this.home = {
            label: 'Home',
            icon: 'pi pi-home',
            command: event => {
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Home' });
            }
        };
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
        const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

        //get the child routes
        let children: ActivatedRoute[] = route.children;
        console.log('ccdefrd', children);
        //return if there are no more children
        if (children.length === 0) {
            console.log('children', children);
            return breadcrumbs;
        }

        //iterate over each children
        for (let child of children) {
            //verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            //get the route's URL segment
            let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

            //append route URL to URL
            url += `/${routeURL}`;

            //add breadcrumb
            let breadcrumb: IBreadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);

            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }

        console.log('breadcrumbs data', breadcrumbs);
        return breadcrumbs;
    }
}
