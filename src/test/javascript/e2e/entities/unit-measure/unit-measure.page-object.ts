import { element, by, ElementFinder } from 'protractor';

export class UnitMeasureComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-unit-measure div table .btn-danger'));
    title = element.all(by.css('jhi-unit-measure div h2#page-heading span')).first();

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

export class UnitMeasureUpdatePage {
    pageTitle = element(by.id('jhi-unit-measure-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    unitMeasureCodeInput = element(by.id('field_unitMeasureCode'));
    unitMeasureNameInput = element(by.id('field_unitMeasureName'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setUnitMeasureCodeInput(unitMeasureCode) {
        await this.unitMeasureCodeInput.sendKeys(unitMeasureCode);
    }

    async getUnitMeasureCodeInput() {
        return this.unitMeasureCodeInput.getAttribute('value');
    }

    async setUnitMeasureNameInput(unitMeasureName) {
        await this.unitMeasureNameInput.sendKeys(unitMeasureName);
    }

    async getUnitMeasureNameInput() {
        return this.unitMeasureNameInput.getAttribute('value');
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

export class UnitMeasureDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-unitMeasure-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-unitMeasure'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
