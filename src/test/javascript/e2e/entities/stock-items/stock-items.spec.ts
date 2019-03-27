/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { StockItemsComponentsPage, StockItemsDeleteDialog, StockItemsUpdatePage } from './stock-items.page-object';

const expect = chai.expect;

describe('StockItems e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let stockItemsUpdatePage: StockItemsUpdatePage;
    let stockItemsComponentsPage: StockItemsComponentsPage;
    let stockItemsDeleteDialog: StockItemsDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load StockItems', async () => {
        await navBarPage.goToEntity('stock-items');
        stockItemsComponentsPage = new StockItemsComponentsPage();
        await browser.wait(ec.visibilityOf(stockItemsComponentsPage.title), 5000);
        expect(await stockItemsComponentsPage.getTitle()).to.eq('portalApp.stockItems.home.title');
    });

    it('should load create StockItems page', async () => {
        await stockItemsComponentsPage.clickOnCreateButton();
        stockItemsUpdatePage = new StockItemsUpdatePage();
        expect(await stockItemsUpdatePage.getPageTitle()).to.eq('portalApp.stockItems.home.createOrEditLabel');
        await stockItemsUpdatePage.cancel();
    });

    it('should create and save StockItems', async () => {
        const nbButtonsBeforeCreate = await stockItemsComponentsPage.countDeleteButtons();

        await stockItemsComponentsPage.clickOnCreateButton();
        await promise.all([
            stockItemsUpdatePage.setStockItemNameInput('stockItemName'),
            stockItemsUpdatePage.setBrandInput('brand'),
            stockItemsUpdatePage.setSizeInput('size'),
            stockItemsUpdatePage.setLeadTimeDaysInput('5'),
            stockItemsUpdatePage.setQuantityPerOuterInput('5'),
            stockItemsUpdatePage.setBarcodeInput('barcode'),
            stockItemsUpdatePage.setTaxRateInput('5'),
            stockItemsUpdatePage.setUnitPriceInput('5'),
            stockItemsUpdatePage.setRecommendedRetailPriceInput('5'),
            stockItemsUpdatePage.setTypicalWeightPerUnitInput('5'),
            stockItemsUpdatePage.setMarketingCommentsInput('marketingComments'),
            stockItemsUpdatePage.setInternalCommentsInput('internalComments'),
            stockItemsUpdatePage.setPhotoInput('photo'),
            stockItemsUpdatePage.setCustomFieldsInput('customFields'),
            stockItemsUpdatePage.setTagsInput('tags'),
            stockItemsUpdatePage.setSearchDetailsInput('searchDetails'),
            stockItemsUpdatePage.setValidFromInput('2000-12-31'),
            stockItemsUpdatePage.setValidToInput('2000-12-31'),
            stockItemsUpdatePage.productSelectLastOption(),
            stockItemsUpdatePage.unitPackageSelectLastOption(),
            stockItemsUpdatePage.outerPackageSelectLastOption(),
            stockItemsUpdatePage.supplierSelectLastOption(),
            stockItemsUpdatePage.colorSelectLastOption()
        ]);
        expect(await stockItemsUpdatePage.getStockItemNameInput()).to.eq('stockItemName');
        expect(await stockItemsUpdatePage.getBrandInput()).to.eq('brand');
        expect(await stockItemsUpdatePage.getSizeInput()).to.eq('size');
        expect(await stockItemsUpdatePage.getLeadTimeDaysInput()).to.eq('5');
        expect(await stockItemsUpdatePage.getQuantityPerOuterInput()).to.eq('5');
        const selectedIsChillerStock = stockItemsUpdatePage.getIsChillerStockInput();
        if (await selectedIsChillerStock.isSelected()) {
            await stockItemsUpdatePage.getIsChillerStockInput().click();
            expect(await stockItemsUpdatePage.getIsChillerStockInput().isSelected()).to.be.false;
        } else {
            await stockItemsUpdatePage.getIsChillerStockInput().click();
            expect(await stockItemsUpdatePage.getIsChillerStockInput().isSelected()).to.be.true;
        }
        expect(await stockItemsUpdatePage.getBarcodeInput()).to.eq('barcode');
        expect(await stockItemsUpdatePage.getTaxRateInput()).to.eq('5');
        expect(await stockItemsUpdatePage.getUnitPriceInput()).to.eq('5');
        expect(await stockItemsUpdatePage.getRecommendedRetailPriceInput()).to.eq('5');
        expect(await stockItemsUpdatePage.getTypicalWeightPerUnitInput()).to.eq('5');
        expect(await stockItemsUpdatePage.getMarketingCommentsInput()).to.eq('marketingComments');
        expect(await stockItemsUpdatePage.getInternalCommentsInput()).to.eq('internalComments');
        expect(await stockItemsUpdatePage.getPhotoInput()).to.eq('photo');
        expect(await stockItemsUpdatePage.getCustomFieldsInput()).to.eq('customFields');
        expect(await stockItemsUpdatePage.getTagsInput()).to.eq('tags');
        expect(await stockItemsUpdatePage.getSearchDetailsInput()).to.eq('searchDetails');
        expect(await stockItemsUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await stockItemsUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await stockItemsUpdatePage.save();
        expect(await stockItemsUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await stockItemsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last StockItems', async () => {
        const nbButtonsBeforeDelete = await stockItemsComponentsPage.countDeleteButtons();
        await stockItemsComponentsPage.clickOnLastDeleteButton();

        stockItemsDeleteDialog = new StockItemsDeleteDialog();
        expect(await stockItemsDeleteDialog.getDialogTitle()).to.eq('portalApp.stockItems.delete.question');
        await stockItemsDeleteDialog.clickOnConfirmButton();

        expect(await stockItemsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
