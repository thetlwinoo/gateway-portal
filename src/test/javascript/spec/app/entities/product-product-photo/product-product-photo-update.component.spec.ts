/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { ProductProductPhotoUpdateComponent } from 'app/entities/product-product-photo/product-product-photo-update.component';
import { ProductProductPhotoService } from 'app/entities/product-product-photo/product-product-photo.service';
import { ProductProductPhoto } from 'app/shared/model/product-product-photo.model';

describe('Component Tests', () => {
    describe('ProductProductPhoto Management Update Component', () => {
        let comp: ProductProductPhotoUpdateComponent;
        let fixture: ComponentFixture<ProductProductPhotoUpdateComponent>;
        let service: ProductProductPhotoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ProductProductPhotoUpdateComponent]
            })
                .overrideTemplate(ProductProductPhotoUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProductProductPhotoUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductProductPhotoService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new ProductProductPhoto(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.productProductPhoto = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new ProductProductPhoto();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.productProductPhoto = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
