/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PackageTypesComponentsPage, PackageTypesDeleteDialog, PackageTypesUpdatePage } from './package-types.page-object';

const expect = chai.expect;

describe('PackageTypes e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let packageTypesUpdatePage: PackageTypesUpdatePage;
    let packageTypesComponentsPage: PackageTypesComponentsPage;
    let packageTypesDeleteDialog: PackageTypesDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load PackageTypes', async () => {
        await navBarPage.goToEntity('package-types');
        packageTypesComponentsPage = new PackageTypesComponentsPage();
        await browser.wait(ec.visibilityOf(packageTypesComponentsPage.title), 5000);
        expect(await packageTypesComponentsPage.getTitle()).to.eq('portalApp.packageTypes.home.title');
    });

    it('should load create PackageTypes page', async () => {
        await packageTypesComponentsPage.clickOnCreateButton();
        packageTypesUpdatePage = new PackageTypesUpdatePage();
        expect(await packageTypesUpdatePage.getPageTitle()).to.eq('portalApp.packageTypes.home.createOrEditLabel');
        await packageTypesUpdatePage.cancel();
    });

    it('should create and save PackageTypes', async () => {
        const nbButtonsBeforeCreate = await packageTypesComponentsPage.countDeleteButtons();

        await packageTypesComponentsPage.clickOnCreateButton();
        await promise.all([
            packageTypesUpdatePage.setPackageTypeNameInput('packageTypeName'),
            packageTypesUpdatePage.setValidFromInput('2000-12-31'),
            packageTypesUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await packageTypesUpdatePage.getPackageTypeNameInput()).to.eq('packageTypeName');
        expect(await packageTypesUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await packageTypesUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await packageTypesUpdatePage.save();
        expect(await packageTypesUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await packageTypesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last PackageTypes', async () => {
        const nbButtonsBeforeDelete = await packageTypesComponentsPage.countDeleteButtons();
        await packageTypesComponentsPage.clickOnLastDeleteButton();

        packageTypesDeleteDialog = new PackageTypesDeleteDialog();
        expect(await packageTypesDeleteDialog.getDialogTitle()).to.eq('portalApp.packageTypes.delete.question');
        await packageTypesDeleteDialog.clickOnConfirmButton();

        expect(await packageTypesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
