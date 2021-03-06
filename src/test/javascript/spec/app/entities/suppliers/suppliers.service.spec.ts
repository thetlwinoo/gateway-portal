/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SuppliersService } from 'app/entities/suppliers/suppliers.service';
import { ISuppliers, Suppliers } from 'app/shared/model/suppliers.model';

describe('Service Tests', () => {
    describe('Suppliers Service', () => {
        let injector: TestBed;
        let service: SuppliersService;
        let httpMock: HttpTestingController;
        let elemDefault: ISuppliers;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(SuppliersService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Suppliers(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
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

            it('should create a Suppliers', async () => {
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
                    .create(new Suppliers(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Suppliers', async () => {
                const returnedFromService = Object.assign(
                    {
                        supplierName: 'BBBBBB',
                        supplierReference: 'BBBBBB',
                        bankAccountName: 'BBBBBB',
                        bankAccountBranch: 'BBBBBB',
                        bankAccountCode: 'BBBBBB',
                        bankAccountNumber: 'BBBBBB',
                        bankInternationalCode: 'BBBBBB',
                        paymentDays: 1,
                        internalComments: 'BBBBBB',
                        phoneNumber: 'BBBBBB',
                        faxNumber: 'BBBBBB',
                        websiteURL: 'BBBBBB',
                        deliveryAddressLine1: 'BBBBBB',
                        deliveryAddressLine2: 'BBBBBB',
                        deliveryPostalCode: 'BBBBBB',
                        deliveryLocation: 'BBBBBB',
                        postalAddressLine1: 'BBBBBB',
                        postalAddressLine2: 'BBBBBB',
                        postalPostalCode: 'BBBBBB',
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

            it('should return a list of Suppliers', async () => {
                const returnedFromService = Object.assign(
                    {
                        supplierName: 'BBBBBB',
                        supplierReference: 'BBBBBB',
                        bankAccountName: 'BBBBBB',
                        bankAccountBranch: 'BBBBBB',
                        bankAccountCode: 'BBBBBB',
                        bankAccountNumber: 'BBBBBB',
                        bankInternationalCode: 'BBBBBB',
                        paymentDays: 1,
                        internalComments: 'BBBBBB',
                        phoneNumber: 'BBBBBB',
                        faxNumber: 'BBBBBB',
                        websiteURL: 'BBBBBB',
                        deliveryAddressLine1: 'BBBBBB',
                        deliveryAddressLine2: 'BBBBBB',
                        deliveryPostalCode: 'BBBBBB',
                        deliveryLocation: 'BBBBBB',
                        postalAddressLine1: 'BBBBBB',
                        postalAddressLine2: 'BBBBBB',
                        postalPostalCode: 'BBBBBB',
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

            it('should delete a Suppliers', async () => {
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
