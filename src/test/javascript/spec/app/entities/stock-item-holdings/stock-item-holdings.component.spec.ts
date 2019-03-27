/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PortalTestModule } from '../../../test.module';
import { StockItemHoldingsComponent } from 'app/entities/stock-item-holdings/stock-item-holdings.component';
import { StockItemHoldingsService } from 'app/entities/stock-item-holdings/stock-item-holdings.service';
import { StockItemHoldings } from 'app/shared/model/stock-item-holdings.model';

describe('Component Tests', () => {
    describe('StockItemHoldings Management Component', () => {
        let comp: StockItemHoldingsComponent;
        let fixture: ComponentFixture<StockItemHoldingsComponent>;
        let service: StockItemHoldingsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [StockItemHoldingsComponent],
                providers: []
            })
                .overrideTemplate(StockItemHoldingsComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StockItemHoldingsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StockItemHoldingsService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new StockItemHoldings(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.stockItemHoldings[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
