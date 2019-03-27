import { element, by, ElementFinder } from 'protractor';

export class StockItemsComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-stock-items div table .btn-danger'));
    title = element.all(by.css('jhi-stock-items div h2#page-heading span')).first();

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

export class StockItemsUpdatePage {
    pageTitle = element(by.id('jhi-stock-items-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    stockItemNameInput = element(by.id('field_stockItemName'));
    brandInput = element(by.id('field_brand'));
    sizeInput = element(by.id('field_size'));
    leadTimeDaysInput = element(by.id('field_leadTimeDays'));
    quantityPerOuterInput = element(by.id('field_quantityPerOuter'));
    isChillerStockInput = element(by.id('field_isChillerStock'));
    barcodeInput = element(by.id('field_barcode'));
    taxRateInput = element(by.id('field_taxRate'));
    unitPriceInput = element(by.id('field_unitPrice'));
    recommendedRetailPriceInput = element(by.id('field_recommendedRetailPrice'));
    typicalWeightPerUnitInput = element(by.id('field_typicalWeightPerUnit'));
    marketingCommentsInput = element(by.id('field_marketingComments'));
    internalCommentsInput = element(by.id('field_internalComments'));
    photoInput = element(by.id('field_photo'));
    customFieldsInput = element(by.id('field_customFields'));
    tagsInput = element(by.id('field_tags'));
    searchDetailsInput = element(by.id('field_searchDetails'));
    validFromInput = element(by.id('field_validFrom'));
    validToInput = element(by.id('field_validTo'));
    productSelect = element(by.id('field_product'));
    unitPackageSelect = element(by.id('field_unitPackage'));
    outerPackageSelect = element(by.id('field_outerPackage'));
    supplierSelect = element(by.id('field_supplier'));
    colorSelect = element(by.id('field_color'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setStockItemNameInput(stockItemName) {
        await this.stockItemNameInput.sendKeys(stockItemName);
    }

    async getStockItemNameInput() {
        return this.stockItemNameInput.getAttribute('value');
    }

    async setBrandInput(brand) {
        await this.brandInput.sendKeys(brand);
    }

    async getBrandInput() {
        return this.brandInput.getAttribute('value');
    }

    async setSizeInput(size) {
        await this.sizeInput.sendKeys(size);
    }

    async getSizeInput() {
        return this.sizeInput.getAttribute('value');
    }

    async setLeadTimeDaysInput(leadTimeDays) {
        await this.leadTimeDaysInput.sendKeys(leadTimeDays);
    }

    async getLeadTimeDaysInput() {
        return this.leadTimeDaysInput.getAttribute('value');
    }

    async setQuantityPerOuterInput(quantityPerOuter) {
        await this.quantityPerOuterInput.sendKeys(quantityPerOuter);
    }

    async getQuantityPerOuterInput() {
        return this.quantityPerOuterInput.getAttribute('value');
    }

    getIsChillerStockInput() {
        return this.isChillerStockInput;
    }
    async setBarcodeInput(barcode) {
        await this.barcodeInput.sendKeys(barcode);
    }

    async getBarcodeInput() {
        return this.barcodeInput.getAttribute('value');
    }

    async setTaxRateInput(taxRate) {
        await this.taxRateInput.sendKeys(taxRate);
    }

    async getTaxRateInput() {
        return this.taxRateInput.getAttribute('value');
    }

    async setUnitPriceInput(unitPrice) {
        await this.unitPriceInput.sendKeys(unitPrice);
    }

    async getUnitPriceInput() {
        return this.unitPriceInput.getAttribute('value');
    }

    async setRecommendedRetailPriceInput(recommendedRetailPrice) {
        await this.recommendedRetailPriceInput.sendKeys(recommendedRetailPrice);
    }

    async getRecommendedRetailPriceInput() {
        return this.recommendedRetailPriceInput.getAttribute('value');
    }

    async setTypicalWeightPerUnitInput(typicalWeightPerUnit) {
        await this.typicalWeightPerUnitInput.sendKeys(typicalWeightPerUnit);
    }

    async getTypicalWeightPerUnitInput() {
        return this.typicalWeightPerUnitInput.getAttribute('value');
    }

    async setMarketingCommentsInput(marketingComments) {
        await this.marketingCommentsInput.sendKeys(marketingComments);
    }

    async getMarketingCommentsInput() {
        return this.marketingCommentsInput.getAttribute('value');
    }

    async setInternalCommentsInput(internalComments) {
        await this.internalCommentsInput.sendKeys(internalComments);
    }

    async getInternalCommentsInput() {
        return this.internalCommentsInput.getAttribute('value');
    }

    async setPhotoInput(photo) {
        await this.photoInput.sendKeys(photo);
    }

    async getPhotoInput() {
        return this.photoInput.getAttribute('value');
    }

    async setCustomFieldsInput(customFields) {
        await this.customFieldsInput.sendKeys(customFields);
    }

    async getCustomFieldsInput() {
        return this.customFieldsInput.getAttribute('value');
    }

    async setTagsInput(tags) {
        await this.tagsInput.sendKeys(tags);
    }

    async getTagsInput() {
        return this.tagsInput.getAttribute('value');
    }

    async setSearchDetailsInput(searchDetails) {
        await this.searchDetailsInput.sendKeys(searchDetails);
    }

    async getSearchDetailsInput() {
        return this.searchDetailsInput.getAttribute('value');
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

    async unitPackageSelectLastOption() {
        await this.unitPackageSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async unitPackageSelectOption(option) {
        await this.unitPackageSelect.sendKeys(option);
    }

    getUnitPackageSelect(): ElementFinder {
        return this.unitPackageSelect;
    }

    async getUnitPackageSelectedOption() {
        return this.unitPackageSelect.element(by.css('option:checked')).getText();
    }

    async outerPackageSelectLastOption() {
        await this.outerPackageSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async outerPackageSelectOption(option) {
        await this.outerPackageSelect.sendKeys(option);
    }

    getOuterPackageSelect(): ElementFinder {
        return this.outerPackageSelect;
    }

    async getOuterPackageSelectedOption() {
        return this.outerPackageSelect.element(by.css('option:checked')).getText();
    }

    async supplierSelectLastOption() {
        await this.supplierSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async supplierSelectOption(option) {
        await this.supplierSelect.sendKeys(option);
    }

    getSupplierSelect(): ElementFinder {
        return this.supplierSelect;
    }

    async getSupplierSelectedOption() {
        return this.supplierSelect.element(by.css('option:checked')).getText();
    }

    async colorSelectLastOption() {
        await this.colorSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async colorSelectOption(option) {
        await this.colorSelect.sendKeys(option);
    }

    getColorSelect(): ElementFinder {
        return this.colorSelect;
    }

    async getColorSelectedOption() {
        return this.colorSelect.element(by.css('option:checked')).getText();
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

export class StockItemsDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-stockItems-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-stockItems'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
