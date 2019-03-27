/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SuppliersComponentsPage, SuppliersDeleteDialog, SuppliersUpdatePage } from './suppliers.page-object';

const expect = chai.expect;

describe('Suppliers e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let suppliersUpdatePage: SuppliersUpdatePage;
    let suppliersComponentsPage: SuppliersComponentsPage;
    let suppliersDeleteDialog: SuppliersDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Suppliers', async () => {
        await navBarPage.goToEntity('suppliers');
        suppliersComponentsPage = new SuppliersComponentsPage();
        await browser.wait(ec.visibilityOf(suppliersComponentsPage.title), 5000);
        expect(await suppliersComponentsPage.getTitle()).to.eq('portalApp.suppliers.home.title');
    });

    it('should load create Suppliers page', async () => {
        await suppliersComponentsPage.clickOnCreateButton();
        suppliersUpdatePage = new SuppliersUpdatePage();
        expect(await suppliersUpdatePage.getPageTitle()).to.eq('portalApp.suppliers.home.createOrEditLabel');
        await suppliersUpdatePage.cancel();
    });

    it('should create and save Suppliers', async () => {
        const nbButtonsBeforeCreate = await suppliersComponentsPage.countDeleteButtons();

        await suppliersComponentsPage.clickOnCreateButton();
        await promise.all([
            suppliersUpdatePage.setSupplierNameInput('supplierName'),
            suppliersUpdatePage.setSupplierReferenceInput('supplierReference'),
            suppliersUpdatePage.setBankAccountNameInput('bankAccountName'),
            suppliersUpdatePage.setBankAccountBranchInput('bankAccountBranch'),
            suppliersUpdatePage.setBankAccountCodeInput('bankAccountCode'),
            suppliersUpdatePage.setBankAccountNumberInput('bankAccountNumber'),
            suppliersUpdatePage.setBankInternationalCodeInput('bankInternationalCode'),
            suppliersUpdatePage.setPaymentDaysInput('5'),
            suppliersUpdatePage.setInternalCommentsInput('internalComments'),
            suppliersUpdatePage.setPhoneNumberInput('phoneNumber'),
            suppliersUpdatePage.setFaxNumberInput('faxNumber'),
            suppliersUpdatePage.setWebsiteURLInput('websiteURL'),
            suppliersUpdatePage.setDeliveryAddressLine1Input('deliveryAddressLine1'),
            suppliersUpdatePage.setDeliveryAddressLine2Input('deliveryAddressLine2'),
            suppliersUpdatePage.setDeliveryPostalCodeInput('deliveryPostalCode'),
            suppliersUpdatePage.setDeliveryLocationInput('deliveryLocation'),
            suppliersUpdatePage.setPostalAddressLine1Input('postalAddressLine1'),
            suppliersUpdatePage.setPostalAddressLine2Input('postalAddressLine2'),
            suppliersUpdatePage.setPostalPostalCodeInput('postalPostalCode'),
            suppliersUpdatePage.setValidFromInput('2000-12-31'),
            suppliersUpdatePage.setValidToInput('2000-12-31'),
            suppliersUpdatePage.primaryContactPersonSelectLastOption(),
            suppliersUpdatePage.alternateContactPersonSelectLastOption(),
            suppliersUpdatePage.supplierCategorySelectLastOption(),
            suppliersUpdatePage.deliveryMethodSelectLastOption(),
            suppliersUpdatePage.deliveryCitySelectLastOption(),
            suppliersUpdatePage.postalCitySelectLastOption()
        ]);
        expect(await suppliersUpdatePage.getSupplierNameInput()).to.eq('supplierName');
        expect(await suppliersUpdatePage.getSupplierReferenceInput()).to.eq('supplierReference');
        expect(await suppliersUpdatePage.getBankAccountNameInput()).to.eq('bankAccountName');
        expect(await suppliersUpdatePage.getBankAccountBranchInput()).to.eq('bankAccountBranch');
        expect(await suppliersUpdatePage.getBankAccountCodeInput()).to.eq('bankAccountCode');
        expect(await suppliersUpdatePage.getBankAccountNumberInput()).to.eq('bankAccountNumber');
        expect(await suppliersUpdatePage.getBankInternationalCodeInput()).to.eq('bankInternationalCode');
        expect(await suppliersUpdatePage.getPaymentDaysInput()).to.eq('5');
        expect(await suppliersUpdatePage.getInternalCommentsInput()).to.eq('internalComments');
        expect(await suppliersUpdatePage.getPhoneNumberInput()).to.eq('phoneNumber');
        expect(await suppliersUpdatePage.getFaxNumberInput()).to.eq('faxNumber');
        expect(await suppliersUpdatePage.getWebsiteURLInput()).to.eq('websiteURL');
        expect(await suppliersUpdatePage.getDeliveryAddressLine1Input()).to.eq('deliveryAddressLine1');
        expect(await suppliersUpdatePage.getDeliveryAddressLine2Input()).to.eq('deliveryAddressLine2');
        expect(await suppliersUpdatePage.getDeliveryPostalCodeInput()).to.eq('deliveryPostalCode');
        expect(await suppliersUpdatePage.getDeliveryLocationInput()).to.eq('deliveryLocation');
        expect(await suppliersUpdatePage.getPostalAddressLine1Input()).to.eq('postalAddressLine1');
        expect(await suppliersUpdatePage.getPostalAddressLine2Input()).to.eq('postalAddressLine2');
        expect(await suppliersUpdatePage.getPostalPostalCodeInput()).to.eq('postalPostalCode');
        expect(await suppliersUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await suppliersUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await suppliersUpdatePage.save();
        expect(await suppliersUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await suppliersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Suppliers', async () => {
        const nbButtonsBeforeDelete = await suppliersComponentsPage.countDeleteButtons();
        await suppliersComponentsPage.clickOnLastDeleteButton();

        suppliersDeleteDialog = new SuppliersDeleteDialog();
        expect(await suppliersDeleteDialog.getDialogTitle()).to.eq('portalApp.suppliers.delete.question');
        await suppliersDeleteDialog.clickOnConfirmButton();

        expect(await suppliersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
