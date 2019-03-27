/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { BuyingGroupsComponentsPage, BuyingGroupsDeleteDialog, BuyingGroupsUpdatePage } from './buying-groups.page-object';

const expect = chai.expect;

describe('BuyingGroups e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let buyingGroupsUpdatePage: BuyingGroupsUpdatePage;
    let buyingGroupsComponentsPage: BuyingGroupsComponentsPage;
    let buyingGroupsDeleteDialog: BuyingGroupsDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load BuyingGroups', async () => {
        await navBarPage.goToEntity('buying-groups');
        buyingGroupsComponentsPage = new BuyingGroupsComponentsPage();
        await browser.wait(ec.visibilityOf(buyingGroupsComponentsPage.title), 5000);
        expect(await buyingGroupsComponentsPage.getTitle()).to.eq('portalApp.buyingGroups.home.title');
    });

    it('should load create BuyingGroups page', async () => {
        await buyingGroupsComponentsPage.clickOnCreateButton();
        buyingGroupsUpdatePage = new BuyingGroupsUpdatePage();
        expect(await buyingGroupsUpdatePage.getPageTitle()).to.eq('portalApp.buyingGroups.home.createOrEditLabel');
        await buyingGroupsUpdatePage.cancel();
    });

    it('should create and save BuyingGroups', async () => {
        const nbButtonsBeforeCreate = await buyingGroupsComponentsPage.countDeleteButtons();

        await buyingGroupsComponentsPage.clickOnCreateButton();
        await promise.all([
            buyingGroupsUpdatePage.setBuyingGroupNameInput('buyingGroupName'),
            buyingGroupsUpdatePage.setValidFromInput('2000-12-31'),
            buyingGroupsUpdatePage.setValidToInput('2000-12-31')
        ]);
        expect(await buyingGroupsUpdatePage.getBuyingGroupNameInput()).to.eq('buyingGroupName');
        expect(await buyingGroupsUpdatePage.getValidFromInput()).to.eq('2000-12-31');
        expect(await buyingGroupsUpdatePage.getValidToInput()).to.eq('2000-12-31');
        await buyingGroupsUpdatePage.save();
        expect(await buyingGroupsUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await buyingGroupsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last BuyingGroups', async () => {
        const nbButtonsBeforeDelete = await buyingGroupsComponentsPage.countDeleteButtons();
        await buyingGroupsComponentsPage.clickOnLastDeleteButton();

        buyingGroupsDeleteDialog = new BuyingGroupsDeleteDialog();
        expect(await buyingGroupsDeleteDialog.getDialogTitle()).to.eq('portalApp.buyingGroups.delete.question');
        await buyingGroupsDeleteDialog.clickOnConfirmButton();

        expect(await buyingGroupsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
