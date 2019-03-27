/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { OrderLinesComponentsPage, OrderLinesDeleteDialog, OrderLinesUpdatePage } from './order-lines.page-object';

const expect = chai.expect;

describe('OrderLines e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let orderLinesUpdatePage: OrderLinesUpdatePage;
    let orderLinesComponentsPage: OrderLinesComponentsPage;
    let orderLinesDeleteDialog: OrderLinesDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load OrderLines', async () => {
        await navBarPage.goToEntity('order-lines');
        orderLinesComponentsPage = new OrderLinesComponentsPage();
        await browser.wait(ec.visibilityOf(orderLinesComponentsPage.title), 5000);
        expect(await orderLinesComponentsPage.getTitle()).to.eq('portalApp.orderLines.home.title');
    });

    it('should load create OrderLines page', async () => {
        await orderLinesComponentsPage.clickOnCreateButton();
        orderLinesUpdatePage = new OrderLinesUpdatePage();
        expect(await orderLinesUpdatePage.getPageTitle()).to.eq('portalApp.orderLines.home.createOrEditLabel');
        await orderLinesUpdatePage.cancel();
    });

    it('should create and save OrderLines', async () => {
        const nbButtonsBeforeCreate = await orderLinesComponentsPage.countDeleteButtons();

        await orderLinesComponentsPage.clickOnCreateButton();
        await promise.all([
            orderLinesUpdatePage.setDescriptionInput('description'),
            orderLinesUpdatePage.setQuantityInput('5'),
            orderLinesUpdatePage.setUnitPriceInput('5'),
            orderLinesUpdatePage.setTaxRateInput('5'),
            orderLinesUpdatePage.setPickedQuantityInput('5'),
            orderLinesUpdatePage.setPickingCompletedWhenInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            orderLinesUpdatePage.orderSelectLastOption(),
            orderLinesUpdatePage.packageTypeSelectLastOption(),
            orderLinesUpdatePage.stockItemSelectLastOption()
        ]);
        expect(await orderLinesUpdatePage.getDescriptionInput()).to.eq('description');
        expect(await orderLinesUpdatePage.getQuantityInput()).to.eq('5');
        expect(await orderLinesUpdatePage.getUnitPriceInput()).to.eq('5');
        expect(await orderLinesUpdatePage.getTaxRateInput()).to.eq('5');
        expect(await orderLinesUpdatePage.getPickedQuantityInput()).to.eq('5');
        expect(await orderLinesUpdatePage.getPickingCompletedWhenInput()).to.contain('2001-01-01T02:30');
        await orderLinesUpdatePage.save();
        expect(await orderLinesUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await orderLinesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last OrderLines', async () => {
        const nbButtonsBeforeDelete = await orderLinesComponentsPage.countDeleteButtons();
        await orderLinesComponentsPage.clickOnLastDeleteButton();

        orderLinesDeleteDialog = new OrderLinesDeleteDialog();
        expect(await orderLinesDeleteDialog.getDialogTitle()).to.eq('portalApp.orderLines.delete.question');
        await orderLinesDeleteDialog.clickOnConfirmButton();

        expect(await orderLinesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
