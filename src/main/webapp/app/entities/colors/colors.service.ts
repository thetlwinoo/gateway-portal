import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IColors } from 'app/shared/model/colors.model';

type EntityResponseType = HttpResponse<IColors>;
type EntityArrayResponseType = HttpResponse<IColors[]>;

@Injectable({ providedIn: 'root' })
export class ColorsService {
    public resourceUrl = SERVER_API_URL + 'api/colors';

    constructor(protected http: HttpClient) {}

    create(colors: IColors): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(colors);
        return this.http
            .post<IColors>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(colors: IColors): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(colors);
        return this.http
            .put<IColors>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IColors>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IColors[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(colors: IColors): IColors {
        const copy: IColors = Object.assign({}, colors, {
            validFrom: colors.validFrom != null && colors.validFrom.isValid() ? colors.validFrom.format(DATE_FORMAT) : null,
            validTo: colors.validTo != null && colors.validTo.isValid() ? colors.validTo.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.validFrom = res.body.validFrom != null ? moment(res.body.validFrom) : null;
            res.body.validTo = res.body.validTo != null ? moment(res.body.validTo) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((colors: IColors) => {
                colors.validFrom = colors.validFrom != null ? moment(colors.validFrom) : null;
                colors.validTo = colors.validTo != null ? moment(colors.validTo) : null;
            });
        }
        return res;
    }
}
