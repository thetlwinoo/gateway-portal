/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { ProductProductPhotoComponent } from 'app/entities/product-product-photo/product-product-photo.component';
import { ProductProductPhotoService } from 'app/entities/product-product-photo/product-product-photo.service';
import { ProductProductPhoto } from 'app/shared/model/product-product-photo.model';

describe('Component Tests', () => {
    describe('ProductProductPhoto Management Component', () => {
        let comp: ProductProductPhotoComponent;
        let fixture: ComponentFixture<ProductProductPhotoComponent>;
        let service: ProductProductPhotoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ProductProductPhotoComponent],
                providers: []
            })
                .overrideTemplate(ProductProductPhotoComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProductProductPhotoComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductProductPhotoService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new ProductProductPhoto(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.productProductPhotos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
