/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ColorsComponentsPage, ColorsDeleteDialog, ColorsUpdatePage } from './colors.page-object';

const expect = chai.expect;

describe('Colors e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let colorsUpdatePage: ColorsUpdatePage;
    let colorsComponentsPage: ColorsComponentsPage;
    let colorsDeleteDialog: ColorsDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Colors', async () => {
        await navBarPage.goToEntity('colors');
        colorsComponentsPage = new ColorsComponentsPage();
        await browser.wait(ec.visibilityOf(colorsComponentsPage.title), 5000);
        expect(await colorsComponentsPage.getTitle()).to.eq('portalApp.colors.home.title');
    });

    it('should load create Colors page', async () => {
        await colorsComponentsPage.clickOnCreateButton();
        colorsUpdatePage = new ColorsUpdatePage();
        expect(await colorsUpdatePage.getPageTitle()).to.eq('portalApp.colors.home.createOrEditLabel');
        await colorsUpdatePage.cancel();
    });

    it('should create and save Colors', async () => {
        const nbButtonsBeforeCreate = await colorsComponentsPage.countDeleteButtons();

        await colorsComponentsPage.clickOnCreateButton();
        await promise.all([
            colorsUpdatePage.setColorNameInput('colorName'),
            colorsUpdatePage.setValidFromInput('2000-12-31'),
            colorsUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await colorsUpdatePage.getColorNameInput()).to.eq('colorName');
        expect(await colorsUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await colorsUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await colorsUpdatePage.save();
        expect(await colorsUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await colorsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Colors', async () => {
        const nbButtonsBeforeDelete = await colorsComponentsPage.countDeleteButtons();
        await colorsComponentsPage.clickOnLastDeleteButton();

        colorsDeleteDialog = new ColorsDeleteDialog();
        expect(await colorsDeleteDialog.getDialogTitle()).to.eq('portalApp.colors.delete.question');
        await colorsDeleteDialog.clickOnConfirmButton();

        expect(await colorsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
