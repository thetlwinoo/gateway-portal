import { element, by, ElementFinder } from 'protractor';

export class OrdersComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-orders div table .btn-danger'));
    title = element.all(by.css('jhi-orders div h2#page-heading span')).first();

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

export class OrdersUpdatePage {
    pageTitle = element(by.id('jhi-orders-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    orderDateInput = element(by.id('field_orderDate'));
    expectedDeliveryDateInput = element(by.id('field_expectedDeliveryDate'));
    customerPurchaseOrderNumberInput = element(by.id('field_customerPurchaseOrderNumber'));
    isUndersupplyBackorderedInput = element(by.id('field_isUndersupplyBackordered'));
    commentsInput = element(by.id('field_comments'));
    deliveryInstructionsInput = element(by.id('field_deliveryInstructions'));
    internalCommentsInput = element(by.id('field_internalComments'));
    pickingCompletedWhenInput = element(by.id('field_pickingCompletedWhen'));
    pickedByPersonSelect = element(by.id('field_pickedByPerson'));
    contactPersonSelect = element(by.id('field_contactPerson'));
    salespersonPersonSelect = element(by.id('field_salespersonPerson'));
    customerSelect = element(by.id('field_customer'));
    backorderOrderSelect = element(by.id('field_backorderOrder'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setOrderDateInput(orderDate) {
        await this.orderDateInput.sendKeys(orderDate);
    }

    async getOrderDateInput() {
        return this.orderDateInput.getAttribute('value');
    }

    async setExpectedDeliveryDateInput(expectedDeliveryDate) {
        await this.expectedDeliveryDateInput.sendKeys(expectedDeliveryDate);
    }

    async getExpectedDeliveryDateInput() {
        return this.expectedDeliveryDateInput.getAttribute('value');
    }

    async setCustomerPurchaseOrderNumberInput(customerPurchaseOrderNumber) {
        await this.customerPurchaseOrderNumberInput.sendKeys(customerPurchaseOrderNumber);
    }

    async getCustomerPurchaseOrderNumberInput() {
        return this.customerPurchaseOrderNumberInput.getAttribute('value');
    }

    getIsUndersupplyBackorderedInput() {
        return this.isUndersupplyBackorderedInput;
    }
    async setCommentsInput(comments) {
        await this.commentsInput.sendKeys(comments);
    }

    async getCommentsInput() {
        return this.commentsInput.getAttribute('value');
    }

    async setDeliveryInstructionsInput(deliveryInstructions) {
        await this.deliveryInstructionsInput.sendKeys(deliveryInstructions);
    }

    async getDeliveryInstructionsInput() {
        return this.deliveryInstructionsInput.getAttribute('value');
    }

    async setInternalCommentsInput(internalComments) {
        await this.internalCommentsInput.sendKeys(internalComments);
    }

    async getInternalCommentsInput() {
        return this.internalCommentsInput.getAttribute('value');
    }

    async setPickingCompletedWhenInput(pickingCompletedWhen) {
        await this.pickingCompletedWhenInput.sendKeys(pickingCompletedWhen);
    }

    async getPickingCompletedWhenInput() {
        return this.pickingCompletedWhenInput.getAttribute('value');
    }

    async pickedByPersonSelectLastOption() {
        await this.pickedByPersonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async pickedByPersonSelectOption(option) {
        await this.pickedByPersonSelect.sendKeys(option);
    }

    getPickedByPersonSelect(): ElementFinder {
        return this.pickedByPersonSelect;
    }

    async getPickedByPersonSelectedOption() {
        return this.pickedByPersonSelect.element(by.css('option:checked')).getText();
    }

    async contactPersonSelectLastOption() {
        await this.contactPersonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async contactPersonSelectOption(option) {
        await this.contactPersonSelect.sendKeys(option);
    }

    getContactPersonSelect(): ElementFinder {
        return this.contactPersonSelect;
    }

    async getContactPersonSelectedOption() {
        return this.contactPersonSelect.element(by.css('option:checked')).getText();
    }

    async salespersonPersonSelectLastOption() {
        await this.salespersonPersonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async salespersonPersonSelectOption(option) {
        await this.salespersonPersonSelect.sendKeys(option);
    }

    getSalespersonPersonSelect(): ElementFinder {
        return this.salespersonPersonSelect;
    }

    async getSalespersonPersonSelectedOption() {
        return this.salespersonPersonSelect.element(by.css('option:checked')).getText();
    }

    async customerSelectLastOption() {
        await this.customerSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async customerSelectOption(option) {
        await this.customerSelect.sendKeys(option);
    }

    getCustomerSelect(): ElementFinder {
        return this.customerSelect;
    }

    async getCustomerSelectedOption() {
        return this.customerSelect.element(by.css('option:checked')).getText();
    }

    async backorderOrderSelectLastOption() {
        await this.backorderOrderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async backorderOrderSelectOption(option) {
        await this.backorderOrderSelect.sendKeys(option);
    }

    getBackorderOrderSelect(): ElementFinder {
        return this.backorderOrderSelect;
    }

    async getBackorderOrderSelectedOption() {
        return this.backorderOrderSelect.element(by.css('option:checked')).getText();
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

export class OrdersDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-orders-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-orders'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
