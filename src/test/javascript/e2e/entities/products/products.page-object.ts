import { element, by, ElementFinder } from 'protractor';

export class ProductsComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-products div table .btn-danger'));
    title = element.all(by.css('jhi-products div h2#page-heading span')).first();

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

export class ProductsUpdatePage {
    pageTitle = element(by.id('jhi-products-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    productNameInput = element(by.id('field_productName'));
    makeFlagInput = element(by.id('field_makeFlag'));
    finishedGoodsFlagInput = element(by.id('field_finishedGoodsFlag'));
    colorInput = element(by.id('field_color'));
    safetyStockLevelInput = element(by.id('field_safetyStockLevel'));
    reorderPointInput = element(by.id('field_reorderPoint'));
    standardCostInput = element(by.id('field_standardCost'));
    listPriceInput = element(by.id('field_listPrice'));
    sizeInput = element(by.id('field_size'));
    weightInput = element(by.id('field_weight'));
    daysToManufactureInput = element(by.id('field_daysToManufacture'));
    productLineInput = element(by.id('field_productLine'));
    classTypeInput = element(by.id('field_classType'));
    styleInput = element(by.id('field_style'));
    sellStartDateInput = element(by.id('field_sellStartDate'));
    sellEndDateInput = element(by.id('field_sellEndDate'));
    discontinuedDateInput = element(by.id('field_discontinuedDate'));
    productSubCategorySelect = element(by.id('field_productSubCategory'));
    sizeUnitMeasureCodeSelect = element(by.id('field_sizeUnitMeasureCode'));
    weightUnitMeasureCodeSelect = element(by.id('field_weightUnitMeasureCode'));
    productModelSelect = element(by.id('field_productModel'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setProductNameInput(productName) {
        await this.productNameInput.sendKeys(productName);
    }

    async getProductNameInput() {
        return this.productNameInput.getAttribute('value');
    }

    getMakeFlagInput() {
        return this.makeFlagInput;
    }
    getFinishedGoodsFlagInput() {
        return this.finishedGoodsFlagInput;
    }
    async setColorInput(color) {
        await this.colorInput.sendKeys(color);
    }

    async getColorInput() {
        return this.colorInput.getAttribute('value');
    }

    async setSafetyStockLevelInput(safetyStockLevel) {
        await this.safetyStockLevelInput.sendKeys(safetyStockLevel);
    }

    async getSafetyStockLevelInput() {
        return this.safetyStockLevelInput.getAttribute('value');
    }

    async setReorderPointInput(reorderPoint) {
        await this.reorderPointInput.sendKeys(reorderPoint);
    }

    async getReorderPointInput() {
        return this.reorderPointInput.getAttribute('value');
    }

    async setStandardCostInput(standardCost) {
        await this.standardCostInput.sendKeys(standardCost);
    }

    async getStandardCostInput() {
        return this.standardCostInput.getAttribute('value');
    }

    async setListPriceInput(listPrice) {
        await this.listPriceInput.sendKeys(listPrice);
    }

    async getListPriceInput() {
        return this.listPriceInput.getAttribute('value');
    }

    async setSizeInput(size) {
        await this.sizeInput.sendKeys(size);
    }

    async getSizeInput() {
        return this.sizeInput.getAttribute('value');
    }

    async setWeightInput(weight) {
        await this.weightInput.sendKeys(weight);
    }

    async getWeightInput() {
        return this.weightInput.getAttribute('value');
    }

    async setDaysToManufactureInput(daysToManufacture) {
        await this.daysToManufactureInput.sendKeys(daysToManufacture);
    }

    async getDaysToManufactureInput() {
        return this.daysToManufactureInput.getAttribute('value');
    }

    async setProductLineInput(productLine) {
        await this.productLineInput.sendKeys(productLine);
    }

    async getProductLineInput() {
        return this.productLineInput.getAttribute('value');
    }

    async setClassTypeInput(classType) {
        await this.classTypeInput.sendKeys(classType);
    }

    async getClassTypeInput() {
        return this.classTypeInput.getAttribute('value');
    }

    async setStyleInput(style) {
        await this.styleInput.sendKeys(style);
    }

    async getStyleInput() {
        return this.styleInput.getAttribute('value');
    }

    async setSellStartDateInput(sellStartDate) {
        await this.sellStartDateInput.sendKeys(sellStartDate);
    }

    async getSellStartDateInput() {
        return this.sellStartDateInput.getAttribute('value');
    }

    async setSellEndDateInput(sellEndDate) {
        await this.sellEndDateInput.sendKeys(sellEndDate);
    }

    async getSellEndDateInput() {
        return this.sellEndDateInput.getAttribute('value');
    }

    async setDiscontinuedDateInput(discontinuedDate) {
        await this.discontinuedDateInput.sendKeys(discontinuedDate);
    }

    async getDiscontinuedDateInput() {
        return this.discontinuedDateInput.getAttribute('value');
    }

    async productSubCategorySelectLastOption() {
        await this.productSubCategorySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async productSubCategorySelectOption(option) {
        await this.productSubCategorySelect.sendKeys(option);
    }

    getProductSubCategorySelect(): ElementFinder {
        return this.productSubCategorySelect;
    }

    async getProductSubCategorySelectedOption() {
        return this.productSubCategorySelect.element(by.css('option:checked')).getText();
    }

    async sizeUnitMeasureCodeSelectLastOption() {
        await this.sizeUnitMeasureCodeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async sizeUnitMeasureCodeSelectOption(option) {
        await this.sizeUnitMeasureCodeSelect.sendKeys(option);
    }

    getSizeUnitMeasureCodeSelect(): ElementFinder {
        return this.sizeUnitMeasureCodeSelect;
    }

    async getSizeUnitMeasureCodeSelectedOption() {
        return this.sizeUnitMeasureCodeSelect.element(by.css('option:checked')).getText();
    }

    async weightUnitMeasureCodeSelectLastOption() {
        await this.weightUnitMeasureCodeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async weightUnitMeasureCodeSelectOption(option) {
        await this.weightUnitMeasureCodeSelect.sendKeys(option);
    }

    getWeightUnitMeasureCodeSelect(): ElementFinder {
        return this.weightUnitMeasureCodeSelect;
    }

    async getWeightUnitMeasureCodeSelectedOption() {
        return this.weightUnitMeasureCodeSelect.element(by.css('option:checked')).getText();
    }

    async productModelSelectLastOption() {
        await this.productModelSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async productModelSelectOption(option) {
        await this.productModelSelect.sendKeys(option);
    }

    getProductModelSelect(): ElementFinder {
        return this.productModelSelect;
    }

    async getProductModelSelectedOption() {
        return this.productModelSelect.element(by.css('option:checked')).getText();
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

export class ProductsDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-products-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-products'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
