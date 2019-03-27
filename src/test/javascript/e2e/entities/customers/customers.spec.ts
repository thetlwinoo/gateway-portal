/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CustomersComponentsPage, CustomersDeleteDialog, CustomersUpdatePage } from './customers.page-object';

const expect = chai.expect;

describe('Customers e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let customersUpdatePage: CustomersUpdatePage;
    let customersComponentsPage: CustomersComponentsPage;
    let customersDeleteDialog: CustomersDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Customers', async () => {
        await navBarPage.goToEntity('customers');
        customersComponentsPage = new CustomersComponentsPage();
        await browser.wait(ec.visibilityOf(customersComponentsPage.title), 5000);
        expect(await customersComponentsPage.getTitle()).to.eq('portalApp.customers.home.title');
    });

    it('should load create Customers page', async () => {
        await customersComponentsPage.clickOnCreateButton();
        customersUpdatePage = new CustomersUpdatePage();
        expect(await customersUpdatePage.getPageTitle()).to.eq('portalApp.customers.home.createOrEditLabel');
        await customersUpdatePage.cancel();
    });

    it('should create and save Customers', async () => {
        const nbButtonsBeforeCreate = await customersComponentsPage.countDeleteButtons();

        await customersComponentsPage.clickOnCreateButton();
        await promise.all([
            customersUpdatePage.setCustomerNameInput('customerName'),
            customersUpdatePage.setCreditLimitInput('5'),
            customersUpdatePage.setAccountOpenedDateInput('2000-12-31'),
            customersUpdatePage.setStandardDiscountPercentageInput('5'),
            customersUpdatePage.setPaymentDaysInput('5'),
            customersUpdatePage.setPhoneNumberInput('phoneNumber'),
            customersUpdatePage.setFaxNumberInput('faxNumber'),
            customersUpdatePage.setDeliveryRunInput('deliveryRun'),
            customersUpdatePage.setRunPositionInput('runPosition'),
            customersUpdatePage.setWebsiteURLInput('websiteURL'),
            customersUpdatePage.setDeliveryAddressLine1Input('deliveryAddressLine1'),
            customersUpdatePage.setDeliveryAddressLine2Input('deliveryAddressLine2'),
            customersUpdatePage.setDeliveryPostalCodeInput('deliveryPostalCode'),
            customersUpdatePage.setDeliveryLocationInput('deliveryLocation'),
            customersUpdatePage.setPostalAddressLine1Input('postalAddressLine1'),
            customersUpdatePage.setPostalAddressLine2Input('postalAddressLine2'),
            customersUpdatePage.setPostalPostalCodeInput('postalPostalCode'),
            customersUpdatePage.setValidFromInput('2000-12-31'),
            customersUpdatePage.setValidToInput('2000-12-31'),
            customersUpdatePage.primaryContactPersonSelectLastOption(),
            customersUpdatePage.alternateContactPersonSelectLastOption(),
            customersUpdatePage.customerCategorySelectLastOption(),
            customersUpdatePage.buyingGroupSelectLastOption(),
            customersUpdatePage.billToCustomerSelectLastOption(),
            customersUpdatePage.deliveryCitySelectLastOption(),
            customersUpdatePage.postalCitySelectLastOption(),
            customersUpdatePage.deliveryMethodSelectLastOption()
        ]);
        expect(await customersUpdatePage.getCustomerNameInput()).to.eq('customerName');
        expect(await customersUpdatePage.getCreditLimitInput()).to.eq('5');
        expect(await customersUpdatePage.getAccountOpenedDateInput()).to.eq('2000-12-31');
        expect(await customersUpdatePage.getStandardDiscountPercentageInput()).to.eq('5');
        const selectedIsStatementSent = customersUpdatePage.getIsStatementSentInput();
        if (await selectedIsStatementSent.isSelected()) {
            await customersUpdatePage.getIsStatementSentInput().click();
            expect(await customersUpdatePage.getIsStatementSentInput().isSelected()).to.be.false;
        } else {
            await customersUpdatePage.getIsStatementSentInput().click();
            expect(await customersUpdatePage.getIsStatementSentInput().isSelected()).to.be.true;
        }
        const selectedIsOnCreditHold = customersUpdatePage.getIsOnCreditHoldInput();
        if (await selectedIsOnCreditHold.isSelected()) {
            await customersUpdatePage.getIsOnCreditHoldInput().click();
            expect(await customersUpdatePage.getIsOnCreditHoldInput().isSelected()).to.be.false;
        } else {
            await customersUpdatePage.getIsOnCreditHoldInput().click();
            expect(await customersUpdatePage.getIsOnCreditHoldInput().isSelected()).to.be.true;
        }
        expect(await customersUpdatePage.getPaymentDaysInput()).to.eq('5');
        expect(await customersUpdatePage.getPhoneNumberInput()).to.eq('phoneNumber');
        expect(await customersUpdatePage.getFaxNumberInput()).to.eq('faxNumber');
        expect(await customersUpdatePage.getDeliveryRunInput()).to.eq('deliveryRun');
        expect(await customersUpdatePage.getRunPositionInput()).to.eq('runPosition');
        expect(await customersUpdatePage.getWebsiteURLInput()).to.eq('websiteURL');
        expect(await customersUpdatePage.getDeliveryAddressLine1Input()).to.eq('deliveryAddressLine1');
        expect(await customersUpdatePage.getDeliveryAddressLine2Input()).to.eq('deliveryAddressLine2');
        expect(await customersUpdatePage.getDeliveryPostalCodeInput()).to.eq('deliveryPostalCode');
        expect(await customersUpdatePage.getDeliveryLocationInput()).to.eq('deliveryLocation');
        expect(await customersUpdatePage.getPostalAddressLine1Input()).to.eq('postalAddressLine1');
        expect(await customersUpdatePage.getPostalAddressLine2Input()).to.eq('postalAddressLine2');
        expect(await customersUpdatePage.getPostalPostalCodeInput()).to.eq('postalPostalCode');
        expect(await customersUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await customersUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await customersUpdatePage.save();
        expect(await customersUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await customersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Customers', async () => {
        const nbButtonsBeforeDelete = await customersComponentsPage.countDeleteButtons();
        await customersComponentsPage.clickOnLastDeleteButton();

        customersDeleteDialog = new CustomersDeleteDialog();
        expect(await customersDeleteDialog.getDialogTitle()).to.eq('portalApp.customers.delete.question');
        await customersDeleteDialog.clickOnConfirmButton();

        expect(await customersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
