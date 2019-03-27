import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.scss']
})
export class ImageUploaderComponent {
    @Input() product;
    @Input() noOfSelector;
    constructor(private http: HttpClient) {}

    get counter() {
        return new Array(this.noOfSelector);
    }
}
