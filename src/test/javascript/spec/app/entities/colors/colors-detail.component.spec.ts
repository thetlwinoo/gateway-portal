/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { ColorsDetailComponent } from 'app/entities/colors/colors-detail.component';
import { Colors } from 'app/shared/model/colors.model';

describe('Component Tests', () => {
    describe('Colors Management Detail Component', () => {
        let comp: ColorsDetailComponent;
        let fixture: ComponentFixture<ColorsDetailComponent>;
        const route = ({ data: of({ colors: new Colors(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ColorsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ColorsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ColorsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.colors).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
