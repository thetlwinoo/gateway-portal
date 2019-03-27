/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PortalTestModule } from '../../../test.module';
import { ProductProductPhotoDeleteDialogComponent } from 'app/entities/product-product-photo/product-product-photo-delete-dialog.component';
import { ProductProductPhotoService } from 'app/entities/product-product-photo/product-product-photo.service';

describe('Component Tests', () => {
    describe('ProductProductPhoto Management Delete Component', () => {
        let comp: ProductProductPhotoDeleteDialogComponent;
        let fixture: ComponentFixture<ProductProductPhotoDeleteDialogComponent>;
        let service: ProductProductPhotoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ProductProductPhotoDeleteDialogComponent]
            })
                .overrideTemplate(ProductProductPhotoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProductProductPhotoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductProductPhotoService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
