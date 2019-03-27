import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IColors } from 'app/shared/model/colors.model';

@Component({
    selector: 'jhi-colors-detail',
    templateUrl: './colors-detail.component.html'
})
export class ColorsDetailComponent implements OnInit {
    colors: IColors;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ colors }) => {
            this.colors = colors;
        });
    }

    previousState() {
        window.history.back();
    }
}
