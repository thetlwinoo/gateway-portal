/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { CitiesUpdateComponent } from 'app/entities/cities/cities-update.component';
import { CitiesService } from 'app/entities/cities/cities.service';
import { Cities } from 'app/shared/model/cities.model';

describe('Component Tests', () => {
    describe('Cities Management Update Component', () => {
        let comp: CitiesUpdateComponent;
        let fixture: ComponentFixture<CitiesUpdateComponent>;
        let service: CitiesService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [CitiesUpdateComponent]
            })
                .overrideTemplate(CitiesUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CitiesUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CitiesService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Cities(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.cities = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Cities();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.cities = entity;
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
