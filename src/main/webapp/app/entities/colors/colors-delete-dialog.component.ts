import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IColors } from 'app/shared/model/colors.model';
import { ColorsService } from './colors.service';

@Component({
    selector: 'jhi-colors-delete-dialog',
    templateUrl: './colors-delete-dialog.component.html'
})
export class ColorsDeleteDialogComponent {
    colors: IColors;

    constructor(protected colorsService: ColorsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.colorsService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'colorsListModification',
                content: 'Deleted an colors'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-colors-delete-popup',
    template: ''
})
export class ColorsDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ colors }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(ColorsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.colors = colors;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/colors', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/colors', { outlets: { popup: null } }]);
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
