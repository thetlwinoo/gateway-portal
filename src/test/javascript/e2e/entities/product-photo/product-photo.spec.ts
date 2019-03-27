/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProductPhotoComponentsPage, ProductPhotoDeleteDialog, ProductPhotoUpdatePage } from './product-photo.page-object';

const expect = chai.expect;

describe('ProductPhoto e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let productPhotoUpdatePage: ProductPhotoUpdatePage;
    let productPhotoComponentsPage: ProductPhotoComponentsPage;
    let productPhotoDeleteDialog: ProductPhotoDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ProductPhotos', async () => {
        await navBarPage.goToEntity('product-photo');
        productPhotoComponentsPage = new ProductPhotoComponentsPage();
        await browser.wait(ec.visibilityOf(productPhotoComponentsPage.title), 5000);
        expect(await productPhotoComponentsPage.getTitle()).to.eq('portalApp.productPhoto.home.title');
    });

    it('should load create ProductPhoto page', async () => {
        await productPhotoComponentsPage.clickOnCreateButton();
        productPhotoUpdatePage = new ProductPhotoUpdatePage();
        expect(await productPhotoUpdatePage.getPageTitle()).to.eq('portalApp.productPhoto.home.createOrEditLabel');
        await productPhotoUpdatePage.cancel();
    });

    it('should create and save ProductPhotos', async () => {
        const nbButtonsBeforeCreate = await productPhotoComponentsPage.countDeleteButtons();

        await productPhotoComponentsPage.clickOnCreateButton();
        await promise.all([
            productPhotoUpdatePage.setThumbNailPhotoInput('thumbNailPhoto'),
            productPhotoUpdatePage.setThumbNailPhotoFileNameInput('thumbNailPhotoFileName'),
            productPhotoUpdatePage.setLargePhotoInput('largePhoto'),
            productPhotoUpdatePage.setLargePhotoFileNameInput('largePhotoFileName'),
            productPhotoUpdatePage.setPriorityInput('5'),
            productPhotoUpdatePage.productSelectLastOption()
        ]);
        expect(await productPhotoUpdatePage.getThumbNailPhotoInput()).to.eq('thumbNailPhoto');
        expect(await productPhotoUpdatePage.getThumbNailPhotoFileNameInput()).to.eq('thumbNailPhotoFileName');
        expect(await productPhotoUpdatePage.getLargePhotoInput()).to.eq('largePhoto');
        expect(await productPhotoUpdatePage.getLargePhotoFileNameInput()).to.eq('largePhotoFileName');
        expect(await productPhotoUpdatePage.getPriorityInput()).to.eq('5');
        await productPhotoUpdatePage.save();
        expect(await productPhotoUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await productPhotoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ProductPhoto', async () => {
        const nbButtonsBeforeDelete = await productPhotoComponentsPage.countDeleteButtons();
        await productPhotoComponentsPage.clickOnLastDeleteButton();

        productPhotoDeleteDialog = new ProductPhotoDeleteDialog();
        expect(await productPhotoDeleteDialog.getDialogTitle()).to.eq('portalApp.productPhoto.delete.question');
        await productPhotoDeleteDialog.clickOnConfirmButton();

        expect(await productPhotoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
