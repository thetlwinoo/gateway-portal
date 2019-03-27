/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { DeliveryMethodsComponentsPage, DeliveryMethodsDeleteDialog, DeliveryMethodsUpdatePage } from './delivery-methods.page-object';

const expect = chai.expect;

describe('DeliveryMethods e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let deliveryMethodsUpdatePage: DeliveryMethodsUpdatePage;
    let deliveryMethodsComponentsPage: DeliveryMethodsComponentsPage;
    let deliveryMethodsDeleteDialog: DeliveryMethodsDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load DeliveryMethods', async () => {
        await navBarPage.goToEntity('delivery-methods');
        deliveryMethodsComponentsPage = new DeliveryMethodsComponentsPage();
        await browser.wait(ec.visibilityOf(deliveryMethodsComponentsPage.title), 5000);
        expect(await deliveryMethodsComponentsPage.getTitle()).to.eq('portalApp.deliveryMethods.home.title');
    });

    it('should load create DeliveryMethods page', async () => {
        await deliveryMethodsComponentsPage.clickOnCreateButton();
        deliveryMethodsUpdatePage = new DeliveryMethodsUpdatePage();
        expect(await deliveryMethodsUpdatePage.getPageTitle()).to.eq('portalApp.deliveryMethods.home.createOrEditLabel');
        await deliveryMethodsUpdatePage.cancel();
    });

    it('should create and save DeliveryMethods', async () => {
        const nbButtonsBeforeCreate = await deliveryMethodsComponentsPage.countDeleteButtons();

        await deliveryMethodsComponentsPage.clickOnCreateButton();
        await promise.all([
            deliveryMethodsUpdatePage.setDeliveryMethodNameInput('deliveryMethodName'),
            deliveryMethodsUpdatePage.setValidFromInput('2000-12-31'),
            deliveryMethodsUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await deliveryMethodsUpdatePage.getDeliveryMethodNameInput()).to.eq('deliveryMethodName');
        expect(await deliveryMethodsUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await deliveryMethodsUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await deliveryMethodsUpdatePage.save();
        expect(await deliveryMethodsUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await deliveryMethodsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last DeliveryMethods', async () => {
        const nbButtonsBeforeDelete = await deliveryMethodsComponentsPage.countDeleteButtons();
        await deliveryMethodsComponentsPage.clickOnLastDeleteButton();

        deliveryMethodsDeleteDialog = new DeliveryMethodsDeleteDialog();
        expect(await deliveryMethodsDeleteDialog.getDialogTitle()).to.eq('portalApp.deliveryMethods.delete.question');
        await deliveryMethodsDeleteDialog.clickOnConfirmButton();

        expect(await deliveryMethodsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
