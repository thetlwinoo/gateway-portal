import { element, by, ElementFinder } from 'protractor';

export class TransactionTypesComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-transaction-types div table .btn-danger'));
    title = element.all(by.css('jhi-transaction-types div h2#page-heading span')).first();

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

export class TransactionTypesUpdatePage {
    pageTitle = element(by.id('jhi-transaction-types-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    transactionTypeNameInput = element(by.id('field_transactionTypeName'));
    validFromInput = element(by.id('field_validFrom'));
    validToInput = element(by.id('field_validTo'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTransactionTypeNameInput(transactionTypeName) {
        await this.transactionTypeNameInput.sendKeys(transactionTypeName);
    }

    async getTransactionTypeNameInput() {
        return this.transactionTypeNameInput.getAttribute('value');
    }

    async setValidFromInput(validFrom) {
        await this.validFromInput.sendKeys(validFrom);
    }

    async getValidFromInput() {
        return this.validFromInput.getAttribute('value');
    }

    async setValidToInput(validTo) {
        await this.validToInput.sendKeys(validTo);
    }

    async getValidToInput() {
        return this.validToInput.getAttribute('value');
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

export class TransactionTypesDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-transactionTypes-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-transactionTypes'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
