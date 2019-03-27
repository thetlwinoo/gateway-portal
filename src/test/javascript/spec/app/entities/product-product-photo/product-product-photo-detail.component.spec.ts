/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { ProductProductPhotoDetailComponent } from 'app/entities/product-product-photo/product-product-photo-detail.component';
import { ProductProductPhoto } from 'app/shared/model/product-product-photo.model';

describe('Component Tests', () => {
    describe('ProductProductPhoto Management Detail Component', () => {
        let comp: ProductProductPhotoDetailComponent;
        let fixture: ComponentFixture<ProductProductPhotoDetailComponent>;
        const route = ({ data: of({ productProductPhoto: new ProductProductPhoto(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [ProductProductPhotoDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ProductProductPhotoDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProductProductPhotoDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.productProductPhoto).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
