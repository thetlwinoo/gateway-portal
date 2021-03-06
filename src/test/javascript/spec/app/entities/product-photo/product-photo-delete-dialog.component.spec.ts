/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PortalTestModule } from '../../../test.module';
import { ProductPhotoDeleteDialogComponent } from 'app/entities/product-photo/product-photo-delete-dialog.component';
import { ProductPhotoService } from 'app/entities/product-photo/product-photo.service';

describe('Component Tests', () => {
    describe('ProductPhoto Management Delete Component', () => {
        let comp: ProductPhotoDeleteDialogComponent;
        let fixture: ComponentFixture<ProductPhotoDeleteDialogComponent>;
        let service: ProductPhotoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ProductPhotoDeleteDialogComponent]
            })
                .overrideTemplate(ProductPhotoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProductPhotoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductPhotoService);
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
