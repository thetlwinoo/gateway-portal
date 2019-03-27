/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    ColdRoomTemperaturesComponentsPage,
    ColdRoomTemperaturesDeleteDialog,
    ColdRoomTemperaturesUpdatePage
} from './cold-room-temperatures.page-object';

const expect = chai.expect;

describe('ColdRoomTemperatures e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let coldRoomTemperaturesUpdatePage: ColdRoomTemperaturesUpdatePage;
    let coldRoomTemperaturesComponentsPage: ColdRoomTemperaturesComponentsPage;
    let coldRoomTemperaturesDeleteDialog: ColdRoomTemperaturesDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ColdRoomTemperatures', async () => {
        await navBarPage.goToEntity('cold-room-temperatures');
        coldRoomTemperaturesComponentsPage = new ColdRoomTemperaturesComponentsPage();
        await browser.wait(ec.visibilityOf(coldRoomTemperaturesComponentsPage.title), 5000);
        expect(await coldRoomTemperaturesComponentsPage.getTitle()).to.eq('portalApp.coldRoomTemperatures.home.title');
    });

    it('should load create ColdRoomTemperatures page', async () => {
        await coldRoomTemperaturesComponentsPage.clickOnCreateButton();
        coldRoomTemperaturesUpdatePage = new ColdRoomTemperaturesUpdatePage();
        expect(await coldRoomTemperaturesUpdatePage.getPageTitle()).to.eq('portalApp.coldRoomTemperatures.home.createOrEditLabel');
        await coldRoomTemperaturesUpdatePage.cancel();
    });

    it('should create and save ColdRoomTemperatures', async () => {
        const nbButtonsBeforeCreate = await coldRoomTemperaturesComponentsPage.countDeleteButtons();

        await coldRoomTemperaturesComponentsPage.clickOnCreateButton();
        await promise.all([
            coldRoomTemperaturesUpdatePage.setColdRoomSensorNumberInput('5'),
            coldRoomTemperaturesUpdatePage.setRecordedWhenInput('2000-12-31'),
            coldRoomTemperaturesUpdatePage.setTemperatureInput('5'),
            coldRoomTemperaturesUpdatePage.setValidFromInput('2000-12-31'),
            coldRoomTemperaturesUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await coldRoomTemperaturesUpdatePage.getColdRoomSensorNumberInput()).to.eq('5');
        expect(await coldRoomTemperaturesUpdatePage.getRecordedWhenInput()).to.eq('2000-12-31');
        expect(await coldRoomTemperaturesUpdatePage.getTemperatureInput()).to.eq('5');
        expect(await coldRoomTemperaturesUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await coldRoomTemperaturesUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await coldRoomTemperaturesUpdatePage.save();
        expect(await coldRoomTemperaturesUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await coldRoomTemperaturesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ColdRoomTemperatures', async () => {
        const nbButtonsBeforeDelete = await coldRoomTemperaturesComponentsPage.countDeleteButtons();
        await coldRoomTemperaturesComponentsPage.clickOnLastDeleteButton();

        coldRoomTemperaturesDeleteDialog = new ColdRoomTemperaturesDeleteDialog();
        expect(await coldRoomTemperaturesDeleteDialog.getDialogTitle()).to.eq('portalApp.coldRoomTemperatures.delete.question');
        await coldRoomTemperaturesDeleteDialog.clickOnConfirmButton();

        expect(await coldRoomTemperaturesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
