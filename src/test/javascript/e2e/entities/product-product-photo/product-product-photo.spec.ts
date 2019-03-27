/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    ProductProductPhotoComponentsPage,
    ProductProductPhotoDeleteDialog,
    ProductProductPhotoUpdatePage
} from './product-product-photo.page-object';

const expect = chai.expect;

describe('ProductProductPhoto e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let productProductPhotoUpdatePage: ProductProductPhotoUpdatePage;
    let productProductPhotoComponentsPage: ProductProductPhotoComponentsPage;
    let productProductPhotoDeleteDialog: ProductProductPhotoDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ProductProductPhotos', async () => {
        await navBarPage.goToEntity('product-product-photo');
        productProductPhotoComponentsPage = new ProductProductPhotoComponentsPage();
        await browser.wait(ec.visibilityOf(productProductPhotoComponentsPage.title), 5000);
        expect(await productProductPhotoComponentsPage.getTitle()).to.eq('portalApp.productProductPhoto.home.title');
    });

    it('should load create ProductProductPhoto page', async () => {
        await productProductPhotoComponentsPage.clickOnCreateButton();
        productProductPhotoUpdatePage = new ProductProductPhotoUpdatePage();
        expect(await productProductPhotoUpdatePage.getPageTitle()).to.eq('portalApp.productProductPhoto.home.createOrEditLabel');
        await productProductPhotoUpdatePage.cancel();
    });

    it('should create and save ProductProductPhotos', async () => {
        const nbButtonsBeforeCreate = await productProductPhotoComponentsPage.countDeleteButtons();

        await productProductPhotoComponentsPage.clickOnCreateButton();
        await promise.all([
            productProductPhotoUpdatePage.productPhotoSelectLastOption(),
            productProductPhotoUpdatePage.productSelectLastOption()
        ]);
        const selectedFirstPriority = productProductPhotoUpdatePage.getFirstPriorityInput();
        if (await selectedFirstPriority.isSelected()) {
            await productProductPhotoUpdatePage.getFirstPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFirstPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getFirstPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFirstPriorityInput().isSelected()).to.be.true;
        }
        const selectedSecondPriority = productProductPhotoUpdatePage.getSecondPriorityInput();
        if (await selectedSecondPriority.isSelected()) {
            await productProductPhotoUpdatePage.getSecondPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getSecondPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getSecondPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getSecondPriorityInput().isSelected()).to.be.true;
        }
        const selectedThirdPriority = productProductPhotoUpdatePage.getThirdPriorityInput();
        if (await selectedThirdPriority.isSelected()) {
            await productProductPhotoUpdatePage.getThirdPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getThirdPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getThirdPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getThirdPriorityInput().isSelected()).to.be.true;
        }
        const selectedFourthPriority = productProductPhotoUpdatePage.getFourthPriorityInput();
        if (await selectedFourthPriority.isSelected()) {
            await productProductPhotoUpdatePage.getFourthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFourthPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getFourthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFourthPriorityInput().isSelected()).to.be.true;
        }
        const selectedFixthPriority = productProductPhotoUpdatePage.getFixthPriorityInput();
        if (await selectedFixthPriority.isSelected()) {
            await productProductPhotoUpdatePage.getFixthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFixthPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getFixthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getFixthPriorityInput().isSelected()).to.be.true;
        }
        const selectedSixthPriority = productProductPhotoUpdatePage.getSixthPriorityInput();
        if (await selectedSixthPriority.isSelected()) {
            await productProductPhotoUpdatePage.getSixthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getSixthPriorityInput().isSelected()).to.be.false;
        } else {
            await productProductPhotoUpdatePage.getSixthPriorityInput().click();
            expect(await productProductPhotoUpdatePage.getSixthPriorityInput().isSelected()).to.be.true;
        }
        await productProductPhotoUpdatePage.save();
        expect(await productProductPhotoUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await productProductPhotoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ProductProductPhoto', async () => {
        const nbButtonsBeforeDelete = await productProductPhotoComponentsPage.countDeleteButtons();
        await productProductPhotoComponentsPage.clickOnLastDeleteButton();

        productProductPhotoDeleteDialog = new ProductProductPhotoDeleteDialog();
        expect(await productProductPhotoDeleteDialog.getDialogTitle()).to.eq('portalApp.productProductPhoto.delete.question');
        await productProductPhotoDeleteDialog.clickOnConfirmButton();

        expect(await productProductPhotoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
