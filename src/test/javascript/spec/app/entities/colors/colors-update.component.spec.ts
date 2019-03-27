/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { ColorsUpdateComponent } from 'app/entities/colors/colors-update.component';
import { ColorsService } from 'app/entities/colors/colors.service';
import { Colors } from 'app/shared/model/colors.model';

describe('Component Tests', () => {
    describe('Colors Management Update Component', () => {
        let comp: ColorsUpdateComponent;
        let fixture: ComponentFixture<ColorsUpdateComponent>;
        let service: ColorsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ColorsUpdateComponent]
            })
                .overrideTemplate(ColorsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ColorsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ColorsService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Colors(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.colors = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Colors();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.colors = entity;
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
