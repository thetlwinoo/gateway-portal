/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { PurchaseOrderLinesService } from 'app/entities/purchase-order-lines/purchase-order-lines.service';
import { IPurchaseOrderLines, PurchaseOrderLines } from 'app/shared/model/purchase-order-lines.model';

describe('Service Tests', () => {
    describe('PurchaseOrderLines Service', () => {
        let injector: TestBed;
        let service: PurchaseOrderLinesService;
        let httpMock: HttpTestingController;
        let elemDefault: IPurchaseOrderLines;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(PurchaseOrderLinesService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new PurchaseOrderLines(0, 0, 'AAAAAAA', 0, 0, currentDate, false);
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        lastReceiptDate: currentDate.format(DATE_FORMAT)
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

            it('should create a PurchaseOrderLines', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        lastReceiptDate: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        lastReceiptDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new PurchaseOrderLines(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a PurchaseOrderLines', async () => {
                const returnedFromService = Object.assign(
                    {
                        orderedOuters: 1,
                        description: 'BBBBBB',
                        receivedOuters: 1,
                        expectedUnitPricePerOuter: 1,
                        lastReceiptDate: currentDate.format(DATE_FORMAT),
                        isOrderLineFinalized: true
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        lastReceiptDate: currentDate
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

            it('should return a list of PurchaseOrderLines', async () => {
                const returnedFromService = Object.assign(
                    {
                        orderedOuters: 1,
                        description: 'BBBBBB',
                        receivedOuters: 1,
                        expectedUnitPricePerOuter: 1,
                        lastReceiptDate: currentDate.format(DATE_FORMAT),
                        isOrderLineFinalized: true
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        lastReceiptDate: currentDate
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

            it('should delete a PurchaseOrderLines', async () => {
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
