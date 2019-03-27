/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { DeliveryMethodsComponent } from 'app/entities/delivery-methods/delivery-methods.component';
import { DeliveryMethodsService } from 'app/entities/delivery-methods/delivery-methods.service';
import { DeliveryMethods } from 'app/shared/model/delivery-methods.model';

describe('Component Tests', () => {
    describe('DeliveryMethods Management Component', () => {
        let comp: DeliveryMethodsComponent;
        let fixture: ComponentFixture<DeliveryMethodsComponent>;
        let service: DeliveryMethodsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [DeliveryMethodsComponent],
                providers: []
            })
                .overrideTemplate(DeliveryMethodsComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(DeliveryMethodsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeliveryMethodsService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new DeliveryMethods(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.deliveryMethods[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
