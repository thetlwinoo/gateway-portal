/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    SupplierCategoriesComponentsPage,
    SupplierCategoriesDeleteDialog,
    SupplierCategoriesUpdatePage
} from './supplier-categories.page-object';

const expect = chai.expect;

describe('SupplierCategories e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let supplierCategoriesUpdatePage: SupplierCategoriesUpdatePage;
    let supplierCategoriesComponentsPage: SupplierCategoriesComponentsPage;
    let supplierCategoriesDeleteDialog: SupplierCategoriesDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load SupplierCategories', async () => {
        await navBarPage.goToEntity('supplier-categories');
        supplierCategoriesComponentsPage = new SupplierCategoriesComponentsPage();
        await browser.wait(ec.visibilityOf(supplierCategoriesComponentsPage.title), 5000);
        expect(await supplierCategoriesComponentsPage.getTitle()).to.eq('portalApp.supplierCategories.home.title');
    });

    it('should load create SupplierCategories page', async () => {
        await supplierCategoriesComponentsPage.clickOnCreateButton();
        supplierCategoriesUpdatePage = new SupplierCategoriesUpdatePage();
        expect(await supplierCategoriesUpdatePage.getPageTitle()).to.eq('portalApp.supplierCategories.home.createOrEditLabel');
        await supplierCategoriesUpdatePage.cancel();
    });

    it('should create and save SupplierCategories', async () => {
        const nbButtonsBeforeCreate = await supplierCategoriesComponentsPage.countDeleteButtons();

        await supplierCategoriesComponentsPage.clickOnCreateButton();
        await promise.all([
            supplierCategoriesUpdatePage.setSupplierCategoryNameInput('supplierCategoryName'),
            supplierCategoriesUpdatePage.setValidFromInput('2000-12-31'),
            supplierCategoriesUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await supplierCategoriesUpdatePage.getSupplierCategoryNameInput()).to.eq('supplierCategoryName');
        expect(await supplierCategoriesUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await supplierCategoriesUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await supplierCategoriesUpdatePage.save();
        expect(await supplierCategoriesUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await supplierCategoriesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last SupplierCategories', async () => {
        const nbButtonsBeforeDelete = await supplierCategoriesComponentsPage.countDeleteButtons();
        await supplierCategoriesComponentsPage.clickOnLastDeleteButton();

        supplierCategoriesDeleteDialog = new SupplierCategoriesDeleteDialog();
        expect(await supplierCategoriesDeleteDialog.getDialogTitle()).to.eq('portalApp.supplierCategories.delete.question');
        await supplierCategoriesDeleteDialog.clickOnConfirmButton();

        expect(await supplierCategoriesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
