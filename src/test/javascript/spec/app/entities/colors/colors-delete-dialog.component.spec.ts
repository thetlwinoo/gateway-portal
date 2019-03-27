/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PortalTestModule } from '../../../test.module';
import { ColorsDeleteDialogComponent } from 'app/entities/colors/colors-delete-dialog.component';
import { ColorsService } from 'app/entities/colors/colors.service';

describe('Component Tests', () => {
    describe('Colors Management Delete Component', () => {
        let comp: ColorsDeleteDialogComponent;
        let fixture: ComponentFixture<ColorsDeleteDialogComponent>;
        let service: ColorsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ColorsDeleteDialogComponent]
            })
                .overrideTemplate(ColorsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ColorsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ColorsService);
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
