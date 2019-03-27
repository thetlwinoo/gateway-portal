import { element, by, ElementFinder } from 'protractor';

export class InvoicesComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-invoices div table .btn-danger'));
    title = element.all(by.css('jhi-invoices div h2#page-heading span')).first();

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

export class InvoicesUpdatePage {
    pageTitle = element(by.id('jhi-invoices-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    invoiceDateInput = element(by.id('field_invoiceDate'));
    customerPurchaseOrderNumberInput = element(by.id('field_customerPurchaseOrderNumber'));
    isCreditNoteInput = element(by.id('field_isCreditNote'));
    creditNoteReasonInput = element(by.id('field_creditNoteReason'));
    commentsInput = element(by.id('field_comments'));
    deliveryInstructionsInput = element(by.id('field_deliveryInstructions'));
    internalCommentsInput = element(by.id('field_internalComments'));
    totalDryItemsInput = element(by.id('field_totalDryItems'));
    totalChillerItemsInput = element(by.id('field_totalChillerItems'));
    deliveryRunInput = element(by.id('field_deliveryRun'));
    runPositionInput = element(by.id('field_runPosition'));
    returnedDeliveryDataInput = element(by.id('field_returnedDeliveryData'));
    confirmedDeliveryTimeInput = element(by.id('field_confirmedDeliveryTime'));
    confirmedReceivedByInput = element(by.id('field_confirmedReceivedBy'));
    contactPersonSelect = element(by.id('field_contactPerson'));
    salespersonPersonSelect = element(by.id('field_salespersonPerson'));
    packedByPersonSelect = element(by.id('field_packedByPerson'));
    accountsPersonSelect = element(by.id('field_accountsPerson'));
    customerSelect = element(by.id('field_customer'));
    billToCustomerSelect = element(by.id('field_billToCustomer'));
    deliveryMethodSelect = element(by.id('field_deliveryMethod'));
    orderSelect = element(by.id('field_order'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setInvoiceDateInput(invoiceDate) {
        await this.invoiceDateInput.sendKeys(invoiceDate);
    }

    async getInvoiceDateInput() {
        return this.invoiceDateInput.getAttribute('value');
    }

    async setCustomerPurchaseOrderNumberInput(customerPurchaseOrderNumber) {
        await this.customerPurchaseOrderNumberInput.sendKeys(customerPurchaseOrderNumber);
    }

    async getCustomerPurchaseOrderNumberInput() {
        return this.customerPurchaseOrderNumberInput.getAttribute('value');
    }

    getIsCreditNoteInput() {
        return this.isCreditNoteInput;
    }
    async setCreditNoteReasonInput(creditNoteReason) {
        await this.creditNoteReasonInput.sendKeys(creditNoteReason);
    }

    async getCreditNoteReasonInput() {
        return this.creditNoteReasonInput.getAttribute('value');
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

    async setTotalDryItemsInput(totalDryItems) {
        await this.totalDryItemsInput.sendKeys(totalDryItems);
    }

    async getTotalDryItemsInput() {
        return this.totalDryItemsInput.getAttribute('value');
    }

    async setTotalChillerItemsInput(totalChillerItems) {
        await this.totalChillerItemsInput.sendKeys(totalChillerItems);
    }

    async getTotalChillerItemsInput() {
        return this.totalChillerItemsInput.getAttribute('value');
    }

    async setDeliveryRunInput(deliveryRun) {
        await this.deliveryRunInput.sendKeys(deliveryRun);
    }

    async getDeliveryRunInput() {
        return this.deliveryRunInput.getAttribute('value');
    }

    async setRunPositionInput(runPosition) {
        await this.runPositionInput.sendKeys(runPosition);
    }

    async getRunPositionInput() {
        return this.runPositionInput.getAttribute('value');
    }

    async setReturnedDeliveryDataInput(returnedDeliveryData) {
        await this.returnedDeliveryDataInput.sendKeys(returnedDeliveryData);
    }

    async getReturnedDeliveryDataInput() {
        return this.returnedDeliveryDataInput.getAttribute('value');
    }

    async setConfirmedDeliveryTimeInput(confirmedDeliveryTime) {
        await this.confirmedDeliveryTimeInput.sendKeys(confirmedDeliveryTime);
    }

    async getConfirmedDeliveryTimeInput() {
        return this.confirmedDeliveryTimeInput.getAttribute('value');
    }

    async setConfirmedReceivedByInput(confirmedReceivedBy) {
        await this.confirmedReceivedByInput.sendKeys(confirmedReceivedBy);
    }

    async getConfirmedReceivedByInput() {
        return this.confirmedReceivedByInput.getAttribute('value');
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

    async packedByPersonSelectLastOption() {
        await this.packedByPersonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async packedByPersonSelectOption(option) {
        await this.packedByPersonSelect.sendKeys(option);
    }

    getPackedByPersonSelect(): ElementFinder {
        return this.packedByPersonSelect;
    }

    async getPackedByPersonSelectedOption() {
        return this.packedByPersonSelect.element(by.css('option:checked')).getText();
    }

    async accountsPersonSelectLastOption() {
        await this.accountsPersonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async accountsPersonSelectOption(option) {
        await this.accountsPersonSelect.sendKeys(option);
    }

    getAccountsPersonSelect(): ElementFinder {
        return this.accountsPersonSelect;
    }

    async getAccountsPersonSelectedOption() {
        return this.accountsPersonSelect.element(by.css('option:checked')).getText();
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

    async billToCustomerSelectLastOption() {
        await this.billToCustomerSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async billToCustomerSelectOption(option) {
        await this.billToCustomerSelect.sendKeys(option);
    }

    getBillToCustomerSelect(): ElementFinder {
        return this.billToCustomerSelect;
    }

    async getBillToCustomerSelectedOption() {
        return this.billToCustomerSelect.element(by.css('option:checked')).getText();
    }

    async deliveryMethodSelectLastOption() {
        await this.deliveryMethodSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async deliveryMethodSelectOption(option) {
        await this.deliveryMethodSelect.sendKeys(option);
    }

    getDeliveryMethodSelect(): ElementFinder {
        return this.deliveryMethodSelect;
    }

    async getDeliveryMethodSelectedOption() {
        return this.deliveryMethodSelect.element(by.css('option:checked')).getText();
    }

    async orderSelectLastOption() {
        await this.orderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async orderSelectOption(option) {
        await this.orderSelect.sendKeys(option);
    }

    getOrderSelect(): ElementFinder {
        return this.orderSelect;
    }

    async getOrderSelectedOption() {
        return this.orderSelect.element(by.css('option:checked')).getText();
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

export class InvoicesDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-invoices-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-invoices'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
