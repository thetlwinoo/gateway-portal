import { element, by, ElementFinder } from 'protractor';

export class ProductPhotoComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-product-photo div table .btn-danger'));
    title = element.all(by.css('jhi-product-photo div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProductPhotoUpdatePage {
    pageTitle = element(by.id('jhi-product-photo-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    thumbNailPhotoInput = element(by.id('field_thumbNailPhoto'));
    thumbNailPhotoFileNameInput = element(by.id('field_thumbNailPhotoFileName'));
    largePhotoInput = element(by.id('field_largePhoto'));
    largePhotoFileNameInput = element(by.id('field_largePhotoFileName'));
    priorityInput = element(by.id('field_priority'));
    productSelect = element(by.id('field_product'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setThumbNailPhotoInput(thumbNailPhoto) {
        await this.thumbNailPhotoInput.sendKeys(thumbNailPhoto);
    }

    async getThumbNailPhotoInput() {
        return this.thumbNailPhotoInput.getAttribute('value');
    }

    async setThumbNailPhotoFileNameInput(thumbNailPhotoFileName) {
        await this.thumbNailPhotoFileNameInput.sendKeys(thumbNailPhotoFileName);
    }

    async getThumbNailPhotoFileNameInput() {
        return this.thumbNailPhotoFileNameInput.getAttribute('value');
    }

    async setLargePhotoInput(largePhoto) {
        await this.largePhotoInput.sendKeys(largePhoto);
    }

    async getLargePhotoInput() {
        return this.largePhotoInput.getAttribute('value');
    }

    async setLargePhotoFileNameInput(largePhotoFileName) {
        await this.largePhotoFileNameInput.sendKeys(largePhotoFileName);
    }

    async getLargePhotoFileNameInput() {
        return this.largePhotoFileNameInput.getAttribute('value');
    }

    async setPriorityInput(priority) {
        await this.priorityInput.sendKeys(priority);
    }

    async getPriorityInput() {
        return this.priorityInput.getAttribute('value');
    }

    async productSelectLastOption() {
        await this.productSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async productSelectOption(option) {
        await this.productSelect.sendKeys(option);
    }

    getProductSelect(): ElementFinder {
        return this.productSelect;
    }

    async getProductSelectedOption() {
        return this.productSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class ProductPhotoDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-productPhoto-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-productPhoto'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
