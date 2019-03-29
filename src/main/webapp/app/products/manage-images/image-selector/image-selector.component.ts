import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { IProductPhoto, ProductPhoto } from 'app/shared/model/product-photo.model';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { IProducts } from 'app/shared/model/products.model';
import { CloudinaryService } from 'app/shared/components/cloudinary/cloudinary.service';
import { ProductPhotoService } from 'app/entities/product-photo';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'image-selector',
    templateUrl: './image-selector.component.html',
    styleUrls: ['./image-selector.scss']
})
export class ImageSelectorComponent implements AfterViewInit {
    @Input() productPhoto: IProductPhoto;
    @Input() product: IProducts;
    @Input() selectedIndex;
    @Output() createCompleted = new EventEmitter();
    isSaving: boolean;
    selectedFile: File = null;

    public image: any;

    // get productPhoto() {
    //     return this.productPhotos?this.productPhotos[0]:null;
    // }

    constructor(
        private http: HttpClient,
        private cloudinaryService: CloudinaryService,
        private productPhotoService: ProductPhotoService,
        protected jhiAlertService: JhiAlertService
    ) {
        // this.cloudinaryService.onResponseChanged.subscribe(response => {
        //     if(response[0]){
        //         this.onSaveProductPhoto(response[0]);
        //     }
        // });
    }

    ngAfterViewInit(): void {
        // console.log('aaa',this.productPhotos,this.selectorIndex);
    }

    public onUploadCompleted(event) {
        // console.log(event);
        if (event[0]) {
            let productPhoto: ProductPhoto = new ProductPhoto();
            let uploadEvent = event[0];
            productPhoto.largePhoto = uploadEvent.data.url;
            productPhoto.largePhotoFileName = uploadEvent.file.name;
            productPhoto.thumbNailPhoto = uploadEvent.data.url;
            productPhoto.thumbNailPhotoFileName = uploadEvent.file.name;
            productPhoto.priority = this.selectedIndex;
            productPhoto.productId = this.product.id;
            console.log('Upload Event', uploadEvent, productPhoto);
            this.save(productPhoto);
        }
    }

    save(productPhoto: IProductPhoto) {
        this.isSaving = true;
        if (productPhoto.id !== undefined) {
            this.subscribeToSaveResponse(this.productPhotoService.update(productPhoto));
        } else {
            this.subscribeToSaveResponse(this.productPhotoService.create(productPhoto));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IProductPhoto>>) {
        result.subscribe((res: HttpResponse<IProductPhoto>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess(event) {
        console.log('save success', event);
        this.isSaving = false;
        this.createCompleted.emit(event);
        // this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackProductsById(index: number, item: IProducts) {
        return item.id;
    }

    // public onFileSelected(event) {
    //     this.selectedFile = <File>event.target.files[0];
    //     if (this.selectedFile) {
    //         return this.upload();
    //     }
    // }
    //
    // upload() {
    //     const fd = new FormData();
    //     fd.append('image', this.selectedFile, this.selectedFile.name);
    //     this.http.post('http://example.com/upload/image', fd).subscribe(
    //         (res: any) => {
    //             this.image = res.data;
    //             this.event.emit(this.image);
    //         },
    //         (err: any) => {
    //             // Show error message or make something.
    //         }
    //     );
    // }
}
