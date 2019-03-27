import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { IColors } from 'app/shared/model/colors.model';
import { ColorsService } from './colors.service';

@Component({
    selector: 'jhi-colors-update',
    templateUrl: './colors-update.component.html'
})
export class ColorsUpdateComponent implements OnInit {
    colors: IColors;
    isSaving: boolean;
    validFromDp: any;
    validToDp: any;

    constructor(protected colorsService: ColorsService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ colors }) => {
            this.colors = colors;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.colors.id !== undefined) {
            this.subscribeToSaveResponse(this.colorsService.update(this.colors));
        } else {
            this.subscribeToSaveResponse(this.colorsService.create(this.colors));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IColors>>) {
        result.subscribe((res: HttpResponse<IColors>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
