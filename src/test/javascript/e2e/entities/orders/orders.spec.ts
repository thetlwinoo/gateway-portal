/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { OrdersComponentsPage, OrdersDeleteDialog, OrdersUpdatePage } from './orders.page-object';

const expect = chai.expect;

describe('Orders e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let ordersUpdatePage: OrdersUpdatePage;
    let ordersComponentsPage: OrdersComponentsPage;
    let ordersDeleteDialog: OrdersDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Orders', async () => {
        await navBarPage.goToEntity('orders');
        ordersComponentsPage = new OrdersComponentsPage();
        await browser.wait(ec.visibilityOf(ordersComponentsPage.title), 5000);
        expect(await ordersComponentsPage.getTitle()).to.eq('portalApp.orders.home.title');
    });

    it('should load create Orders page', async () => {
        await ordersComponentsPage.clickOnCreateButton();
        ordersUpdatePage = new OrdersUpdatePage();
        expect(await ordersUpdatePage.getPageTitle()).to.eq('portalApp.orders.home.createOrEditLabel');
        await ordersUpdatePage.cancel();
    });

    it('should create and save Orders', async () => {
        const nbButtonsBeforeCreate = await ordersComponentsPage.countDeleteButtons();

        await ordersComponentsPage.clickOnCreateButton();
        await promise.all([
            ordersUpdatePage.setOrderDateInput('2000-12-31'),
            ordersUpdatePage.setExpectedDeliveryDateInput('2000-12-31'),
            ordersUpdatePage.setCustomerPurchaseOrderNumberInput('customerPurchaseOrderNumber'),
            ordersUpdatePage.setCommentsInput('comments'),
            ordersUpdatePage.setDeliveryInstructionsInput('deliveryInstructions'),
            ordersUpdatePage.setInternalCommentsInput('internalComments'),
            ordersUpdatePage.setPickingCompletedWhenInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            ordersUpdatePage.pickedByPersonSelectLastOption(),
            ordersUpdatePage.contactPersonSelectLastOption(),
            ordersUpdatePage.salespersonPersonSelectLastOption(),
            ordersUpdatePage.customerSelectLastOption(),
            ordersUpdatePage.backorderOrderSelectLastOption()
        ]);
        expect(await ordersUpdatePage.getOrderDateInput()).to.eq('2000-12-31');
        expect(await ordersUpdatePage.getExpectedDeliveryDateInput()).to.eq('2000-12-31');
        expect(await ordersUpdatePage.getCustomerPurchaseOrderNumberInput()).to.eq('customerPurchaseOrderNumber');
        const selectedIsUndersupplyBackordered = ordersUpdatePage.getIsUndersupplyBackorderedInput();
        if (await selectedIsUndersupplyBackordered.isSelected()) {
            await ordersUpdatePage.getIsUndersupplyBackorderedInput().click();
            expect(await ordersUpdatePage.getIsUndersupplyBackorderedInput().isSelected()).to.be.false;
        } else {
            await ordersUpdatePage.getIsUndersupplyBackorderedInput().click();
            expect(await ordersUpdatePage.getIsUndersupplyBackorderedInput().isSelected()).to.be.true;
        }
        expect(await ordersUpdatePage.getCommentsInput()).to.eq('comments');
        expect(await ordersUpdatePage.getDeliveryInstructionsInput()).to.eq('deliveryInstructions');
        expect(await ordersUpdatePage.getInternalCommentsInput()).to.eq('internalComments');
        expect(await ordersUpdatePage.getPickingCompletedWhenInput()).to.contain('2001-01-01T02:30');
        await ordersUpdatePage.save();
        expect(await ordersUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await ordersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Orders', async () => {
        const nbButtonsBeforeDelete = await ordersComponentsPage.countDeleteButtons();
        await ordersComponentsPage.clickOnLastDeleteButton();

        ordersDeleteDialog = new OrdersDeleteDialog();
        expect(await ordersDeleteDialog.getDialogTitle()).to.eq('portalApp.orders.delete.question');
        await ordersDeleteDialog.clickOnConfirmButton();

        expect(await ordersComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
