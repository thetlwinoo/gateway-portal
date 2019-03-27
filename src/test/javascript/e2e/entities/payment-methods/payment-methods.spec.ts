/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PaymentMethodsComponentsPage, PaymentMethodsDeleteDialog, PaymentMethodsUpdatePage } from './payment-methods.page-object';

const expect = chai.expect;

describe('PaymentMethods e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let paymentMethodsUpdatePage: PaymentMethodsUpdatePage;
    let paymentMethodsComponentsPage: PaymentMethodsComponentsPage;
    let paymentMethodsDeleteDialog: PaymentMethodsDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load PaymentMethods', async () => {
        await navBarPage.goToEntity('payment-methods');
        paymentMethodsComponentsPage = new PaymentMethodsComponentsPage();
        await browser.wait(ec.visibilityOf(paymentMethodsComponentsPage.title), 5000);
        expect(await paymentMethodsComponentsPage.getTitle()).to.eq('portalApp.paymentMethods.home.title');
    });

    it('should load create PaymentMethods page', async () => {
        await paymentMethodsComponentsPage.clickOnCreateButton();
        paymentMethodsUpdatePage = new PaymentMethodsUpdatePage();
        expect(await paymentMethodsUpdatePage.getPageTitle()).to.eq('portalApp.paymentMethods.home.createOrEditLabel');
        await paymentMethodsUpdatePage.cancel();
    });

    it('should create and save PaymentMethods', async () => {
        const nbButtonsBeforeCreate = await paymentMethodsComponentsPage.countDeleteButtons();

        await paymentMethodsComponentsPage.clickOnCreateButton();
        await promise.all([
            paymentMethodsUpdatePage.setPaymentMethodNameInput('paymentMethodName'),
            paymentMethodsUpdatePage.setValidFromInput('2000-12-31'),
            paymentMethodsUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await paymentMethodsUpdatePage.getPaymentMethodNameInput()).to.eq('paymentMethodName');
        expect(await paymentMethodsUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await paymentMethodsUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await paymentMethodsUpdatePage.save();
        expect(await paymentMethodsUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await paymentMethodsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last PaymentMethods', async () => {
        const nbButtonsBeforeDelete = await paymentMethodsComponentsPage.countDeleteButtons();
        await paymentMethodsComponentsPage.clickOnLastDeleteButton();

        paymentMethodsDeleteDialog = new PaymentMethodsDeleteDialog();
        expect(await paymentMethodsDeleteDialog.getDialogTitle()).to.eq('portalApp.paymentMethods.delete.question');
        await paymentMethodsDeleteDialog.clickOnConfirmButton();

        expect(await paymentMethodsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
