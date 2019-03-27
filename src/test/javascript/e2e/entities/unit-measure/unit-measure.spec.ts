/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { UnitMeasureComponentsPage, UnitMeasureDeleteDialog, UnitMeasureUpdatePage } from './unit-measure.page-object';

const expect = chai.expect;

describe('UnitMeasure e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let unitMeasureUpdatePage: UnitMeasureUpdatePage;
    let unitMeasureComponentsPage: UnitMeasureComponentsPage;
    let unitMeasureDeleteDialog: UnitMeasureDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load UnitMeasures', async () => {
        await navBarPage.goToEntity('unit-measure');
        unitMeasureComponentsPage = new UnitMeasureComponentsPage();
        await browser.wait(ec.visibilityOf(unitMeasureComponentsPage.title), 5000);
        expect(await unitMeasureComponentsPage.getTitle()).to.eq('portalApp.unitMeasure.home.title');
    });

    it('should load create UnitMeasure page', async () => {
        await unitMeasureComponentsPage.clickOnCreateButton();
        unitMeasureUpdatePage = new UnitMeasureUpdatePage();
        expect(await unitMeasureUpdatePage.getPageTitle()).to.eq('portalApp.unitMeasure.home.createOrEditLabel');
        await unitMeasureUpdatePage.cancel();
    });

    it('should create and save UnitMeasures', async () => {
        const nbButtonsBeforeCreate = await unitMeasureComponentsPage.countDeleteButtons();

        await unitMeasureComponentsPage.clickOnCreateButton();
        await promise.all([
            unitMeasureUpdatePage.setUnitMeasureCodeInput('unitMeasureCode'),
            unitMeasureUpdatePage.setUnitMeasureNameInput('unitMeasureName')
        ]);
        expect(await unitMeasureUpdatePage.getUnitMeasureCodeInput()).to.eq('unitMeasureCode');
        expect(await unitMeasureUpdatePage.getUnitMeasureNameInput()).to.eq('unitMeasureName');
        await unitMeasureUpdatePage.save();
        expect(await unitMeasureUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await unitMeasureComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last UnitMeasure', async () => {
        const nbButtonsBeforeDelete = await unitMeasureComponentsPage.countDeleteButtons();
        await unitMeasureComponentsPage.clickOnLastDeleteButton();

        unitMeasureDeleteDialog = new UnitMeasureDeleteDialog();
        expect(await unitMeasureDeleteDialog.getDialogTitle()).to.eq('portalApp.unitMeasure.delete.question');
        await unitMeasureDeleteDialog.clickOnConfirmButton();

        expect(await unitMeasureComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
