/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PortalTestModule } from '../../../test.module';
import { StockItemTransactionsUpdateComponent } from 'app/entities/stock-item-transactions/stock-item-transactions-update.component';
import { StockItemTransactionsService } from 'app/entities/stock-item-transactions/stock-item-transactions.service';
import { StockItemTransactions } from 'app/shared/model/stock-item-transactions.model';

describe('Component Tests', () => {
    describe('StockItemTransactions Management Update Component', () => {
        let comp: StockItemTransactionsUpdateComponent;
        let fixture: ComponentFixture<StockItemTransactionsUpdateComponent>;
        let service: StockItemTransactionsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PortalTestModule],
                declarations: [StockItemTransactionsUpdateComponent]
            })
                .overrideTemplate(StockItemTransactionsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StockItemTransactionsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StockItemTransactionsService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new StockItemTransactions(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.stockItemTransactions = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new StockItemTransactions();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.stockItemTransactions = entity;
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
