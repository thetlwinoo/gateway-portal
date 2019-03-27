/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { PurchaseOrdersComponent } from 'app/entities/purchase-orders/purchase-orders.component';
import { PurchaseOrdersService } from 'app/entities/purchase-orders/purchase-orders.service';
import { PurchaseOrders } from 'app/shared/model/purchase-orders.model';

describe('Component Tests', () => {
    describe('PurchaseOrders Management Component', () => {
        let comp: PurchaseOrdersComponent;
        let fixture: ComponentFixture<PurchaseOrdersComponent>;
        let service: PurchaseOrdersService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [PurchaseOrdersComponent],
                providers: []
            })
                .overrideTemplate(PurchaseOrdersComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PurchaseOrdersComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PurchaseOrdersService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new PurchaseOrders(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.purchaseOrders[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
