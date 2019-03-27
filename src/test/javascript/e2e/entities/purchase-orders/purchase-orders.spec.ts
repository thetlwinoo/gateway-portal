/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PurchaseOrdersComponentsPage, PurchaseOrdersDeleteDialog, PurchaseOrdersUpdatePage } from './purchase-orders.page-object';

const expect = chai.expect;

describe('PurchaseOrders e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let purchaseOrdersUpdatePage: PurchaseOrdersUpdatePage;
    let purchaseOrdersComponentsPage: PurchaseOrdersComponentsPage;
    let purchaseOrdersDeleteDialog: PurchaseOrdersDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load PurchaseOrders', async () => {
        await navBarPage.goToEntity('purchase-orders');
        purchaseOrdersComponentsPage = new PurchaseOrdersComponentsPage();
        await browser.wait(ec.visibilityOf(purchaseOrdersComponentsPage.title), 5000);
        expect(await purchaseOrdersComponentsPage.getTitle()).to.eq('portalApp.purchaseOrders.home.title');
    });

    it('should load create PurchaseOrders page', async () => {
        await purchaseOrdersComponentsPage.clickOnCreateButton();
        purchaseOrdersUpdatePage = new PurchaseOrdersUpdatePage();
        expect(await purchaseOrdersUpdatePage.getPageTitle()).to.eq('portalApp.purchaseOrders.home.createOrEditLabel');
        await purchaseOrdersUpdatePage.cancel();
    });

    it('should create and save PurchaseOrders', async () => {
        const nbButtonsBeforeCreate = await purchaseOrdersComponentsPage.countDeleteButtons();

        await purchaseOrdersComponentsPage.clickOnCreateButton();
        await promise.all([
            purchaseOrdersUpdatePage.setOrderDateInput('2000-12-31'),
            purchaseOrdersUpdatePage.setExpectedDeliveryDateInput('2000-12-31'),
            purchaseOrdersUpdatePage.setSupplierReferenceInput('supplierReference'),
            purchaseOrdersUpdatePage.setIsOrderFinalizedInput('5'),
            purchaseOrdersUpdatePage.setCommentsInput('comments'),
            purchaseOrdersUpdatePage.setInternalCommentsInput('internalComments'),
            purchaseOrdersUpdatePage.contactPersonSelectLastOption(),
            purchaseOrdersUpdatePage.supplierSelectLastOption(),
            purchaseOrdersUpdatePage.deliveryMethodSelectLastOption()
        ]);
        expect(await purchaseOrdersUpdatePage.getOrderDateInput()).to.eq('2000-12-31');
        expect(await purchaseOrdersUpdatePage.getExpectedDeliveryDateInput()).to.eq('2000-12-31');
        expect(await purchaseOrdersUpdatePage.getSupplierReferenceInput()).to.eq('supplierReference');
        expect(await purchaseOrdersUpdatePage.getIsOrderFinalizedInput()).to.eq('5');
        expect(await purchaseOrdersUpdatePage.getCommentsInput()).to.eq('comments');
        expect(await purchaseOrdersUpdatePage.getInternalCommentsInput()).to.eq('internalComments');
        await purchaseOrdersUpdatePage.save();
        expect(await purchaseOrdersUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await purchaseOrdersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last PurchaseOrders', async () => {
        const nbButtonsBeforeDelete = await purchaseOrdersComponentsPage.countDeleteButtons();
        await purchaseOrdersComponentsPage.clickOnLastDeleteButton();

        purchaseOrdersDeleteDialog = new PurchaseOrdersDeleteDialog();
        expect(await purchaseOrdersDeleteDialog.getDialogTitle()).to.eq('portalApp.purchaseOrders.delete.question');
        await purchaseOrdersDeleteDialog.clickOnConfirmButton();

        expect(await purchaseOrdersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
