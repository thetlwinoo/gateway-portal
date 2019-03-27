/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { ColorsComponent } from 'app/entities/colors/colors.component';
import { ColorsService } from 'app/entities/colors/colors.service';
import { Colors } from 'app/shared/model/colors.model';

describe('Component Tests', () => {
    describe('Colors Management Component', () => {
        let comp: ColorsComponent;
        let fixture: ComponentFixture<ColorsComponent>;
        let service: ColorsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ColorsComponent],
                providers: []
            })
                .overrideTemplate(ColorsComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ColorsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ColorsService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Colors(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.colors[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
