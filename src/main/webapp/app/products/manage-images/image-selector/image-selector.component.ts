import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'image-selector',
    templateUrl: './image-selector.component.html',
    styleUrls: ['./image-selector.scss']
})
export class ImageSelectorComponent {
    selectedFile: File = null;
    @Output() event = new EventEmitter();
    public image: any;

    constructor(private http: HttpClient) {}

    public onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
        if (this.selectedFile) {
            return this.upload();
        }
    }

    upload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://example.com/upload/image', fd).subscribe(
            (res: any) => {
                this.image = res.data;
                this.event.emit(this.image);
            },
            (err: any) => {
                // Show error message or make something.
            }
        );
    }
}
