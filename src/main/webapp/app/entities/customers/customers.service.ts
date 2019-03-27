import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICustomers } from 'app/shared/model/customers.model';

type EntityResponseType = HttpResponse<ICustomers>;
type EntityArrayResponseType = HttpResponse<ICustomers[]>;

@Injectable({ providedIn: 'root' })
export class CustomersService {
    public resourceUrl = SERVER_API_URL + 'api/customers';

    constructor(protected http: HttpClient) {}

    create(customers: ICustomers): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(customers);
        return this.http
            .post<ICustomers>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(customers: ICustomers): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(customers);
        return this.http
            .put<ICustomers>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<ICustomers>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ICustomers[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(customers: ICustomers): ICustomers {
        const copy: ICustomers = Object.assign({}, customers, {
            accountOpenedDate:
                customers.accountOpenedDate != null && customers.accountOpenedDate.isValid()
                    ? customers.accountOpenedDate.format(DATE_FORMAT)
                    : null,
            validFrom: customers.validFrom != null && customers.validFrom.isValid() ? customers.validFrom.format(DATE_FORMAT) : null,
            validTo: customers.validTo != null && customers.validTo.isValid() ? customers.validTo.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.accountOpenedDate = res.body.accountOpenedDate != null ? moment(res.body.accountOpenedDate) : null;
            res.body.validFrom = res.body.validFrom != null ? moment(res.body.validFrom) : null;
            res.body.validTo = res.body.validTo != null ? moment(res.body.validTo) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((customers: ICustomers) => {
                customers.accountOpenedDate = customers.accountOpenedDate != null ? moment(customers.accountOpenedDate) : null;
                customers.validFrom = customers.validFrom != null ? moment(customers.validFrom) : null;
                customers.validTo = customers.validTo != null ? moment(customers.validTo) : null;
            });
        }
        return res;
    }
}
