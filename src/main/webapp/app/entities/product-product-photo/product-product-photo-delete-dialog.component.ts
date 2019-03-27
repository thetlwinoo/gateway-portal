import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IProductProductPhoto } from 'app/shared/model/product-product-photo.model';
import { ProductProductPhotoService } from './product-product-photo.service';

@Component({
    selector: 'jhi-product-product-photo-delete-dialog',
    templateUrl: './product-product-photo-delete-dialog.component.html'
})
export class ProductProductPhotoDeleteDialogComponent {
    productProductPhoto: IProductProductPhoto;

    constructor(
        protected productProductPhotoService: ProductProductPhotoService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.productProductPhotoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'productProductPhotoListModification',
                content: 'Deleted an productProductPhoto'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-product-product-photo-delete-popup',
    template: ''
})
export class ProductProductPhotoDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ productProductPhoto }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(ProductProductPhotoDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.productProductPhoto = productProductPhoto;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/product-product-photo', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/product-product-photo', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
