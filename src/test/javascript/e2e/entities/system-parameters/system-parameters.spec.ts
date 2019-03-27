/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SystemParametersComponentsPage, SystemParametersDeleteDialog, SystemParametersUpdatePage } from './system-parameters.page-object';

const expect = chai.expect;

describe('SystemParameters e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let systemParametersUpdatePage: SystemParametersUpdatePage;
    let systemParametersComponentsPage: SystemParametersComponentsPage;
    let systemParametersDeleteDialog: SystemParametersDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load SystemParameters', async () => {
        await navBarPage.goToEntity('system-parameters');
        systemParametersComponentsPage = new SystemParametersComponentsPage();
        await browser.wait(ec.visibilityOf(systemParametersComponentsPage.title), 5000);
        expect(await systemParametersComponentsPage.getTitle()).to.eq('portalApp.systemParameters.home.title');
    });

    it('should load create SystemParameters page', async () => {
        await systemParametersComponentsPage.clickOnCreateButton();
        systemParametersUpdatePage = new SystemParametersUpdatePage();
        expect(await systemParametersUpdatePage.getPageTitle()).to.eq('portalApp.systemParameters.home.createOrEditLabel');
        await systemParametersUpdatePage.cancel();
    });

    it('should create and save SystemParameters', async () => {
        const nbButtonsBeforeCreate = await systemParametersComponentsPage.countDeleteButtons();

        await systemParametersComponentsPage.clickOnCreateButton();
        await promise.all([
            systemParametersUpdatePage.setDeliveryAddressLine1Input('deliveryAddressLine1'),
            systemParametersUpdatePage.setDeliveryAddressLine2Input('deliveryAddressLine2'),
            systemParametersUpdatePage.setDeliveryPostalCodeInput('deliveryPostalCode'),
            systemParametersUpdatePage.setDeliveryLocationInput('deliveryLocation'),
            systemParametersUpdatePage.setPostalAddressLine1Input('postalAddressLine1'),
            systemParametersUpdatePage.setPostalAddressLine2Input('postalAddressLine2'),
            systemParametersUpdatePage.setPostalPostalCodeInput('postalPostalCode'),
            systemParametersUpdatePage.setApplicationSettingsInput('applicationSettings'),
            systemParametersUpdatePage.deliveryCitySelectLastOption(),
            systemParametersUpdatePage.postalCitySelectLastOption()
        ]);
        expect(await systemParametersUpdatePage.getDeliveryAddressLine1Input()).to.eq('deliveryAddressLine1');
        expect(await systemParametersUpdatePage.getDeliveryAddressLine2Input()).to.eq('deliveryAddressLine2');
        expect(await systemParametersUpdatePage.getDeliveryPostalCodeInput()).to.eq('deliveryPostalCode');
        expect(await systemParametersUpdatePage.getDeliveryLocationInput()).to.eq('deliveryLocation');
        expect(await systemParametersUpdatePage.getPostalAddressLine1Input()).to.eq('postalAddressLine1');
        expect(await systemParametersUpdatePage.getPostalAddressLine2Input()).to.eq('postalAddressLine2');
        expect(await systemParametersUpdatePage.getPostalPostalCodeInput()).to.eq('postalPostalCode');
        expect(await systemParametersUpdatePage.getApplicationSettingsInput()).to.eq('applicationSettings');
        await systemParametersUpdatePage.save();
        expect(await systemParametersUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await systemParametersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last SystemParameters', async () => {
        const nbButtonsBeforeDelete = await systemParametersComponentsPage.countDeleteButtons();
        await systemParametersComponentsPage.clickOnLastDeleteButton();

        systemParametersDeleteDialog = new SystemParametersDeleteDialog();
        expect(await systemParametersDeleteDialog.getDialogTitle()).to.eq('portalApp.systemParameters.delete.question');
        await systemParametersDeleteDialog.clickOnConfirmButton();

        expect(await systemParametersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
