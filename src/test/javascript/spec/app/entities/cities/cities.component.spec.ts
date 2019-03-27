/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { CitiesComponent } from 'app/entities/cities/cities.component';
import { CitiesService } from 'app/entities/cities/cities.service';
import { Cities } from 'app/shared/model/cities.model';

describe('Component Tests', () => {
    describe('Cities Management Component', () => {
        let comp: CitiesComponent;
        let fixture: ComponentFixture<CitiesComponent>;
        let service: CitiesService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [CitiesComponent],
                providers: []
            })
                .overrideTemplate(CitiesComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CitiesComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CitiesService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Cities(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.cities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
