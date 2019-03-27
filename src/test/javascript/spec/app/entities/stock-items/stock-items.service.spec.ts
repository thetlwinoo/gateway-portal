/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { StockItemsService } from 'app/entities/stock-items/stock-items.service';
import { IStockItems, StockItems } from 'app/shared/model/stock-items.model';

describe('Service Tests', () => {
    describe('StockItems Service', () => {
        let injector: TestBed;
        let service: StockItemsService;
        let httpMock: HttpTestingController;
        let elemDefault: IStockItems;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(StockItemsService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new StockItems(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                0,
                0,
                false,
                'AAAAAAA',
                0,
                0,
                0,
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                currentDate,
                currentDate
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a StockItems', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        validFrom: currentDate,
                        validTo: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new StockItems(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a StockItems', async () => {
                const returnedFromService = Object.assign(
                    {
                        stockItemName: 'BBBBBB',
                        brand: 'BBBBBB',
                        size: 'BBBBBB',
                        leadTimeDays: 1,
                        quantityPerOuter: 1,
                        isChillerStock: true,
                        barcode: 'BBBBBB',
                        taxRate: 1,
                        unitPrice: 1,
                        recommendedRetailPrice: 1,
                        typicalWeightPerUnit: 1,
                        marketingComments: 'BBBBBB',
                        internalComments: 'BBBBBB',
                        photo: 'BBBBBB',
                        customFields: 'BBBBBB',
                        tags: 'BBBBBB',
                        searchDetails: 'BBBBBB',
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        validFrom: currentDate,
                        validTo: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of StockItems', async () => {
                const returnedFromService = Object.assign(
                    {
                        stockItemName: 'BBBBBB',
                        brand: 'BBBBBB',
                        size: 'BBBBBB',
                        leadTimeDays: 1,
                        quantityPerOuter: 1,
                        isChillerStock: true,
                        barcode: 'BBBBBB',
                        taxRate: 1,
                        unitPrice: 1,
                        recommendedRetailPrice: 1,
                        typicalWeightPerUnit: 1,
                        marketingComments: 'BBBBBB',
                        internalComments: 'BBBBBB',
                        photo: 'BBBBBB',
                        customFields: 'BBBBBB',
                        tags: 'BBBBBB',
                        searchDetails: 'BBBBBB',
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        validFrom: currentDate,
                        validTo: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a StockItems', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
