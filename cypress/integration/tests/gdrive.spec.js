/// <reference types="cypress" />
import { loginPage } from '../pageObjects/loginPage';


describe('gdrive upload file tests', () => {
    beforeEach(() => {
    });

    it('should be able to load the gdrive login page', () => {
        cy.visit('/');
        loginPage.goToDrive();

    });
});

