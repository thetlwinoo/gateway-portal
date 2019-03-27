import { element, by, ElementFinder } from 'protractor';

export class SystemParametersComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-system-parameters div table .btn-danger'));
    title = element.all(by.css('jhi-system-parameters div h2#page-heading span')).first();

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

export class SystemParametersUpdatePage {
    pageTitle = element(by.id('jhi-system-parameters-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    deliveryAddressLine1Input = element(by.id('field_deliveryAddressLine1'));
    deliveryAddressLine2Input = element(by.id('field_deliveryAddressLine2'));
    deliveryPostalCodeInput = element(by.id('field_deliveryPostalCode'));
    deliveryLocationInput = element(by.id('field_deliveryLocation'));
    postalAddressLine1Input = element(by.id('field_postalAddressLine1'));
    postalAddressLine2Input = element(by.id('field_postalAddressLine2'));
    postalPostalCodeInput = element(by.id('field_postalPostalCode'));
    applicationSettingsInput = element(by.id('field_applicationSettings'));
    deliveryCitySelect = element(by.id('field_deliveryCity'));
    postalCitySelect = element(by.id('field_postalCity'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setDeliveryAddressLine1Input(deliveryAddressLine1) {
        await this.deliveryAddressLine1Input.sendKeys(deliveryAddressLine1);
    }

    async getDeliveryAddressLine1Input() {
        return this.deliveryAddressLine1Input.getAttribute('value');
    }

    async setDeliveryAddressLine2Input(deliveryAddressLine2) {
        await this.deliveryAddressLine2Input.sendKeys(deliveryAddressLine2);
    }

    async getDeliveryAddressLine2Input() {
        return this.deliveryAddressLine2Input.getAttribute('value');
    }

    async setDeliveryPostalCodeInput(deliveryPostalCode) {
        await this.deliveryPostalCodeInput.sendKeys(deliveryPostalCode);
    }

    async getDeliveryPostalCodeInput() {
        return this.deliveryPostalCodeInput.getAttribute('value');
    }

    async setDeliveryLocationInput(deliveryLocation) {
        await this.deliveryLocationInput.sendKeys(deliveryLocation);
    }

    async getDeliveryLocationInput() {
        return this.deliveryLocationInput.getAttribute('value');
    }

    async setPostalAddressLine1Input(postalAddressLine1) {
        await this.postalAddressLine1Input.sendKeys(postalAddressLine1);
    }

    async getPostalAddressLine1Input() {
        return this.postalAddressLine1Input.getAttribute('value');
    }

    async setPostalAddressLine2Input(postalAddressLine2) {
        await this.postalAddressLine2Input.sendKeys(postalAddressLine2);
    }

    async getPostalAddressLine2Input() {
        return this.postalAddressLine2Input.getAttribute('value');
    }

    async setPostalPostalCodeInput(postalPostalCode) {
        await this.postalPostalCodeInput.sendKeys(postalPostalCode);
    }

    async getPostalPostalCodeInput() {
        return this.postalPostalCodeInput.getAttribute('value');
    }

    async setApplicationSettingsInput(applicationSettings) {
        await this.applicationSettingsInput.sendKeys(applicationSettings);
    }

    async getApplicationSettingsInput() {
        return this.applicationSettingsInput.getAttribute('value');
    }

    async deliveryCitySelectLastOption() {
        await this.deliveryCitySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async deliveryCitySelectOption(option) {
        await this.deliveryCitySelect.sendKeys(option);
    }

    getDeliveryCitySelect(): ElementFinder {
        return this.deliveryCitySelect;
    }

    async getDeliveryCitySelectedOption() {
        return this.deliveryCitySelect.element(by.css('option:checked')).getText();
    }

    async postalCitySelectLastOption() {
        await this.postalCitySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async postalCitySelectOption(option) {
        await this.postalCitySelect.sendKeys(option);
    }

    getPostalCitySelect(): ElementFinder {
        return this.postalCitySelect;
    }

    async getPostalCitySelectedOption() {
        return this.postalCitySelect.element(by.css('option:checked')).getText();
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

export class SystemParametersDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-systemParameters-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-systemParameters'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
