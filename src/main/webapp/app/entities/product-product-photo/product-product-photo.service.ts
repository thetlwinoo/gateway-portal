import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';

type EntityResponseType = HttpResponse<IProductProductPhoto>;
type EntityArrayResponseType = HttpResponse<IProductProductPhoto[]>;

@Injectable({ providedIn: 'root' })
export class ProductProductPhotoService {
    public resourceUrl = SERVER_API_URL + 'api/product-product-photos';

    constructor(protected http: HttpClient) {}

    create(productProductPhoto: IProductProductPhoto): Observable<EntityResponseType> {
        return this.http.post<IProductProductPhoto>(this.resourceUrl, productProductPhoto, { observe: 'response' });
    }

    update(productProductPhoto: IProductProductPhoto): Observable<EntityResponseType> {
        return this.http.put<IProductProductPhoto>(this.resourceUrl, productProductPhoto, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProductProductPhoto>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProductProductPhoto[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
