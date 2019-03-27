/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { CustomersService } from 'app/entities/customers/customers.service';
import { ICustomers, Customers } from 'app/shared/model/customers.model';

describe('Service Tests', () => {
    describe('Customers Service', () => {
        let injector: TestBed;
        let service: CustomersService;
        let httpMock: HttpTestingController;
        let elemDefault: ICustomers;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(CustomersService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Customers(
                0,
                'AAAAAAA',
                0,
                currentDate,
                0,
                false,
                false,
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
                'AAAAAAA',
                currentDate,
                currentDate
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        accountOpenedDate: currentDate.format(DATE_FORMAT),
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

            it('should create a Customers', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        accountOpenedDate: currentDate.format(DATE_FORMAT),
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        accountOpenedDate: currentDate,
                        validFrom: currentDate,
                        validTo: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Customers(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Customers', async () => {
                const returnedFromService = Object.assign(
                    {
                        customerName: 'BBBBBB',
                        creditLimit: 1,
                        accountOpenedDate: currentDate.format(DATE_FORMAT),
                        standardDiscountPercentage: 1,
                        isStatementSent: true,
                        isOnCreditHold: true,
                        paymentDays: 1,
                        phoneNumber: 'BBBBBB',
                        faxNumber: 'BBBBBB',
                        deliveryRun: 'BBBBBB',
                        runPosition: 'BBBBBB',
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
                        accountOpenedDate: currentDate,
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

            it('should return a list of Customers', async () => {
                const returnedFromService = Object.assign(
                    {
                        customerName: 'BBBBBB',
                        creditLimit: 1,
                        accountOpenedDate: currentDate.format(DATE_FORMAT),
                        standardDiscountPercentage: 1,
                        isStatementSent: true,
                        isOnCreditHold: true,
                        paymentDays: 1,
                        phoneNumber: 'BBBBBB',
                        faxNumber: 'BBBBBB',
                        deliveryRun: 'BBBBBB',
                        runPosition: 'BBBBBB',
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
                        accountOpenedDate: currentDate,
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

            it('should delete a Customers', async () => {
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
