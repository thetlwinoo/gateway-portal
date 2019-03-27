/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { ColdRoomTemperaturesService } from 'app/entities/cold-room-temperatures/cold-room-temperatures.service';
import { IColdRoomTemperatures, ColdRoomTemperatures } from 'app/shared/model/cold-room-temperatures.model';

describe('Service Tests', () => {
    describe('ColdRoomTemperatures Service', () => {
        let injector: TestBed;
        let service: ColdRoomTemperaturesService;
        let httpMock: HttpTestingController;
        let elemDefault: IColdRoomTemperatures;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(ColdRoomTemperaturesService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new ColdRoomTemperatures(0, 0, currentDate, 0, currentDate, currentDate);
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        recordedWhen: currentDate.format(DATE_FORMAT),
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

            it('should create a ColdRoomTemperatures', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        recordedWhen: currentDate.format(DATE_FORMAT),
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        recordedWhen: currentDate,
                        validFrom: currentDate,
                        validTo: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new ColdRoomTemperatures(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a ColdRoomTemperatures', async () => {
                const returnedFromService = Object.assign(
                    {
                        coldRoomSensorNumber: 1,
                        recordedWhen: currentDate.format(DATE_FORMAT),
                        temperature: 1,
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        recordedWhen: currentDate,
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

            it('should return a list of ColdRoomTemperatures', async () => {
                const returnedFromService = Object.assign(
                    {
                        coldRoomSensorNumber: 1,
                        recordedWhen: currentDate.format(DATE_FORMAT),
                        temperature: 1,
                        validFrom: currentDate.format(DATE_FORMAT),
                        validTo: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        recordedWhen: currentDate,
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

            it('should delete a ColdRoomTemperatures', async () => {
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
