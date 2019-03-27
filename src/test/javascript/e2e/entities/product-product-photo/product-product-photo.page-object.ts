import { element, by, ElementFinder } from 'protractor';

export class ProductProductPhotoComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-product-product-photo div table .btn-danger'));
    title = element.all(by.css('jhi-product-product-photo div h2#page-heading span')).first();

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

export class ProductProductPhotoUpdatePage {
    pageTitle = element(by.id('jhi-product-product-photo-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    firstPriorityInput = element(by.id('field_firstPriority'));
    secondPriorityInput = element(by.id('field_secondPriority'));
    thirdPriorityInput = element(by.id('field_thirdPriority'));
    fourthPriorityInput = element(by.id('field_fourthPriority'));
    fixthPriorityInput = element(by.id('field_fixthPriority'));
    sixthPriorityInput = element(by.id('field_sixthPriority'));
    productPhotoSelect = element(by.id('field_productPhoto'));
    productSelect = element(by.id('field_product'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    getFirstPriorityInput() {
        return this.firstPriorityInput;
    }
    getSecondPriorityInput() {
        return this.secondPriorityInput;
    }
    getThirdPriorityInput() {
        return this.thirdPriorityInput;
    }
    getFourthPriorityInput() {
        return this.fourthPriorityInput;
    }
    getFixthPriorityInput() {
        return this.fixthPriorityInput;
    }
    getSixthPriorityInput() {
        return this.sixthPriorityInput;
    }

    async productPhotoSelectLastOption() {
        await this.productPhotoSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async productPhotoSelectOption(option) {
        await this.productPhotoSelect.sendKeys(option);
    }

    getProductPhotoSelect(): ElementFinder {
        return this.productPhotoSelect;
    }

    async getProductPhotoSelectedOption() {
        return this.productPhotoSelect.element(by.css('option:checked')).getText();
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

export class ProductProductPhotoDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-productProductPhoto-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-productProductPhoto'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
