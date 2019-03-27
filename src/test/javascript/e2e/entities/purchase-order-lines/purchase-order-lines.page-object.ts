import { element, by, ElementFinder } from 'protractor';

export class PurchaseOrderLinesComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-purchase-order-lines div table .btn-danger'));
    title = element.all(by.css('jhi-purchase-order-lines div h2#page-heading span')).first();

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

export class PurchaseOrderLinesUpdatePage {
    pageTitle = element(by.id('jhi-purchase-order-lines-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    orderedOutersInput = element(by.id('field_orderedOuters'));
    descriptionInput = element(by.id('field_description'));
    receivedOutersInput = element(by.id('field_receivedOuters'));
    expectedUnitPricePerOuterInput = element(by.id('field_expectedUnitPricePerOuter'));
    lastReceiptDateInput = element(by.id('field_lastReceiptDate'));
    isOrderLineFinalizedInput = element(by.id('field_isOrderLineFinalized'));
    stockItemSelect = element(by.id('field_stockItem'));
    packageTypeSelect = element(by.id('field_packageType'));
    purchaseOrderSelect = element(by.id('field_purchaseOrder'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setOrderedOutersInput(orderedOuters) {
        await this.orderedOutersInput.sendKeys(orderedOuters);
    }

    async getOrderedOutersInput() {
        return this.orderedOutersInput.getAttribute('value');
    }

    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    async setReceivedOutersInput(receivedOuters) {
        await this.receivedOutersInput.sendKeys(receivedOuters);
    }

    async getReceivedOutersInput() {
        return this.receivedOutersInput.getAttribute('value');
    }

    async setExpectedUnitPricePerOuterInput(expectedUnitPricePerOuter) {
        await this.expectedUnitPricePerOuterInput.sendKeys(expectedUnitPricePerOuter);
    }

    async getExpectedUnitPricePerOuterInput() {
        return this.expectedUnitPricePerOuterInput.getAttribute('value');
    }

    async setLastReceiptDateInput(lastReceiptDate) {
        await this.lastReceiptDateInput.sendKeys(lastReceiptDate);
    }

    async getLastReceiptDateInput() {
        return this.lastReceiptDateInput.getAttribute('value');
    }

    getIsOrderLineFinalizedInput() {
        return this.isOrderLineFinalizedInput;
    }

    async stockItemSelectLastOption() {
        await this.stockItemSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async stockItemSelectOption(option) {
        await this.stockItemSelect.sendKeys(option);
    }

    getStockItemSelect(): ElementFinder {
        return this.stockItemSelect;
    }

    async getStockItemSelectedOption() {
        return this.stockItemSelect.element(by.css('option:checked')).getText();
    }

    async packageTypeSelectLastOption() {
        await this.packageTypeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async packageTypeSelectOption(option) {
        await this.packageTypeSelect.sendKeys(option);
    }

    getPackageTypeSelect(): ElementFinder {
        return this.packageTypeSelect;
    }

    async getPackageTypeSelectedOption() {
        return this.packageTypeSelect.element(by.css('option:checked')).getText();
    }

    async purchaseOrderSelectLastOption() {
        await this.purchaseOrderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async purchaseOrderSelectOption(option) {
        await this.purchaseOrderSelect.sendKeys(option);
    }

    getPurchaseOrderSelect(): ElementFinder {
        return this.purchaseOrderSelect;
    }

    async getPurchaseOrderSelectedOption() {
        return this.purchaseOrderSelect.element(by.css('option:checked')).getText();
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

export class PurchaseOrderLinesDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-purchaseOrderLines-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-purchaseOrderLines'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
