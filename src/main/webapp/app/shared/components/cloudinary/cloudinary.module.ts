import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from './cloudinary.service';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { FileUploadModule } from 'ng2-file-upload';
import { ProgressBarModule } from 'primeng/progressbar';
import { CloudinaryComponent } from './cloudinary.component';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from 'app/app.constants';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PortalSharedModule } from 'app/shared';
export const cloudinary = { Cloudinary: CloudinaryCore };
export const config: CloudinaryConfiguration = {
    cloud_name: CLOUDINARY_CLOUD_NAME,
    upload_preset: CLOUDINARY_UPLOAD_PRESET
};

@NgModule({
    declarations: [CloudinaryComponent],
    imports: [
        CommonModule,
        CloudinaryModule.forRoot(cloudinary, config),
        ProgressBarModule,
        PortalSharedModule,
        FileUploadModule,
        OverlayPanelModule
    ],
    exports: [CloudinaryComponent],
    entryComponents: [],
    providers: [CloudinaryService]
})
export class jhiCloudinaryModule {}
